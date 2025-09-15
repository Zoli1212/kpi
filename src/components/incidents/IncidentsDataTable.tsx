"use client";

import * as React from "react";
import { Incident, System, Company, User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { deleteIncidentAction, closeIncidentAction, openIncidentAction } from "@/app/actions/incidents";
import { ConfirmationModal } from "@/components/ui/modal/ConfirmationModal";
import Link from "next/link";
import Button from "../ui/button/Button";

// Define a type for the incident data that includes relations
export type IncidentWithRelations = Incident & {
  closed: boolean;
  system: System | null;
  company: Company | null;
  reporter: User | null;
};

interface IncidentsDataTableProps {
  data: IncidentWithRelations[];
}

export function IncidentsDataTable({ data }: IncidentsDataTableProps) {
  const router = useRouter();
  const [sortConfig, setSortConfig] = React.useState<{ key: keyof IncidentWithRelations; direction: 'ascending' | 'descending' } | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedIncidentId, setSelectedIncidentId] = React.useState<number | null>(null);
  const [filter, setFilter] = React.useState('');

  const filteredAndSortedData = React.useMemo(() => {
    let sortableItems = data.filter(incident => 
      incident.reporter?.name?.toLowerCase().includes(filter.toLowerCase()) || false
    );
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        let aValue: any;
        let bValue: any;

        if (sortConfig.key === 'reporter') {
          aValue = a.reporter?.name || '';
          bValue = b.reporter?.name || '';
        } else if (sortConfig.key === 'system') {
          aValue = a.system?.name || '';
          bValue = b.system?.name || '';
        } else {
          aValue = a[sortConfig.key];
          bValue = b[sortConfig.key];
        }

        if (aValue === null && bValue === null) return 0;
        if (aValue === null) return 1;
        if (bValue === null) return -1;

        if (aValue < bValue) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [data, sortConfig, filter]);

  const requestSort = (key: keyof IncidentWithRelations) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleDeleteClick = (incidentId: number) => {
    setSelectedIncidentId(incidentId);
    setIsModalOpen(true);
  };

  const handleToggleCloseClick = async (incidentId: number, isClosed: boolean) => {
    const action = isClosed ? openIncidentAction : closeIncidentAction;
    const promise = action(incidentId);

    toast.promise(promise, {
      loading: isClosed ? 'Opening incident...' : 'Closing incident...',
      success: (data) => {
        if (data.success) {
          router.refresh();
        }
        return data.message;
      },
      error: (err) => err.message || 'An unexpected error occurred.',
    });
  };

  const handleConfirmDelete = async () => {
    if (selectedIncidentId === null) return;

    const promise = deleteIncidentAction(selectedIncidentId);

    toast.promise(promise, {
      loading: 'Deleting incident...',
      success: (data) => {
        if (data.success) {
          router.refresh();
        }
        setIsModalOpen(false);
        setSelectedIncidentId(null);
        return data.message;
      },
      error: (err) => {
        setIsModalOpen(false);
        return err.message || 'An unexpected error occurred.';
      },
    });
  };
  return (
    <div className="rounded-md border overflow-hidden">
      <div className="flex items-center justify-between py-4 px-4">
          <input
            type="text"
            placeholder="Keresés riporter szerint..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 max-w-xs"
          />
          <Link href="/dashboard/incidents/new">
            <Button>Új Incidens</Button>
          </Link>
      </div>
      <div className="relative overflow-auto max-h-[calc(100vh-15rem)]">
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Típus</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('system')}>
              Rendszerszolgáltatás
              {sortConfig?.key === 'system' && (sortConfig.direction === 'ascending' ? ' 🔼' : ' 🔽')}
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cég/Adatbázis</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jira ID</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('beginning')}>
              Kezdete
              {sortConfig?.key === 'beginning' && (sortConfig.direction === 'ascending' ? ' 🔼' : ' 🔽')}
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('end')}>
              Vége
              {sortConfig?.key === 'end' && (sortConfig.direction === 'ascending' ? ' 🔼' : ' 🔽')}
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Időtartam</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('reporter')}>
              Riporter
              {sortConfig?.key === 'reporter' && (sortConfig.direction === 'ascending' ? ' 🔼' : ' 🔽')}
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Műveletek</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredAndSortedData.map((incident) => {
            const durationMs = new Date(incident.end).getTime() - new Date(incident.beginning).getTime();
            const isLongDuration = durationMs > 24 * 60 * 60 * 1000; // 24 hours in milliseconds

            const minutes = Math.floor(durationMs / 60000);
            const hours = Math.floor(minutes / 60);
            const remainingMinutes = minutes % 60;
            const durationString = hours > 0 ? `${hours}h ${remainingMinutes}m` : `${minutes}m`;

            return (
            <tr key={incident.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{incident.type}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {incident.system ? 
                  ((incident.system as any).refName ? `${(incident.system as any).refName} - ${incident.system.name}` : incident.system.name) 
                  : 'N/A'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{incident.company?.name || 'N/A'}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{incident.notificationId || incident.jiraId || 'N/A'}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(incident.beginning).toLocaleString()}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(incident.end).toLocaleString()}</td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm ${isLongDuration ? 'text-red-500' : 'text-gray-900'}`}>
                {durationString}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{incident.reporter?.name || 'N/A'}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex items-center justify-end gap-x-2">
                  {incident.closed ? (
                    <Button variant="outline" size="xs" disabled>Módosít</Button>
                  ) : (
                    <Link href={`/dashboard/incidents/${incident.id}/edit`}>
                      <Button variant="outline" size="xs">Módosít</Button>
                    </Link>
                  )}
                  <Button variant="destructive-outline" size="xs" onClick={() => handleDeleteClick(incident.id)} disabled={incident.closed}>Töröl</Button>
                  <Button variant="outline" size="xs" onClick={() => handleToggleCloseClick(incident.id, incident.closed)}>
                    {incident.closed ? 'Nyit' : 'Lezár'}
                  </Button>
                </div>
              </td>
            </tr>
          )})}
        </tbody>
      </table>
      </div>
      {data.length === 0 && (
        <div className="text-center py-12">
            <p className="text-gray-500">Nem található incidens.</p>
        </div>
      )}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Törlés Megerősítése"
        message="Biztosan törölni szeretné ezt az incidenst? Ez a művelet nem vonható vissza."
      />
    </div>
  );
}
