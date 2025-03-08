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

export { sendConfirmationMail }
