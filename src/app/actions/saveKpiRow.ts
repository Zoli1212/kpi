"use server";
import prisma from '@/lib/prisma';

// Típus: minden mező, ami a KPI sorhoz kell
interface KpiRowInsert {
  itemId: number;
  value: number;
  date: string;
}

import { revalidatePath } from 'next/cache';

export async function saveKpiRow(row: KpiRowInsert) {
  console.log("saveKpiRow called with:", row);

  // Szerver oldali validáció
  const missingFields: string[] = [];
  if (!row.itemId) missingFields.push('itemId');
  if (typeof row.value === 'undefined' || row.value === null) missingFields.push('value');
  if (!row.date) missingFields.push('date');

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
    // 1. Lekérdezzük az utolsó KPI_Data sort ugyanazzal az itemId-val
    const lastRow = await prisma.kPI_Data.findFirst({
      where: {
        itemId: row.itemId,
      },
      orderBy: { date: 'desc' },
    });

    // Ha nincs előző sor, hibát dobunk
    if (!lastRow) {
      console.error("Nincs előző KPI sor, nem lehet menteni.");
      return { success: false, error: "Nincs előző KPI sor, nem lehet menteni." };
    }

    console.log(lastRow, 'lastRow')

    // 2. Meghatározzuk az új dátumot: mindig az előző sor hónapja +1 hónap
    const lastDate = new Date(lastRow.date);
    // Mindig a következő hónap első napja, 00:00:00, UTC
    const nextMonth = lastDate.getMonth() + 1;
    const nextYear = lastDate.getFullYear() + (nextMonth > 11 ? 1 : 0);
    const nextMonthIndex = nextMonth % 12;
    const newDate = new Date(Date.UTC(nextYear, nextMonthIndex, 1, 0, 0, 0, 0));
    // Formázd stringgé: ISO-8601 (pl. '2025-06-01T00:00:00.000Z')
    const formattedDate = newDate.toISOString();

    // 3. Létrehozzuk az új sort: minden mezőt az előző sorból veszünk át, csak a date és value új
    let newKpiData: any = { ...lastRow };
    // Prisma visszaadja az id-t, created, modified, expired stb.-t is, ezeket NE vigyük át
    delete newKpiData.id;
    delete newKpiData.created;

    delete newKpiData.modified;
    delete newKpiData.expired;
    delete newKpiData.approverId;
    // Ezeket írjuk felül
    newKpiData.date = formattedDate;
    newKpiData.value = row.value;

    console.log(newKpiData, 'newKpiData')

    const result = await prisma.kPI_Data.create({
      data: newKpiData,
    });

    revalidatePath(`/dashboard`);

    // Sikeres mentés után dashboard újratöltése
 
    console.log("KPI row saved successfully:", result);
    return { success: true };
  } catch (error) {
    console.error("Error saving KPI row:", error);
    return { success: false, error: error instanceof Error ? error.message : error };
  }
}
