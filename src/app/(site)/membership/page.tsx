import { Metadata } from 'next'

import Membership from '@/src/components/membership/Membership'

export const metadata: Metadata = {
  title:
    'Rejoignez Club306 : Complétez vos informations personnelles pour devenir membre',
  description:
    'Devenez membre de Club306 : remplissez vos infos pour une adhésion facile. Acceptez nos termes et politique de confidentialité pour avancer.',
  keywords: [
    "adhésion Club306, formulaire d'informations personnelles, processus d'inscription, enregistrement utilisateur, détails personnels des membres, formulaire en ligne, accord de consentement, politique de confidentialité, conditions d'adhésion",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}/membership`,
  },
}

export default function Page() {
  return <Membership />
}
