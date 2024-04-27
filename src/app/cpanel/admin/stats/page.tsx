'use client'

import { Button, ButtonGroup } from '@nextui-org/react'
import { useState } from 'react'

import Age from '@/components/cpanel/stats/Age'
import Car from '@/components/cpanel/stats/Car'
import InscriptionByMonth from '@/components/cpanel/stats/InscriptionByMonth'
import Members from '@/components/cpanel/stats/Members'
import OurTable from '@/components/cpanel/stats/OurTable'

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
          <ButtonGroup className="flex mb-4">
            <Button
              variant={`${selectedTab === 'OurTable' ? 'shadow' : 'ghost'}`}
              onClick={() => setSelectedTab('OurTable')}
              color="primary"
            >
              Table des Membres
            </Button>
            <Button
              variant={`${selectedTab === 'Members' ? 'shadow' : 'ghost'}`}
              onClick={() => setSelectedTab('Members')}
              color="primary"
            >
              Membres
            </Button>
            <Button
              variant={`${selectedTab === 'Car' ? 'shadow' : 'ghost'}`}
              onClick={() => setSelectedTab('Car')}
              color="primary"
            >
              306
            </Button>
            <Button
              variant={`${selectedTab === 'InscriptionByMonth' ? 'shadow' : 'ghost'}`}
              onClick={() => setSelectedTab('InscriptionByMonth')}
              color="primary"
            >
              Inscriptions
            </Button>
            <Button
              variant={`${selectedTab === 'Age' ? 'shadow' : 'ghost'}`}
              onClick={() => setSelectedTab('Age')}
              color="primary"
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
