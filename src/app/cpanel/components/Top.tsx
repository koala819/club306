'use client';
import { signOut, useSession } from 'next-auth/react';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import Link from 'next/link';

export default function Top() {
  const { data: session, status } = useSession();
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
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border-2 border-yellow-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-10 -5 84 84"
            onClick={toggleMenu}
          >
            <g data-name="Business Man">
              <path
                d="M55.26 42.26 39 35l-5 7h-4l-5-7-16.3 7.37A8.012 8.012 0 0 0 4 49.66v12.59a.75.75 0 0 0 .75.75h54.5a.75.75 0 0 0 .75-.75V49.57a8.012 8.012 0 0 0-4.74-7.31z"
                style={{ fill: '#494a59' }}
              />
              <path
                d="M39 28.14V36l-5 7h-4l-5-7v-7.86a10 10 0 0 0 14 0z"
                style={{ fill: '#eac2b9' }}
              />
              <path
                d="M18 19.542V8a4 4 0 0 1 4-4 3 3 0 0 1 3-3h8.81a16.817 16.817 0 0 1 9.77 2.98c2.43 1.75 4.6 4.31 4.41 7.88-.125 2.3-.939 3.681-3.091 7.556z"
                style={{ fill: '#494a59' }}
              />
              <path
                style={{ fill: '#343544' }}
                d="M29 63h-6l-6-11 3-3-4-2-3.48-6.36 7.59-3.43 7.21 20.91L29 63z"
              />
              <path
                style={{ fill: '#494a59' }}
                d="M36.68 58.12 35 63h-6l-1.68-4.88L29 49h6l1.68 9.12z"
              />
              <path
                style={{ fill: '#343544' }}
                d="M37 43.8 35 49h-6l-2-5.2 3-1.8h4l3 1.8z"
              />
              <path
                style={{ fill: '#d0dbf7' }}
                d="M43.9 37.19 39 45l-2-1.2-3-1.8 5-7 4.9 2.19zM30 42l-3 1.8-2 1.2-4.89-7.79L25 35l5 7z"
              />
              <path
                style={{ fill: '#e6ecff' }}
                d="m29 49-1.68 9.12-7.21-20.91L25 45l2-1.2 2 5.2zM43.9 37.19l-7.22 20.93L35 49l2-5.2 2 1.2 4.9-7.81z"
              />
              <path
                d="M47 20v2a2 2 0 0 1-2 2h-4.2a10.048 10.048 0 0 0 .2-2v-4h4a2.006 2.006 0 0 1 2 2zM23.2 24H19a2 2 0 0 1-2-2v-2a2.006 2.006 0 0 1 2-2h4v4a10.048 10.048 0 0 0 .2 2z"
                style={{ fill: '#eac2b9' }}
              />
              <path
                d="M42 15v7a10 10 0 0 1-10 10 10 10 0 0 1-10-10v-9s2.222.143 6-3c0 0 4 5 14 5z"
                style={{ fill: '#ffddd4' }}
              />
              <path
                style={{ fill: '#343544' }}
                d="m48 47-4 2 3 3-6 11h-6l1.68-4.88 7.22-20.93 7.61 3.4L48 47zM53.75 52v11h-1.5V52a.75.75 0 0 1 1.5 0z"
              />
              <path d="m20.11 37.21-.01-.02M20.11 37.21l-.01-.02" />
              <path
                d="M11.75 52v11h-1.5V52a.75.75 0 0 1 1.5 0z"
                style={{ fill: '#343544' }}
              />
            </g>
          </svg>
        </div>
        {/* Menu Items */}
        {isMenuVisible && (
          <div
            ref={menuRef}
            className="absolute mt-64 right-4 bg-white border border-gray-300 w-64 shadow-lg text-gray-800"
          >
            <div className="p-2">
              <div className="flex items-center justify-center mb-8 mt-2">
                <div className="w-1/4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-10 -5 84 84"
                    className="w-10 h-10 bg-gray-100 rounded-full"
                  ></svg>
                </div>
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
                    onClick={() => signOut()}
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
