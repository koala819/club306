import { Navbar } from './Navbar';
import { Footer } from './Footer';
// import '../app/global.css';
import { SessionProvider } from 'next-auth/react';

export const Layout = ({ children, title, displayNavbar, session }: any) => {
  return (
    <SessionProvider session={session}>
      <div className=" flex flex-col h-screen">
        {displayNavbar || displayNavbar === undefined ? <Navbar /> : null}
        <title>{title}</title>
        <main id="mainDiv" className="flex-1">
          {children}
        </main>

        <Footer />
      </div>
    </SessionProvider>
  );
};
