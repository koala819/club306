'use client'

import { Button, Input } from '@nextui-org/react'

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
  async function onSubmit() {
    console.log('userId', userId)
    console.log('eventID', eventID)
  }

  return (
    <main className="border-2 border-principal-light bg-white dark:bg-bg-dark px-5 py-7 rounded-lg shadow-lg flex flex-col items-center justify-center space-y-8">
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
    </main>
  )
}
