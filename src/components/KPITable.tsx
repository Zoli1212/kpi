'use client'
import React from 'react';
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

// Define the exact shape of our row data
type KPIRowData = {
  itemName: string;
  serviceName: string;
  systemName: string;
  value: number;
  nextValue: number;
  date?: string;
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
}

const KPITable: React.FC<KPITableProps> = ({ data }) => {
  // Get the latest date from the data
  const latestDate = React.useMemo(() => {
    if (!data || data.length === 0) return '';
    const dates = data.map(item => item.date).filter(Boolean) as string[];
    if (dates.length === 0) return '';
    return dates.sort().pop() || '';
  }, [data]);

  // Transform data to include next month's values
  const tableData = React.useMemo<KPIRowData[]>(() => {
    return data.map(({ date, value, itemName, serviceName, systemName, nextValue }) => ({
      itemName,
      serviceName,
      systemName,
      value,
      nextValue: nextValue ?? value, // Use provided nextValue or fallback to value
      date
    }));
  }, [data]);

  // Calculate next month's date for the header
  const nextMonthDate = React.useMemo(() => {
    if (!latestDate) return '';
    const [year, month] = latestDate.split('.').map(Number);
    // Create a date object for the first day of the current month
    const currentDate = new Date(year, month - 1, 1);
    // Add one month
    const nextDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    return `${nextDate.getFullYear()}.${String(nextDate.getMonth() + 1).padStart(2, '0')}.01`;
  }, [latestDate]);

  // State to track editable values
  const [editableValues, setEditableValues] = React.useState<Record<number, number>>({});

  // Update editable value when data changes
  React.useEffect(() => {
    const initialValues = data.reduce<Record<number, number>>((acc, item, index) => ({
      ...acc,
      [index]: item.nextValue ?? item.value // Use nextValue or fallback to value
    }), {});
    
    setEditableValues(prev => ({
      ...initialValues,
      ...prev // Keep any existing edits
    }));
  }, [data]);

  // Handle value change
  const handleValueChange = (index: number, value: string) => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setEditableValues(prev => ({
        ...prev,
        [index]: numValue
      }));
    }
  };

  // Define columns with proper typing
  const columns = React.useMemo((): Column<KPIRowData>[] => {
    return [
      {
        Header: 'Item Name',
        accessor: 'itemName',
        id: 'itemName',
      },
      {
        Header: 'Service Name',
        accessor: 'serviceName',
        id: 'serviceName',
      },
      {
        Header: 'System Name',
        accessor: 'systemName',
        id: 'systemName',
      },
      {
        Header: `Value (${latestDate || 'Date'})`,
        accessor: 'value' as const,
        id: 'value',
      },
      {
        Header: `Next Value (${nextMonthDate || 'Next Month'})`,
        id: 'nextValue',
        accessor: 'nextValue' as const,
        Cell: ({ row }: { row: { index: number; original: KPIRowData } }) => {
          const value = editableValues[row.index] ?? row.original.nextValue;
          return (
            <input
              type="number"
              className="w-20 p-1 border rounded"
              value={value}
              onChange={(e) => handleValueChange(row.index, e.target.value)}
              onClick={(e) => e.stopPropagation()}
              step="0.01"
              min="0"
            />
          );
        },
      },
    ];
  }, [latestDate, nextMonthDate, editableValues]);

  const tableInstance = useTable<KPIRowData>(
    {
      columns,
      data: tableData,
      defaultColumn: {
        Cell: ({ value }: { value: unknown }) => value !== undefined ? String(value) : '-',
      },
    },
    useRowSelect,
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
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
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
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
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