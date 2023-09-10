'use client';
// import { useSession } from 'next-auth/react';
// import ClipLoader from 'react-spinners/ClipLoader';
import Side from './components/Side';
import Top from './components/Top';

export default function CustomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { data: session, status } = useSession();

  // if (
  //   status === 'authenticated' &&
  //   session?.user?.email ===
  //     (process.env.USR_CHECK_DB || process.env.USR_CHECK_DB2)
  // ) {
  /* USER REGISTERED */
  return (
    <section>
      <div className="flex h-screen">
        <Side />
        <div className="flex flex-col flex-1">
          <Top />
          {children}
        </div>
      </div>
    </section>
  );
  // }
  // return (
  //   <section className="grid h-screen place-items-center">
  //     <ClipLoader
  //       loading={true}
  //       size={50}
  //       aria-label="Loading Spinner"
  //       data-testid="loader"
  //     />
  //   </section>
  // );
}
