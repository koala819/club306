'use client'

import { Button, Input, Spinner } from '@nextui-org/react'
import { useState } from 'react'
import toast from 'react-hot-toast'

import { addMemberToEvent } from '@/lib/newSupabase'

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
      const xx = await addMemberToEvent(userId, eventID)

      if (xx.status === 200) {
        setIsLoading(false)
        setIsSubmitted(true)
        toast.success('Votre inscription a été enregistrée avec succès!')
      }
      if (xx.status === 402) {
        setIsLoading(false)
        toast.error('Vous êtes déjà enregistré à cet évènement')
      }
    } catch (error) {
      console.error('Error adding member to event:', error)
      setIsLoading(false)
      toast.error('Une erreur est survenue. Veuillez réessayer.')
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
