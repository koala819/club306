'use client';
import { Homepage } from '@/components/cpanel/Homepage';
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
        <Homepage userMail={dataSession?.user?.email || ''} />
      )}
    </>
  );
}
