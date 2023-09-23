import Link from 'next/link';
import { DisplaySVG } from '@/components/DisplaySvg';

import CustomLayout from './layout';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
// import { useSession } from 'next-auth/react';
// import RootLayout from '@/app/layout';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import ClipLoader from 'react-spinners/ClipLoader';

export default function Page() {
  // const supabase = createServerComponentClient({ cookies });
  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();
  // if (!session) {
  //   redirect('/login');
  // }

  return (
    <>
      <span>Bienvenue </span>
      <div className="flex flex-wrap text-center">
        <div className="p-4 md:w-2/3 w-full">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            Left Side
          </div>
        </div>
        <div className="p-4 md:w-1/3 w-full">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <span>Ma Voiture</span>
            <DisplaySVG name="3 Portes" color="174191" />
            <Link href="/cpanel/Garage">
              <span className=" hover:bg-gray-800 hover:text-white">
                Accéder au Garage
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
  // return <NoSSR />;
}
