import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import { checkRegisteredMember } from '@/lib/supabase';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const result = await checkRegisteredMember(
          credentials?.email,
          credentials?.password
        );

        if (result.status === 400 || result.status === 401) {
          return null;
        }

        const user = {
          id: result.statusText.id,
          email: result.statusText.email,
        };
        console.log('yes with user : ', user);
        return user;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/signIn',
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
