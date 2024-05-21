import { NextResponse } from 'next/server'

import supabase from 'backend/config/dbConnect'

async function getMembersInfo() {
  try {
    const { data, error } = await supabase
      .from('members')
      .select(
        `
      first_name,
      last_name,
      email,
      address,
      town,
      zip_code,
      country,
      phone,
      cars!inner(
        car_models!inner(name),
        car_colors!inner(name)
      )
      `,
      )
      .order('last_name', { ascending: true })

    if (error) {
      return NextResponse.json(error, {
        status: 401,
        statusText: 'Error with supabase request',
      })
    }

    return NextResponse.json(data, {
      status: 200,
      statusText: 'members info',
    })
  } catch (error) {
    return NextResponse.json(error, {
      statusText: 'Error with supabase request',
      status: 401,
    })
  }
}

export { getMembersInfo }
