'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Homepage } from '@/components/cpanel/Homepage';
import WaitSession from '@/components/cpanel/WaitSession';
import { confirmMemberShip } from '@/lib/supabase';
import Paiement from '@/components/cpanel/Paiement';

export default function Page() {
  const { data: dataSession } = useSession();
  const [isMemberConfirmed, setIsMemberConfirmed] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function checkMembership() {
      if (dataSession) {
        const confirmed = await confirmMemberShip(dataSession?.user?.email);
        setIsMemberConfirmed(confirmed);
      }
      setIsLoading(false);
    }

    checkMembership();
  }, [dataSession]);

  if (isLoading) {
    return <WaitSession />;
  }

  if (!isMemberConfirmed) {
    return <Paiement />;
  }

  return <Homepage userMail={dataSession?.user?.email ?? ''} />;
}
