import { NextResponse } from 'next/server'

export async function GET() {
  const pageId = '274664079064739'
  const accessToken =
    'EAAVEjsCBjDsBO0P2GH8m5ziFgXyIWWthC4UUmaIjjEqbZA3vAPyKHlbDFAtk8ehUnPzaGK95XLNSV95Nx8nHRJw1vF4HKcP6fVIvIDVCRfIWqYJ7WMFdl3999vUkN5PoFp2wQmCDInx67UifCPw5GLcRSdvC8hk5uG8jhyuJiaboal2TueDxEAG6lZC5vQrQ0xonHHKu4lw4lFr9D70MAZD'
  const fields = 'fields=created_time,full_picture,message,permalink_url'
  const limit = 5

  const response = await fetch(
    `https://graph.facebook.com/${pageId}/posts?${fields}&limit=${limit}&access_token=${accessToken}`,
  )
  const data = await response.json()

  if (response.ok) {
    return NextResponse.json({
      status: 200,
      data: data,
    })
  } else {
    return NextResponse.json({
      statusText: 'Erreur lors de la récupération des articles',
      status: 500,
    })
  }
}
