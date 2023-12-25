'use client';
import { signOut } from 'next-auth/react';
import { Button } from '@nextui-org/react';

const Paiement = () => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center">
      <div className="w-full">
        <div className="flex bg-white dark:bg-gray-800 text-gray-700 dark:text-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div
            className="hidden lg:block lg:w-1/2 bg-cover"
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
              <Button color="primary" size="lg" variant="shadow">
                Renouveller adhésion
              </Button>
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
