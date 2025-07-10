'use client';

import React, { useMemo, useRef } from 'react';
import {
  useTable,
  HeaderGroup,
  Column,
  useRowSelect,
  TableInstance,
  Row,
  Cell,
} from 'react-table';
import { format, parseISO } from 'date-fns';
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
  // Handle KPI row approval
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
      
      const result = await approveKpiRow(row.original.id, approverId.toString());
      
      if (result.success) {
        toast.success('Sikeres jóváhagyás!');
        // Update the row's approved status in the UI
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
        <p className="text-yellow-600 text-sm">
          A táblázat üres, mert nincs megjeleníthető adat.
        </p>
      </div>
    );
  }

  const formatNumber = (value: number, isCurrentMonth = false) => {
    return new Intl.NumberFormat('hu-HU', {
      minimumFractionDigits: isCurrentMonth ? 0 : 2,
      maximumFractionDigits: isCurrentMonth ? 0 : 2,
      useGrouping: true,
    }).format(value);
  };

  const tableData = useMemo<KPIRowData[]>(() => {
    console.log('Raw data received in KPITable:', data);
    const processedData = data.map((item, index) => {
      console.log(`Item ${index}:`, {
        id: item.id,
        user: item.user,
        approver: item.approver,
        approved: item.approved
      });
      
      return {
        ...item,
        id: item.id || index,
        itemId: item.itemId || 0,
        value: item.value ?? 0,
        nextValue: item.nextValue ?? 0,
        date: item.date || new Date().toISOString(),
        originalDate: item.originalDate || item.date,
        created: item.created || new Date().toISOString(),
        user: item.user,
        approver: item.approver,
      };
    });
    
    console.log('Processed table data:', processedData);
    return processedData;
  }, [data]);

  const nextValuesRef = useRef<Record<number, number>>({});



