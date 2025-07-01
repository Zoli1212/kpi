'use server';

import prisma from '@/lib/prisma';
import { auth } from '@/auth';
import { revalidatePath } from 'next/cache';

export async function approveKpiRow(id: number, approvedById: string) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      throw new Error('Nincs bejelentkezve');
    }

    // Get the KPI data to check if it exists
    const kpiData = await prisma.kPI_Data.findUnique({
      where: { id },
    });

    if (!kpiData) {
      throw new Error('Nem található a KPI adat');
    }

    // Update the KPI data with approval information
    const updatedKpi = await prisma.kPI_Data.update({
      where: { id },
      data: {
        approved: true,
        approverId: parseInt(approvedById, 10),
        approvalDate: new Date(),
      },
    });

    revalidatePath('/dashboard');
    return { success: true, data: updatedKpi };
  } catch (error) {
    console.error('Error approving KPI row:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Ismeretlen hiba történt'
    };
  }
}
