'use client'

import { Button } from "@heroui/react"
import { useEffect, useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

import { useRouter } from 'next/navigation'

import { confirmMembership } from '@/src/lib/cpanel/membershipMember'

export default function Page() {
  const [updateMemberShip, setUpdateMemberShip] = useState<boolean>(true)
  const router = useRouter()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const paymentCode = params.get('code')
    const orderId = params.get('checkoutIntentId')

    async function fetchData() {
      if (paymentCode === 'succeeded' && orderId) {
        try {
          console.log('[RENEW_MEMBERSHIP] Fetching checkout intent from API:', `/api/helloasso/checkout-intent/${orderId}`)
          console.log('[RENEW_MEMBERSHIP] Version: 2.0 - Using API route instead of direct connect()')
          
          const response = await fetch(`/api/helloasso/checkout-intent/${orderId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            cache: 'no-store',
          })

          console.log('API response status:', response.status, response.ok)

          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}))
            console.error('API response error:', errorData)
            throw new Error(`Failed to fetch checkout intent: ${response.status}`)
          }

          const result = await response.json()
          console.log('API response data:', {
            hasMetadata: !!result?.metadata,
            hasUserId: !!result?.metadata?.userId,
            metadata: result?.metadata
          })

          if (result.metadata && result.metadata.userId) {
            console.log('Confirming membership for userId:', result.metadata.userId)
            const confirmRenew = await confirmMembership(result.metadata.userId)
            console.log('Membership confirmation result:', confirmRenew)
            confirmRenew ? setUpdateMemberShip(false) : setUpdateMemberShip(true)
          } else {
            console.error('No userId found in checkout intent metadata', result)
            setUpdateMemberShip(true)
          }
        } catch (error) {
          console.error('Error during checkout intent fetch:', error)
          setUpdateMemberShip(true)
        }
      } else {
        console.log('error in fetchData', paymentCode, orderId)
        setUpdateMemberShip(true)
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
