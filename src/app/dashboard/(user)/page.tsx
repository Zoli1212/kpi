import React from 'react';
import { auth } from '@/auth';
import DisplayComponent from '@/components/DisplayComponent';
import prisma from '@/lib/prisma';
import Link from 'next/link';
import Button from '@/components/ui/button/Button';


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

  console.log(session, 'SESSION')
  
  // Force REPORTER role for testing
    const userRole = session?.user?.role;
  const incidentsReporter = session?.user?.incidentsReporter;
  const isReporter = userRole === 'REPORTER';
  const isAdmin = userRole === 'ADMIN';
  const userId = session?.user?.id;
  const isApprover = userRole === 'APPROVER';

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

      
      userItemIds = userItems.map((ui: any) => ui.itemId);
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
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        approver: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
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
    console.log('Sample KPI records:', allKpiData.slice(0, 3).map((d: any) => ({
      id: d.id,
      itemId: d.itemId,
      itemName: d.item?.name,
      date: d.date,
      value: d.value
    })));
  } else {
    console.warn('No KPI records found with the current filter');
  }

  // Create an array of all KPI records with proper formatting
  const transformedData = allKpiData.map((item: any) => {
    const date = new Date(item.date);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const monthYear = `${year}-${month}`;
    
    return {
      id: item.id,
      itemId: item.itemId,
      itemName: item.item?.name || 'N/A',
      serviceName: item.service?.name || 'N/A',
      systemName: item.system?.name || 'N/A',
      value: item.value ?? 0,
      nextValue: 0, // Will be updated in DisplayComponent
      date: `${year}-${month}-${day}`, // Ensure date is a string in YYYY-MM-DD format
      monthYear,
      description: item.description || '',
      approved: item.approved ?? false,
      created: item.createdAt || item.created || new Date().toISOString(),
      user: item.user ? {
        id: item.user.id,
        name: item.user.name || 'Ismeretlen',
        email: item.user.email || ''
      } : undefined,
      approver: item.approver ? {
        id: item.approver.id,
        name: item.approver.name || 'Ismeretlen',
        email: item.approver.email || ''
      } : undefined
    };
  });
  
  console.log(`Processed ${transformedData.length} KPI records`);
  console.log('Sample processed data:', transformedData.slice(0, 3));

  // Transform systems data to the required structure
  const transformedSystems = rawSystems.map((system: any) => ({
    id: system.id,
    name: system.name,
    description: system.description || '',
  }));

  const transformedServices = rawServices.map((service: any) => ({
    id: service.id,
    name: service.name,
    description: service.description || '',
  }));

  const transformedItems = rawItems.map((item: any) => ({
    id: item.id,
    name: item.name,
    description: item.description || '',
  }));

    return (
    <div>
      {incidentsReporter && (
        <div className="mb-4 flex justify-end">
          <Link href="/dashboard/incidents">
            <Button>Incident Management</Button>
          </Link>
        </div>
      )}
      <DisplayComponent
        data={transformedData}
        systems={transformedSystems}
        services={transformedServices}
        items={transformedItems}
        role={userRole || 'VIEWER'}
        userId={userId}
      />
    </div>
  );
};

export default KPIDataPage;
