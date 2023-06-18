'use client';
import { StyleProvider } from '@ant-design/cssinjs';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { LayoutProps } from './types/Components';
import './globals.css';
import Providers from '@/components/Providers';

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="fr">
      <body>
        <StyleProvider hashPriority="high">
          <div className=" flex flex-col h-screen">
            <Providers>
              <Navbar />
              <main className="flex-1 ">{children}</main>
              <Footer />
            </Providers>
          </div>
        </StyleProvider>
      </body>
    </html>
  );
}
