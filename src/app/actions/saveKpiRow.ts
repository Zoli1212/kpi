"use server";
import prisma from '@/lib/prisma';

// Típus: minden mező, ami a KPI sorhoz kell
interface KpiRowInsert {
  itemId: number;
  serviceId: number;
  systemId: number;
  value: number;
  date: string; // '2025-04-01 00:00:00.000' formátum
  userId: number;
  companyId: number;
}

export async function saveKpiRow(row: KpiRowInsert) {
  console.log("saveKpiRow called with:", row);

  // Szerver oldali validáció
  const missingFields: string[] = [];
  if (!row.itemId) missingFields.push('itemId');
  if (!row.serviceId) missingFields.push('serviceId');
  if (!row.systemId) missingFields.push('systemId');
  if (typeof row.value === 'undefined' || row.value === null) missingFields.push('value');
  if (!row.date) missingFields.push('date');
  if (!row.userId) missingFields.push('userId');
  if (!row.companyId) missingFields.push('companyId');

  if (missingFields.length > 0) {
    console.error("Missing or invalid fields in KPI row:", missingFields, row);
    return { success: false, error: `Missing or invalid fields: ${missingFields.join(', ')}` };
  }

  // Dátum validáció
  const dateObj = new Date(row.date);
  if (isNaN(dateObj.getTime())) {
    console.error("Invalid date format for KPI row:", row.date);
    return { success: false, error: "Invalid date format" };
  }

  try {
    const result = await prisma.kPI_Data.create({
      data: {
        itemId: row.itemId,
        serviceId: row.serviceId,
        systemId: row.systemId,
        value: row.value,
        date: dateObj,
        userId: row.userId,
        companyId: row.companyId,
      },
    });
    console.log("KPI row saved successfully:", result);
    return { success: true };
  } catch (error) {
    console.error("Error saving KPI row:", error);
    return { success: false, error: error instanceof Error ? error.message : error };
  }
}
