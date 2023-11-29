'use client';
import { useEffect, useState } from 'react';
// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { TiArrowBack } from 'react-icons/ti';
import { CheckoutHelloAsso, PersonalInfo } from '@/types/models';

async function initializeCheckoutIntent(
  requestData: CheckoutHelloAsso
): Promise<any> {
  try {
    const token = await getAuthToken(
      process.env.HELLO_ASSO_CLIENT_ID ?? '',
      process.env.HELLO_ASSO_CLIENT_SECRET ?? ''
    );

    const response = await fetch(process.env.HELLO_ASSO_API_URL ?? '', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error during checkout intent initialization:', error);
    throw error;
  }
}

async function getAuthToken(
  clientId: string,
  clientSecret: string
): Promise<string> {
  const tokenUrl = 'https://api.helloasso.com/oauth2/token';
  const response = await fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.access_token;
}

export const HelloAsso = ({ setStep }: any) => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>();

  useEffect(() => {
    const storedPersonalInfoJSON = sessionStorage.getItem('personalInfo');
    if (storedPersonalInfoJSON) {
      const storedPersonalInfo = JSON.parse(storedPersonalInfoJSON);
      setPersonalInfo(() => storedPersonalInfo);
    }
  }, []);

  const handleGoBack = () => {
    setStep((s: number) => {
      return s - 1;
    });
  };

  const handleNext = () => {
    setStep((s: number) => s + 1);
  };
  const currentYear = new Date().getFullYear();

  const requestData: any = {
    totalAmount: 2000,
    initialAmount: 2000,
    itemName: `Adhesion ${currentYear} Club 306`,
    backUrl: 'https://www.partnertest.com/back.php',
    errorUrl: 'https://www.partnertest.com/error.php',
    returnUrl: 'https://www.partnertest.com/return.php',
    containsDonation: true,
    payer: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@test.com',
      dateOfBirth: '1986-07-06',
      address: '23 rue du palmier',
      city: 'Paris',
      zipCode: '75000',
      country: 'FRA',
    },
    metadata: {
      reference: 12345,
      libelle: 'Adhesion Football',
      userId: 98765,
      produits: [
        {
          id: 56,
          count: 1,
        },
        {
          id: 78,
          count: 3,
        },
      ],
    },
    trackingParameter: '101',
  };

  initializeCheckoutIntent(requestData)
    .then((data) => console.log('Checkout Intent Initialized:', data))
    .catch((error) => console.error('Error:', error));
  return (
    <>
      <section className="lg:flex flex-col justify-between">
        <div className="flex flex-col text-center ">
          <div className="flex mt-4 mx-4">
            <p className="">Bonjour&nbsp;</p>
            <h1
              className="font-bol text-[#3B578E]"
              style={{ fontWeight: 'bolder' }}
            >
              {personalInfo?.first_name}&nbsp;{personalInfo?.last_name}
            </h1>
            <p>, pour continuer vous devez hadhérer à notre association ^_^</p>
          </div>
        </div>
        <div className="flex justify-center w-full h-full mb-4 mt-4">
          <div className="h-full p-6 rounded-lg border-2 border-[#3B578E] flex flex-col relative">
            <span className="bg-[#3B578E] px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl text-gray-100">
              POPULAIRE
            </span>
            <h1 className="text-5xl leading-none flex items-center pb-4 mb-4 border-b border-[#3B578E]">
              <span>20 € </span>
              <span className="text-lg ml-1 font-normal ">/an</span>
            </h1>

            <p className="flex items-center  mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400  rounded-full flex-shrink-0 dark:bg-gray-800">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Pas de reconduction tacite
            </p>

            <p className="flex items-center  mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400  rounded-full flex-shrink-0 dark:bg-gray-800">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Profiter de nos offres commerciales exclusives
            </p>

            <p className="flex items-center  mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400  rounded-full flex-shrink-0 dark:bg-gray-800">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Rejoindre une communauté sympa et bienveillante
            </p>

            <p className="flex items-center  mb-6">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 rounded-full flex-shrink-0 dark:bg-gray-800">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Etre averti des prochains rassos
            </p>
            {/* <iframe
              id="haWidget"
              allowTransparency={true}
              scrolling="auto"
              src="https://www.helloasso.com/associations/club-306-france/paiements/abonnement-annuel/widget"
              style={{ width: '100%', height: '750px', border: 'none' }}
              //   style="width: 100%; height: 750px; border: none;"
            ></iframe> */}
            {/* <PayPalScriptProvider
              options={{
                'client-id': process.env.PAYPAL_CLIENT_ID || 'test',
                currency: 'EUR',
              }}
            >
              <PayPalButtons
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: '20.00',
                          currency_code: 'EUR',
                        },
                      },
                    ],
                  });
                }}
                onCancel={(data) => console.log('commande annulée', data)}
                onApprove={async (data, actions) => {
                  return actions.order?.capture().then(() => {
                    handleNext();
                  });
                }}
                style={{ layout: 'vertical', color: 'blue' }}
              />
            </PayPalScriptProvider> */}
            <p className="text-xs  mt-3">
              Rejoins nous dans l&apos;aventure Peugeot 306
            </p>
          </div>
        </div>
      </section>
      <div className="flex  w-full justify-between mt-4">
        <button
          className="flex items-center px-4 py-2 text-white bg-red-600 rounded-lg duration-150 hover:bg-red-500 active:shadow-lg"
          onClick={() => {
            handleGoBack();
          }}
        >
          <TiArrowBack size={22} className="mr-2" />
          Précédent
        </button>
      </div>
    </>
  );
};
