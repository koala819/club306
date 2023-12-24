'use client';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Toaster } from 'react-hot-toast';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [session, setSession] = useState(true);
  const { data: dataSession } = useSession();

  useEffect(() => {
    if (dataSession !== undefined) {
      setSession(true);
    }
  }, [dataSession]);

  return (
    <div className="min-h-screen min-w-screen">
      <div className=" flex flex-col h-screen">
        {session ? <Navbar withMember={true} /> : <Navbar withMember={false} />}
        <main className="flex-1 ">{children}</main>
        {session ? <Footer withMember={true} /> : <Footer withMember={false} />}
        <Toaster position="top-right" />
      </div>
    </div>
  );
}
