import { CheckoutHelloAsso } from '@/src/types/models'

import getAuthToken from './getAuthToken'

export default async function connect({
  requestData,
  url,
  method,
}: {
  requestData?: CheckoutHelloAsso
  url: string
  method: string
}): Promise<any> {
  try {
    const token = await getAuthToken(
      process.env.HELLO_ASSO_CLIENT_ID ?? '',
      process.env.HELLO_ASSO_CLIENT_SECRET ?? '',
    )

    const response = await fetch(url ?? '', {
      method: method,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })

    if (response.status !== 200 && response.status !== 204) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    // Pour les réponses 204 (No Content), il n'y a pas de body
    if (response.status === 204) {
      return {}
    }

    // Vérifier si le body existe avant de parser
    const contentType = response.headers.get('content-type')
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json()
      return data
    }

    return {}
  } catch (error) {
    console.error('Error during checkout intent initialization:', error)
    throw error
  }
}
