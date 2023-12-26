'use client';
import ClipLoader from 'react-spinners/ClipLoader';
import { useEffect, useState } from 'react';
import { getMemberId, record } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { PersonalInfo, Vehicles } from '@/types/models';
import { generateUniqueToken } from '@/lib/generateUniqueToken';
import { toast } from 'react-hot-toast';

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

  useEffect(() => {
    const fetchData = async () => {
      if (lastMbrIdFromDB !== null) {
        const response = await record(
          storedPersonalInfo,
          storedVehicle,
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
          // console.log('YES RECORD IN DB with ', storedPersonalInfo);
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
        if (response.status === 200) {
          toast.success('Veuillez consulter votre boite mail');
        } else {
          console.error('Send mail with ERROR ', response);
        }
      }
    );
  }

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <title>Bienvenue au Club 306</title>

      {!recordInDb ? (
        <div className="flex flex-col items-center justify-center space-y-2 p-4">
          <h2 className="text-2xl font-semibold text-center mb-16">
            Enregistrement des informations dans notre base de données
          </h2>
          <ClipLoader
            loading={true}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <p className="pt-16 text-base text-gray-600">Veuillez patienter</p>
        </div>
      ) : (
        <section className="p-8">
          <h2 className="text-2xl font-semibold text-center mb-16">
            Il ne vous reste plus qu'à confirmer votre e-mail !
          </h2>
          <text className="mt-2 text-base text-gray-600 space-y-4 text-left">
            <p>Merci de votre adhésion au Club 306</p>
            <p>Vous avez reçu un e-mail de confirmation à l'adresse :</p>
            <p>{storedPersonalInfo?.email}</p>
            <p className="underline font-bold">
              Cette étape est obligatoire pour valider votre inscription !
            </p>
          </text>
          <p className="text-red-500 font-extrabold text-center mt-4">
            Vérifiez vos spams
          </p>
        </section>
      )}
    </div>
  );
}
