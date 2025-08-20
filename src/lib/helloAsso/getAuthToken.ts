export default async function getAuthToken(
  clientId: string,
  clientSecret: string,
): Promise<string> {
  const tokenUrl = 'https://api.helloasso.com/oauth2/token'
  const response = await fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/xwww-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
    }),
  })

  const data = await response.json()

  if (response.status !== 200) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return data.access_token
}
