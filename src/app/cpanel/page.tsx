'use client';
import { useState, useEffect, useMemo } from 'react';
import { useSession } from 'next-auth/react';
import { Homepage } from '@/components/cpanel/Homepage';
import WaitSession from '@/components/cpanel/WaitSession';
import { confirmMemberShip } from '@/lib/supabase';
import Paiement from '@/components/cpanel/Paiement';

export default function Page() {
  const { data: dataSession } = useSession();
  const [isMemberConfirmed, setIsMemberConfirmed] = useState(true);

  const session = useMemo(() => {
    return dataSession !== undefined;
  }, [dataSession]);

  useEffect(() => {
    async function checkMembership() {
      if (dataSession) {
        const confirmed = await confirmMemberShip(dataSession?.user?.email);
        setIsMemberConfirmed(confirmed);
      }
    }

    checkMembership();
  }, [dataSession]);

  if (!isMemberConfirmed) {
    return <Paiement />;
  }

  return (
    <>
      {!session ? (
        <WaitSession />
      ) : (
        <Homepage userMail={dataSession?.user?.email as string} />
      )}
    </>
  );
}
