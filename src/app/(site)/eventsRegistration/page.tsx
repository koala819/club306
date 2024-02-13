'use client'

// src/components/menbreship/PersonalInfos.tsx
import { useState } from 'react'

import Image from 'next/image'

import { FormEventGuest } from '@/components/FormEventGuest'
import { FormEventMember } from '@/components/FormEventMember'

export default function ToBook() {
  const [activeTab, setActiveTab] = useState('guest')

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    // Container Principal
    <div className="flex items-center justify-center py-20">
      {/* Container Img background */}
      <div className="absolute z-0 w-full h-full">
        <Image
          src="/images/youngtimer-festival.jpg"
          width={1920}
          height={280}
          alt="Huit Peugeot 306 alignées dans un champ"
          className="object-cover w-full blur brightness-50"
        />
      </div>
      {/* Container Form */}
      <div className="w-5/12 my-8 flex justify-center z-10">
        <div className="w-7/12">
          {/* Onglets */}

          <button
            className={`${
              activeTab === 'guest'
                ? 'border-principal-light text-principal-light bg-white h-14 font-bold'
                : 'bg-principal-light text-text-dark border-principal-light h-12 align-bottom'
            } border-2 py-2 text-center w-1/2`}
            onClick={() => handleTabChange('guest')}
          >
            Réservation Invité
          </button>

          <button
            className={`${
              activeTab === 'members'
                ? 'border-principal-light text-principal-light bg-white h-14 font-bold'
                : 'bg-principal-light text-text-dark border-principal-light h-12 align-bottom'
            } border-2 py-2 text-center w-1/2`}
            onClick={() => handleTabChange('members')}
          >
            Réservation Membres
          </button>

          {/* Formulaire */}
          {activeTab === 'guest' && <FormEventGuest></FormEventGuest>}
          {activeTab === 'members' && <FormEventMember></FormEventMember>}
        </div>
      </div>
      {/* Container Paragraphe */}
      <div className="text-center w-1/2 p-8 pl-0 z-10">
        <h1 className="p-8">Réserver ma place a un événement</h1>
        <p className="leading-9 text-text-dark">
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
