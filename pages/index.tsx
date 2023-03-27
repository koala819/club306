import Outings from '../components/Outings';
import Partners from '../components/Partners';
import { Layout } from '../components/Layout';
import Presentation from '../components/Presentation';
import Picture306 from '../components/Picture306';
import { useSession } from 'next-auth/react';
import check from '../lib/checkRecordMember';
import { useEffect, useState } from 'react';
export default function Index() {
  const { data: session } = useSession();
  const [registredMember, setRegistredMember] = useState(false);

  useEffect(() => {
    if (session?.user !== undefined) {
      if (Object.keys(session?.user).length !== 0) {
        check(session).then((response) => {
          setRegistredMember(response);
          //console.log('ce membre Google est-il autorisé ?', setRegistredMember);
        });
      } else {
        //console.log('we have a standard account with login / pwd');
        setRegistredMember(true);
      }
    }
  }, [session]);

  return (
    <Layout title="Index">
      <div className="hidden md:block">
        <Picture306 />
      </div>
      <Presentation />
      {registredMember && (
        <div className="flex items-center justify-center">
          <iframe
            src="https:www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fclub306france&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="1000"
            height="1000"
            scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>
      )}
      {/* <section className="w-full h-screen"> */}
      <Outings />
      {/* </section> */}
      <Partners />
    </Layout>
  );
}
