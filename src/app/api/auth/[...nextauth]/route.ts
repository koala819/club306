import NextAuth from 'next-auth/next';
// import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { checkRegisteredMember } from '@/lib/supabase';
// import { User } from 'next-auth';
// import { SupabaseAdapter } from '@auth/supabase-adapter';
// import { Adapter } from 'next-auth/adapters';
// import type { AuthOptions } from 'next-auth';

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

        console.log('result nextauth', result);
        console.log('result nextauth', result.statusText.id);
        console.log('result nextauth', result.statusText.email);

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
  //   adapter: SupabaseAdapter({
  //     url: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  //     secret: process.env.NEXT_PUBLIC_SUPABASE_KEY || '',
  //   }) as Adapter,
  pages: {
    signIn: '/auth/signIn',
  },
});

export { handler as GET, handler as POST };
