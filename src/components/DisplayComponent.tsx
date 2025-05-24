'use client'
import React, { useState, useMemo, useEffect } from 'react'
import KPITable from './KPITable'
import FilterComponent from './FilterComponent'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { format, startOfMonth, endOfMonth, isWithinInterval, parseISO, addMonths } from 'date-fns'
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
}

const DisplayComponent: React.FC<DisplayComponentProps> = ({
  data,
  systems,
  services,
  items
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
    
    // Try parsing ISO string
    const isoDate = new Date(dateStr);
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
    console.log('Filtering data with selectedDate:', selectedDate);
    console.log('Input data length:', data.length);
    console.log('Sample input data:', data.slice(0, 2));
    
    if (!selectedDate) {
      console.log('No date selected, returning empty array');
      return [];
    }
    
    const start = startOfMonth(selectedDate);
    const end = endOfMonth(selectedDate);
    const nextMonthStart = addMonths(start, 1);
    const nextMonthEnd = addMonths(end, 1);
    
    console.log('Date range:', { 
      start: format(start, 'yyyy-MM-dd'), 
      end: format(end, 'yyyy-MM-dd'),
      nextMonthStart: format(nextMonthStart, 'yyyy-MM-dd'),
      nextMonthEnd: format(nextMonthEnd, 'yyyy-MM-dd')
    });
    
    // Transform all data first to ensure consistent format
    const transformedData = data.map(record => {
      const itemDate = parseDate(record.date);
      const month = itemDate.getMonth() + 1;
      const year = itemDate.getFullYear();
      
      return {
        ...record,
        id: record.id || 0,
        itemId: record.itemId || 0,
        itemName: record.itemName || 'Névtelen tétel',
        serviceName: record.serviceName || 'Nincs szolgáltatás',
        systemName: record.systemName || 'Nincs rendszer',
        value: record.value || 0,
        nextValue: record.nextValue || 0,
        date: itemDate.toISOString(),
        month,
        year,
        monthYear: `${year}-${String(month).padStart(2, '0')}`
      };
    });
    
    // Get current month and year for filtering
    const currentMonth = selectedDate.getMonth() + 1;
    const currentYear = selectedDate.getFullYear();
    const currentMonthYear = `${currentYear}-${String(currentMonth).padStart(2, '0')}`;
    
    // Filter data for the selected month
    const currentMonthData = transformedData.filter(item => {
      return item.monthYear === currentMonthYear;
    });
    
    console.log('Current month data:', currentMonthData);
    
    if (currentMonthData.length === 0) {
      console.log('No data found for current month, showing all data');
      return [];
    }
    
    // Get next month's data for each item
    const nextMonth = addMonths(selectedDate, 1);
    const nextMonthYear = `${nextMonth.getFullYear()}-${String(nextMonth.getMonth() + 1).padStart(2, '0')}`;
    
    const dataWithNextMonth = currentMonthData.map(item => {
      // Find next month's value for this item
      const nextMonthItem = transformedData.find(d => 
        d.itemId === item.itemId && 
        d.monthYear === nextMonthYear
      );
      
      return {
        ...item,
        nextValue: nextMonthItem?.value ?? item.nextValue,
        originalDate: item.date
      };
    });
    
    console.log('Data with next month values:', dataWithNextMonth);
    
    // Apply additional filters
    const filtered = dataWithNextMonth.filter(item => {
      const matchesItem = selectedItem === 'Összes tétel' || item.itemName === selectedItem;
      const matchesService = selectedService === 'Összes szolgáltatás' || item.serviceName === selectedService;
      const matchesSystem = selectedSystem === 'Összes rendszer' || item.systemName === selectedSystem;
      
      return matchesItem && matchesService && matchesSystem;
    });
    
    console.log('Final filtered data:', filtered);
    return filtered;
  }, [data, selectedDate, selectedItem, selectedService, selectedSystem]);
  
  // Reset filters when data changes
  useEffect(() => {
    console.log('Data changed, resetting filters');
    console.log('First data item:', data[0]);
    
    setSelectedDate(new Date());
    setSelectedItem('Összes tétel');
    setSelectedService('Összes szolgáltatás');
    setSelectedSystem('Összes rendszer');
  }, [data]);
  
  // Debug filtered data
  useEffect(() => {
    console.log('Filtered data:', filteredData);
  }, [filteredData]);

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