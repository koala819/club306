'use client';
import { useSession } from 'next-auth/react';
import { useMemo } from 'react';
import { Homepage } from '@/components/Homepage';

export default function Page() {
  const { data: dataSession } = useSession();

  const session = useMemo(() => {
    return dataSession !== undefined && dataSession !== null;
  }, [dataSession]);

  return (
    <div>
      <title>Home</title>
      <meta name="description" content="My homepage" />
      {session ? (
        <Homepage withMember={true} />
      ) : (
        <Homepage withMember={false} />
      )}
    </div>
  );
}
