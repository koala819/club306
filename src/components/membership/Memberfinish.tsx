'use client'

import { Image, Spinner } from '@heroui/react'
import { useEffect, useState } from 'react'

import MailConfirm from '@/src/components/membership/MailConfirm'

import connect from '@/src/lib/helloAsso/connect'

export default function Memberfinish() {
  const [confirmMemberId, setConfirmMemberId] = useState<boolean>(false)
  const [userId, setUserId] = useState<string>('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const paymentCode = params.get('code')
    const orderId = params.get('checkoutIntentId')

    async function fetchData() {
      if (paymentCode === 'succeeded' && orderId) {
        const result = await connect({
          url: `https://api.helloasso.com/v5/organizations/club-306-france/checkout-intents/${orderId}`,
          method: 'GET',
        })
        setUserId(result.metadata.userId)
        setConfirmMemberId(true)
      } else {
        console.log('error in fetchData', paymentCode, orderId)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="flex items-center justify-center mt-8 m-12">
      <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 text-gray-700 dark:text-white rounded-lg shadow-lg overflow-hidden mx-auto">
        <aside className="md:w-1/2 flex items-center justify-center">
          <Image
            alt="Peugeot 306 devant musée Aventure Peugeot"
            src="https://raw.githubusercontent.com/koala819/Unlimitd_front/develop/306.jpg"
          />
        </aside>

        <aside className="w-full md:w-1/2 py-8 flex flex-col items-center justify-center space-y-2">
          {confirmMemberId ? (
            <MailConfirm userIdFromlocalStorage={userId} />
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-center mb-16">
                Mise à jour de votre adhésion
              </h2>
              <div className="flex items-center justify-center">
                <Spinner
                  label="Veuillez patienter"
                  color="primary"
                  labelColor="primary"
                  size="lg"
                />
              </div>
            </>
          )}
        </aside>
      </div>
    </div>
  )

  //   return (
  //     <div className="flex flex-col items-center justify-center mt-8">
  //       <div className=" w-1/2">
  //         <div className="flex w-full items-center justify-center">
  //           <div className="w-full">
  //             <div className="flex bg-white dark:bg-gray-800 text-gray-700 dark:text-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
  //               <aside className="md:w-full lg:w-1/2 flex items-center justify-center  bg-blue-500 sm:bg-red-400 md:bg-green-400 lg:bg-yellow-500 xl:bg-orange-500 2xl:border-l-cyan-600">
  //                 <Image
  //                   alt="Peugeot 306 devant musée Aventure Peugeot"
  //                   src="https://raw.githubusercontent.com/koala819/Unlimitd_front/develop/306.jpg"
  //                 />
  //               </aside>

  //               {confirmMemberId ? (
  //                 <MailConfirm userIdFromlocalStorage={userId} />
  //               ) : (
  //                 <aside className="w-full lg:w-1/2 py-8">
  //                   <div className="flex flex-col items-center justify-center space-y-2">
  //                     <h2 className="text-2xl font-semibold text-center mb-16">
  //                       Mise à jour de votre adhésion
  //                     </h2>
  //                     <Spinner
  //                       label="Veuillez patienter"
  //                       color="primary"
  //                       labelColor="primary"
  //                       size="lg"
  //                     />
  //                   </div>
  //                 </aside>
  //               )}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
}
