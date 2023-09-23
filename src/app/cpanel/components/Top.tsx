'use client';
// import { signOut, useSession } from 'next-auth/react';
import { useEffect, useRef, useState } from 'react';
import { IoIosContact } from 'react-icons/io';
import Link from 'next/link';
import { FaHouseUser } from 'react-icons/fa';

export default function Top() {
  // const { data: session, status } = useSession();
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

  return (
    <nav className="p-4 flex border-b-2 border-gray-400 text-blue-600">
      {/* BURGER MENU */}
      <div className="md:hidden bg-gray-800 text-white p-4 w-1/4 flex items-center justify-center">
        <p>MB</p>
      </div>
      <div className="flex items-center justify-center md:justify-center w-full"></div>
      <div className="hidden md:flex items-center space-x-4 md:w-1/4 justify-end">
        <IoIosContact
          size={72}
          onClick={toggleMenu}
          className="text-blue-900"
        />

        {/* Menu Items */}
        {isMenuVisible && (
          <div
            ref={menuRef}
            className="absolute mt-64 right-4 bg-white border border-gray-300 w-64 shadow-lg text-gray-800"
          >
            <div className="p-2">
              <div className="flex items-center justify-center mb-8 mt-2">
                <div className="w-1/4">
                  <IoIosContact size={20} className="ml-2" />
                </div>
                <div className="w-3/4 ">
                  <h1>{'session?.user?.name'}</h1>
                  <h2
                    className="text-gray-300"
                    style={{
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      maxWidth: '100%',
                    }}
                  >
                    {'session?.user?.email'}
                  </h2>
                </div>
              </div>
              <Link href="/cpanel/AddCar">
                <p className="hover:bg-gray-800 hover:text-white">
                  Ajouter une voiture
                </p>
              </Link>
              <hr className="my-2 border-gray-300" />
              <div className="flex items-center">
                <div className="text-white text-2xl pr-4">
                  <button
                    type="button"
                    // onClick={() => signOut()}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  >
                    Se déconnecter
                    <IoIosContact size={20} className="ml-2" />
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
