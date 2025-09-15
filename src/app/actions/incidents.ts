'use server';

import { revalidatePath } from 'next/cache';
import prisma from '@/lib/prisma';
import { auth } from '@/auth';

interface IncidentFormData {
  type: string;
  companyId: string;
  systemId: string;
  jiraId: string;
  description: string;
  beginning: string;
  end: string;
  criticality: string;
  cause: string;
  solver: string;
}

export async function createIncidentAction(data: IncidentFormData) {
  const session = await auth();

  if (!session?.user?.id) {
    return { success: false, message: 'Authentication required.' };
  }

  try {
    const userId = parseInt(session.user.id);
    const userName = session.user.name || 'Unknown User';
    
    await prisma.incident.create({
      data: {
        type: data.type,
        description: data.description,
        cause: data.cause,
        criticality: data.criticality,
        solver: data.solver,
        notificationId: data.jiraId,
        companyId: data.companyId ? parseInt(data.companyId) : undefined,
        systemId: data.systemId ? parseInt(data.systemId) : undefined,
        beginning: new Date(data.beginning),
        end: new Date(data.end),
        reporterId: userId,
        creatorId: userName, 
        handlerId: userName, 
        detectionTime: new Date(), 
      } as any, 
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

export async function openIncidentAction(incidentId: number) {
  const session = await auth();

  if (!session?.user?.id) {
    return { success: false, message: 'Authentication required.' };
  }

  try {
    await prisma.incident.update({
      where: { id: incidentId },
      data: { closed: false },
    });

    revalidatePath('/dashboard/incidents');
    return { success: true, message: 'Incident successfully opened!' };
  } catch (error) {
    console.error('Failed to open incident:', error);
    return { success: false, message: 'Failed to open incident.' };
  }
}
