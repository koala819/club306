'use client';
import Garage from '@/components/cpanel/Garage';
import { useSession } from 'next-auth/react';
import { useMemo } from 'react';
import WaitSession from '@/components/cpanel/WaitSession';

export default function Page() {
  const { data: dataSession } = useSession();

  const session = useMemo(() => {
    return dataSession !== undefined;
  }, [dataSession]);

  return (
    <>
      {!session ? (
        <WaitSession />
      ) : (
        <Garage userMail={dataSession?.user?.email as string} />
      )}
    </>
  );
}
