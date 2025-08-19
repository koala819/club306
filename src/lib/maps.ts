import { NextResponse } from 'next/server'

import supabase from 'backend/config/dbConnect'

export async function getCities() {
  try {
    const { data, error } = await supabase
      .from('members')
      .select('lat, lng, town')
    // .eq('country', 'France')

    if (!error) {
      const marker = data.map(async (city: { town: string; lat: number; lng: number }) => {
        try {
          return {
            town: city.town,
            lat: city.lat,
            lng: city.lng,
          }
        } catch (error: any) {
          console.error(
            `Error fetching data for ${city.town}: ${error.message}`,
          )
          return {
            city: city.town,
            error: error.message,
          }
        }
      })
      return Promise.all(marker)
    }
  } catch (error) {
    return NextResponse.json(error, {
      status: 406,
    })
  }
}

// export async function getFrenchCities() {
//   try {
//     const { data, error } = await supabase
//       .from('members')
//       .select('town')
//       .eq('country', 'Hollande')

//     if (!error) {
//       const requestOptions = {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
//       try {
//         const promises = data.map(async (city) => {
//           try {
//             const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(city.town)}+Hollande&key=c6c0600458864196a3fdcaac64e41577`
//             const response = await fetch(url, requestOptions)
//             const result = await response.json()

//             if (result.results && result.results.length > 0) {
//               await recordLatLng(
//                 city.town,
//                 result.results[0].geometry.lat,
//                 result.results[0].geometry.lng,
//               )
//               return {
//                 town: city.town,
//                 lat: result.results[0].geometry.lat,
//                 lng: result.results[0].geometry.lng,
//               }
//             } else {
//               throw new Error('No results found')
//             }
//           } catch (error: any) {
//             console.error(
//               `Error fetching data for ${city.town}: ${error.message}`,
//             )
//             return {
//               city: city.town,
//               error: error.message,
//             }
//           }
//         })
//         return Promise.all(promises)
//         // const response = await fetch(
//         //   'https://api.opencagedata.com/geocode/v1/json?q=Paris+France&key=c6c0600458864196a3fdcaac64e41577',
//         //   requestOptions,
//         // )
//         // const result = await response.json()

//         // return {
//         //   city: 'Paris',
//         //   lat: result.results[0].geometry.lat,
//         //   long: result.results[0].geometry.lng,
//         // }
//       } catch (error) {
//         console.error(error)
//         return {
//           error: error,
//           status: 404,
//         }
//       }
//     }

//     return NextResponse.json({
//       error: error,
//       status: 309,
//     })
//   } catch (error) {
//     return NextResponse.json(error, {
//       status: 406,
//     })
//   }
// }

export async function recordLatLng(city: string, lat: number, lng: number) {
  try {
    const { error } = await supabase
      .from('members')
      .update({ lat, lng })
      .eq('town', city)

    if (error) {
      return NextResponse.json(error, {
        status: 401,
        statusText: 'Error with supabase request',
      })
    }

    return NextResponse.json({
      message: 'Great Job !!! User has created successfully :)',
      status: 200,
    })
  } catch (error) {
    return NextResponse.json(error, {
      status: 406,
    })
  }
}
