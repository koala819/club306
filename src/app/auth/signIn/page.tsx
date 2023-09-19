import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import SignIn from '@/components/ui/SignIn';

export default async function LoginPage() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  console.log('data', data);
  if (data?.session) {
    redirect('/');
  }

  return <SignIn />;
}
