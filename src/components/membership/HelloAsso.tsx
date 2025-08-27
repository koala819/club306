'use client'

import { Button } from '@heroui/react'
import { useEffect, useState } from 'react'
import { TiArrowBack } from 'react-icons/ti'

import { CheckoutHelloAsso, PersonalInfo } from '@/src/types/models'

import { getCountryAlpha3Code } from '@/src/lib/getCountryAlpha3Code'
import moment from 'moment'

export const HelloAsso = ({ setStep }: any) => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>()
  const [displayBtnHelloAsso, setDisplayBtnHelloAsso] = useState<boolean>(false)
  const [urlHelloAsso, setUrlHelloAsso] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [memberIdFromSessionStorage, setMemberIdFromSessionStorage] =
    useState<string>('')

  useEffect(() => {
    async function fetchData() {
      const memberIdJSON = sessionStorage.getItem('memberId')
      if (memberIdJSON) {
        const storedMemberId = JSON.parse(memberIdJSON)
        setMemberIdFromSessionStorage(() => storedMemberId)

        // Stocker aussi dans localStorage comme backup
        localStorage.setItem('currentMemberId', storedMemberId)

        return storedMemberId
      }
      return null
    }
    fetchData().then((storedMemberId) => {
      const storedPersonalInfoJSON = localStorage.getItem(
        `personalInfo_${storedMemberId}`,
      )
      if (storedPersonalInfoJSON) {
        setPersonalInfo(() => JSON.parse(storedPersonalInfoJSON))
      }
    })
  }, [])

  useEffect(() => {
    if (!personalInfo) {
      return
    }

    const currentYear = new Date().getFullYear()

    const clientUrl =
      process.env.NEXT_PUBLIC_CLIENT_URL === 'http://localhost:3000'
        ? 'https://localhost:3000'
        : process.env.NEXT_PUBLIC_CLIENT_URL

    const requestData: CheckoutHelloAsso = {
      // totalAmount: 50,
      totalAmount: 2500,
      // initialAmount: 50,
      initialAmount: 2500,
      itemName: `Adhesion ${currentYear} Club 306`,
      backUrl: `${clientUrl}/membership/`,
      errorUrl: `${clientUrl}/error/`,
      returnUrl: `${clientUrl}/memberfinish/?userId=${memberIdFromSessionStorage}`,
      containsDonation: true,
      payer: {
        firstName: `${personalInfo?.first_name}`,
        lastName: `${personalInfo?.last_name}`,
        email: `${personalInfo?.email}`,
        dateOfBirth: `${moment(personalInfo?.birth_date).format('YYYY-MM-DD')}`,
        address: `${personalInfo?.address}`,
        city: `${personalInfo?.town}`,
        zipCode: `${personalInfo?.zip_code}`,
        country: `${getCountryAlpha3Code(personalInfo?.country)}`,
      },
      metadata: {
        userId: `${memberIdFromSessionStorage}`,
      },
    }

    setIsLoading(true)
    setError('')

    fetch('/api/helloasso/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false)

        if (data.redirectUrl) {
          setDisplayBtnHelloAsso(true)
          setUrlHelloAsso(data.redirectUrl)
        } else {
          setDisplayBtnHelloAsso(false)
          setError('Réponse invalide de HelloAsso')
        }
      })
      .catch((error) => {
        setIsLoading(false)
        setDisplayBtnHelloAsso(false)
        setError(`Erreur: ${error.message}`)
      })
  }, [personalInfo])

  const handleGoBack = () => {
    setStep((s: number) => {
      return s - 1
    })
  }

  const avantages = [
    { id: 1, texte: 'Pas de reconduction tacite' },
    { id: 2, texte: 'Profiter de nos offres commerciales exclusives' },
    { id: 3, texte: 'Rejoindre une communauté sympa et bienveillante' },
    { id: 4, texte: 'Etre averti des prochains rassos' },
  ]

  return (
    <>
      <section>
        <div className="flex flex-col">
          <h1 className="font-bold text-[#3B578E]">
            {personalInfo?.first_name}&nbsp;{personalInfo?.last_name},
          </h1>
          <p className="mt-2">
            pour continuer vous devez adhérer à notre association ^_^
          </p>
        </div>

        <div className="flex justify-center w-full h-full mb-4 mt-4">
          <div className="h-full p-6 border-2 border-[#3B578E] flex flex-col relative">
            <span className="bg-[#3B578E] px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl text-gray-100">
              POPULAIRE
            </span>
            <h1 className="text-5xl leading-none flex items-center pb-4 mb-4 border-b border-[#3B578E]">
              <span>25 € </span>
              <span className="text-lg ml-1 font-normal ">/an</span>
            </h1>
            <section className="space-y-8 my-8">
              {avantages.map((avantage) => (
                <p key={avantage.id} className="flex mb-2 w-full">
                  <picture className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 dark:bg-gray-800">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </picture>
                  <span className="-mt-1">{avantage.texte}</span>
                </p>
              ))}
            </section>

            {isLoading && (
              <div className="text-center py-4">
                <p>Initialisation du paiement en cours...</p>
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#3B578E] mx-auto mt-2"></div>
              </div>
            )}

            {error && (
              <div className="text-center py-4 text-red-600">
                <p className="font-semibold">Erreur lors de l'initialisation :</p>
                <p>{error}</p>
                <Button
                  color="primary"
                  radius="none"
                  className="mt-2"
                  onClick={() => window.location.reload()}
                >
                  Réessayer
                </Button>
              </div>
            )}

            {displayBtnHelloAsso && !isLoading && !error && (
              <Button
                color="primary"
                radius="none"
                onClick={() => (window.location.href = `${urlHelloAsso}`)}
              >
                Continuer
              </Button>
            )}

            <p className="text-xs mt-3">
              Rejoins nous dans l&apos;aventure Peugeot 306
            </p>
          </div>
        </div>
      </section>
      <div className="flex w-full justify-between mt-4">
        <Button
          color="danger"
          radius="none"
          startContent={<TiArrowBack />}
          onClick={() => {
            handleGoBack()
          }}
        >
          Précédent
        </Button>
      </div>
    </>
  )
}
