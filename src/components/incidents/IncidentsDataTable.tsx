"use client";

import * as React from "react";
import { Incident, System, Company, User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { deleteIncidentAction, closeIncidentAction } from "@/app/actions/incidents";
import { ConfirmationModal } from "@/components/ui/modal/ConfirmationModal";
import Link from "next/link";
import Button from "../ui/button/Button";

// Define a type for the incident data that includes relations
export type IncidentWithRelations = Incident & {
  closed: boolean;
  system: System;
  company: Company;
  reporter: User;
};

interface IncidentsDataTableProps {
  data: IncidentWithRelations[];
}

export function IncidentsDataTable({ data }: IncidentsDataTableProps) {
  const router = useRouter();
  const [sortConfig, setSortConfig] = React.useState<{ key: keyof IncidentWithRelations, direction: 'ascending' | 'descending' } | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedIncidentId, setSelectedIncidentId] = React.useState<number | null>(null);

  const sortedData = React.useMemo(() => {
    let sortableData = [...data];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

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
    return sortableData;
  }, [data, sortConfig]);

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

    const handleCloseClick = async (incidentId: number) => {
    const promise = closeIncidentAction(incidentId);

    toast.promise(promise, {
      loading: 'Closing incident...',
      success: (data) => data.message,
      error: (err) => err.message || 'An unexpected error occurred.',
    });
  };

  const handleConfirmDelete = async () => {
    if (selectedIncidentId === null) return;

    const promise = deleteIncidentAction(selectedIncidentId);

    toast.promise(promise, {
      loading: 'Deleting incident...',
      success: (data) => {
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
      <div className="flex items-center justify-end py-4 px-4">
          <Link href="/dashboard/incidents/new">
            <Button>Create Incident</Button>
          </Link>
      </div>
      <div className="relative overflow-auto max-h-[calc(100vh-15rem)]">
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">System</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('beginning')}>
              Start Time
              {sortConfig?.key === 'beginning' && (sortConfig.direction === 'ascending' ? ' 🔼' : ' 🔽')}
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('end')}>
              End Time
              {sortConfig?.key === 'end' && (sortConfig.direction === 'ascending' ? ' 🔼' : ' 🔽')}
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reporter</th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sortedData.map((incident) => (
            <tr key={incident.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{incident.type}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{incident.system.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{incident.company.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(incident.beginning).toLocaleString()}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(incident.end).toLocaleString()}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{incident.reporter.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex items-center justify-end gap-x-2">
                  <Link href={`/dashboard/incidents/${incident.id}/edit`}>
                      <Button variant="outline" size="xs">Edit</Button>
                  </Link>
                  <Button variant="destructive-outline" size="xs" onClick={() => handleDeleteClick(incident.id)}>Delete</Button>
                  {!incident.closed && (
                    <Button variant="outline" size="xs" onClick={() => handleCloseClick(incident.id)}>Close</Button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      {data.length === 0 && (
        <div className="text-center py-12">
            <p className="text-gray-500">No incidents found.</p>
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
