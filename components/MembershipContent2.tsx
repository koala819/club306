import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useState, useEffect } from 'react';

const MembershipContent2 = function (nextStep: any) {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    const storedData = localStorage.getItem('mySession');

    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);
  function finish() {
    nextStep.onClick(3)
  }

  return (
    <section className='text-gray-600 body-font overflow-hidden mt-8'>
      <div className='min-h-screen flex items-stretch text-white '>
        <div className='lg:flex w-1/2 hidden bg-green-600 bg-no-repeat bg-cover relative items-center'
             style={{ backgroundImage: `url(https://images.unsplash.com/photo-1568106575207-0fe3ec317559?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80)` }}>
          <div className='absolute bg-black opacity-60 inset-0 z-0'></div>
          <div className='w-full px-24 z-10'>
            <h1 className='text-5xl font-bold text-left tracking-wide'>Club 306</h1>
            <p className='text-3xl my-4'>Rejoins nous dans l&apos;aventure Peugeot 306</p>
          </div>
        </div>
        <div className='lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-gray-800'>
          <div className='w-full z-20'>
            <div className='container px-5 mx-auto'>
              <div className='flex flex-col text-center w-full mb-20'>
                <h1 className='sm:text-4xl text-3xl font-medium title-font mb-2 text-white'>
                  Tarif
                </h1>
                <p className='mt-4'>Bonjour {data?.first_name}&nbsp;{data?.last_name}, pour continuer de l&#39;aventure avec l&#39;association
                  Club 306, il est indispensable d&#39;y hadhérer ^_^</p>
              </div>
              <div className='flex justify-center -m-4'>
                <div className='p-4 w-full'>
                  <div className='h-full p-6 rounded-lg border-2 border-blue-500 flex flex-col relative overflow-hidden'>
                    <span className='bg-blue-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl'>
                      POPULAIRE
                    </span>
                    <h2 className='text-5xl font-bold text-left tracking-wide text-center'>CLUB 306</h2>
                    <h1
                      className='text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-200'>
                      <span>20 € </span>
                      <span className='text-lg ml-1 font-normal text-white'>/an
                      </span>
                    </h1>

                    <p className='flex items-center text-white mb-2'>
                      <span
                        className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0'>
                        <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2.5'
                             className='w-3 h-3' viewBox='0 0 24 24'>
                          <path d='M20 6L9 17l-5-5'></path>
                        </svg>
                      </span>
                      Pas de reconduction tacite
                    </p>

                    <p className='flex items-center text-white mb-2'>
                      <span
                        className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0'>
                        <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2.5'
                             className='w-3 h-3' viewBox='0 0 24 24'>
                          <path d='M20 6L9 17l-5-5'></path>
                        </svg>
                      </span>Profiter de nos offres commerciales exclusives
                    </p>

                    <p className='flex items-center text-white mb-2'>
                      <span
                        className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0'>
                        <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2.5'
                             className='w-3 h-3' viewBox='0 0 24 24'>
                          <path d='M20 6L9 17l-5-5'></path>
                        </svg>
                      </span>Rejoindre une communauté sympa et bienveillante
                    </p>

                    <p className='flex items-center text-white mb-6'>
                      <span
                        className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0'>
                        <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2.5'
                             className='w-3 h-3' viewBox='0 0 24 24'>
                          <path d='M20 6L9 17l-5-5'></path>
                        </svg>
                      </span>Etre averti des prochains rassos
                    </p>

                    <PayPalScriptProvider
                      options={{ 'client-id': 'test', currency: 'EUR' }}>
                      <PayPalButtons
                        createOrder={(data, actions) => {
                          return actions.order.create({
                            purchase_units: [
                              {
                                amount: {
                                  value: "20.00",
                                  currency_code: 'EUR'
                                },
                              },
                            ],
                          });
                        }}
                        onCancel={data => console.log('commande annulée', data)}
                        onApprove={async (data, actions) => {
                          return actions.order?.capture()
                            .then( () => {
                            /*const name = details.payer.name?.given_name;*/
                              finish();
                          });
                        }}
                        style={{ layout: 'vertical', color: 'blue' }} />
                    </PayPalScriptProvider>
                    <p className='text-xs text-white mt-3'>
                      Rejoins nous dans l&apos;aventure Peugeot 306
                    </p>
                  </div>
                </div>


              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
export default MembershipContent2
