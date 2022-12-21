import Nextauth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials'
import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcrypt';

export default Nextauth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    CredentialsProvider({
      id: 'login',
      async authorize(credentials) {
        const supabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL || '',
          process.env.NEXT_PUBLIC_SUPABASE_KEY || ''
        );

        try {
          const { data, error } = await supabase
            .from('members')
            .select('*')
            .eq('email', credentials?.email)
            .limit(1);

          if (error) {
            //throw new Error(error);
            console.log('An error Sir when record',error);
          }

          /*console.log('data',data)*/
          if (data.length > 0) {
            if (await bcrypt.compare(credentials?.password, data[0]?.password)) {
              console.log('Great Job !!! User has been founded :)');
              return 'find'
            }
            console.log('No record !!! :(');
            return null
          } else {
            console.log('No record!!!')
            return null
          }
        } catch (error) {
          console.log('Error Sir in login page !!!\n',error)
        }
      }
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  /*callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === 'google') {
        console.log('profile email \n', profile.email);
        console.log('profile name \n', profile.name);
        console.log('profile picture \n', profile.picture);
        return profile.email
      }
    }
  },*/
  /*pages: {
    signIn: '/membership',
    error: '/404'
  }*/
});