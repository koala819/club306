'use client'

import { Button } from '@heroui/react'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'
import { useEffect, useMemo, useState } from 'react'
import toast from 'react-hot-toast'

import { CheckoutHelloAsso, HelloAssoMember } from '@/src/types/models'

import { getMemberForCotisation } from '@/src/lib/cpanel/membershipMember'
import { getCountryAlpha3Code } from '@/src/lib/getCountryAlpha3Code'
import connect from '@/src/lib/helloAsso/connect'
import moment from 'moment'

const Paiement = () => {
  const { data: dataSession } = useSession()
  const [member, setMember] = useState<HelloAssoMember>()

  const currentYear = new Date().getFullYear()

  const session = useMemo(() => {
    return dataSession !== undefined
  }, [dataSession])

  useEffect(() => {
    async function checkMembership() {
      if (dataSession?.user?.email) {
        const response = await getMemberForCotisation(dataSession?.user?.email)
        if (response.status === 200) {
          const memberInfo = await response.json()
          // console.log('memberInfo', memberInfo)
          setMember(() => memberInfo)
        } else {
          toast.error('Une erreur est survenue')
        }
      }
    }

    checkMembership()
  }, [dataSession])

  function handleCheckout() {
    const missingFields: string[] = []

    if (!member?.first_name) missingFields.push('first_name')
    if (!member?.last_name) missingFields.push('last_name')
    if (!member?.email) missingFields.push('email')
    if (!member?.birth_date || !moment(member.birth_date).isValid())
      missingFields.push('birth_date')
    if (!member?.address) missingFields.push('address')
    if (!member?.town) missingFields.push('town')
    if (!member?.zip_code) missingFields.push('zip_code')
    if (!member?.phone || getCountryAlpha3Code(member.phone.slice(0, 2)) === '')
      missingFields.push('country (via phone)')

    if (missingFields.length > 0) {
      toast.error(
        `Valeur${missingFields.length > 1 ? 's' : ''} "${missingFields.join(
          '", "',
        )}" manquante${
          missingFields.length > 1 ? 's' : ''
        } – merci de prévenir l'association pour corriger cela.`,
      )

      // Log (en dev seulement)
      if (process.env.NODE_ENV === 'development') {
        console.warn('Champs manquants :', missingFields)
      }

      toast.error(
        `Valeur${missingFields.length > 1 ? 's' : ''} "${missingFields.join(
          '", "',
        )}" manquante${
          missingFields.length > 1 ? 's' : ''
        } – merci de prévenir l'association pour corriger cela.`,
      )
      return
    }

    const clientUrl =
      process.env.NEXT_PUBLIC_CLIENT_URL === 'http://localhost:3000'
        ? 'https://localhost:3000'
        : process.env.NEXT_PUBLIC_CLIENT_URL

    const requestData: CheckoutHelloAsso = {
      // totalAmount: 50,
      totalAmount: 2000,
      // initialAmount: 50,
      initialAmount: 2000,
      itemName: `Renouvellement Adhesion ${currentYear} Club 306`,
      backUrl: `${clientUrl}/cpanel/`,
      errorUrl: `${clientUrl}/error/`,
      returnUrl: `${clientUrl}/cpanel/renewMembership/`,
      containsDonation: true,
      payer: {
        firstName: `${member?.first_name}`,
        lastName: `${member?.last_name}`,
        email: `${member?.email}`,
        dateOfBirth: `${moment(member?.birth_date).format('YYYY-MM-DD')}`,
        address: `${member?.address}`,
        city: `${member?.town}`,
        zipCode: `${member?.zip_code}`,
        country: `${getCountryAlpha3Code(member?.phone.slice(0, 2))}`,
      },
      metadata: {
        userId: `${member?.id}`,
      },
    }

    const popup = window.open('', '_blank')

    connect({
      requestData,
      url: 'https://api.helloasso.com/v5/organizations/club-306-france/checkout-intents',
      method: 'POST',
    })
      .then((data) => {
        if (data.redirectUrl && popup) {
          popup.location.href = data.redirectUrl
          // window.location.href = data.redirectUrl
        } else if (data.errors && data.errors.length > 0) {
          // Afficher le premier message d'erreur renvoyé par l'API
          toast.error(data.errors[0].message || 'Erreur lors du paiement')
          if (popup) popup.close()
        } // En cas de réponse inattendue
        else {
          toast.error(
            "Une erreur s'est produite lors de l'initialisation du paiement",
          )
          if (popup) popup.close()
        }
      })
      .catch((error) => toast.error(error.message))
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-full px-4">
        <div className="flex flex-wrap bg-white dark:bg-gray-800 text-gray-700 dark:text-white rounded-lg shadow-lg mx-auto max-w-4xl">
          <div
            className="w-full lg:w-1/2 bg-cover"
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
                vous en {currentYear}. Renouvelez votre adhésion et restons unis
                par notre passion pour les Peugeot 306.
              </p>
            </div>
            <div className="flex justify-center space-x-4">
              {session && (
                <Button color="primary" variant="flat" onPress={handleCheckout}>
                  Renouveller adhésion
                </Button>
              )}
              <Button
                color="danger"
                variant="solid"
                onClick={() =>
                  signOut({
                    redirect: true,
                    callbackUrl: `${process.env.NEXT_PUBLIC_CLIENT_URL}/login`,
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
  )
}

export default Paiement
