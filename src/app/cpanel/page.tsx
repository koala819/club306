'use client';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
// import { cookies } from 'next/headers';
import { Homepage } from '@/components/cpanel/Homepage';

export default function Page() {
  // const supabase = createServerComponentClient({ cookies });
  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();

  return <div>WELCOME TO CPanel</div>;
  // return <Homepage session={session} />;
}
