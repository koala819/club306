'use client'

import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import CalendarControlPanel from '@/components/cpanel/CalendarControlPanel'
import OrderTable from '@/components/cpanel/OrderTable'
import TabButton from '@/components/cpanel/TabButton'
import Calendar from '@/components/cpanel/event/Calendar'
import ThemeCalendar from '@/components/cpanel/event/ThemeCalendar'

import { checkAndCreateEvents } from '@/lib/checkAndCreateEvents'
import { fecthAllEvents } from '@/lib/helloAsso/events'
import { checkCurrentYearForCalendar } from '@/lib/supabase'

export default function Event() {
  const currentYear = new Date().getFullYear()
  const [year, setYear] = useState(currentYear)
  const [activeTab, setActiveTab] = useState('calendar')
  const [allEvents, setAllEvents] = useState()
  const [canGoBack, setCanGoBack] = useState(false)
  const [canGoNext, setCanGoNext] = useState(false)

  useEffect(() => {
    async function checkYearData() {
      const hasPreviousYearData = await checkCurrentYearForCalendar(year - 1)
      const hasNextYearData = await checkCurrentYearForCalendar(year + 1)
      setCanGoBack(hasPreviousYearData)
      setCanGoNext(hasNextYearData)
    }

    checkYearData()
  }, [year])

  function handleTabClick(tab: string) {
    setActiveTab(tab)
    if (tab === 'members') {
      loadAllEvents()
    }
  }

  async function loadAllEvents() {
    const events = await fecthAllEvents()
    setAllEvents(events)
  }

  async function handleAddNewYear() {
    const createNewCalendar = await checkAndCreateEvents()
    if (createNewCalendar?.status === 306) {
      toast.error('Impossible de creer le calendrier')
    } else if (createNewCalendar?.status === 200) {
      toast.success('Le nouveau calendrier est prêt')
    }
  }

  function goToNextYear() {
    year < currentYear + 1 && setYear(year + 1)
  }
  function goToPreviousYear() {
    year > currentYear - 1 && setYear(year - 1)
  }

  return (
    <>
      <div className="flex justify-between">
        <TabButton
          isSelected={activeTab === 'calendar'}
          onClick={() => handleTabClick('calendar')}
        >
          Calendrier
        </TabButton>
        <TabButton
          isSelected={activeTab === 'members'}
          onClick={() => handleTabClick('members')}
        >
          Membres Inscrit
        </TabButton>
        <TabButton
          isSelected={activeTab === 'themes'}
          onClick={() => handleTabClick('themes')}
        >
          Themes
        </TabButton>
      </div>

      {activeTab === 'calendar' && (
        <>
          <CalendarControlPanel
            year={year}
            canGoBack={canGoBack}
            canGoNext={canGoNext}
            handleAddNewYear={handleAddNewYear}
            goToNextYear={goToNextYear}
            goToPreviousYear={goToPreviousYear}
          />
          <Calendar year={year} />
        </>
      )}
      {activeTab === 'themes' && <ThemeCalendar />}
      {activeTab === 'members' && allEvents && (
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold text-gray-800 my-6">
            Membres inscrits à un Event
          </h1>
          <OrderTable allEvents={allEvents} />
        </div>
      )}
    </>
  )
}
