import { Metadata } from 'next'

import Event from '@/components/Event'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: `Événements Club Peugeot 306 - Rencontres et Rassemblements ${currentYear}`,
  description: `Rejoignez les passionnés du Club Peugeot 306 en ${currentYear} pour des rencontres et rassemblements uniques. Vivez votre passion pour les Peugeot 306 ensemble.`,
}

export default function Page() {
  return <Event />
}
