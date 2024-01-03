'use client';
import { useSession } from 'next-auth/react';
import { useEffect, useMemo, useState } from 'react';
import { signOut } from 'next-auth/react';
import { Button } from '@nextui-org/react';
import { getMemberForCotisation } from '@/lib/cpanel/membershipMember';
import { CheckoutHelloAsso, HelloAssoMember } from '@/types/models';
import toast from 'react-hot-toast';
import connect from '@/lib/helloAsso/connect';
import moment from 'moment';
import { getCountryAlpha3Code } from '@/lib/getCountryAlpha3Code';

const Paiement = () => {
  const { data: dataSession } = useSession();
  const [member, setMember] = useState<HelloAssoMember>();

  const session = useMemo(() => {
    return dataSession !== undefined;
  }, [dataSession]);

  useEffect(() => {
    async function checkMembership() {
      if (dataSession?.user?.email) {
        const response = await getMemberForCotisation(dataSession?.user?.email);
        if (response.status === 200) {
          const memberInfo = await response.json();
          setMember(() => memberInfo);
        } else {
          toast.error('Une erreur est survenue');
        }
      }
    }

    checkMembership();
  }, [dataSession]);

  function handleCheckout() {
    const newYear = new Date().getFullYear() + 1;

    const clientUrl =
      process.env.CLIENT_URL === 'http://localhost:3000'
        ? 'https://localhost:3000'
        : process.env.CLIENT_URL;

    const requestData: CheckoutHelloAsso = {
      // totalAmount: 50,
      totalAmount: 2000,
      // initialAmount: 50,
      initialAmount: 2000,
      itemName: `Renouvellement Adhesion ${newYear} Club 306`,
      backUrl: `${clientUrl}/cpanel/`,
      errorUrl: `${clientUrl}/error/`,
      returnUrl: `${clientUrl}/cpanel/renewMembership/`,
      containsDonation: true,
      payer: {
        firstName: `${member?.first_name}`,
        lastName: `${member?.last_name}`,
        email: `${member?.email}`,
        dateOfBirth: `${moment(member?.birth_date).format('YYYY-MM-DD')}`,
        address: `${member?.address}`,
        city: `${member?.town}`,
        zipCode: `${member?.zip_code}`,
        country: `${getCountryAlpha3Code(member?.phone)}`,
      },
      metadata: {
        userId: `${member?.id}`,
      },
    };

    connect({
      requestData,
      url: 'https://api.helloasso.com/v5/organizations/club-306-france/checkout-intents',
      method: 'POST',
    })
      .then((data) => {
        window.location.href = data.redirectUrl;
      })
      .catch((error) => toast.error(error.message));
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-full px-4">
        <div className="flex flex-wrap bg-white dark:bg-gray-800 text-gray-700 dark:text-white rounded-lg shadow-lg mx-auto max-w-4xl">
          <div
            className="w-full lg:w-1/2 bg-cover"
            style={{
              backgroundImage:
                'url(https://raw.githubusercontent.com/koala819/Unlimitd_front/develop/login_background.jpg)',
            }}
          ></div>
          <div className="w-full p-8 lg:w-1/2 space-y-12">
            <h2 className="text-2xl font-semibold text-center">
              Cher membre du Club 306
            </h2>

            <div className="mt-4 text-base text-gray-600">
              <p>
                Alors que nous entrons dans une nouvelle année pleine
                d'opportunités, nous souhaitons vous inviter à renouveler votre
                adhésion au Club 306. Votre présence enrichit notre passion
                commune pour les Peugeot 306.
              </p>
            </div>
            <div className="mt-2 text-base text-gray-600">
              <p>
                En renouvelant, vous continuez à faire partie de notre aventure,
                partageant conseils et expériences. Votre soutien est essentiel
                pour maintenir notre communauté vivante et dynamique.
              </p>
            </div>
            <div className="mt-2 text-base text-gray-600">
              <p>
                Nous avons prévu des sorties et des rencontres pour cette
                nouvelle année. Votre adhésion nous aide à offrir ces événements
                enrichissants.
              </p>
            </div>
            <div className="mt-2 text-base text-gray-600">
              <p>
                Pour renouveler, cliquer sur le bouton ci-dessous. Pour toute
                aide, notre équipe est à votre disposition.
              </p>
            </div>
            <div className="mt-2 text-base font-medium text-gray-700">
              <p>
                Nous sommes impatients de continuer cette belle aventure avec
                vous en 2024. Renouvelez votre adhésion et restons unis par
                notre passion pour les Peugeot 306.
              </p>
            </div>
            <div className="flex justify-center space-x-4">
              {session && (
                <Button
                  color="primary"
                  size="lg"
                  variant="shadow"
                  onClick={handleCheckout}
                >
                  Renouveller adhésion
                </Button>
              )}
              <Button
                color="danger"
                size="lg"
                variant="shadow"
                onClick={() =>
                  signOut({
                    redirect: true,
                    callbackUrl: `${process.env.CLIENT_URL}/login`,
                  })
                }
              >
                Déconnecter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paiement;
