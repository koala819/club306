import Side from '@/components/cpanel/Side';
import Top from '@/components/cpanel/Top';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });
export default function CustomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Side />
      <div className="flex flex-col flex-1">
        {/* <Top /> */}
        {children}
      </div>
    </div>
  );
}
