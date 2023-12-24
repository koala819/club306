import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
// import { cookies } from 'next/headers';
import { Homepage } from '@/components/cpanel/Homepage';
import { cookies } from 'next/headers';
import { isAuthenticatedUser } from '@/lib/isAuthenticatedUser';
import { getToken } from 'next-auth/jwt';

export default async function Page(req: any) {
  // const sessionTokenValue = cookies().get('next-auth.session-token');
  // console.log('sessionTokenValue', sessionTokenValue);

  // const supabase = createServerComponentClient({ cookies });
  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();

  return <div>WELCOME TO CPanel</div>;
  // return <Homepage session={session} />;
}
