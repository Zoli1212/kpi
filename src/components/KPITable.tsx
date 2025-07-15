'use client';

import React, { useMemo } from 'react';
import {
  useTable,
  HeaderGroup,
  Column,
  useRowSelect,
  TableInstance,
  Row,
  Cell,
} from 'react-table';
import { parse, Month } from 'date-fns';
import { hu } from 'date-fns/locale';
import { saveKpiRow } from '@/app/actions/saveKpiRow';
import { approveKpiRow } from '@/app/actions/approveKpiRow';
import { toast } from 'sonner';

type KPIRowData = {
  id: number;
  itemId: number;
  itemName: string;
  serviceName: string;
  systemName: string;
  value: number;
  nextValue: number;
  date: string;
  originalDate?: string;
  description?: string;
  created: string;
  approved?: boolean;
  nextApproved?: boolean;
  nextId?: number;
  approvalDate?: string;
  approverId?: number;
  user?: {
    id: number;
    name: string;
    email: string;
  };
  approver?: {
    id: number;
    name: string;
    email: string;
  };
};

type TableData = KPIRowData & {
  [key: string]: any;
};

interface KPITableProps {
  data: TableData[];
  systems: Array<{ id: number; name: string; description: string }>;
  services: Array<{ id: number; name: string; description: string }>;
  items: Array<{ id: number; name: string; description: string }>;
  currentMonth: string;
  nextMonth: string;
  role?: string;
  userId?: string;
}

const KPITable: React.FC<KPITableProps> = ({
  data,
  currentMonth,
  nextMonth,
  role,
  userId
}) => {
  const handleApproveClick = async (row: { original: KPIRowData }) => {
    if (!userId) {
      toast.error('Hiba: Felhasználó azonosító hiányzik');
      return;
    }
    try {
      const approverId = parseInt(userId, 10);
      if (isNaN(approverId)) {
        throw new Error('Érvénytelen felhasználói azonosító');
      }
      if (!row.original.nextId) {
        throw new Error('Nincs mit jóváhagyni, hiányzó adat ID.');
      }
      const result = await approveKpiRow(row.original.nextId, approverId.toString());
      if (result.success) {
        toast.success('Sikeres jóváhagyás!');
        row.original.approved = true;
        row.original.approvalDate = new Date().toISOString();
        row.original.approverId = approverId;
      } else {
        throw new Error(result.error || 'Ismeretlen hiba történt');
      }
    } catch (error) {
      console.error('Error approving row:', error);
      toast.error(`Hiba a jóváhagyás során: ${error instanceof Error ? error.message : 'Ismeretlen hiba'}`);
    }
  };

  if (!data || data.length === 0) {
    return (
      <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400">
        <p className="text-yellow-700">Nincs megjeleníthető adat</p>
      </div>
    );
  }

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('hu-HU').format(value);
  };

  const tableData = useMemo<KPIRowData[]>(() => data, [data]);

  const columns = useMemo<Column<KPIRowData>[]>(() => {
    return [
      {
        Header: 'Tétel',
        accessor: 'itemName',
      },
      {
        Header: 'Szolgáltatás',
        accessor: 'serviceName',
      },
      {
        Header: 'Rendszer',
        accessor: 'systemName',
      },
      {
        Header: currentMonth,
        accessor: 'value',
        Cell: ({ value }: { value: number; }) => (
          <div className="text-left">{formatNumber(value)}</div>
        ),
      },
      {
        Header: nextMonth,
        id: 'actions',
        Cell: ({ row }: { row: { original: KPIRowData } }) => {
          const [currentValue, setCurrentValue] = React.useState(row.original.nextValue?.toString() || '0');

          const handleSaveClick = async () => {
            if (!userId) {
              toast.error('Hiba: Nincs bejelentkezett felhasználó.');
              return;
            }

            const [yearStr, monthName] = nextMonth.split('. ');
            const hungarianMonths = Array.from({ length: 12 }, (_, i) => hu.localize.month(i as Month, { width: 'wide' }));
            const monthIndex = hungarianMonths.findIndex(m => m.toLowerCase() === monthName.trim().toLowerCase());

            if (monthIndex === -1) {
              toast.error('Hiba: Érvénytelen hónapnév.');
              return;
            }

            const dateToSave = new Date(Date.UTC(parseInt(yearStr), monthIndex, 1));

            const result = await saveKpiRow({
              itemId: row.original.itemId,
              value: parseFloat(currentValue) || 0,
              userId: userId,
              date: dateToSave.toISOString(),
              id: row.original.nextId,
            });

            if (result.success) {
              toast.success('Sikeres mentés!');
            } else {
              const errorMessage = typeof result.error === 'string' ? result.error : 'Ismeretlen hiba történt a mentés során.';
              toast.error(errorMessage);
            }
          };

          const isApproved = row.original.nextApproved;

          return (
            <div className="flex items-center space-x-2">
               <input
                type="number"
                value={currentValue}
                onChange={(e) => setCurrentValue(e.target.value)}
                readOnly={isApproved}
                className={`border-2 rounded px-2 py-1 w-24 text-right focus:outline-none ${isApproved ? 'bg-gray-200' : 'border-gray-300'}`}
              />
              <button
                onClick={handleSaveClick}
                disabled={isApproved}
                className={`px-3 py-1 text-xs rounded ${isApproved ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
              >
                {row.original.nextId ? 'Módosítás' : 'Mentés'}
              </button>
              {role === 'APPROVER' && (
                <button
                  onClick={() => handleApproveClick(row)}
                  disabled={isApproved || !row.original.nextId}
                  className={`px-3 py-1 text-xs rounded ${(isApproved || !row.original.nextId) ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 text-white hover:bg-green-600'}`}
                >
                  Jóváhagyás
                </button>
              )}
            </div>
          );
        },
      },
    ];
  }, [currentMonth, nextMonth, userId]);

  const tableInstance = useTable<KPIRowData>({ columns, data: tableData }, useRowSelect);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <div className="kpi-table">
      <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 align-top">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default KPITable;
