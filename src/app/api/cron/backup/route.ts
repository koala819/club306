import { NextResponse } from 'next/server'

import { backupTable } from '@/src/lib/backupSupabase'

export async function GET() {
  const resultCarColors = await backupTable('car_colors')
  const resultCarFinitions = await backupTable('car_finitions')
  const resultCarModels = await backupTable('car_models')
  const resultCars = await backupTable('cars')
  const resultEvent = await backupTable('event')
  const resultEventTheme = await backupTable('event_theme')
  const resultMembers = await backupTable('members')
  const resultMuseum = await backupTable('museum')
  const resultPartners = await backupTable('partners_codePromo')

  if (
    !resultCarColors ||
    !resultCarFinitions ||
    !resultCarModels ||
    !resultCars ||
    !resultEvent ||
    !resultEventTheme ||
    !resultMembers ||
    !resultMuseum ||
    !resultPartners
  ) {
    return NextResponse.json({ ok: false })
  }
  return NextResponse.json({ ok: true })
}
