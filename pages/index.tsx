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
        <div className="flex items-center justify-center overflow-hidden">
          <iframe
            src="https:www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fclub306france&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            style={{
              minWidth: '100%',
              maxWidth: '100%',
              height: '593px',
              border: 'none',
              overflow: 'hidden',
            }}
            // width="500"
            // height="660"
            // style={{ border: 'none', overflow: 'hidden', width: '100%' }}
            // scrolling="no"
            // frameBorder="0"
            // allowFullScreen={true}
            // allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share, hide_cover"
          />
          {/* <div
            className="fb-page"
            data-href="https://www.facebook.com/club306france"
            data-tabs="timeline"
            data-width="180"
            data-height="360"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="true"
            data-show-facepile="false"
          >
            <blockquote
              cite="https://www.facebook.com/club306france"
              className="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/club306france">Club 306</a>
            </blockquote>
          </div> */}
        </div>
      )}
      <Outings />
      <Partners />
    </Layout>
  );
}
