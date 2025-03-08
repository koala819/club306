import { NextResponse } from 'next/server'

import { PersonalInfo, Vehicles } from '@/src/types/models'

import supabase from 'backend/config/dbConnect'

export async function record(
  personalInfo: PersonalInfo | undefined,
  vehicles: Vehicles[] | undefined,
  newMemberId: number,
  userToken: string,
) {
  if (!personalInfo || !vehicles) {
    return NextResponse.json({
      statusText: 'Error no data received',
      status: 401,
    })
  }
  const rspRecMember = await recordMember(personalInfo, newMemberId, userToken)
  if (rspRecMember.status !== 200) {
    return NextResponse.json({
      message: rspRecMember.message,
      status: rspRecMember.status,
    })
  }

  const rspRecCar = await recordCar(vehicles, newMemberId)
  if (rspRecCar.status !== 200) {
    return NextResponse.json({
      message: rspRecCar.message,
      status: rspRecCar.status,
    })
  }
  const rspSendMail = await sendMailRecordDb(personalInfo)
  if (rspSendMail.status !== 200) {
    return NextResponse.json({
      message: rspSendMail.message,
      status: rspSendMail.status,
    })
  }

  return NextResponse.json({
    message:
      'Great Job !!! User and car have created successfully with send the mail :)',
    status: 200,
  })
}

async function recordCar(vehicles: Vehicles[], memberId: number) {
  try {
    const insertionResults = await Promise.all(
      vehicles.map(async (vehicle) => {
        const { data, error } = await supabase.from('cars').insert({
          car_color_id: vehicle.color,
          car_finition_id: vehicle.finition,
          car_model_id: vehicle.model,
          immatriculation: vehicle.immatriculation,
          member_id: memberId,
          min: vehicle.mine,
        })
        if (error) throw error
        return data
      }),
    )

    return {
      status: 200,
      message: 'Car(s) created successfully',
      data: insertionResults,
    }
  } catch (error: any) {
    return {
      status: error.status || 500,
      message: error.message || 'Error with recordCar',
    }
  }
}

async function recordMember(
  personalInfo: PersonalInfo,
  newMemberId: number,
  userToken: string,
) {
  const {
    address,
    birth_date,
    first_name,
    last_name,
    country,
    phone,
    town,
    zip_code,
    email,
    pwd,
  } = personalInfo

  const countryCodes: { [key: string]: string } = {
    33: 'France',
    32: 'Belgique',
    39: 'Turquie',
    31: 'Pays-Bas',
    34: 'Espagne',
    41: 'Suisse',
  }

  const countryName = countryCodes[country] || ''

  try {
    const { error } = await supabase.from('members').insert({
      id: newMemberId,
      cotisation: true,
      address,
      birth_date,
      country: countryName,
      email,
      password: pwd,
      first_name: first_name.charAt(0).toUpperCase() + first_name.slice(1),
      last_name: last_name.toUpperCase(),
      phone: country + phone.substring(1, 10),
      town,
      zip_code,
      user_token: userToken,
    })
    if (error) {
      return {
        status: 500,
        message: error.message || 'Error to insert new member in db',
      }
    }

    return { status: 200, message: 'Member created successfully' }
  } catch (error: any) {
    return {
      status: error.status || 500,
      message: error.message || 'Error with recordMember',
    }
  }
}

async function sendMailRecordDb(personalInfo: PersonalInfo) {
  const dataSendMail = {
    first_name: personalInfo.first_name,
    last_name: personalInfo.last_name,
    from: 'recordDataBase',
  }
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(dataSendMail),
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/mail`,
      options,
    )

    if (response.status === 200) {
      return {
        status: 200,
        message: 'Great Job !!! Mail had been send successfully :)',
      }
    }

    return { status: 500, message: 'Error to send email' }
  } catch (error: any) {
    return {
      status: error.status || 500,
      message: error.message || 'Error with sendMailRecordDb',
    }
  }
}
