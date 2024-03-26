import { Order } from '@/types/models'

import getAuthToken from './getAuthToken'

import connect from '@/lib/helloAsso/connect'
import { memberInDB } from '@/lib/newSupabase'

export async function fetchAndEnrichOrders() {
  const token = await getToken()

  const response = await fetch(
    'https://api.helloasso.com/v5/organizations/club-306-france/forms/Event/hebergement-youngtimer-festival-2024/items',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  )

  //   const response = await connect({
  //     url: 'https://api.helloasso.com/v5/organizations/club-306-france/forms/Event/hebergement-youngtimer-festival-2024/items',
  //     method: 'GET',
  //   })
  const dataResponse = await response.json()
  //   console.log('orders', dataResponse)

  const orders = []

  for (const order of dataResponse.data) {
    const moreInfo = await enrichOrderData(order.id)
    const memberOrNot = await memberInDB(order.payer.email)
    orders.push({ ...order, ...moreInfo, memberOrNot })
  }
  return orders
}

async function getToken() {
  const token = await getAuthToken(
    process.env.HELLO_ASSO_CLIENT_ID ?? '',
    process.env.HELLO_ASSO_CLIENT_SECRET ?? '',
  )
  return token
}

async function enrichOrderData(orderId: string) {
  const token = await getToken()

  const response = await fetch(
    `https://api.helloasso.com/v5/orders/${orderId}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  )

  //   const data = await connect({
  //     url: `https://api.helloasso.com/v5/orders/${orderId}`,
  //     method: 'GET',
  //   })

  const data = await response.json()

  const breakfastField = data.items[0].customFields.find(
    (field: { name: string }) =>
      field.name === 'Petit déjeuner sur le circuit le lendemain matin',
  )
  const immatriculationField = data.items[0].customFields.find(
    (field: { name: string }) => field.name === 'Immatriculation véhicule',
  )
  const ageField = data.items[0].customFields.find(
    (field: { name: string }) => field.name === 'Age',
  )
  const coordinatesField = data.items[0].customFields.find(
    (field: { name: string }) => field.name === 'Coordonnées',
  )

  const breakfast = breakfastField ? breakfastField.answer : 'Non spécifié'
  const immatriculationVehicule = immatriculationField
    ? immatriculationField.answer
    : 'Non spécifié'
  const age = ageField ? ageField.answer : 'Non spécifié'
  const coordinates = coordinatesField
    ? coordinatesField.answer
    : 'Non spécifié'

  return {
    breakfast,
    immatriculationVehicule,
    age,
    coordinates,
    // memberInfo,
  }
}
