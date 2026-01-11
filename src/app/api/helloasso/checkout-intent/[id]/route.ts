import { NextRequest, NextResponse } from 'next/server'
import connect from '@/src/lib/helloAsso/connect'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: checkoutIntentId } = await params

    if (!checkoutIntentId) {
      return NextResponse.json(
        { error: 'Checkout intent ID is required' },
        { status: 400 }
      )
    }

    const result = await connect({
      url: `https://api.helloasso.com/v5/organizations/club-306-france/checkout-intents/${checkoutIntentId}`,
      method: 'GET',
    })

    return NextResponse.json(result)
  } catch (error: any) {
    console.error('Checkout intent fetch error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch checkout intent' },
      { status: 500 }
    )
  }
}
