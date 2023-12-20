'use client';
// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
// import { cookies } from 'next/headers';
import WaitSession from '@/components/membership/WaitSession';
import ThankYou from '@/components/membership/ThankYou';
import { useEffect, useState } from 'react';

export default function Page() {
  const [showThankYou, setShowThankYou] = useState(false);
  // const supabase = createServerComponentClient({ cookies });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paymentCode = params.get('code');

    if (paymentCode === 'succeeded') {
      setShowThankYou(true);
    }
  }, []);

  return (
    <div>
      {showThankYou ? (
        <ThankYou /> // Affiche ThankYou si le paiement a réussi
      ) : (
        <WaitSession /> // Affiche un autre composant ou message si le paiement n'a pas réussi
      )}
    </div>
  );
}
