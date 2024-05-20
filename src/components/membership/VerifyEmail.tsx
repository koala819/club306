'use client'

import { Button, Image, Spinner } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { useSearchParams } from 'next/navigation'

import { ThankYouData } from '@/src/types/models'

import { getTokenConfirmMail } from '@/src/lib/token/utils'

export default function VerifyEmail() {
  const [storedPersonalInfo, setStoredPersonalInfo] = useState<
    ThankYouData | null | false
  >()
  const [verifToken, setVerifToken] = useState<boolean>(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    async function fetchData() {
      const token = searchParams.get('token')
      if (token) {
        const data = await getTokenConfirmMail(token)
        setStoredPersonalInfo(data)
        setVerifToken(false)
      }
    }
    fetchData()
  }, [])

  async function sendWelcomeMail(firstName: string, mail: string) {
    const data = {
      first_name: firstName,
      mail: mail,
      from: 'newMember',
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    }

    await fetch(`${process.env.CLIENT_URL}/api/mail`, options).then(
      (response: Response) => {
        if (response.status === 200) {
          toast.success('Bienvenue au Club306')
        } else {
          console.error('Send mail with ERROR ', response)
        }
      },
    )
  }

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
          {verifToken ? (
            <>
              <h2 className="text-2xl font-semibold text-center mb-16">
                Vérification de votre e-mail
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
          ) : (
            <section className="px-4">
              <h2 className="text-2xl font-semibold text-center mb-16">
                Bienvenue dans Notre Communauté !
              </h2>
              <text className="mt-2 text-base text-gray-600 space-y-4 text-left">
                <p>Nous sommes ravis de vous accueillir !</p>
                <p>
                  Vous avez franchi avec succès l'étape de vérification par
                  e-mail. Plongez dans l'expérience complète et explorez tous
                  les avantages qui vous attendent.
                </p>
                <p>
                  Commencez votre voyage avec nous en vous connectant dès à
                  présent.
                </p>
                <div className="flex items-center justify-center">
                  <Button
                    radius="none"
                    color="primary"
                    href="/login"
                    onClick={() => {
                      if (typeof storedPersonalInfo !== 'boolean') {
                        sendWelcomeMail(
                          storedPersonalInfo?.last_name +
                            ' ' +
                            storedPersonalInfo?.first_name,
                          storedPersonalInfo?.email || '',
                        )
                      }
                    }}
                  >
                    Accéder à mon Compte
                  </Button>
                </div>
              </text>
            </section>
          )}
        </aside>
      </div>
    </div>
  )
}
