import GoogleProvider from 'next-auth/providers/google';
import EmailProvider from 'next-auth/providers/email';
import { sendConfirmMail } from '@/lib/sendConfirmMail';
import { SupabaseAdapter } from '@next-auth/supabase-adapter';
import { Adapter } from 'next-auth/adapters';
import { NextAuthOptions, getServerSession } from 'next-auth';
import type {
  NextAuthOptions as NextAuthConfig,
  RequestInternal,
} from 'next-auth';
// import jwt from 'jsonwebtoken';
// import nodemailer from 'nodemailer';
import CredentialsProvider from 'next-auth/providers/credentials';
import { checkRegisteredMember } from '@/lib/supabase';
import { User } from 'next-auth';

// declare module 'next-auth/jwt' {
//   interface JWT {
//     /** The user's role. */
//     userRole?: 'member';
//   }
// }

export const authOptions: NextAuthOptions = {
  providers: [
    // CredentialsProvider({
    //   name: 'Credentials',
    //   credentials: {
    //     email: { label: 'Email', type: 'text' },
    //     password: { label: 'Password', type: 'password' },
    //   },
    //   async authorize(credentials) {
    //     const result = await checkRegisteredMember(
    //       credentials?.email,
    //       credentials?.password
    //     );

    //     if (result?.status !== 200) {
    //       return null;
    //     }

    //     const user: User = {
    //       id: result.statusText.id,
    //       email: result.statusText.email,
    //       name: result.statusText.name,
    //     };
    //     console.log('user in authOptions', user);
    //     return user;
    //   },
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
    }),
    // Auth0Provider({
    //   clientId: process.env.AUTH0_ID || '',
    //   clientSecret: process.env.AUTH0_SECRET || '',
    //   issuer: process.env.AUTH0_ISSUER || '',
    // }),
    // EmailProvider({
    //   server: {
    //     host: process.env.MAIL_HOST,
    //     port: process.env.MAIL_PORT,
    //     auth: {
    //       user: process.env.MAIL_USER,
    //       pass: process.env.MAIL_PWD,
    //     },
    //   },
    //   from: process.env.MAIL_FROM,
    //   maxAge: 10 * 60, // Magic links are valid for 10 min only
    //   sendVerificationRequest({ identifier: email, url }) {
    //     sendConfirmMail(email, url);
    //   },
    // }),
  ],
  // callbacks: {
  //   async jwt({ token, user }) {
  //     console.log('token', token, 'user', user);
  //     if (user) {
  //       return {
  //         ...token,
  //         username: user.name,
  //       };
  //     }
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     return {
  //       ...session,
  //       user: { ...session.user, username: token.username },
  //     };
  //     return session;
  //   },
  // },
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    secret: process.env.NEXT_PUBLIC_SUPABASE_KEY || '',
  }) as Adapter,
  // callbacks: {
  //   async session({ session, user }) {
  //     console.log('session', session);
  //     console.log('user', user);
  //     return session;
  //   },
  // },
  pages: {
    signIn: '/auth/signIn',
  },
  // callbacks: {
  //   async session(session: any, user: any) {
  //     // Vous pouvez personnaliser la session ici
  //     return session;
  //   },
  // },
  // secret: process.env.NEXTAUTH_SECRET,
  // session: {
  //   jwt: true,
  // },
  // callbacks: {
  //   async jwt({ token }) {
  //     token.userRole = 'member';
  //     return token;
  //   },
  // },
} satisfies NextAuthConfig;

// export const getServerAuthSession = (req: any, res: any) => {
//   return getServerSession(req, res, authOptions);
// };
