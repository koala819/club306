import { NextResponse } from 'next/server'

import supabase from 'backend/config/dbConnect'
import bcrypt from 'bcryptjs'

export async function POST(req: any, res: any) {
  try {
    const { pwd, email } = await req.json()

    const { error } = await supabase
      .from('members')
      .update({ password: await bcrypt.hash(pwd, 12) })
      .eq('email', email)

    if (error) {
      return NextResponse.json({
        statusText: 'Error updating the password',
        status: 306,
      })
    }

    return NextResponse.json({
      statusText: 'Changed password successfully',
      status: 200,
    })
  } catch (error) {
    return NextResponse.json({
      statusText: 'Error with Supabase request',
      status: 306,
      data: error,
    })
  }
}
