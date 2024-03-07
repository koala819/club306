import { NextResponse } from 'next/server'

import supabase from 'backend/config/dbConnect'

export async function getAllEvents(year: number) {
  try {
    const { data, error } = await supabase
      .from('event')
      .select('*')
      .eq('year', year)

    if (!error) {
      return data
    }

    return NextResponse.json({
      message: 'Error to get events :(',
      status: 405,
    })
  } catch (error) {
    return NextResponse.json({
      message: 'Error with supabase request',
      status: 406,
    })
  }
}
