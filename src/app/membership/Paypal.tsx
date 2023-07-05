import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { TiArrowBack } from 'react-icons/ti';
import { PersonalInfo } from '../models';
// import { Button, ConfigProvider } from 'antd';
// import { LeftCircleFilled } from '@ant-design/icons';

export const Paypal = ({
  setStep,
  personalInfo,
}: {
  setStep: any;
  personalInfo: PersonalInfo;
}) => {
  const handleGoBack = () => {
    setStep((s: number) => {
      return s - 1;
    });
  };

  const handleNext = () => {
    setStep((s: number) => s + 1);
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
              {personalInfo.first_name}&nbsp;{personalInfo.last_name}
            </h1>
            <p>, pour continuer vous devez hadhérer à notre association ^_^</p>
          </div>
        </div>
        <div className="flex justify-center w-full h-full mb-4 mt-4">
          <div className="h-full p-6 rounded-lg border-2 border-[#3B578E] flex flex-col relative">
            <span className="bg-[#3B578E] px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl text-gray-100">
              POPULAIRE
            </span>
            {/*<h2 className='text-5xl font-bold text-left tracking-wide text-center'>CLUB 306</h2>*/}
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

            <PayPalScriptProvider
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
                    /*const name = details.payer.name?.given_name;*/
                    handleNext();
                  });
                }}
                style={{ layout: 'vertical', color: 'blue' }}
              />
            </PayPalScriptProvider>
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
