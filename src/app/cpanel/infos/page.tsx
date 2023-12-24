'use client';
import Infos from '@/components/cpanel/Infos';
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
        <Infos userMail={dataSession?.user?.email || ''} />
      )}
    </>
  );
}
