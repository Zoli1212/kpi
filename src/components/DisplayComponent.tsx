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
  created: string; // Added to match the actual data structure
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

    const currentMonthStart = startOfMonth(addMonths(selectedDate, -1));
    const nextMonthStart = startOfMonth(selectedDate);

    const groupedByItem = data.reduce((acc, record) => {
      const key = record.itemId;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(record);
      return acc;
    }, {} as Record<string, TableData[]>);

    let allItems = Object.values(groupedByItem).map(records => records[0]);

    if (selectedItem !== 'Összes tétel') {
      allItems = allItems.filter(item => item.itemName === selectedItem);
    }
    if (selectedService !== 'Összes szolgáltatás') {
      allItems = allItems.filter(item => item.serviceName === selectedService);
    }
    if (selectedSystem !== 'Összes rendszer') {
      allItems = allItems.filter(item => item.systemName === selectedSystem);
    }

    const finalData: TableData[] = allItems.map(baseItem => {
      const recordsForItem = groupedByItem[baseItem.itemId] || [];

      const currentMonthRecord = recordsForItem.find(r => {
        const recordDate = startOfMonth(parseDate(r.date));
        return recordDate.getTime() === currentMonthStart.getTime();
      });

      const nextMonthRecord = recordsForItem.find(r => {
        const recordDate = startOfMonth(parseDate(r.date));
        return recordDate.getTime() === nextMonthStart.getTime();
      });

      if (currentMonthRecord) {
        return {
          ...currentMonthRecord,
          nextValue: nextMonthRecord ? nextMonthRecord.value : 0,
          nextApproved: nextMonthRecord ? nextMonthRecord.approved : false,
          nextId: nextMonthRecord ? nextMonthRecord.id : undefined,
        };
      } else {
        return {
          ...baseItem,
          id: -baseItem.itemId,
          date: format(currentMonthStart, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),
          value: 0,
          approved: false,
          nextValue: nextMonthRecord ? nextMonthRecord.value : 0,
          nextApproved: nextMonthRecord ? nextMonthRecord.approved : false,
          nextId: nextMonthRecord ? nextMonthRecord.id : undefined,
          created: new Date().toISOString(), // Provide string value for 'created'
        };
      }
    });

    return finalData;
  }, [selectedDate, selectedItem, selectedService, selectedSystem, data]);

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
              currentMonth={format(addMonths(selectedDate, -1), 'yyyy. MMMM', { locale: hu })}
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