const handleSave = async (row: KPIRowData, value: number) => {
  try {
    const result = await saveKpiRow({
      itemId: row.itemId,
      value,
      date: row.originalDate || row.date,
    });
    if (result.success) {
      toast.success('Sikeres mentés!');
    } else {
      toast.error('Hiba a mentéskor: ' + (result.error || 'Ismeretlen hiba'));
    }
  } catch (error: any) {
    toast.error('Mentési hiba: ' + (error?.message || error));
  }
};

  const columns = useMemo<Column<KPIRowData>[]>(() => {
    return [
      {
        Header: 'Tétel',
        accessor: 'itemName',
        id: 'itemName',
        Cell: ({ value }: { value: string }) => <div className="font-medium">{value}</div>,
      },
      {
        Header: 'Szolgáltatás',
        accessor: 'serviceName',
        id: 'serviceName',
      },
      {
        Header: 'Rendszer',
        accessor: 'systemName',
        id: 'systemName',
      },
      {
        Header: () => (
          <div className="text-center">
            {currentMonth}
          </div>
        ),
        accessor: 'value',
        id: 'value',
        Cell: ({ row, value }: { row: { original: KPIRowData }, value: number }) => {
          const userInfo = row.original?.user 
            ? `Felvitte: ${row.original.user.name} (${row.original.user.email})` 
            : '';
          const approvalInfo = row.original?.approved && row.original?.approver
            ? `\nJóváhagyta: ${row.original.approver.name} (${row.original.approver.email})`
            : '';
          const tooltipText = `${userInfo}${approvalInfo}`.trim();
          
          return (
            <div className="relative group inline-block w-full">
              <div className="relative">
                <div
                  className={
                    "text-right font-medium inline-block " +
                    (row.original && row.original.approved === false && value !== 0
                      ? "border border-red-400 rounded px-2 py-1 bg-white w-24"
                      : "px-2 py-1 w-24")
                  }
                >
                  {formatNumber(value, true)}
                </div>
                {tooltipText && value !== 0 && (
                  <span className="absolute -right-2 -top-2 w-4 h-4 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center cursor-help opacity-0 group-hover:opacity-100 transition-opacity">
                    i
                  </span>
                )}
              </div>
              {tooltipText && value !== 0 && (
                <div className="absolute z-10 hidden group-hover:block w-64 p-2 mt-1 text-sm text-left text-gray-700 bg-white border border-gray-200 rounded shadow-lg left-0 top-full">
                  {userInfo && <div className="font-medium">{userInfo}</div>}
                </div>
              )}
            </div>
          );
        },
      },
      {
        Header: () => (
          <div className="text-center">
           
            {nextMonth}
          </div>
        ),
        id: 'nextValue',
        accessor: 'nextValue',
        Cell: ({ row }: { row: { original: KPIRowData & { nextId?: number }, index: number } }) => {
          const index = row.index;
          const originalValue = row.original.nextValue;
          const currentValue = row.original.value;

          const [inputValue, setInputValue] = React.useState<number | undefined>(originalValue);

          const handleInputChange = (
            e: React.ChangeEvent<HTMLInputElement>
          ) => {
            const num = parseFloat(e.target.value);
            setInputValue(isNaN(num) ? undefined : num);
            if (!isNaN(num)) {
              nextValuesRef.current[index] = num;
            }
          };

          const handleSaveClick = async () => {
            const valueToSave = inputValue !== undefined ? inputValue : originalValue;
            const nextId = row.original.nextId;
            const itemId = row.original.itemId;
            // Következő hónap dátuma
            const nextDate = (() => {
              const d = new Date(row.original.date);
              d.setMonth(d.getMonth() + 1);
              d.setDate(1);
              d.setHours(0, 0, 0, 0);
              return d.toISOString();
            })();
            // Szerver action hívás: ha van nextId, update, ha nincs, create
            const payload = nextId
              ? { id: nextId, itemId, value: valueToSave, date: nextDate }
              : { itemId, value: valueToSave, date: nextDate };
            const result = await saveKpiRow(payload);
            if (result.success) {
              toast.success(nextId ? 'A hónap értéke frissítve!' : 'A hónap értéke létrehozva!');
              // Opcionális: input reset
              // setInputValue(undefined);
            } else {
              toast.error('Mentési hiba: ' + (result.error || 'Ismeretlen hiba'));
            }
          };


          // User info for the next month's value (using the original user)
          const nextMonthUserInfo = row.original.user ? 
            `Felvitte: ${row.original.user.name} (${row.original.user.email})` : '';

          return (
            <div className="relative group flex items-center justify-end space-x-2">
              <div className="relative">
                <input
                  type="number"
                  defaultValue={originalValue}
                value={inputValue === undefined ? '' : inputValue}
                onChange={handleInputChange}
                className={
                  `border-2 rounded px-2 py-1 w-20 text-right focus:outline-none ` +
                  (
                    inputValue !== undefined &&
                    inputValue !== 0 &&
                    currentValue !== 0 &&
                    Math.abs((inputValue - currentValue) / currentValue) >= 0.3
                      ? 'border-yellow-400' : 'border-gray-300'
                  )
                }
                title={
                  inputValue !== undefined &&
                  inputValue !== 0 &&
                  currentValue !== 0 &&
                  Math.abs((inputValue - currentValue) / currentValue) >= 0.3
                    ? 'Az új érték legalább 30%-kal eltér az aktuális értéktől.'
                    : ''
                }
                  readOnly={row.original.approved === true}
                  disabled={row.original.approved === true}
                />
                {nextMonthUserInfo && originalValue !== 0 && (
                  <span className="absolute -right-2 -top-2 w-4 h-4 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center cursor-help opacity-0 group-hover:opacity-100 transition-opacity">
                    i
                  </span>
                )}
              </div>
              {nextMonthUserInfo && originalValue !== 0 && (
                <div className="absolute z-10 hidden group-hover:block w-64 p-2 mt-1 text-sm text-left text-gray-700 bg-white border border-gray-200 rounded shadow-lg right-0 top-full">
                  <div className="font-medium">{nextMonthUserInfo}</div>
                </div>
              )}
              <button
                onClick={handleSaveClick}
                className={`px-2 py-1 text-xs rounded 
                  ${row.original.approved === true ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                disabled={row.original.approved === true}
              >
                {row.original.nextValue === 0 ? 'Mentés' : 'Módosítás'}
              </button>
              {role === 'APPROVER' && (
                <button
                  onClick={() => handleApproveClick(row)}
                  className={`px-2 py-1 text-xs rounded 
                    ${row.original.approved === true ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-green-500 text-white hover:bg-green-600'}`}
                  disabled={row.original.approved === true}
                >
                  {row.original.approved === true ? 'Jóváhagyva' : 'Jóváhagyás'}
                </button>
              )}
            </div>
          );
        },
      },
    ];
  }, [currentMonth, nextMonth]);

  console.log('KPITable - User ID:', userId, 'Role:', role);

  const tableInstance = useTable<KPIRowData>(
    {
      columns,
      data: tableData,
    },
    useRowSelect
  ) as TableInstance<KPIRowData>;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance as TableInstance<TableData>;

  return (
    <div className="kpi-table">
      <table
        {...getTableProps()}
        className="min-w-full divide-y divide-gray-200"
      >
        <thead className="bg-gray-50">
          {headerGroups.map((headerGroup: HeaderGroup<TableData>) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => {
                const headerProps = column.getHeaderProps();
                return (
                  <th
                    {...headerProps}
                    key={headerProps.key}
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {column.render('Header')}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          className="bg-white divide-y divide-gray-200"
        >
          {rows.map((row: Row<TableData>) => {
            prepareRow(row);
            // Log the full row object for debugging
            console.log('KPITable row:', row.original);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell: Cell<TableData>) => {
                  const cellProps = cell.getCellProps();
                  return (
                    <td
                      {...cellProps}
                      key={cell.column.id}
                      className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 align-top"
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default KPITable;
