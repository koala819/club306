'use client';
import ClipLoader from 'react-spinners/ClipLoader';
import { useEffect, useState } from 'react';
import { getMemberId, record } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
// import Link from 'next/link';
import { PersonalInfo, Vehicles } from '@/types/models';
import { generateUniqueToken } from '@/lib/generateUniqueToken';

export default function MailConfirm({
  userIdFromlocalStorage,
}: {
  userIdFromlocalStorage: string;
}) {
  const [recordInDb, setRecordInDb] = useState(false);
  const [lastMbrIdFromDB, setLastMbrIdFromDB] = useState(null);
  const [storedPersonalInfo, setStoredPersonalInfo] = useState<PersonalInfo>();
  const [storedVehicle, setStoredVehicle] = useState<Vehicles>();
  const router = useRouter();
  const tokenForMember = generateUniqueToken();

  // useEffect(() => {}, []);
  // console.log('userIdFromlocalStorage', userIdFromlocalStorage);

  useEffect(() => {
    const fetchData = async () => {
      const memberIdFromDB = await getMemberId();
      memberIdFromDB?.data !== null &&
        setLastMbrIdFromDB(() => memberIdFromDB?.data[0].id);

      const storedPersonalInfoJSON = localStorage.getItem(
        `personalInfo_${userIdFromlocalStorage}`
      );
      if (storedPersonalInfoJSON) {
        setStoredPersonalInfo(() => JSON.parse(storedPersonalInfoJSON));
      }

      const storedVehicleJSON = localStorage.getItem(
        `vehicles_${userIdFromlocalStorage}`
      );
      if (storedVehicleJSON) {
        setStoredVehicle(() => JSON.parse(storedVehicleJSON));
      }
    };

    fetchData();
  }, []);

  // console.log('personalInfo in ThankYOU', storedPersonalInfo);
  // console.log('vehicles in ThankYOU', storedVehicle);
  // console.log('lastMbrIdFromDB in ThankYOU', lastMbrIdFromDB);

  useEffect(() => {
    const fetchData = async () => {
      // console.log('in fetchData', lastMbrIdFromDB);
      if (lastMbrIdFromDB !== null) {
        const response = await record(
          storedPersonalInfo,
          storedVehicle,
          // storedPersonalInfo?.email,
          lastMbrIdFromDB + 1,
          tokenForMember
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
          sendConfirmationMail(
            storedPersonalInfo?.first_name || '',
            storedPersonalInfo?.last_name || '',
            storedPersonalInfo?.email || '',
            tokenForMember
          );
          setRecordInDb(true);
        }
      }
    };

    fetchData();
  }, [lastMbrIdFromDB]);

  async function sendConfirmationMail(
    firstName: string,
    lastName: string,
    mail: string,
    token: string
  ) {
    const data = {
      first_name: firstName,
      last_name: lastName,
      mail: mail,
      token: token,
      from: 'mailConfirm',
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
    <div className="flex flex-col items-center justify-center mt-8">
      <title>Bienvenue au Club 306</title>

      <div className="flex flex-col items-center justify-center rounded-lg shadow-lg text-black border-blue-500 border-4 space-y-8 p-2">
        {!recordInDb ? (
          <div className="flex flex-col items-center justify-center space-y-2">
            <ClipLoader
              loading={true}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <p>Enregistrement des informations dans notre base de données</p>
            <p>Veuillez patienter</p>
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center space-y-2 bg-white p-4 rounded-lg shadow-lg">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 ">
                Il ne vous reste plus qu'à confirmer votre e-mail !
              </h1>
              <p>Merci de votre adhésion au Club 306</p>
              <p>Vous avez reçu un e-mail de confirmation à l'adresse :</p>
              <p>{storedPersonalInfo?.email}</p>
              <h1>
                Cette étape est obligatoire pour valider votre inscription !
              </h1>
              {/* <Link
                href="/cpanel"
                // onClick={() =>
                //   sendWelcomeMail(
                //     storedPersonalInfo?.last_name +
                //       ' ' +
                //       storedPersonalInfo?.first_name,
                //     session.user.email
                //   )
                // }
              >
                <button
                  className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg duration-150 hover:bg-blue-500 active:shadow-lg"
                  type="submit"
                >
                  Terminer
                </button>
              </Link> */}
            </div>
            <p>Vérifiez vos spams</p>
          </>
        )}
      </div>
    </div>
  );
}
