import { CheckoutHelloAsso } from '@/types/models';
import getAuthToken from './getAuthToken';

export default async function connect({
  requestData,
  url,
  method,
}: {
  requestData?: CheckoutHelloAsso;
  url: string;
  method: string;
}): Promise<any> {
  try {
    const token = await getAuthToken(
      process.env.HELLO_ASSO_CLIENT_ID ?? '',
      process.env.HELLO_ASSO_CLIENT_SECRET ?? ''
    );

    const response = await fetch(url ?? '', {
      method: method,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error during checkout intent initialization:', error);
    throw error;
  }
}
