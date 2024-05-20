'use client'

import { Button, Input, Spinner } from '@nextui-org/react'
import { useState } from 'react'
import toast from 'react-hot-toast'

import {
  addMemberToEvent,
  returnInfosEventFromId,
  returnInfosMemberFromId,
} from '@/src/lib/newSupabase'

export const FormEventConfirm = ({
  userMail,
  userFirstName,
  userLastName,
  userId,
  eventID,
}: {
  userMail: string
  userFirstName: string
  userLastName: string
  userId: string
  eventID: string
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function onSubmit() {
    setIsLoading(true)
    try {
      const memberRegistered = await addMemberToEvent(userId, eventID)

      if (memberRegistered.status === 200) {
        setIsLoading(false)

        sendMail(userId, eventID)
      }
      if (memberRegistered.status === 402) {
        setIsLoading(false)
        toast.error('Vous êtes déjà enregistré à cet évènement')
      }
    } catch (error) {
      console.error('Error adding member to event:', error)
      setIsLoading(false)
      toast.error('Une erreur est survenue. Veuillez réessayer.')
    }
  }

  async function sendMail(userId: string, eventID: string) {
    const memberResponse = await returnInfosMemberFromId(userId)
    const memberResult = await memberResponse.json()

    const memberInfos = memberResult.length > 0 ? memberResult[0] : null
    // console.log('memberInfos', memberInfos)

    const eventResponse = await returnInfosEventFromId(eventID)
    const eventResult = await eventResponse.json()

    const eventInfos = eventResult.length > 0 ? eventResult[0] : null
    // console.log('eventInfos', eventInfos)
    const data = {
      firstName: memberInfos?.first_name,
      lastName: memberInfos?.last_name,
      email: memberInfos?.email,
      event: eventInfos?.description,
      from: 'memberSignUpEvent',
    }
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
    try {
      fetch(`${process.env.CLIENT_URL}/api/mail`, options).then(
        async (response) => {
          if (response.status === 200) {
            console.log('Send mail with SUCCESS :)')
            setIsSubmitted(true)
            toast.success('Votre inscription a été enregistrée avec succès!')
          } else {
            console.log('Email send with ERROR !!!')
            throw new Error('Failed to send mail')
          }
        },
      )
    } catch (error) {
      console.log('ERROR to send the mail\n', error)
      return false
    }
  }

  return (
    <main className="border-2 border-principal-light bg-white dark:bg-bg-dark px-5 py-7 rounded-lg shadow-lg flex flex-col items-center justify-center space-y-8">
      {isLoading ? (
        <div className="flex justify-center">
          <Spinner
            label="Enregistrement de votre inscription ..."
            color="primary"
            labelColor="primary"
            size="lg"
          />
        </div>
      ) : isSubmitted ? (
        <p>
          Notre équipe va revenir prochainement vers vous pour préparer au mieux
          cet évènement avec vous :)
        </p>
      ) : (
        <>
          <h2 className="mb-8">Réservez votre place</h2>

          <Input
            isReadOnly
            type="text"
            label="Nom"
            variant="bordered"
            value={userLastName}
            className="max-w-xs"
          />

          <Input
            isReadOnly
            type="text"
            label="Prénom"
            variant="bordered"
            value={userFirstName}
            className="max-w-xs"
          />

          <Input
            isReadOnly
            type="email"
            label="Email"
            variant="bordered"
            value={userMail}
            className="max-w-xs"
          />

          <Button className="btn-custom" onClick={onSubmit}>
            Confirmez ma participation
          </Button>
        </>
      )}
    </main>
  )
}
