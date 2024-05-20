import { Metadata } from 'next'

import Memberfinish from '@/src/components/membership/Memberfinish'

export const metadata: Metadata = {
  title: "Confirmation et Activation Immédiate de l'Adhésion - Club 306 France",
  description:
    "Activez votre adhésion au Club 306 France instantanément et rejoignez notre communauté. Profitez de tous les avantages dès aujourd'hui.",
  keywords: [
    "adhésion Club 306 France, confirmation d'adhésion, confirmation d'inscription, Club 306 France, inscription de membre, adhésion en ligne, renouvellement d'adhésion, adhésion communautaire, Club 306, rejoindre le Club 306, processus d'adhésion, inscription au Club 306, avantages des membres",
  ],
  alternates: {
    canonical: `${process.env.CLIENT_URL}/memberfinish`,
  },
}

export default function Page() {
  return <Memberfinish />
}
