'use client';
import Side from '@/components/cpanel/layout/Side';
import Top from '@/components/cpanel/layout/Top';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: dataSession } = useSession();
  // console.log('session in cpanel/Layout', dataSession);

  // if (!dataSession) {
  //   redirect('/auth/signIn');
  // }

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-slate-700">
      <Side />
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="md:hidden">
          <Top session={dataSession} />
        </div>
        <main className="overflow-y-auto flex-1 mb-4 ">{children}</main>
      </div>
    </div>
  );
}
