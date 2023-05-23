import Nextauth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcrypt';

export default Nextauth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
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
            console.error(
              'Error to check if member is registered in our db',
              error
            );
          }

          if (data.length > 0) {
            if (
              await bcrypt.compare(credentials?.password, data[0]?.password)
            ) {
              console.log('Great Job !!! User has been founded :)');
              return 'find';
            }
            console.error('Error to check if member is registered in our db');
            return null;
          } else {
            console.error('Error to check if member is registered in our db');
            return null;
          }
        } catch (error) {
          console.error(
            'Error to check if member is registered in our db',
            error
          );
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
