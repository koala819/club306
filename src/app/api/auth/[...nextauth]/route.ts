import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { checkRegisteredMember } from '@/lib/supabase';
import { User } from 'next-auth';
import { SupabaseAdapter } from '@auth/supabase-adapter';
import { Adapter } from 'next-auth/adapters';
import type { AuthOptions } from 'next-auth';

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // const { email, password } = credentials as any;
        const result = await checkRegisteredMember(credentials?.email);
        if (result) {
          const contentType = result.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const jsonData = await result.json();

            const user: User = {
              id: jsonData[0].id,
              email: credentials?.email,
            };
            console.log('yes with user : ', user);

            return user;
          }
          return null;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    secret: process.env.NEXT_PUBLIC_SUPABASE_KEY || '',
  }) as Adapter,
  pages: {
    signIn: '/auth/signIn',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
