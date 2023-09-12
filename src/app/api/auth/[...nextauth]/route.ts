import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { checkRegisteredMember } from '@/lib/supabase';
import { User } from 'next-auth';
import { SupabaseAdapter } from '@auth/supabase-adapter';
import { Adapter } from 'next-auth/adapters';
import type { AuthOptions } from 'next-auth';
import jwt from 'jsonwebtoken';
import { authOptions } from '@/utils/authOptions';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
