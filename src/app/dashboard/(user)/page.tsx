import React from 'react';
import { auth } from '@/auth';
import DisplayComponent from '@/components/DisplayComponent';
import prisma from '@/lib/prisma';
import { Role } from '@prisma/client';

type UserItem = {
  itemId: number;
};

interface KpiData {
  id: number;
  itemId: number;
  item?: {
    id: number;
    name: string;
  };
  service?: {
    id: number;
    name: string;
  };
  system?: {
    id: number;
    name: string;
  };
  date: Date;
  value: number;
  description?: string;
  nextValue?: number;
}

const KPIDataPage = async () => {
  const session = await auth();
  
  // Force REPORTER role for testing
  const userRole = 'REPORTER';
  const isReporter = true;
  const isAdmin = false;
  const userId = session?.user?.id;

  console.log('User role:', userRole);
  console.log('isReporter:', isReporter);

  // Get user's allowed items if REPORTER
  let userItemIds: number[] = [];
  if (isReporter && userId) {
    try {
      const userItems = await prisma.userItem.findMany({
        where: { userId: parseInt(userId, 10) },
        select: { itemId: true }
      });
      userItemIds = userItems.map(ui => ui.itemId);
      console.log('User has access to item IDs:', userItemIds);
    } catch (error) {
      console.error('Error fetching user items:', error);
    }
  }

  // Build the where clause for KPI data query
  const kpiWhere = isReporter && userItemIds.length > 0 
    ? { itemId: { in: userItemIds } } 
    : isReporter 
      ? { itemId: -1 } // No items assigned to REPORTER
      : {}; // No filter for non-REPORTER users

  console.log('KPI query filter:', kpiWhere);

  // Get all necessary data in parallel
  const [allKpiData, descriptions, rawSystems, rawServices, rawItems] = await Promise.all([
    prisma.kPI_Data.findMany({
      where: kpiWhere,
      include: {
        item: true,
        service: true,
        system: true,
      },
      orderBy: {
        date: 'desc',
      },
    }) as Promise<KpiData[]>,
    prisma.description.findMany(),
    prisma.system.findMany(),
    prisma.service.findMany(),
    isReporter && userItemIds.length > 0
      ? prisma.item.findMany({ 
          where: { id: { in: userItemIds } },
          select: { id: true, name: true, description: true }
        })
      : prisma.item.findMany({ select: { id: true, name: true, description: true } }),
  ]);
  
  console.log(`Fetched ${allKpiData.length} KPI records`);
  if (allKpiData.length > 0) {
    console.log('Sample KPI records:', allKpiData.slice(0, 3).map(d => ({
      id: d.id,
      itemId: d.itemId,
      itemName: d.item?.name,
      date: d.date,
      value: d.value
    })));
  } else {
    console.warn('No KPI records found with the current filter');
  }

  // Transform kpiData to the required structure for the table
  const transformedData = allKpiData.map(item => {
    const date = new Date(item.date);
    const formattedDate = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
    
    return {
      id: item.id,
      date: formattedDate,
      itemName: item.item?.name || 'N/A',
      serviceName: item.service?.name || 'N/A',
      systemName: item.system?.name || 'N/A',
      value: item.value,
      nextValue: item.value, // Next Value will be the same as Value
      description: item.description || '',
      itemId: item.itemId,
    };
  });

  // Transform systems data to the required structure
  const transformedSystems = rawSystems.map(system => ({
    id: system.id,
    name: system.name,
    description: system.description || '',
  }));

  const transformedServices = rawServices.map(service => ({
    id: service.id,
    name: service.name,
    description: service.description || '',
  }));

  const transformedItems = rawItems.map(item => ({
    id: item.id,
    name: item.name,
    description: item.description || '',
  }));

  return (
    <DisplayComponent
      data={transformedData} 
      systems={transformedSystems}
      services={transformedServices}
      items={transformedItems}
    />
  );
};

export default KPIDataPage;
