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
        render={({ field }) => <FilterComponent name="Service" options={services} {...field} />}
      />
      <Controller
        name="item"
        control={control}
        render={({ field }) => <FilterComponent name="Item" options={items} {...field} />}
      />
      <Controller
        name="system"
        control={control}
        render={({ field }) => <FilterComponent name="System" options={systems} {...field} />}
      />
      <DatePickerComponent />
    </form>
  );
};

export default KPIForm;
