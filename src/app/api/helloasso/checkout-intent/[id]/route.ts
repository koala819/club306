import { NextRequest, NextResponse } from 'next/server'
import connect from '@/src/lib/helloAsso/connect'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: checkoutIntentId } = await params

    console.log('GET /api/helloasso/checkout-intent/[id] - checkoutIntentId:', checkoutIntentId)

    if (!checkoutIntentId) {
      console.error('Checkout intent ID is missing')
      return NextResponse.json(
        { error: 'Checkout intent ID is required' },
        { status: 400 }
      )
    }

    console.log('Calling HelloAsso API for checkout intent:', checkoutIntentId)
    const result = await connect({
      url: `https://api.helloasso.com/v5/organizations/club-306-france/checkout-intents/${checkoutIntentId}`,
      method: 'GET',
    })

    console.log('HelloAsso API response received:', {
      hasMetadata: !!result?.metadata,
      hasUserId: !!result?.metadata?.userId
    })

    return NextResponse.json(result)
  } catch (error: any) {
    console.error('Checkout intent fetch error:', error)
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    })
    return NextResponse.json(
      { error: error.message || 'Failed to fetch checkout intent' },
      { status: 500 }
    )
  }
}
