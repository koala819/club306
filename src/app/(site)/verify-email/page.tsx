import { Metadata } from 'next'

import VerifyEmail from '@/components/membership/VerifyEmail'

export const metadata: Metadata = {
  title: "Vérification de l'E-mail - Club306 : Rejoignez Notre Communauté",
  description:
    "Complétez votre inscription au Club306 et plongez dans l'univers Peugeot 306. Rejoignez-nous et explorez des avantages exclusifs pour les membres.",
  keywords: [
    "adhésion Club 306 France, confirmation d'adhésion, confirmation d'inscription, Club 306 France, inscription de membre, adhésion en ligne, renouvellement d'adhésion, adhésion communautaire, Club 306, rejoindre le Club 306, processus d'adhésion, inscription au Club 306, avantages des membres",
  ],
  alternates: {
    canonical: `${process.env.CLIENT_URL}/verify-email`,
  },
}

export default function Page() {
  return <VerifyEmail />
}
