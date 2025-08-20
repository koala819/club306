import { NextRequest, NextResponse } from 'next/server'
import connect from '@/src/lib/helloAsso/connect'

export async function POST(request: NextRequest) {
  try {
    const requestData = await request.json()

    const result = await connect({
      requestData,
      url: 'https://api.helloasso.com/v5/organizations/club-306-france/checkout-intents',
      method: 'POST',
    })

    return NextResponse.json(result)
  } catch (error: any) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
