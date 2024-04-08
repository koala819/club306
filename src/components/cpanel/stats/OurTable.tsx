'use client'

import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { getMembersInfo } from '@/lib/supabase/members'

const OurTable = () => {
  const [members, setMembers] = useState<Member[]>([])

  useEffect(() => {
    async function fetch() {
      try {
        const response = await getMembersInfo()
        if (response.status === 200) {
          const data = await response.json()
          setMembers(data)
        }
      } catch (error: any) {
        toast.error('error', error)
      }
    }

    fetch()
  }, [])

  return (
    <div className="overflow-x-auto">
      <div className="min-w-full">
        <h3 className="text-4xl font-semibold text-gray-800 text-center">
          Liste de Nos Membres
        </h3>

        {/* Vue de Tableau pour les écrans larges */}
        <section className="hidden sm:block">
          <table className="min-w-full table-auto overflow-auto">
            <thead className="border-b">
              <tr>
                <th className="text-left px-4 py-2">Nom</th>
                <th className="text-left px-4 py-2">Prénom</th>
                <th className="text-left px-4 py-2">Adresse</th>
                <th className="text-left px-4 py-2">CP</th>
                <th className="text-left px-4 py-2">Ville</th>
                <th className="text-left px-4 py-2">Pays</th>
                <th className="text-left px-4 py-2">Email</th>
                <th className="text-left px-4 py-2">Tel</th>
                <th className="text-left px-4 py-2">306</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-blue-100' : 'bg-white'}
                >
                  <td className="px-4 py-2">{member.last_name}</td>
                  <td className="px-4 py-2">{member.first_name}</td>
                  <td className="px-4 py-2 uppercase">{member.address}</td>
                  <td className="px-4 py-2 capitalize">{member.zip_code}</td>
                  <td className="px-4 py-2">{member.town}</td>
                  <td className="px-4 py-2 uppercase">{member.country}</td>
                  <td className="px-4 py-2">{member.email}</td>
                  <td className="px-4 py-2">{member.phone}</td>
                  <td className="px-4 py-2">
                    {member.cars.map((car, carIndex) => (
                      <div key={carIndex}>{car.car_models.name}</div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Vue Alternative pour les petits écrans */}
        <section className="sm:hidden">
          {members.map((member, index) => (
            <div
              key={index}
              className={`border-b p-4 ${index % 2 === 0 ? 'bg-blue-100' : 'bg-white'}`}
            >
              <div>
                <strong>Nom:</strong> {member.last_name}
              </div>
              <div>
                <strong>Prénom:</strong> {member.first_name}
              </div>
              <div>
                <strong>Adresse:</strong> {member.address}
              </div>
              <div>
                <strong>CP:</strong> {member.zip_code}
              </div>
              <div>
                <strong>Ville:</strong> {member.town}
              </div>
              <div>
                <strong>Pays:</strong> {member.country}
              </div>
              <div>
                <strong>Email:</strong> {member.email}
              </div>
              <div>
                <strong>Tel:</strong> {member.phone}
              </div>
              <div>
                <strong>Voitures:</strong>
                {member.cars.map((car, carIndex) => (
                  <span
                    key={carIndex}
                    className="inline-block after:content-[','] last:after:content-none"
                  >
                    {car.car_models.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default OurTable

interface CarModel {
  name: string
}

interface Member {
  last_name: string
  first_name: string
  address: string
  zip_code: string
  town: string
  country: string
  email: string
  phone: string
  cars: Array<{ car_models: CarModel }>
}
