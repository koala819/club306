export default async function getAuthToken(
  clientId: string,
  clientSecret: string,
): Promise<string> {
  const tokenUrl = 'https://api.helloasso.com/oauth2/token'
  const response = await fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
    }),
  })

  // if (!response.ok) {
  //   throw new Error(`HTTP error! status: ${response.status}`)
  // }

  const data = await response.json()

  // console.log('data', data)
  if (response.status !== 200) {
    console.log(`HTTP error! status: ${response.status}`)
  }

  return data.access_token
}
