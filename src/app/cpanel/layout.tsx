import Side from '@/components/cpanel/layout/Side';
import BurgerMenu from '@/components/cpanel/layout/BurgerMenu';
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
          <div className="flex h-screen bg-gray-50 dark:bg-slate-700">
            <Side />
            <div className="flex flex-col flex-1 overflow-hidden">
              <div className="md:hidden">
                <BurgerMenu />
              </div>
              <main className="overflow-y-auto flex-1 mb-4 ">{children}</main>
            </div>
          </div>
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
