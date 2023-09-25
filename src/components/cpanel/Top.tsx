'use client';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import Link from 'next/link';
import { IoIosContact } from 'react-icons/io';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function Top({ session }: any) {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  async function handleSignout() {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log('error', error);
    }
  }

  return (
    <nav className="p-4 flex border-b-2 border-gray-400 text-[#3B578E] bg-[#ADA075]">
      {/* BURGER MENU */}
      <div className="md:hidden bg-gray-800 text-white p-4 w-1/4 flex items-center justify-center">
        <p>MB</p>
      </div>
      <div className="flex items-center justify-center md:justify-center w-full"></div>
      <div className="hidden md:flex items-center space-x-4 md:w-1/4 justify-end">
        <div className="w-16 h-16 rounded-full flex items-center justify-center hover:cursor-pointer ">
          <IoIosContact size={72} onClick={toggleMenu} />
        </div>
        {/* Menu Items */}
        {isMenuVisible && (
          <div
            ref={menuRef}
            className="absolute mt-64 right-4 bg-white border border-gray-300 w-64 shadow-lg text-gray-800"
          >
            <div className="p-2">
              <div className="flex items-center justify-center mb-8 mt-2">
                {/* <div className="w-1/4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-10 -5 84 84"
                    className="w-10 h-10 bg-gray-100 rounded-full"
                  ></svg>
                </div> */}
                <div className="w-3/4 ">
                  <h1>{session?.user?.name}</h1>
                  <h2
                    className="text-gray-300"
                    style={{
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      maxWidth: '100%',
                    }}
                  >
                    {session?.user?.email}
                  </h2>
                </div>
              </div>

              <Link href="/cpanel/Infos">
                <p className="hover:bg-gray-800 hover:text-white mb-2">
                  Mes Informations
                </p>
              </Link>
              <Link href="/cpanel/AddCar">
                <p className="hover:bg-gray-800 hover:text-white mb-2">
                  Ajouter une voiture
                </p>
              </Link>
              <Link href="/cpanel/AddCar">
                <p className="hover:bg-gray-800 hover:text-white mb-2">
                  Mon Garage
                </p>
              </Link>
              <Link href="/cpanel/AddCar">
                <p className="hover:bg-gray-800 hover:text-white mb-2">
                  Saison {new Date().getFullYear()}
                </p>
              </Link>
              <Link href="/cpanel/AddCar">
                <p className="hover:bg-gray-800 hover:text-white mb-2">
                  Nos Partenaires
                </p>
              </Link>
              <Link href="/">
                <p className="hover:bg-gray-800 hover:text-white mb-2">
                  Retour au site
                </p>
              </Link>

              <hr className="my-2 border-gray-300" />
              <div className="flex items-center">
                <div className="text-white text-2xl pr-4">
                  <button
                    type="button"
                    onClick={() => handleSignout()}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  >
                    Se déconnecter
                    <AiOutlineLogout size={20} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
