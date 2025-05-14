import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { Role } from '../../types/rolePermissions';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || session.user?.role !== Role.ADMIN) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    const users = await prisma.user.findMany({
      include: {
        analystSystems: true,
        appOperatorSystems: true,
        platformOperatorSystems: true,
        infraOperatorSystems: true,
      },
    });

    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user?.role !== Role.ADMIN) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    const { id, role, systems } = await request.json();
    
    // Update user role
    await prisma.user.update({
      where: { id },
      data: { role: role as Role },
    });

    // Update system assignments
    await Promise.all([
      prisma.system.updateMany({
        where: { id: { in: systems.analyst } },
        data: { analystId: id },
      }),
      prisma.system.updateMany({
        where: { id: { in: systems.appOperator } },
        data: { appOperatorId: id },
      }),
      prisma.system.updateMany({
        where: { id: { in: systems.platformOperator } },
        data: { platformOperatorId: id },
      }),
      prisma.system.updateMany({
        where: { id: { in: systems.infraOperator } },
        data: { infraOperatorId: id },
      }),
    ]);

    return new NextResponse('User updated successfully');
  } catch (error) {
    console.error('Error updating user:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
