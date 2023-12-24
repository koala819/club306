import { NextApiRequest } from 'next';
import { getToken } from 'next-auth/jwt';

export async function isAuthenticatedUser(
  req: NextApiRequest
): Promise<boolean> {
  const secret = process.env.NEXTAUTH_SECRET;

  if (!secret) {
    throw new Error('Missing NEXTAUTH_SECRET environment variable');
  }

  try {
    const token = await getToken({ req, secret });
    return !!token; // Retourne true si le token existe, false sinon
  } catch (error) {
    console.error('Error in isAuthenticatedUser:', error);
    return false;
  }
}
