'use client'

import { useEffect } from 'react'

import Age from '@/components/cpanel/stats/Age'
import Car from '@/components/cpanel/stats/Car'
import InscriptionByMonth from '@/components/cpanel/stats/InscriptionByMonth'
import Members from '@/components/cpanel/stats/Members'

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
      } catch (error) {
        console.log('error fetch data', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="flex-grow bg-gray-100 p-4 ">
      <section className="text-gray-600 body-font">
        <Members />
        <Car />
        <InscriptionByMonth />
        <Age />
      </section>
    </div>
  )
}
