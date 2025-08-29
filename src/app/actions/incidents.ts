'use server';

import { revalidatePath } from 'next/cache';
import prisma from '@/lib/prisma';
import { auth } from '@/auth';

interface IncidentFormData {
  type: string;
  companyId: string;
  systemId: string;
  description: string;
  beginning: string;
  end: string;
  urgency: string;
  criticality: string;
}

export async function createIncidentAction(data: IncidentFormData) {
  const session = await auth();

  if (!session?.user?.id) {
    return { success: false, message: 'Authentication required.' };
  }

  try {
    const userId = parseInt(session.user.id);
    await prisma.incident.create({
      data: {
        ...data,
        companyId: parseInt(data.companyId),
        systemId: parseInt(data.systemId),
        beginning: new Date(data.beginning),
        end: new Date(data.end),
        reporterId: userId,
        creatorId: userId, // Assign creator
        handlerId: userId, // Assign default handler
        detectionTime: new Date(), // Set detection time
      },
    });

    revalidatePath('/dashboard/incidents');
    return { success: true, message: 'Incident successfully created!' };
  } catch (error) {
    console.error('Failed to create incident:', error);
    return { success: false, message: 'Failed to create incident.' };
  }
}

export async function closeIncidentAction(incidentId: number) {
  const session = await auth();

  if (!session?.user?.id) {
    return { success: false, message: 'Authentication required.' };
  }

  try {
    await prisma.incident.update({
      where: { id: incidentId },
      data: { closed: true },
    });

    revalidatePath('/dashboard/incidents');
    return { success: true, message: 'Incident successfully closed!' };
  } catch (error) {
    console.error('Failed to close incident:', error);
    return { success: false, message: 'Failed to close incident.' };
  }
}

export async function deleteIncidentAction(incidentId: number) {
  const session = await auth();

  if (!session?.user?.id) {
    return { success: false, message: 'Authentication required.' };
  }

  try {
    await prisma.incident.delete({
      where: { id: incidentId },
    });

    revalidatePath('/dashboard/incidents');
    return { success: true, message: 'Incident successfully deleted!' };
  } catch (error) {
    console.error('Failed to delete incident:', error);
    return { success: false, message: 'Failed to delete incident.' };
  }
}
