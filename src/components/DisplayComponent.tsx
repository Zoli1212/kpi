'use client'
import React, { useState } from 'react'
import KPITable from './KPITable'
import FilterComponent from './FilterComponent'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { format } from 'date-fns'
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
  // State for date picker
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [showDatePicker, setShowDatePicker] = useState(false)

  // Get unique values for filter options
  const serviceOptions = ['Összes szolgáltatás', ...new Set(data.map(item => item.serviceName))];
  const itemOptions = ['Összes tétel', ...new Set(data.map(item => item.itemName))];
  const systemOptions = ['Összes rendszer', ...new Set(data.map(item => item.systemName))];

  // Format date for display
  const formatDate = (date: Date | null) => {
    if (!date) return 'Válasszon dátumot';
    return format(date, 'yyyy. MMMM d.', { locale: hu });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">KPI Adatok</h1>
      
      {/* Filter Section */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">Szűrők</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FilterComponent 
            name="Tétel" 
            options={itemOptions} 
            className="mb-4"
          />
          <FilterComponent 
            name="Szolgáltatás" 
            options={serviceOptions} 
            className="mb-4"
          />
          <FilterComponent 
            name="Rendszer" 
            options={systemOptions} 
            className="mb-4"
          />
          <div className="flex flex-col relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Dátum</label>
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
                      inline
                      selected={selectedDate}
                      onChange={(date) => {
                        setSelectedDate(date);
                        setShowDatePicker(false);
                      }}
                      locale={hu}
                      dateFormat="yyyy. MMMM d."
                      className="border-0"
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
        <KPITable
          data={data}
          systems={systems}
          services={services}
          items={items}
        />
      </div>
    </div>
  );
}

export default DisplayComponent