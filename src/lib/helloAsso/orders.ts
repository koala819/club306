import getAuthToken from './getAuthToken'

import { memberInDB } from '@/lib/newSupabase'

export async function fetchAndEnrichOrders() {
  const token = await getAuthToken(
    process.env.HELLO_ASSO_CLIENT_ID ?? '',
    process.env.HELLO_ASSO_CLIENT_SECRET ?? '',
  )

  let response = await fetch(
    'https://api.helloasso.com/v5/organizations/club-306-france/forms/Event/hebergement-youngtimer-festival-2024/items',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  )

  let dataResponse = await response.json()
  let allRecords: any = []

  allRecords = allRecords.concat(dataResponse.data)

  if (dataResponse.pagination.continuationToken) {
    response = await fetch(
      `https://api.helloasso.com/v5/organizations/club-306-france/forms/Event/hebergement-youngtimer-festival-2024/items?continuationToken=${dataResponse.pagination.continuationToken}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    )
    const newPageData = await response.json()
    allRecords = allRecords.concat(newPageData.data)
  }

  const finalRecords = allRecords

  const orders = []

  for (const order of finalRecords) {
    const moreInfo = await enrichOrderData(order.id)
    const memberOrNot = await memberInDB(order.payer.lastName.toUpperCase())
    // const memberOrNot = await memberInDB(order.payer.email)
    orders.push({ ...order, ...moreInfo, memberOrNot })
  }
  return orders
}

async function enrichOrderData(orderId: string) {
  const token = await getAuthToken(
    process.env.HELLO_ASSO_CLIENT_ID ?? '',
    process.env.HELLO_ASSO_CLIENT_SECRET ?? '',
  )

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
  }
}
