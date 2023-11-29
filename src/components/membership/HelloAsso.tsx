'use client';
import { useEffect, useState } from 'react';
import { TiArrowBack } from 'react-icons/ti';
import { CheckoutHelloAsso, PersonalInfo } from '@/types/models';
import { initializeCheckoutIntent } from '@/lib/helloAsso';
import moment from 'moment';
import { getCountryAlpha3Code } from '@/lib/getCountryAlpha3Code';

export const HelloAsso = ({ setStep }: any) => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>();
  const [displayBtnHelloAsso, setDisplayBtnHelloAsso] =
    useState<boolean>(false);
  const [urlHelloAsso, setUrlHelloAsso] = useState<string>('');

  useEffect(() => {
    const storedPersonalInfoJSON = sessionStorage.getItem('personalInfo');
    if (storedPersonalInfoJSON) {
      const storedPersonalInfo = JSON.parse(storedPersonalInfoJSON);
      setPersonalInfo(() => storedPersonalInfo);
    }
  }, []);

  useEffect(() => {
    if (!personalInfo) {
      return;
    }
    const currentYear = new Date().getFullYear();
    console.log('personalInfo', personalInfo);

    const requestData: CheckoutHelloAsso = {
      totalAmount: 2000,
      initialAmount: 2000,
      itemName: `Adhesion ${currentYear} Club 306`,
      backUrl: 'https://www.partnertest.com/back.php',
      errorUrl: 'https://www.partnertest.com/error.php',
      returnUrl: 'https://www.partnertest.com/return.php',
      containsDonation: true,
      payer: {
        firstName: `${personalInfo?.first_name}`,
        lastName: `${personalInfo?.last_name}`,
        email: 'john.doe@test.com',
        dateOfBirth: `${moment(personalInfo?.birth_date).format('YYYY-MM-DD')}`,
        address: `${personalInfo?.address}`,
        city: `${personalInfo?.town}`,
        zipCode: `${personalInfo?.zip_code}`,
        country: `${getCountryAlpha3Code(personalInfo?.phone)}`,
      },
    };
    initializeCheckoutIntent(requestData)
      .then((data) => {
        console.log('url :', data.redirectUrl);
        setDisplayBtnHelloAsso(true);
        setUrlHelloAsso(data.redirectUrl);
      })
      .catch((error) => console.error('Error:', error));
  }, [personalInfo]);

  const handleGoBack = () => {
    setStep((s: number) => {
      return s - 1;
    });
  };

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
            {displayBtnHelloAsso && (
              <button
                className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg duration-150 hover:bg-blue-500 active:shadow-lg"
                onClick={() => (window.location.href = `${urlHelloAsso}`)}
              >
                Continuer
              </button>
            )}
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
