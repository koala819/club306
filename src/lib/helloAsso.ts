import { CheckoutHelloAsso } from '@/types/models';

export async function initializeCheckoutIntent(
  requestData: CheckoutHelloAsso
): Promise<any> {
  try {
    const token = await getAuthToken(
      // process.env.HELLO_ASSO_CLIENT_ID_SANDBOX ?? '',
      // process.env.HELLO_ASSO_CLIENT_SECRET_SANDBOX ?? ''
      process.env.HELLO_ASSO_CLIENT_ID ?? '',
      process.env.HELLO_ASSO_CLIENT_SECRET ?? ''
    );

    const response = await fetch(
      // process.env.HELLO_ASSO_API_URL_SANDBOX ?? '',
      process.env.HELLO_ASSO_API_URL ?? '',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error during checkout intent initialization:', error);
    throw error;
  }
}

async function getAuthToken(
  clientId: string,
  clientSecret: string
): Promise<string> {
  const tokenUrl = 'https://api.helloasso.com/oauth2/token';
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
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.access_token;
}
