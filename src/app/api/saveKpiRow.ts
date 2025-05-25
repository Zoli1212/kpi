import { NextRequest, NextResponse } from 'next/server';
import { saveKpiRow } from '@/app/actions/saveKpiRow';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = await saveKpiRow(body);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : error }, { status: 500 });
  }
}
