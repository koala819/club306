import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';

export const Layout = ({ children, session }: any) => {
  return (
    <SessionProvider session={session}>
      <div className=" flex flex-col h-screen">
        <main id="mainDiv" className="flex-1">
          {children}
        </main>
      </div>
    </SessionProvider>
  );
};
