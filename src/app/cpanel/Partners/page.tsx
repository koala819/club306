'use client';
import RootLayout from '@/app/layout';
import CustomLayout from '../layout';
import { Partners } from '@/app/partners/Partners';

export default function OurPartners() {
  return (
    <RootLayout hideFooter hideNavbar>
      <CustomLayout>
        <Partners />
      </CustomLayout>
    </RootLayout>
  );
}
