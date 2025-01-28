'use client'

import { Image, Input } from "@heroui/react"
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import { useEffect, useState } from 'react'

import { Member } from '@/src/types/models'

import { getCities } from '@/src/lib/maps'
import { returnMemberInfo } from '@/src/lib/supabase'

export default function Infos({ userMail }: { userMail: string }) {
  const [member, setMember] = useState<Member | undefined>(undefined)
  const [memberCity, setMemberCity] = useState<any>([])

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${process.env.GOOGLE_MAPS_API_KEY}`,
  })

  const dayjs = require('dayjs')
  const localeFr = require('dayjs/locale/fr')
  dayjs.locale(localeFr)

  const containerStyle = {
    width: '100%',
    height: '500px',
  }

  const center = {
    lat: 47.5,
    lng: 4,
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await returnMemberInfo(userMail)
      const cities = await getCities()
      if (response) {
        const memberData: Member = {
          address: response.address,
          birth_date: response.birth_date,
          created_at: response.created_at,
          first_name: response.first_name,
          email: response.email,
          id: response.id,
          country: response.country,
          last_name: response.last_name,
          phone: response.phone,
          town: response.town,
          zip_code: response.zip_code,
        }
        setMember(() => memberData)
      }
      if (cities) {
        setMemberCity(() => cities)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="w-full lg:w-8/12 px-4 mx-auto mt-6 flex items-center justify-center">
      <div className="flex flex-col min-w-0 break-words w-11/12 lg:w-full mb-6 shadow-lg rounded-lg bg-white dark:bg-slate-500 border-0">
        <picture className="rounded-t mb-0 px-6 py-6">
          <div className="flex justify-center md:justify-end">
            <Image
              className="w-auto h-32 lg:h-48"
              src="https://raw.githubusercontent.com/koala819/Unlimitd_front/develop/QR_Code.png"
              alt="QR Code officiel Club306"
              width="1000"
              height="1000"
            />
          </div>
        </picture>

        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <h2 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Informations
          </h2>
          <section className="flex flex-wrap ">
            <div className="w-full lg:w-6/12 px-4 mb-4">
              <Input
                isReadOnly
                key="memberId"
                type="text"
                color="secondary"
                label="ID membre"
                placeholder={
                  member?.id !== undefined && member?.id <= 100
                    ? '00' + member?.id.toString()
                    : member?.id.toString()
                }
                className="max-w-xs"
              />
            </div>
            <div className="w-full lg:w-6/12 px-4 mb-4">
              <Input
                isReadOnly
                key="email"
                type="email"
                color="secondary"
                label="Email"
                placeholder={member?.email}
                className="max-w-xs"
              />
            </div>
            <div className="w-full lg:w-6/12 px-4 mb-4">
              <Input
                isReadOnly
                key="firstName"
                type="text"
                color="secondary"
                label="Prénom"
                placeholder={member?.first_name}
                className="max-w-xs"
              />
            </div>
            <div className="w-full lg:w-6/12 px-4 mb-4">
              <Input
                isReadOnly
                key="lastName"
                type="text"
                color="secondary"
                label="Nom"
                placeholder={member?.last_name}
                className="max-w-xs"
              />
            </div>
            <div className="w-full lg:w-6/12 px-4 mb-4">
              <Input
                isReadOnly
                key="phone"
                type="text"
                color="secondary"
                label="Téléphone"
                placeholder={`+${member?.phone}`}
                className="max-w-xs"
              />
            </div>
            <div className="w-full lg:w-6/12 px-4 mb-4">
              <Input
                isReadOnly
                key="birthday"
                type="text"
                color="secondary"
                label="Date Anniversaire"
                // placeholder={member?.birth_date}
                placeholder={dayjs(member?.birth_date).format('DD MMMM YYYY')}
                className="max-w-xs"
              />
            </div>
          </section>

          <hr className="mt-6 border-b-1 border-blueGray-300" />

          <h2 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Coordonnées
          </h2>
          <section className="flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4 mb-4">
              <Input
                isReadOnly
                key="address"
                type="text"
                color="primary"
                label="Adresse"
                placeholder={member?.address}
                className="max-w-xs"
              />
            </div>
            <div className="w-full lg:w-4/12 px-4 mb-4">
              <Input
                isReadOnly
                key="town"
                type="text"
                color="primary"
                label="Ville"
                placeholder={member?.town}
                className="max-w-xs"
              />
            </div>
            <div className="w-full lg:w-4/12 px-4 mb-4">
              <Input
                isReadOnly
                key="country"
                type="text"
                color="primary"
                label="Pays"
                placeholder={member?.country}
                className="max-w-xs"
              />
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <Input
                isReadOnly
                key="postalCode"
                type="text"
                color="primary"
                label="Code Postal"
                placeholder={member?.zip_code}
                className="max-w-xs"
              />
            </div>
          </section>

          <hr className="mt-6 border-b-1 border-blueGray-300" />

          <h2 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Carte des membres
          </h2>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={5}
              options={{
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: true,
              }}
            >
              {memberCity !== undefined &&
                memberCity.map((city: any) => {
                  return (
                    <Marker
                      key={city.town}
                      position={{ lat: city.lat, lng: city.lng }}
                    />
                  )
                })}
            </GoogleMap>
          ) : (
            <>Chargement de la carte des membres</>
          )}
        </div>
      </div>
    </div>
  )
}
