import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import Garage from '@/components/cpanel/Garage';

import { DisplaySVG } from '@/components/DisplaySvg';

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    redirect('/login');
  }

  return (
    <>
      <span>Bienvenue {session?.user.user_metadata.first_name}</span>
      <div className="flex flex-wrap text-center">
        <div className="p-4 md:w-2/3 w-full">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            Left Side
          </div>
        </div>
        <div className="p-4 md:w-1/3 w-full">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg w-full">
            <Garage session={session} hide={true} />
          </div>
        </div>
      </div>
    </>
  );
}
