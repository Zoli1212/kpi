import React from 'react';
import KPIForm from './KPIForm';
import KPITable from '@/components/KPITable';
import prisma from '@/lib/prisma';

const KPIDataPage = async () => {
  const [kpiData, descriptions, systems, services, items] = await Promise.all([
    prisma.kPI_Data.findMany(),
    prisma.description.findMany(),
    prisma.system.findMany(),
    prisma.service.findMany(),
    prisma.item.findMany()
  ]);

  // Transform kpiData to the required structure
  const transformedData = kpiData.map(item => ({
    date: item.date.toISOString(), // Convert Date to string
    metric: "your_metric_value", // Assign a value to metric
    value: item.value
  }));

  return (
    <div className="p-4">
    <h1 className="text-3xl font-bold mb-4">KPI Data Management</h1>
    <KPIForm services={services} items={items} systems={systems} />
    <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">Add Data</button>
    <KPITable data={kpiData} />
  </div>
  );
};

export default KPIDataPage;