import { NextResponse } from 'next/server'

import supabase from 'backend/config/dbConnect'

async function getMuseumInfo() {
  try {
    const { data, error } = await supabase
      .from('museum')
      .select(
        `
        deleted_at,
        immatriculation,
        reason,
        members (first_name, last_name),
        car_models (name),
        car_finitions (name),
        car_colors (name)
        `,
      )
      .order('deleted_at', { ascending: false })

    if (error) {
      return NextResponse.json(error, {
        status: 401,
        statusText: 'Error with supabase request',
      })
    }

    return NextResponse.json(data, {
      status: 200,
      statusText: 'museum info',
    })
  } catch (error) {
    return NextResponse.json(error, {
      statusText: 'Error with supabase request',
      status: 401,
    })
  }
}

export { getMuseumInfo }
