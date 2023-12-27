import Side from '@/components/cpanel/layout/Side';
import BurgerMenu from '@/components/cpanel/layout/BurgerMenu';
import Footer from '@/components/cpanel/layout/Footer';
import { Montserrat } from 'next/font/google';
import '@/styles/globals.css';
import { Providers } from './providers';
import { Toaster } from 'react-hot-toast';

const montserrat = Montserrat({ subsets: ['latin'] });

export default async function CustomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${montserrat.className}`}>
        <Providers>
          <div className="flex flex-col h-screen bg-gray-50 dark:bg-slate-700">
            <div className="flex flex-1 overflow-hidden">
              <Side />
              <div className="flex flex-col flex-1">
                <div className="md:hidden">
                  <BurgerMenu />
                </div>
                <main className="overflow-y-auto flex-1 mb-4">{children}</main>
              </div>
            </div>
            <Footer />
          </div>
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
