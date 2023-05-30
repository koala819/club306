import Outings from '../components/Outings';
import Partners from '../components/partners/Partners';
import Layout from '../components/Layout';
import Presentation from '../components/Presentation';
// import Picture306 from '../components/Picture306';
import Prismic from 'prismic-javascript';
import type { GetStaticPropsContext } from 'next';
import { createClient } from '../prismicio';
import dynamic from 'next/dynamic';

const Picture306 = dynamic(() => import('../components/Picture306'), {
  ssr: false,
  loading: () => <p>Chargement ...</p>,
});

// import { useSession } from 'next-auth/react';
// import { checkForStartSession } from '../lib/supabase';
// import { useEffect, useState } from 'react';

export default function Index({ articles }: any) {
  // const { data: session } = useSession();
  // const [registredMember, setRegistredMember] = useState(false);

  // useEffect(() => {
  //   if (session?.user !== undefined) {
  //     if (Object.keys(session?.user).length !== 0) {
  //       checkForStartSession(session).then((response) => {
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
      <Outings articles={articles} />
      <Partners />
    </Layout>
  );
}

export async function getServerSideProps({
  previewData,
}: GetStaticPropsContext) {
  const client = createClient({ previewData });

  const articles = await client.query(
    Prismic.Predicates.at('document.tags', ['index'])
  );

  return {
    props: {
      articles: articles,
    },
  };
}
