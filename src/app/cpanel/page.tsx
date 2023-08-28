'use client';
import RootLayout from '@/app/layout';
import CustomLayout from './layout';

export default function CPanel() {
  // if (Object.keys(nbMembersByAge).length !== 0) {
  //   console.log('members by age', nbMembersByAge);
  //   console.log(
  //     'Adresses e-mail des membres âgés de 0 à 18 ans :',
  //     nbMembersByAge.emailsAge0to18
  //   );
  // }

  return (
    <RootLayout hideNavbar hideFooter>
      <CustomLayout>Plouf</CustomLayout>
    </RootLayout>
  );
}
