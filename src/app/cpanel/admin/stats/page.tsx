'use client'

import { Button, ButtonGroup } from "@heroui/react"
import { useState } from 'react'

import Age from '@/src/components/cpanel/stats/Age'
import Car from '@/src/components/cpanel/stats/Car'
import InscriptionByMonth from '@/src/components/cpanel/stats/InscriptionByMonth'
import Members from '@/src/components/cpanel/stats/Members'
import OurTable from '@/src/components/cpanel/stats/Table/OurTable'

export default function Home() {
  const [selectedTab, setSelectedTab] = useState('OurTable')
  const customMenu = () => {
    switch (selectedTab) {
      case 'Members':
        return <Members />
      case 'Car':
        return <Car />
      case 'InscriptionByMonth':
        return <InscriptionByMonth />
      case 'Age':
        return <Age />
      case 'OurTable':
      default:
        return <OurTable />
    }
  }

  return (
    <div className="flex-grow bg-gray-100 p-4">
      <section className="text-gray-600 body-font">
        <div className="flex mb-4">
          {/* Tabs */}
          <ButtonGroup className="flex flex-wrap justify-center w-full mb-4 overflow-x-auto">
            <Button
              variant={`${selectedTab === 'OurTable' ? 'shadow' : 'ghost'}`}
              onClick={() => setSelectedTab('OurTable')}
              color="primary"
              className="m-1"
            >
              Table des Membres
            </Button>
            <Button
              variant={`${selectedTab === 'Members' ? 'shadow' : 'ghost'}`}
              onClick={() => setSelectedTab('Members')}
              color="primary"
              className="m-1"
            >
              Membres
            </Button>
            <Button
              variant={`${selectedTab === 'Car' ? 'shadow' : 'ghost'}`}
              onClick={() => setSelectedTab('Car')}
              color="primary"
              className="m-1"
            >
              306
            </Button>
            <Button
              variant={`${selectedTab === 'InscriptionByMonth' ? 'shadow' : 'ghost'}`}
              onClick={() => setSelectedTab('InscriptionByMonth')}
              color="primary"
              className="m-1"
            >
              Inscriptions
            </Button>
            <Button
              variant={`${selectedTab === 'Age' ? 'shadow' : 'ghost'}`}
              onClick={() => setSelectedTab('Age')}
              color="primary"
              className="m-1"
            >
              Âge
            </Button>
          </ButtonGroup>
        </div>

        {customMenu()}
      </section>
    </div>
  )
}
