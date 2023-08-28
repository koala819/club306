'use client';
import { useSession } from 'next-auth/react';

export default function Top() {
  const { data: session, status } = useSession();

  return (
    <nav className="bg-blue-500 p-4 flex">
      {/* BURGER MENU */}
      <div className="md:hidden bg-gray-800 text-white p-4 w-1/4 flex items-center justify-center">
        <p>MB</p>
      </div>
      <div className="flex items-center justify-center md:justify-center w-full">
        <h1 className="text-white text-xl font-semibold">
          ADMINISTRATION CLUB 306
        </h1>
      </div>
      <div className="hidden md:flex items-center space-x-4 md:w-1/4 justify-end">
        <span className="text-white">{session?.user?.name}</span>
      </div>
    </nav>
  );
}
