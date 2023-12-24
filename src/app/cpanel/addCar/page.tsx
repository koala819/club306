'use client';
import AddCar from '@/components/cpanel/AddCar';
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
        <AddCar userMail={dataSession?.user?.email || ''} />
      )}
    </>
  );
}
