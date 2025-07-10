import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const kpiData = await prisma.kPI_Data.findMany({
      select: {
        id: true,
        itemId: true,
        value: true,
        date: true,
        approved: true,
        created: true,
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
        },
        item: { select: { name: true } },
        service: { select: { name: true } },
        system: { select: { name: true } },
      },
      orderBy: {
        created: 'desc'
      }
    });
    res.status(200).json(kpiData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch KPI data' });
  }
}
