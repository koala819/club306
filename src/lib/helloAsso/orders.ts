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

  // Ajouter les premiers enregistrements au tableau
  allRecords = allRecords.concat(dataResponse.data)
  console.log('before do with ', dataResponse.pagination)

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
    console.log('in if with', newPageData.pagination)

    // dataResponse = newPageData
  }

  const finalRecords = allRecords
  //   console.log('data', finalRecords)

  const orders = []

  for (const order of finalRecords) {
    const moreInfo = await enrichOrderData(order.id)
    const memberOrNot = await memberInDB(order.payer.lastName.toUpperCase())
    // const memberOrNot = await memberInDB(order.payer.email)
    orders.push({ ...order, ...moreInfo, memberOrNot })
  }
  return orders
}

// export async function fetchAllPages(url: string): Promise<any> {
//   const token = await getAuthToken(
//     process.env.HELLO_ASSO_CLIENT_ID ?? '',
//     process.env.HELLO_ASSO_CLIENT_SECRET ?? '',
//   )

//   const addToken = (base: string, token: string) => {
//     const url = new URL(base)
//     const searchParams = new URLSearchParams(url.search)
//     searchParams.set('continuationToken', token)
//     url.search = searchParams.toString()
//     return url.toString()
//   }

//   // Fonction pour récupérer les données d'une page
//   const fetchData = async (urlWithToken: string) => {
//     const response = await fetch(urlWithToken, {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       },
//     })
//     return await response.json()
//   }

//   let allRecords: any[] = []
//   let continuationToken = null
//   let currentPageUrl = url

//   do {
//     const data = await fetchData(currentPageUrl)
//     allRecords = allRecords.concat(data.data)
//     continuationToken = data.pagination?.continuationToken

//     if (continuationToken) {
//       currentPageUrl = addToken(url, continuationToken)
//     }
//   } while (continuationToken)

//   console.log('All records:', allRecords)
//   return allRecords
// }

// // Cette fonction devrait maintenant correctement récupérer toutes les pages jusqu'à ce qu'il n'y ait plus de continuationToken,
// // puis elle affiche (ou retourne) tous les enregistrements accumulés.

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
