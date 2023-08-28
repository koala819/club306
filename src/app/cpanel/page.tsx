'use client';
import { useSession } from 'next-auth/react';
import RootLayout from '@/app/layout';
import CustomLayout from './layout';
import { DisplaySVG } from '@/app/idg/DisplaySvg';

export default function CPanel() {
  const { data: session, status } = useSession();

  return (
    <RootLayout hideNavbar hideFooter>
      <CustomLayout>
        <h1>Bienvenue {session?.user?.name}</h1>
        <div className="flex flex-wrap text-center">
          <div className="p-4 md:w-2/3 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              Left Side
            </div>
          </div>
          <div className="p-4 md:w-1/3 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <h1>Ma Voiture</h1>
              <DisplaySVG name="3 Portes" color="174191" />
              <h1>Accéder au Garage</h1>
            </div>
          </div>
        </div>
      </CustomLayout>
    </RootLayout>
  );
}
