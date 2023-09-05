const { backupTable } = require('@/lib/backupSupabase');
import { NextResponse } from 'next/server';

export async function GET() {
  const resultCarColors = await backupTable('car_colors');
  const resultCarFinitions = await backupTable('car_finitions');
  const resultCarModels = await backupTable('car_models');
  const resultCars = await backupTable('cars');
  const resultMembers = await backupTable('members');
  const resultMuseum = await backupTable('museum');
  const resultPartners = await backupTable('partners_codePromo');

  if (
    !resultCarColors ||
    !resultCarFinitions ||
    !resultCarModels ||
    !resultCars ||
    !resultMembers ||
    !resultMuseum ||
    !resultPartners
  ) {
    return NextResponse.json({ ok: false });
  }
  return NextResponse.json({ ok: true });
}
