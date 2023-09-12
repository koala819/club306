import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { checkRegisteredMember } from '@/lib/supabase';
import { User } from 'next-auth';
import { SupabaseAdapter } from '@auth/supabase-adapter';
import { Adapter } from 'next-auth/adapters';
import { NextAuthOptions } from 'next-auth';
import type { AuthOptions } from 'next-auth';
import jwt from 'jsonwebtoken';

export const authOptions: NextAuthOptions = {
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
  // callbacks: {
  //   async jwt({ token, trigger, session }) {
  //     if (trigger === 'update' && session?.name) {
  //       session.name = token.name;
  //     }
  //     return token;
  //   },
  // },
  session: {
    strategy: 'jwt',
  },
  // jwt: {
  //   async encode({ secret, token }) {
  //     return jwt.sign(token, secret);
  //   },
  //   async decode({ secret, token }) {
  //     return jwt.verify(token, secret);
  //   },
  // },
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    secret: process.env.NEXT_PUBLIC_SUPABASE_KEY || '',
  }) as Adapter,
  pages: {
    signIn: '/auth/signIn',
  },
};
