import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import WaitSession from '@/components/membership/WaitSession';
import ThankYou from '@/components/membership/ThankYou';

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return <WaitSession />;
  }

  return <ThankYou session={session} />;
}
