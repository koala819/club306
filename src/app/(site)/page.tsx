import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Homepage } from '@/components/Homepage';

export default async function RootPage() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div>
      <title>Home</title>
      <meta name="description" content="My homepage" />
      {user ? <Homepage withMember={true} /> : <Homepage withMember={false} />}
    </div>
  );
}
