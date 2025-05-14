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
    <form className="space-y-4 mb-6" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="service"
        control={control}
        render={({ field }) => <FilterComponent options={services} {...field} />}
      />
      <Controller
        name="item"
        control={control}
        render={({ field }) => <FilterComponent options={items} {...field} />}
      />
      <Controller
        name="system"
        control={control}
        render={({ field }) => <FilterComponent options={systems} {...field} />}
      />
      <div className="flex items-center border border-gray-200 p-4 rounded w-1/4">
  <svg className="w-4 h-4 ml-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10m-6 4h.01M4 21h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
  <DatePickerComponent />
</div>
    </form>
  );
};

export default KPIForm;
