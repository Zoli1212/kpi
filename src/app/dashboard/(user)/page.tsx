import React from 'react';

import KPITable from '@/components/KPITable';
import prisma from '@/lib/prisma';
import KPIForm from '../kpi-data/KPIForm';

const KPIDataPage = async () => {
  const [kpiData, descriptions, rawSystems, rawServices, rawItems] = await Promise.all([
    prisma.kPI_Data.findMany(),
    prisma.description.findMany(),
    prisma.system.findMany(),
    prisma.service.findMany(),
    prisma.item.findMany()
  ]);

  console.log(kpiData)

  // Transform kpiData to the required structure
  const transformedData = kpiData.map(item => ({
    date: item.date.toISOString(),
    itemName: rawItems.find(i => i.id === item.itemId)?.name || 'Unknown Item',
    serviceName: rawServices.find(s => s.id === item.serviceId)?.name || 'Unknown Service',
    systemName: rawSystems.find(sys => sys.id === item.systemId)?.name || 'Unknown System',
    value: item.value
  }));

  return (
    <div className="p-4">
    <h1 className="text-3xl font-bold mb-4">KPI Data Management</h1>
    <KPIForm services={rawServices.map(service => service.name)} items={rawItems.map(item => item.name)} systems={rawSystems.map(system => system.name)} />
    <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">Add Data</button>
    <KPITable data={transformedData} />
  </div>
  );
};

export default KPIDataPage;
