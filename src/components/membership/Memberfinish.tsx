'use client'

import { Image, Spinner } from '@heroui/react'
import { useEffect, useState } from 'react'

import MailConfirm from '@/src/components/membership/MailConfirm'

import connect from '@/src/lib/helloAsso/connect'

export default function Memberfinish() {
  const [confirmMemberId, setConfirmMemberId] = useState<boolean>(false)
  const [userId, setUserId] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(true)

        useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const paymentCode = params.get('code')
    const checkoutIntentId = params.get('checkoutIntentId')
    const orderId = params.get('orderId')

        async function fetchData() {

      if (paymentCode === 'succeeded') {
        // Essayer de récupérer l'userId depuis plusieurs sources
        let userId = null

        // 1. Depuis l'URL (paramètre userId)
        const urlUserId = params.get('userId')
        if (urlUserId) {
          userId = urlUserId
        }

        // 2. Depuis sessionStorage
        if (!userId) {
          const memberIdJSON = sessionStorage.getItem('memberId')
          if (memberIdJSON) {
            userId = JSON.parse(memberIdJSON)
          }
        }

        // 3. Depuis localStorage (backup)
        if (!userId) {
          const localMemberId = localStorage.getItem('currentMemberId')
          if (localMemberId) {
            userId = localMemberId
          }
        }

        if (userId) {
          setUserId(userId)
          setConfirmMemberId(true)
          setIsLoading(false)
          return
        }

        // Fallback : essayer l'API si pas de sessionStorage
        if (checkoutIntentId) {
          try {
            const result = await connect({
              url: `https://api.helloasso.com/v5/organizations/club-306-france/checkout-intents/${checkoutIntentId}`,
              method: 'GET',
            })


            if (result && result.metadata && result.metadata.userId) {
              setUserId(result.metadata.userId)
              setConfirmMemberId(true)
            } else {
              setError('Impossible de récupérer l\'identifiant utilisateur depuis l\'API')
            }
          } catch (error) {
            console.error('Erreur lors de la récupération des données:', error)
            setError('Erreur lors de la récupération des données depuis l\'API HelloAsso')
          }
        } else {
          setError('Paramètres de paiement manquants')
        }
      } else {
        setError('Paramètres de paiement manquants')
      }
      setIsLoading(false)
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
            <>
              <MailConfirm userIdFromlocalStorage={userId} />
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-blue-800 dark:text-blue-200 text-center">
                  ✅ Paiement reçu ! Votre adhésion sera validée dans les prochaines minutes.
                  <br />
                  <span className="text-xs text-blue-600 dark:text-blue-300">
                    (Validation sécurisée via webhook HelloAsso)
                  </span>
                </p>
              </div>
            </>
          ) : error ? (
            <>
              <h2 className="text-2xl font-semibold text-center mb-8 text-red-600">
                Erreur
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
                {error}
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Réessayer
              </button>
            </>
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
