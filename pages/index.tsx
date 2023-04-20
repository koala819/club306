import Outings from '../components/Outings';
import Partners from '../components/partners/Partners';
import Layout from '../components/Layout';
import Presentation from '../components/Presentation';
import Picture306 from '../components/Picture306';
// import { useSession } from 'next-auth/react';
// import { check } from '../lib/supabase';
// import { useEffect, useState } from 'react';

export default function Index() {
  // const { data: session } = useSession();
  // const [registredMember, setRegistredMember] = useState(false);

  // useEffect(() => {
  //   if (session?.user !== undefined) {
  //     if (Object.keys(session?.user).length !== 0) {
  //       check(session).then((response) => {
  //         setRegistredMember(response);
  //         //console.log('ce membre Google est-il autorisé ?', setRegistredMember);
  //       });
  //     } else {
  //       //console.log('we have a standard account with login / pwd');
  //       setRegistredMember(true);
  //     }
  //   }
  // }, [session]);

  return (
    <Layout title="Index">
      <div className="hidden md:block">
        <Picture306 />
      </div>
      <Presentation />
      <Outings />
      <Partners />
    </Layout>
  );
}
