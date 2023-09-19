import '@/app/globals.css';
import Provider from '@/components/Provider';
import { ReactNode } from 'react';

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <div className=" flex flex-col h-screen">
          <Provider>
            <main className="flex-1 ">{children}</main>
          </Provider>
        </div>
      </body>
    </html>
  );
}

interface LayoutProps {
  children: ReactNode;
  hideNavbar?: boolean;
  hideFooter?: boolean;
}
