import { Events } from '@/src/types/models'

import {
  addNewYearCalendar,
  checkCurrentYearForCalendar,
} from '@/src/lib/supabase'

export async function checkAndCreateEvents() {
  const currentYear = new Date().getFullYear()
  const nextYear = currentYear + 1
  const existingEvents = await checkCurrentYearForCalendar(nextYear)

  if (existingEvents) {
    return {
      statusText: 'Events for the next year already exist.',
      status: 306,
    }
  } else {
    const resultCreationNewYear = await addNewYearCalendar(nextYear)
    // console.log('create new Calndar');

    if (resultCreationNewYear.status !== 200) {
      return {
        statusText: 'Error to create new year events',
        status: 306,
      }
    }
    return {
      statusText: 'Creation with success',
      status: 200,
    }
  }
}
