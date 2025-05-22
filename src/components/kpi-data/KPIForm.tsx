'use client'
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import FilterComponent from '@/components/FilterComponent';
import DatePickerComponent from '@/components/DatePickerComponent';

interface KPIFormProps {
  services: string[]; // Adjust the type as needed
  items: string[];    // Adjust the type as needed
  systems: string[];  // Adjust the type as needed
}

const KPIForm: React.FC<KPIFormProps> = ({ services, items, systems }) => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Add your form submission logic here
  };

  return (
    <form className="mb-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap items-center gap-8">
        <div className="w-64">
          <Controller
            name="service"
            control={control}
            render={({ field }) => (
              <FilterComponent 
                options={services} 
                className="text-sm py-1"
                {...field} 
              />
            )}
          />
        </div>
        <div className="w-48">
          <Controller
            name="item"
            control={control}
            render={({ field }) => (
              <FilterComponent 
                options={items} 
                className="text-sm py-1"
                {...field} 
              />
            )}
          />
        </div>
        <div className="w-48">
          <Controller
            name="system"
            control={control}
            render={({ field }) => (
              <FilterComponent 
                options={systems} 
                className="text-sm py-1"
                {...field} 
              />
            )}
          />
        </div>
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10m-6 4h.01M4 21h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <div className="w-56">
            <DatePickerComponent />
          </div>
        </div>
      </div>
    </form>
  );
};

export default KPIForm;
