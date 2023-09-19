// import { useSession } from 'next-auth/react';
import Link from 'next/link';
import RootLayout from '@/app/layout';
import CustomLayout from '../layout';
import { DisplaySVG } from '@/components/DisplaySvg';

export default function Home() {
  // const { data: session, status } = useSession();

  return (
    // <RootLayout hideNavbar hideFooter>
    // <CustomLayout>
    <>
      <h1>Bienvenue {'session?.user?.name'}</h1>
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
            <Link href="/cpanel/Garage">
              <h1 className=" hover:bg-gray-800 hover:text-white">
                Accéder au Garage
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </>
    // </CustomLayout>
    // {/* </RootLayout> */}
  );
}
