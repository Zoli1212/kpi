"use server";
import prisma from '@/lib/prisma';

// Típus: minden mező, ami a KPI sorhoz kell
interface KpiRowInsert {
  id?: number;
  itemId: number;
  value: number;
  date: string;
  userId: string;
}

import { revalidatePath } from 'next/cache';

export async function saveKpiRow(row: KpiRowInsert) {
  console.log("saveKpiRow called with:", row);

  // Szerver oldali validáció
  const missingFields: string[] = [];
  if (!row.itemId) missingFields.push('itemId');
  if (typeof row.value === 'undefined' || row.value === null) missingFields.push('value');
  if (!row.date) missingFields.push('date');
  if (!row.userId) missingFields.push('userId');

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
    if (row.id) {
      // Meglévő rekord frissítése
      const result = await prisma.kPI_Data.update({
        where: { id: row.id },
        data: {
          value: row.value,
          date: row.date,
          userId: parseInt(row.userId),
        },
      });
      revalidatePath(`/dashboard`);
      console.log("KPI row updated successfully:", result);
      return { success: true };
    } else {
      // Új rekord létrehozása
      const lastRow = await prisma.kPI_Data.findFirst({
        where: {
          itemId: row.itemId,
        },
        orderBy: { date: 'desc' },
      });

      if (!lastRow) {
        return { success: false, error: "Nincs előző KPI sor, nem lehet menteni." };
      }

      let newKpiData: any = { ...lastRow };
      delete newKpiData.id;
      delete newKpiData.created;
      delete newKpiData.modified;
      delete newKpiData.expired;
      delete newKpiData.approverId;
      delete newKpiData.approvalDate;
      
      // Felülírjuk a releváns mezőket a kliens által küldött adatokkal
      newKpiData.date = row.date; // A kliens által küldött dátum használata
      newKpiData.value = row.value;
      newKpiData.userId = parseInt(row.userId);
      newKpiData.approved = false; // Az új adat alapértelmezetten nincs jóváhagyva

      const result = await prisma.kPI_Data.create({
        data: newKpiData,
      });


      revalidatePath(`/dashboard`);
      console.log("KPI row saved successfully:", result);
      return { success: true };
    }
  } catch (error) {
    console.error("Error saving KPI row:", error);
    return { success: false, error: error instanceof Error ? error.message : error };
  }
}
