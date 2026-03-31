import { NextResponse } from 'next/server'

async function sendConfirmationMail(
  firstName: string,
  lastName: string,
  mail: string,
  token: string,
) {
  try {
    const data = {
      first_name: firstName,
      last_name: lastName,
      mail: mail,
      token: token,
      from: 'mailConfirm',
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/mail`,
      options,
    )
    if (response.status === 200) {
      return NextResponse.json({
        status: 200,
        statusText: 'Send mail with SUCCESS',
      })
    } else {
      return NextResponse.json({
        status: 306,
        statusText: 'Send mail with ERROR',
        data: response,
      })
    }
  } catch (error: any) {
    return NextResponse.json({
      status: 306,
      statusText: 'Error supabase request',
      data: error,
    })
  }
}

type ManualValidationAlertPayload = {
  first_name: string
  last_name: string
  email: string
  userId: string
  paymentCode: string
  checkoutIntentId: string
  orderId: string
  address: string
  zip_code: string
  town: string
  birth_date: string
  country: string
  phone: string
  vehicles: string
}

async function sendManualValidationAlert(payload: ManualValidationAlertPayload) {
  try {
    const data = {
      from: 'manualValidationAlert',
      ...payload,
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/mail`,
      options,
    )

    if (response.status === 200) {
      return NextResponse.json({
        status: 200,
        statusText: 'Send manual validation alert with SUCCESS',
      })
    }

    return NextResponse.json({
      status: 306,
      statusText: 'Send manual validation alert with ERROR',
      data: response,
    })
  } catch (error: any) {
    return NextResponse.json({
      status: 306,
      statusText: 'Error while sending manual validation alert',
      data: error,
    })
  }
}

export { sendConfirmationMail, sendManualValidationAlert }
