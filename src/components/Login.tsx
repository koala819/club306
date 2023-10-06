'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { IoMdMail } from 'react-icons/io';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import SignIn from '@/components/SignIn';

export default function Login() {
  const [displaySignIn, setDisplaySignIn] = useState(false);
  const supabase = createClientComponentClient();

  const handleSignInGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        // skipBrowserRedirect: true,
        // redirectTo: `${window.location.origin}/cpanel`,
        redirectTo: 'https://club306.fr',
      },
    });
    console.log('data', data, 'error', error);
  };

  return (
    <>
      {displaySignIn ? (
        // <SignIn setDisplaySignIn={setDisplaySignIn} />
        <SignIn />
      ) : (
        <div className="flex justify-center items-center h-full">
          <div className="flex bg-white dark:bg-gray-800 text-gray-700  dark:text-white rounded-lg shadow-lg overflow-hidden lg:w-1/2">
            <div
              className="hidden lg:block lg:w-1/2 bg-cover"
              style={{
                backgroundImage:
                  'url(https://raw.githubusercontent.com/koala819/Unlimitd_front/develop/login_background.jpg)',
              }}
            ></div>
            <div className="w-full p-8 lg:w-1/2 space-y-12">
              <h2 className="text-2xl font-semibold text-center">
                Connexion à votre compte
              </h2>

              <div className="flex justify-center">
                <button
                  className="flex items-center px-4 py-2 border-blue-600 border text-blue-600 bg-white rounded-lg duration-150 hover:bg-blue-100 active:shadow-lg"
                  onClick={handleSignInGoogle}
                >
                  <FcGoogle size={22} className="mr-2" />
                  Connexion avec Google
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 lg:w-1/4"></span>
                <span className="text-xs text-center uppercase">ou</span>
                <span className="border-b w-1/5 lg:w-1/4"></span>
              </div>
              <div className="flex justify-center">
                <button
                  className="flex items-center px-4 py-2 border-blue-600 border text-blue-600 bg-white rounded-lg duration-150 hover:bg-blue-100 active:shadow-lg"
                  onClick={() => {
                    setDisplaySignIn(true);
                  }}
                >
                  <IoMdMail size={22} className="mr-2" />
                  Connexion avec E-mail
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 md:w-1/4"></span>
                <Link
                  href="/membership"
                  className="text-xs uppercase underline hover:text-red-600 cursor-pointer"
                >
                  ou inscrivez-vous
                </Link>
                <span className="border-b w-1/5 md:w-1/4"></span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
