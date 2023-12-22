import { randomBytes } from 'crypto';

export function generateUniqueToken(): string {
  const token = randomBytes(48).toString('hex');

  return token;
}
