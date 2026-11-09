import { NextResponse } from 'next/server'

import { PersonalInfo, Vehicles } from '@/src/types/models'

import { insertWithGeneratedId } from '@/src/lib/supabase/ids'

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

  // Si le membre existait déjà (rafraîchissement de la page), on réutilise
  // son identifiant réel au lieu de celui calculé côté client.
  const memberId = rspRecMember.memberId ?? newMemberId

  // Le véhicule est enregistré au mieux : un échec ici ne doit pas empêcher
  // l'alerte de validation manuelle de partir, sinon le secrétariat n'est
  // jamais prévenu et l'adhésion reste bloquée sans trace.
  const rspRecCar = await recordCar(vehicles, memberId)
  const carSaved = rspRecCar.status === 200

  const rspSendMail = await sendMailRecordDb(personalInfo)
  if (rspSendMail.status !== 200) {
    return NextResponse.json({
      message: rspSendMail.message,
      status: rspSendMail.status,
    })
  }

  return NextResponse.json({
    message: carSaved
      ? 'Great Job !!! User and car have created successfully with send the mail :)'
      : 'Membre enregistré et alerte envoyée, mais le véhicule n’a pas pu être enregistré.',
    status: 200,
    carSaved,
    ...(carSaved ? {} : { carError: rspRecCar.message }),
  })
}

// La colonne cars.id n'a pas toujours de valeur par défaut en base :
// insertWithGeneratedId gère les deux cas (voir src/lib/supabase/ids.ts).

async function recordCar(vehicles: Vehicles[], memberId: number) {
  try {
    if (vehicles.length === 0) {
      return { status: 200, message: 'No car to create', data: [] }
    }

    // Idempotence : on ne recrée pas une voiture déjà enregistrée pour ce
    // membre (même immatriculation), pour supporter un rafraîchissement.
    const { data: existingCars, error: readError } = await supabase
      .from('cars')
      .select('immatriculation')
      .eq('member_id', memberId)

    if (readError) throw readError

    const existingPlate = new Set(
      (existingCars ?? []).map((car: any) =>
        String(car.immatriculation ?? '').toUpperCase(),
      ),
    )

    const carsToCreate = vehicles
      .filter(
        (vehicle) =>
          !existingPlate.has(
            String(vehicle.immatriculation ?? '').toUpperCase(),
          ),
      )
      .map((vehicle) => ({
        car_color_id: Number(vehicle.color),
        car_finition_id: Number(vehicle.finition),
        car_model_id: Number(vehicle.model),
        immatriculation: vehicle.immatriculation,
        member_id: memberId,
        min: vehicle.mine,
      }))

    if (carsToCreate.length === 0) {
      return { status: 200, message: 'Car(s) already created', data: [] }
    }

    const { data, error } = await insertWithGeneratedId('cars', carsToCreate)

    if (error) throw error

    return {
      status: 200,
      message: 'Car(s) created successfully',
      data,
    }
  } catch (error: any) {
    return {
      status: Number(error?.code) || error.status || 500,
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
    // Idempotence : un rafraîchissement de /memberfinish ne doit pas
    // provoquer un doublon ni une violation de clé primaire.
    const { data: existing, error: readError } = await supabase
      .from('members')
      .select('id')
      .eq('email', email)

    if (readError) {
      return {
        status: 500,
        message: readError.message || 'Error to read member in db',
      }
    }

    if (existing && existing.length > 0) {
      return {
        status: 200,
        message: 'Member already created',
        memberId: existing[0].id,
      }
    }

    const memberRow = {
      cotisation: false,
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
    }

    const { data: inserted, error } = await insertWithGeneratedId('members', [
      memberRow,
    ])

    if (error) {
      return {
        status: 500,
        message: error.message || 'Error to insert new member in db',
      }
    }

    return {
      status: 200,
      message: 'Member created successfully',
      memberId: inserted?.[0]?.id ?? newMemberId,
    }
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
