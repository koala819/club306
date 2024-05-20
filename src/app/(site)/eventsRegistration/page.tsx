import { Metadata } from 'next'

import EventsRegistration from '@/src/components/EventsRegistration'

export const metadata: Metadata = {
  title: 'Inscription Événement Club 306 - Réservez Votre Place Maintenant !',
  description:
    'Rejoignez le Club 306 pour des moments uniques. Inscrivez-vous maintenant et vivez des expériences passionnées de la route avec nous !',
  alternates: {
    canonical: `${process.env.CLIENT_URL}/eventsRegistration`,
  },
}

export default async function Page() {
  return <EventsRegistration />
}
