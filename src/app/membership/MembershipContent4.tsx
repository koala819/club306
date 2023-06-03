'use client';
import { useEffect, useState } from 'react';
import { record } from '../../lib/supabase';
import { useSession } from 'next-auth/react';
import { RxAvatar } from 'react-icons/rx';
import Image from 'next/image';
import Link from 'next/link';
import ClipLoader from 'react-spinners/ClipLoader';
import { sendMail } from '../../lib/sendByMembershipContent';
import { sendWelcomeMail } from '../../lib/sendByMembershipContent';

export const MembershipContent4 = (nextStep: any) => {
  const { data: session } = useSession();
  const [dataFromLocalStorage, setDataFromLocalStorage] = useState<any>(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [googleName, setGoogleName] = useState('');
  const [googleEmail, setGoogleEmail] = useState('');
  const [googlePicture, setGooglePicture] = useState('');

  /*
     Retrieve information from the previously saved 'mySession'
     If member choose a Google account => retrieve the information of it with 'session' from useSession
  */
  useEffect(() => {
    const temp = localStorage.getItem('mySession');
    if (temp) {
      setDataFromLocalStorage(JSON.parse(temp));
    }

    if (session) {
      session.user?.name && setGoogleName(session.user.name);
      session.user?.email && setGoogleEmail(session.user.email);
      session.user?.image && setGooglePicture(session.user.image);
    }
  }, []);

  useEffect(() => {
    session
      ? record(
          dataFromLocalStorage,
          setIsRegistered,
          nextStep,
          session?.user?.email
        )
      : record(dataFromLocalStorage, setIsRegistered, nextStep);
  }, [dataFromLocalStorage]);

  useEffect(() => {
    if (isRegistered) {
      sendMail(dataFromLocalStorage);
    }
  }, [isRegistered]);

  return (
    <div className="flex h-full">
      {/*LEFT*/}
      <section
        className="w-1/2 hidden lg:flex bg-contain"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1568106575207-0fe3ec317559)',
          backgroundSize: '100% 100%',
        }}
      >
        <div className=" text-black flex items-center justify-center bg-white opacity-60 inset-0 z-0 h-full w-full">
          <div>
            <h1 className="text-5xl tracking-wide">Club 306</h1>
            <p className="text-3xl my-4">
              Rejoins nous dans l&apos;aventure Peugeot 306
            </p>
          </div>
        </div>
      </section>

      {/*RIGHT*/}
      <section className="lg:w-1/2 w-full lg:flex flex-col justify-between">
        {!isRegistered && (
          <div className="h-full flex flex-col justify-center items-center">
            <ClipLoader
              loading={true}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <p>Enregistrement des informations dans notre base de données</p>
            <p>Veuillez patienter</p>
          </div>
        )}

        {isRegistered && (
          <div className="h-full flex flex-col justify-center items-center space-y-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font">
              Merci
            </h1>

            {googlePicture ? (
              <Image
                alt="picture user"
                height={100}
                width={100}
                className="rounded-full"
                src={`${googlePicture}`}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            ) : (
              <span className="flex justify-center ">
                <RxAvatar size={100} />
              </span>
            )}
            <div>
              <span className="title-font font-medium">
                {googleName ||
                  dataFromLocalStorage?.last_name +
                    ' ' +
                    dataFromLocalStorage?.first_name}
              </span>
              <span className="ml-4">
                {googleEmail || dataFromLocalStorage?.email}
              </span>
            </div>
            <p>
              pour ta participation à cette grande et belle aventure mécanique
              autour de la merveilleuse 306.
            </p>
            {/* {googleEmail ? (
              <Link href='/'>
                <div className='border rounded-md hover:bg-[#DB2323] bg-[#3B578E] flex justify-center items-center py-2 px-4 '>
                  <button type='submit' className='text-[#F7F9FF] text-xl'>
                    Terminer
                  </button>
                </div>
              </Link>
            ) : ( */}
            <Link href="/login">
              <div className="border rounded-md hover:bg-[#DB2323] bg-[#3B578E] flex justify-center items-center py-2 px-4 ">
                <button
                  onClick={() => sendWelcomeMail(dataFromLocalStorage)}
                  className="text-[#F7F9FF] text-xl"
                >
                  Terminer
                </button>
              </div>
            </Link>
            {/* )} */}
          </div>
        )}
      </section>
    </div>
  );
};
