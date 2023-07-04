'use client';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useState, useEffect } from 'react';
import { IoCarSport } from 'react-icons/io5';

export const MembershipContent2 = (nextStep: any) => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    const storedData = localStorage.getItem('mySession');

    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  function finish() {
    nextStep.onClick(3);
  }

  return (
    <div className='flex h-full'>
      {/*LEFT*/}
      <section
        className='w-1/2 hidden lg:flex'
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1568106575207-0fe3ec317559)',
          backgroundSize: '100% 100%',
        }}
      >
        <div className=' text-black flex items-center justify-center bg-white opacity-60 inset-0 z-0 h-full w-full'>
          <div>
            <h1 className='text-5xl tracking-wide'>Club 306</h1>
            <p className='text-3xl my-4'>
              Rejoins nous dans l&apos;aventure Peugeot 306
            </p>
          </div>
        </div>
      </section>

      {/*RIGHT*/}
      <section className='flex items-center justify-center lg:w-1/2 w-full'>
        <div className=' flex-col justify-between'>
          <div className='flex flex-col text-center '>
            <div className='flex justify-center items-center'>
              <p className=''>Bonjour&nbsp;</p>
              <h1 className='font-bold text-[#3B578E]'>
                {data?.first_name}&nbsp;{data?.last_name}
              </h1>
              <p>
                , pour continuer vous devez hadhérer à notre association&nbsp;
              </p>
              <IoCarSport size={42} />
            </div>
          </div>
          <div className='flex justify-center  mb-2 mt-4'>
            <div className='h-full p-6 rounded-lg border-2 border-[#3B578E] flex flex-col relative'>
              <span className='bg-[#3B578E] px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl text-gray-100'>
                POPULAIRE
              </span>
              {/*<h2 className='text-5xl font-bold text-left tracking-wide text-center'>CLUB 306</h2>*/}
              <h1 className='text-5xl leading-none flex items-center pb-4 mb-4 border-b border-[#3B578E]'>
                <span>20 € </span>
                <span className='text-lg ml-1 font-normal '>/an</span>
              </h1>

              <p className='flex items-center  mb-2'>
                <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400  rounded-full flex-shrink-0'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2.5'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Pas de reconduction tacite
              </p>

              <p className='flex items-center  mb-2'>
                <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400  rounded-full flex-shrink-0'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2.5'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Profiter de nos offres commerciales exclusives
              </p>

              <p className='flex items-center  mb-2'>
                <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400  rounded-full flex-shrink-0'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2.5'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                Rejoindre une communauté sympa et bienveillante
              </p>

              <p className='flex items-center  mb-6'>
                <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400  rounded-full flex-shrink-0'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2.5'
                    className='w-3 h-3'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 6L9 17l-5-5'></path>
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
                      finish();
                    });
                  }}
                  style={{ layout: 'vertical', color: 'blue' }}
                />
              </PayPalScriptProvider>
              <p className='text-xs  mt-3 text-center'>
                Rejoins nous dans l&apos;aventure Peugeot 306
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
