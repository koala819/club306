'use client';
import ClipLoader from 'react-spinners/ClipLoader';
import { useEffect, useState } from 'react';
import { getMemberId, record } from '@/lib/supabase';
import { RxAvatar } from 'react-icons/rx';
import { GiFinishLine } from 'react-icons/gi';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { PersonalInfo, Vehicles } from '@/types/models';

export default function ThankYou({ session }: any) {
  const [recordInDb, setRecordInDb] = useState(false);
  const [lastMemberId, setLastMemberId] = useState(null);
  const [storedPersonalInfo, setStoredPersonalInfo] = useState<PersonalInfo>();
  const [storedVehicle, setStoredVehicle] = useState<Vehicles>();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const resultMemberId = await getMemberId();
      resultMemberId?.data !== null &&
        setLastMemberId(() => resultMemberId?.data[0].id);

      const storedPersonalInfoJSON = sessionStorage.getItem('personalInfo');
      if (storedPersonalInfoJSON) {
        setStoredPersonalInfo(() => JSON.parse(storedPersonalInfoJSON));
      }

      const storedVehicleJSON = sessionStorage.getItem('vehicles');
      if (storedVehicleJSON) {
        setStoredVehicle(() => JSON.parse(storedVehicleJSON));
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (lastMemberId !== null) {
        const response = await record(
          storedPersonalInfo,
          storedVehicle,
          session.user.email,
          lastMemberId + 1
        );
        const data = await response.json();
        if (data.status !== 200) {
          alert(
            'Erreur pour vous enregistrer, merci de contacter le staff svp  et communiquer cette erreur : \n\n\n' +
              data.message +
              "\n\n Sans le message de l'erreur, il nous sera difficile de vous aider !!!"
          );
          router.push('/contact');
        } else {
          console.log('YES RECORD IN DB');
          setRecordInDb(true);
        }
      }
    };

    fetchData();
  }, [lastMemberId]);

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
        console.log('what is the response', response);
        response.status === 200
          ? console.log('Send mail with SUCCESS :)')
          : console.log('Send mail with ERROR :(');
      }
    );
  }

  return (
    <div className="h-full flex justify-center items-center">
      <title>Inscription</title>
      <div className="w-full">
        <div className="flex bg-white dark:bg-gray-800 text-gray-700 dark:text-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          {/* LEFT */}
          <div
            className="relative hidden lg:block lg:w-1/2 bg-center bg-cover"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1568106575207-0fe3ec317559)',
            }}
          >
            <div className="flex h-full w-full">
              <div className="flex items-end w-screen lg:p-4">
                <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                  Club 306
                </h2>

                <p className="mt-4 leading-relaxed text-white/90">
                  Rejoins nous dans l&apos;aventure Peugeot 306.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <section>
            {!recordInDb && (
              <div className="flex flex-col justify-center items-center space-y-2 bg-white dark:bg-gray-800 dark:text-white p-8 rounded-lg shadow-lg">
                <ClipLoader
                  loading={true}
                  size={50}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
                <p>
                  Enregistrement des informations dans notre base de données
                </p>
                <p>Veuillez patienter</p>
              </div>
            )}

            {recordInDb && (
              <div className="flex flex-col justify-center items-center space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <span className="flex justify-center ">
                  <RxAvatar size={100} />
                </span>

                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 ">
                  Merci{' '}
                  {storedPersonalInfo?.last_name +
                    ' ' +
                    storedPersonalInfo?.first_name}
                </h1>

                <p>
                  pour ta participation à cette grande et belle aventure
                  mécanique autour de la merveilleuse 306.
                </p>
                <Link
                  href="/cpanel"
                  onClick={() =>
                    sendWelcomeMail(
                      storedPersonalInfo?.last_name +
                        ' ' +
                        storedPersonalInfo?.first_name,
                      session.user.email
                    )
                  }
                >
                  <button
                    className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg duration-150 hover:bg-blue-500 active:shadow-lg"
                    type="submit"
                  >
                    <GiFinishLine className="mr-2" size={26} />
                    Terminer
                  </button>
                </Link>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

type MailPwd = {
  email: string;
  pwd: string;
};
