import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const kpiData = await prisma.kPI_Data.findMany();
    res.status(200).json(kpiData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch KPI data' });
  }
}
