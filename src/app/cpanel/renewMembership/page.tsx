'use client'

import { Button } from "@heroui/react"
import { useEffect, useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

import { useRouter } from 'next/navigation'

import { confirmMembership } from '@/src/lib/cpanel/membershipMember'
import connect from '@/src/lib/helloAsso/connect'

export default function Page() {
  const [updateMemberShip, setUpdateMemberShip] = useState<boolean>(true)
  const router = useRouter()

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

        const confirmRenew = await confirmMembership(result.metadata.userId)
        confirmRenew ? setUpdateMemberShip(false) : setUpdateMemberShip(true)
      } else {
        console.log('error in fetchData', paymentCode, orderId)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <title>Confirmation de votre adhésion</title>

      <div className="flex flex-col items-center justify-center rounded-lg shadow-lg text-black border-blue-500 border-4 space-y-8 p-2">
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center">
          <div className="w-full">
            <div className="flex bg-white dark:bg-gray-800 text-gray-700 dark:text-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
              <picture
                className="hidden lg:block lg:w-1/2 bg-cover"
                style={{
                  backgroundImage:
                    'url(https://raw.githubusercontent.com/koala819/Unlimitd_front/develop/306.jpg)',
                  backgroundPositionX: 'left -270px',
                }}
              />
              {updateMemberShip ? (
                <section className="w-full lg:w-1/2 py-8">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <h2 className="text-2xl font-semibold text-center mb-16">
                      Mise à jour de votre adhésion
                    </h2>
                    <ClipLoader
                      loading={true}
                      size={120}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                    <p className="pt-16 text-base text-gray-600">
                      Veuillez patienter
                    </p>
                  </div>
                </section>
              ) : (
                <div className="w-full p-8 lg:w-1/2 space-y-12">
                  <h2 className="text-2xl font-semibold text-center">
                    Merci infiniment pour le renouvellement de votre adhésion.
                  </h2>

                  <p className="mt-4 text-base text-gray-600">
                    Votre soutien continu est essentiel à notre succès et nous
                    sommes profondément reconnaissants de votre engagement.
                    Votre confiance en notre cause nous inspire et nous motive à
                    aller de l'avant. Ensemble, nous réaliserons de grandes
                    choses !
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Button
                      color="danger"
                      size="lg"
                      variant="shadow"
                      onClick={() => router.push('/cpanel')}
                    >
                      Fermer
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* )} */}
      </div>
    </div>
  )
}
