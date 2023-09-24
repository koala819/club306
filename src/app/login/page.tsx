import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import Login from '@/components/Login';

export default async function Page() {
  // const supabase = createClientComponentClient();
  // const { data } = await supabase.auth.getSession();

  // if (data?.session) {
  //   redirect('/');
  // }

  return <Login />;
}
