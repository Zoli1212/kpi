'use client'
import React, { useState, useMemo, useEffect } from 'react'
import KPITable from './KPITable'
import FilterComponent from './FilterComponent'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { format, startOfMonth, endOfMonth, isWithinInterval, parseISO, addMonths } from 'date-fns';
import { hu } from 'date-fns/locale'

interface TableData {
  id: number;
  date: string;
  itemName: string;
  serviceName: string;
  systemName: string;
  value: number;
  nextValue: number;
  description: string;
  itemId: number;
  originalDate?: string;
  approved?: boolean;
  nextApproved?: boolean;
  nextId?: number;
}

interface FilterOption {
  id: number;
  name: string;
  description: string;
}

interface DisplayComponentProps {
  data: TableData[];
  systems: FilterOption[];
  services: FilterOption[];
  items: FilterOption[];
  role?: string;
  userId?: string;
}

const DisplayComponent: React.FC<DisplayComponentProps> = ({
  data,
  systems,
  services,
  items,
  role,
  userId
}) => {
  // State for date picker and filters
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [selectedItem, setSelectedItem] = useState('Összes tétel')
  const [selectedService, setSelectedService] = useState('Összes szolgáltatás')
  const [selectedSystem, setSelectedSystem] = useState('Összes rendszer')

  // Get unique values for filter options
  const serviceOptions = useMemo(() => 
    ['Összes szolgáltatás', ...new Set(data.map(item => item.serviceName))], 
    [data]
  );
  
  const itemOptions = useMemo(() => 
    ['Összes tétel', ...new Set(data.map(item => item.itemName))], 
    [data]
  );
  
  const systemOptions = useMemo(() => 
    ['Összes rendszer', ...new Set(data.map(item => item.systemName))], 
    [data]
  );

  // Format date for display
  const formatDate = (date: Date | null) => {
    if (!date) return 'Válasszon dátumot';
    return format(date, 'yyyy. MMMM', { locale: hu });
  };
  
  // Helper function to parse date from various formats
  const parseDate = (dateStr: string | Date): Date => {
    if (!dateStr) return new Date();
    if (dateStr instanceof Date) return dateStr;
    
    // Normalize DB format: '2025-01-01 00:00:00.000' -> '2025-01-01T00:00:00.000'
    const normalized = typeof dateStr === 'string' && dateStr.includes(' ')
      ? dateStr.replace(' ', 'T')
      : dateStr;
    
    const isoDate = new Date(normalized);
    if (!isNaN(isoDate.getTime())) return isoDate;
    
    // Try parsing other formats if needed
    const parts = String(dateStr).split(/[\-.:/\s]+/);
    if (parts.length >= 3) {
      // Try YYYY-MM-DD format
      const date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
      if (!isNaN(date.getTime())) return date;
    }
    
    console.warn('Failed to parse date:', dateStr);
    return new Date();
  };

  // Filter data based on selected month and other filters
  const filteredData = useMemo(() => {
    if (!selectedDate) {
      return [];
    }

    // User által kért egyszerű logika: minden itemId-re külön sort + nextValue
    const grouped = data.reduce((acc, rec) => {
      if (!acc[rec.itemId]) acc[rec.itemId] = [];
      acc[rec.itemId].push({ ...rec });
      return acc;
    }, {} as Record<string, any[]>);

    const processedData: any[] = [];
    Object.values(grouped).forEach(records => {
      // Mindig Date objektummal hasonlíts!
      const sorted = [...records].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      for (let i = 0; i < sorted.length - 1; i++) {
        sorted[i].nextValue = sorted[i + 1].value;
        sorted[i].nextApproved = sorted[i + 1].approved;
        sorted[i].nextId = sorted[i + 1].id;
      }
      if (sorted.length) {
        sorted[sorted.length - 1].nextValue = 0;
        sorted[sorted.length - 1].nextApproved = undefined;
        sorted[sorted.length - 1].nextId = undefined;
      }
      processedData.push(...sorted);
    });
    // Debug: nézd meg, hogy processedData-ban helyes-e a nextValue!
    console.log('DEBUG processedData:', processedData);

    // Adjust the selected date to use the previous month for data display
    const previousMonthDate = new Date(selectedDate);
    previousMonthDate.setMonth(previousMonthDate.getMonth() - 1);
    
    const selectedMonth = previousMonthDate.getMonth() + 1;
    const selectedYear = previousMonthDate.getFullYear();
    const selectedMonthYear = `${selectedYear}-${String(selectedMonth).padStart(2, '0')}`;

    // --- ÚJ LOGIKA: Mindig jelenjen meg minden releváns itemId-re egy sor, akkor is, ha nincs adat a hónapban ---
    let itemsToShow = Object.values(grouped).map(records => records[0]);
    if (selectedItem !== 'Összes tétel') {
      itemsToShow = itemsToShow.filter(row => row.itemName === selectedItem);
    }
    if (selectedService !== 'Összes szolgáltatás') {
      itemsToShow = itemsToShow.filter(row => row.serviceName === selectedService);
    }
    if (selectedSystem !== 'Összes rendszer') {
      itemsToShow = itemsToShow.filter(row => row.systemName === selectedSystem);
    }

    // Minden itemId-re keresd meg a hónaphoz tartozó rekordot, ha nincs, generálj 0-ás sort
    const resultRows = itemsToShow.map(row => {
      const record = processedData.find(record => {
        const recordDate = parseDate(record.date);
        const recordMonthYear = `${recordDate.getFullYear()}-${String(recordDate.getMonth() + 1).padStart(2, '0')}`;
        return record.itemId === row.itemId && recordMonthYear === selectedMonthYear;
      });
      if (record) {
        return record;
      } else {
        return {
          ...row,
          value: 0,
          nextValue: 0,
          date: `${selectedYear}-${String(selectedMonth).padStart(2, '0')}-01`,
          originalDate: `${selectedYear}-${String(selectedMonth).padStart(2, '0')}-01`,
          description: '',
          approved: false,
          nextApproved: undefined,
          nextId: undefined,
        };
      }
    });
    // Debug: listázzuk ki a sorokat
    console.log('KPI sorok:');
    resultRows.forEach(row => {
      console.log(`itemId: ${row.itemId}, date: ${row.date}, value: ${row.value}, nextValue: ${row.nextValue}, itemName: ${row.itemName}, serviceName: ${row.serviceName}, systemName: ${row.systemName}, approved: ${row.approved}, nextApproved: ${row.nextApproved}`);
    });
    // Extra: log the whole array for easy inspection
    console.log('DEBUG resultRows (full objects):', resultRows);
    return resultRows;
  }, [data, selectedDate, selectedItem, selectedService, selectedSystem]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">KPI Adatok</h1>
      
      {/* Filter Section */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">Szűrők</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tétel</label>
            <select
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
            >
              {itemOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Szolgáltatás</label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
            >
              {serviceOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Rendszer</label>
            <select
              value={selectedSystem}
              onChange={(e) => setSelectedSystem(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
            >
              {systemOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          
          <div className="flex flex-col relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Hónap</label>
            <div className="mt-1">
              <button 
                type="button"
                onClick={() => setShowDatePicker(!showDatePicker)}
                className="inline-flex items-center justify-between w-full px-3 py-2 text-sm text-left text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 h-[38px]"
              >
                <span>{formatDate(selectedDate)}</span>
                <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </button>
              
              {showDatePicker && (
                <div className="absolute z-10 mt-1">
                  <div className="bg-white p-2 border border-gray-300 rounded-md shadow-lg">
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => {
                        setSelectedDate(date);
                        setShowDatePicker(false);
                      }}
                      locale={hu}
                      inline
                      showMonthYearPicker
                      dateFormat="yyyy. MMMM"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* KPI Table */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="mb-4 p-2 bg-gray-50 rounded">
          <p className="text-sm text-gray-600">Debug Info:</p>
          <p className="text-xs text-gray-500">Selected Date: {selectedDate?.toISOString()}</p>
          <p className="text-xs text-gray-500">Filtered Items: {filteredData.length}</p>
          <p className="text-xs text-gray-500">Total Items: {data.length}</p>
        </div>
        
        {selectedDate ? (
          filteredData.length > 0 ? (
            <KPITable
              data={filteredData}
              systems={systems}
              services={services}
              items={items}
              currentMonth={format(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1), 'yyyy. MMMM', { locale: hu })}
              nextMonth={format(selectedDate, 'yyyy. MMMM', { locale: hu })}
              role={role}
              userId={userId}
            />
          ) : (
            <div className="text-center py-8 text-gray-500">
              Nincs megjeleníthető adat a kiválasztott hónapban
            </div>
          )
        ) : (
          <div className="text-center py-8 text-gray-500">
            Válasszon egy hónapot a megjelenítéshez
          </div>
        )}
      </div>
    </div>
  );
}

export default DisplayComponent