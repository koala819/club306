'use client'

// src/components/menbreship/PersonalInfos.tsx
import { useState } from 'react'

import { FormEventGuest } from '@/components/FormEventGuest'
import { FormEventMember } from '@/components/FormEventMember'

export default function ToBook() {
  const [activeTab, setActiveTab] = useState('guest')

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <div className="flex items-center">
      <div className="p-8">
        {/* Onglets */}
        <div className="">
          <button onClick={() => handleTabChange('members')}>
            Réservation Membres
          </button>
          <button onClick={() => handleTabChange('guest')}>
            Réservation Invité
          </button>
        </div>
        {/* Formulaire */}
        {activeTab === 'guest' && <FormEventGuest></FormEventGuest>}
        {activeTab === 'members' && <FormEventMember></FormEventMember>}
      </div>

      <div className="text-center">
        <h1>Réserver ma place a un événement</h1>
        <p>
          Bienvenue sur la page de réservation d'événement du Club 306,
          l'endroit où chaque passionné de la route peut réserver sa place pour
          les moments inoubliables à venir ! Si vous êtes déjà membre,
          connectez-vous à votre compte. Pour nos nouveaux amis, choisissez
          l'option "Connexion en tant qu'Invité" pour accéder rapidement à notre
          formulaire de réservation. Remplissez simplement les champs avec votre
          nom, prénom, immatriculation et e-mail. Un processus simple, une
          expérience conviviale – rejoignez-nous sur la route et réservez dès
          maintenant votre place pour l'excitation à venir au Club 306 !
        </p>
      </div>
    </div>
  )
}
