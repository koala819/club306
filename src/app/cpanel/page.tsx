'use client';
import { Homepage } from '@/components/cpanel/Homepage';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import WaitSession from '@/components/cpanel/WaitSession';

export default function Page() {
  const [waitSession, setWaitSession] = useState(true);
  const { data: dataSession } = useSession();

  useEffect(() => {
    if (dataSession !== undefined) {
      setWaitSession(false);
    }
  }, [dataSession]);

  return (
    <>
      {waitSession ? (
        <WaitSession />
      ) : (
        <Homepage userMail={dataSession?.user?.email || ''} />
      )}
    </>
  );
}
