'use client'
import React, { useMemo, useState, useEffect } from 'react';
import { 
  useTable, 
  HeaderGroup, 
  Column, 
  useRowSelect, 
  TableInstance, 
  UseTableOptions, 
  Row,
  Cell
} from 'react-table';
import { format, parseISO } from 'date-fns';
import { hu } from 'date-fns/locale';

// Define the exact shape of our row data
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

// Define the table data type
type TableData = KPIRowData & {
  [key: string]: any; // Allow additional properties
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
  nextMonth 
}) => {
  console.log('KPITable received data:', data);
  
  if (!data || data.length === 0) {
    console.log('No data provided to KPITable');
    return (
      <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400">
        <p className="text-yellow-700">Nincs megjeleníthető adat</p>
        <p className="text-yellow-600 text-sm">A táblázat üres, mert nincs megjeleníthető adat.</p>
      </div>
    );
  }
  // Format date for display
  const formatDisplayDate = (dateString: string) => {
    try {
      const date = parseISO(dateString);
      return format(date, 'yyyy. MMMM', { locale: hu });
    } catch (error) {
      return dateString;
    }
  };

  // Format number based on type (integer or float)
  const formatNumber = (value: number, isCurrentMonth: boolean = false) => {
    return new Intl.NumberFormat('hu-HU', {
      minimumFractionDigits: isCurrentMonth ? 0 : 2,
      maximumFractionDigits: isCurrentMonth ? 0 : 2,
      useGrouping: true
    }).format(value);
  };

  // Transform data for the table
  const tableData = useMemo<KPIRowData[]>(() => {
    console.log('Transforming table data');
    const transformed = data.map((item, index) => {
      console.log(`Item ${index}:`, item);
      return {
        ...item,
        // Ensure all required fields have values
        id: item.id || index,
        itemId: item.itemId || 0,
        value: item.value ?? 0,
        nextValue: item.nextValue ?? 0,
        date: item.date || new Date().toISOString(),
        originalDate: item.originalDate || item.date
      };
    });
    console.log('Transformed data:', transformed);
    return transformed;
  }, [data]);

  console.log('KPITable received months:', { currentMonth, nextMonth });

  // State for editable values
  const [editableValues, setEditableValues] = useState<Record<number, number>>({});

  // Update editable values when data changes
  useEffect(() => {
    const initialValues = data.reduce<Record<number, number>>((acc, item, index) => ({
      ...acc,
      [index]: item.nextValue
    }), {});
    
    setEditableValues(prev => ({
      ...initialValues,
      ...prev // Keep any existing edits
    }));
  }, [data]);

  // Handle value change for next month's value
  const handleValueChange = (index: number, value: string) => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setEditableValues(prev => ({
        ...prev,
        [index]: numValue
      }));
    }
  };
  
  // Handle saving the next month's value
  const handleSave = (row: KPIRowData, value: number) => {
    console.log('Saving value:', {
      itemId: row.itemId,
      value,
      date: row.originalDate || row.date
    });
    // Here you would typically make an API call to save the value
    // For now, we'll just log it
  };

  // Define columns with proper typing
  const columns = useMemo((): Column<KPIRowData>[] => {
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
        Header: () => <div className="text-center">Aktuális hónap<br/>{currentMonth}</div>,
        accessor: 'value',
        id: 'value',
        Cell: ({ value }: { value: number }) => (
          <div className="text-right pr-4 font-medium">
            {formatNumber(value, true)}
          </div>
        ),
      },
      {
        Header: () => <div className="text-center">Következő hónap<br />{nextMonth}</div>,
        id: 'nextValue',
        accessor: 'nextValue',
        Cell: ({ value }: { value: number }) => (
          <div className="text-right pr-2">{value}</div>
        )
      }
    ];
  }, [currentMonth, nextMonth]);

  const tableInstance = useTable<KPIRowData>(
    {
      columns,
      data: tableData,
      defaultColumn: {
        Cell: ({ value }: { value: unknown }) => {
          const displayValue = value !== undefined ? String(value) : '-';
          console.log('Rendering cell:', { value, displayValue });
          return displayValue;
        },
      },
    },
    useRowSelect,
  ) as TableInstance<KPIRowData>;
  
  console.log('Table instance:', tableInstance);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance as TableInstance<TableData>;

  return (
    <div className="kpi-table">
      <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          {headerGroups.map((headerGroup: HeaderGroup<TableData>) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.getHeaderGroupProps().key}>
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
        <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
          {rows.map((row: Row<TableData>) => {
            prepareRow(row);
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