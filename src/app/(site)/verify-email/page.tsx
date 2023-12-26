'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getTokenConfirmMail } from '@/lib/supabase';
import { useSearchParams } from 'next/navigation';
import { ThankYouData } from '@/types/models';
import toast from 'react-hot-toast';
import ClipLoader from 'react-spinners/ClipLoader';

export default function Page() {
  const [storedPersonalInfo, setStoredPersonalInfo] = useState<
    ThankYouData | null | false
  >();
  const [verifToken, setVerifToken] = useState<boolean>(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    async function fetchData() {
      const token = searchParams.get('token');
      if (token) {
        const data = await getTokenConfirmMail(token);
        setStoredPersonalInfo(data);
        setVerifToken(false);
      }
    }
    fetchData();
  }, []);

  async function sendWelcomeMail(firstName: string, mail: string) {
    const data = {
      first_name: firstName,
      mail: mail,
      from: 'newMember',
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    };

    await fetch(`${process.env.CLIENT_URL}/api/mail`, options).then(
      (response: Response) => {
        if (response.status === 200) {
          toast.success('Bienvenue au Club306');
        } else {
          console.error('Send mail with ERROR ', response);
        }
      }
    );
  }

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <title>E-mail Vérification</title>
      <div className=" w-1/2">
        <div className="flex w-full items-center justify-center">
          <div className="w-full">
            <div className="flex bg-white dark:bg-gray-800 text-gray-700 dark:text-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
              <picture
                className="hidden lg:block lg:w-1/2 bg-cover"
                style={{
                  backgroundImage:
                    'url(https://raw.githubusercontent.com/koala819/Unlimitd_front/develop/306.jpg)',
                  backgroundPositionX: 'left -270px',
                }}
              />
              {verifToken ? (
                <section className="w-full lg:w-1/2 py-8">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <h2 className="text-2xl font-semibold text-center mb-16">
                      Vérification de votre e-mail
                    </h2>
                    <ClipLoader
                      loading={true}
                      size={120}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                    <p className="pt-16 text-base text-gray-600">
                      Veuillez patienter
                    </p>
                  </div>
                </section>
              ) : (
                <section className="p-8 w-1/2">
                  <h2 className="text-2xl font-semibold text-center mb-16">
                    Bienvenue dans Notre Communauté !
                  </h2>
                  <text className="mt-2 text-base text-gray-600 space-y-4 text-left">
                    <p>Nous sommes ravis de vous accueillir !</p>
                    <p>
                      Vous avez franchi avec succès l'étape de vérification par
                      e-mail. Plongez dans l'expérience complète et explorez
                      tous les avantages qui vous attendent.
                    </p>
                    <p>
                      Commencez votre voyage avec nous en vous connectant dès à
                      présent.
                    </p>
                    <Link
                      className="flex items-center justify-center"
                      href="/login"
                      onClick={() => {
                        if (typeof storedPersonalInfo !== 'boolean') {
                          sendWelcomeMail(
                            storedPersonalInfo?.last_name +
                              ' ' +
                              storedPersonalInfo?.first_name,
                            storedPersonalInfo?.email || ''
                          );
                        }
                      }}
                    >
                      <button
                        className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg duration-150 hover:bg-blue-500 active:shadow-lg"
                        type="submit"
                      >
                        Accéder à mon Compte
                      </button>
                    </Link>
                  </text>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
