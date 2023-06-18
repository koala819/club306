import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { checkRegisteredMember } from '@/lib/supabase';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials as any;
        const result = await checkRegisteredMember({ email, password });
        if (result === 'find') {
          return email;
        } else {
          throw new Error('Identifiants invalides');
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/signIn',
  },
});

export { handler as GET, handler as POST };
