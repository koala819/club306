'use client';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import Link from 'next/link';
import { IoIosContact } from 'react-icons/io';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { onlyStaff } from '@/lib/supabase';

export default function Top({ session }: any) {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [staffMember, setStaffMember] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    async function fetchData() {
      const result = await onlyStaff(session?.user?.email);
      setStaffMember(result);
    }
    fetchData();
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuVisible(false);
    }
  };

  async function handleSignout() {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log('error', error);
    }
  }

  return (
    <nav className="p-4 flex border-b-2 border-gray-400 text-[#3B578E] bg-[#ADA075]">
      <div className="flex items-center justify-center md:justify-center w-full"></div>
      <div className="md:hidden flex items-center space-x-4 md:w-1/4 justify-end">
        <div className="w-16 h-16 rounded-full flex items-center justify-center hover:cursor-pointer ">
          <IoIosContact size={72} onClick={toggleMenu} />
        </div>
        {/* Menu Items */}
        {isMenuVisible && (
          <div
            ref={menuRef}
            className="absolute z-10 top-20 right-4 bg-white border border-gray-300 w-64 shadow-lg text-gray-800"
          >
            <div className="p-2">
              <div className="flex items-center justify-center ">
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
              <nav className="mt-8 ">
                <h1 className="text-xl font-bold text-center mb-2">
                  Dashboard
                </h1>
                <Link href="/cpanel/infos">
                  <p className="hover:bg-gray-800 hover:text-white mb-2">
                    Mes Informations
                  </p>
                </Link>
                <Link href="/cpanel/addCar">
                  <p className="hover:bg-gray-800 hover:text-white mb-2">
                    Ajouter une voiture
                  </p>
                </Link>
                <Link href="/cpanel/garage">
                  <p className="hover:bg-gray-800 hover:text-white mb-2">
                    Mon Garage
                  </p>
                </Link>
                <Link href="/cpanel/event">
                  <p className="hover:bg-gray-800 hover:text-white mb-2">
                    Saison {new Date().getFullYear()}
                  </p>
                </Link>
                <Link href="/cpanel/partners">
                  <p className="hover:bg-gray-800 hover:text-white mb-2">
                    Nos Partenaires
                  </p>
                </Link>
                <Link href="/">
                  <p className="hover:bg-gray-800 hover:text-white mb-2">
                    Retour au site
                  </p>
                </Link>
              </nav>
              {staffMember && (
                <nav className="mt-8 text-red-500">
                  <h1 className="text-xl font-bold text-center mb-2">
                    Administration
                  </h1>
                  <Link href="/cpanel/admin/stats">
                    <p className="hover:bg-red-300 hover:text-black mb-2">
                      Statistiques
                    </p>
                  </Link>
                  <Link href="/cpanel/admin/colors">
                    <p className="hover:bg-red-300 hover:text-black mb-2">
                      Couleurs
                    </p>
                  </Link>
                  <Link href="/cpanel/admin/partners">
                    <p className="hover:bg-red-300 hover:text-black mb-2">
                      Nos Partenaires
                    </p>
                  </Link>
                  <Link href="/cpanel/admin/event">
                    <p className="hover:bg-red-300 hover:text-black mb-2">
                      Saison {new Date().getFullYear()}
                    </p>
                  </Link>
                  <Link href="/cpanel/admin/supabase">
                    <p className="hover:bg-red-300 hover:text-black mb-2">
                      Base de données
                    </p>
                  </Link>
                </nav>
              )}

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
