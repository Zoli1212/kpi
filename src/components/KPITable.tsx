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
}

const KPITable: React.FC<KPITableProps> = ({
  data,
  currentMonth,
  nextMonth,
}) => {
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
    return data.map((item, index) => ({
      ...item,
      id: item.id || index,
      itemId: item.itemId || 0,
      value: item.value ?? 0,
      nextValue: item.nextValue ?? 0,
      date: item.date || new Date().toISOString(),
      originalDate: item.originalDate || item.date,
    }));
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
        Cell: ({ value }) => <div className="font-medium">{value}</div>,
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
        Cell: ({ row, value }: { row: any, value: number }) => (
          <div
            className={
              "text-right font-medium " +
              (row.original && row.original.approved === false && value !== 0
                ? "border-2 border-red-500 rounded px-2 py-1 bg-white w-24"
                : "px-2 py-1 w-24")
            }
            title={row.original && row.original.approved === false && value !== 0 ? "Ez az érték még nincs jóváhagyva." : ""}
          >
            {formatNumber(value, true)}
          </div>
        ),
      },
      {
        Header: () => (
          <div className="text-center">
           
            {nextMonth}
          </div>
        ),
        id: 'nextValue',
        accessor: 'nextValue',
        Cell: ({ row }: { row: any }) => {
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


          return (
            <div className="flex items-center justify-end space-x-2">
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
              <button
                onClick={handleSaveClick}
                className={`px-2 py-1 text-xs rounded 
                  ${row.original.approved === true ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                disabled={row.original.approved === true}
              >
                {row.original.nextValue === 0 ? 'Mentés' : 'Módosítás'}
              </button>
            </div>
          );
        },
      },
    ];
  }, [currentMonth, nextMonth]);

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
