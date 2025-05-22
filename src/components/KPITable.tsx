'use client'
import React from 'react';
import { useTable, HeaderGroup, Column, Cell, Row } from 'react-table';

interface TableData {
  itemName: string;
  serviceName: string;
  systemName: string;
  value: number;
  nextValue: number;
}

interface KPITableProps {
  data: { date: string; itemName: string; serviceName: string; systemName: string; value: number }[];
}

const KPITable: React.FC<KPITableProps> = ({ data }) => {
  // Get the latest date from the data
  const latestDate = React.useMemo(() => {
    if (!data || data.length === 0) return '';
    const dates = data.map(item => item.date).filter(Boolean);
    if (dates.length === 0) return '';
    return dates.sort().pop() || '';
  }, [data]);

  // Transform data to include next month's values
  const tableData = React.useMemo(() => {
    return data.map(({ date, value, ...rest }) => ({
      ...rest,
      value,
      nextValue: value // For now, using the same value. In a real app, this would be fetched or calculated
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

  const columns = React.useMemo<Column<TableData>[]>(
    () => [
      {
        Header: 'Item Name',
        accessor: 'itemName',
      },
      {
        Header: 'Service Name',
        accessor: 'serviceName',
      },
      {
        Header: 'System Name',
        accessor: 'systemName',
      },
      {
        Header: `Value (${latestDate || 'Date'})`,
        accessor: 'value',
      },
      {
        Header: `Next Value (${nextMonthDate || 'Next Month'})`,
        accessor: 'nextValue',
      },
    ],
    [latestDate]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: tableData });

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