import Outings from '../components/Outings';
import Partners from '../components/Partners';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Presentation from '../components/Presentation';
import Picture306 from '../components/Picture306';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';

export default function Index() {
  const { data: session } = useSession();
  const [registered, setRegistered] = useState(false);
  console.log('utilisateur enregistré ?', registered);
  console.log('utilisateur email', session?.user?.email);
  checkAuthWithEmail(session?.user?.email, setRegistered);
  /*if (registered === false && session) {

    xavFunction()
      .then(() => console.log('Votre compte n\'existe pas encore. Veuillez en créer un svp.'))
  }

  async function xavFunction() {

  }*/

  return (
    <div>
      {session && registered ?
        _User({ session, setRegistered })
        : _Guest()
      }
    </div>
  );
}

function _User({ session }: any) {
  return (
    <div>
      <main className='container mx-auto text-center py-20'>
        <h3 className='text-4xl font-bold'>Authorize User Homepage</h3>
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
        <div className='flex justify-center'>
          <button
            className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 bg-gray-50'
            onClick={() => _handleGoogleSignout()}
          >
            Se déconnecter
          </button>
        </div>
      </main>
      <div className="fixed w-full  inset-x-0 top-0 z-50">
        <Navbar bgColor={'#ADA075'} />
      </div>


      {/*Section 01*/}
      <Picture306 />

      {/*Section 02*/}
      <section className='w-full h-5/6 lg:-mt-36'>
        <Presentation />
      </section>

      {/*Section 03*/}
      <section className='w-full h-5/6'>
        <div className='flex items-center justify-center'>
          <iframe
            src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fclub306france&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
            width='500' height='500'
            scrolling='no'
            allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share' />
        </div>

        <section className='text-gray-600 body-font text-white bg-blue-500 border-0 mt-4'>
          <div className='container px-5 py-24 mx-auto flex items-center md:flex-row flex-col'>
            <div className='flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center'>
              <h1 className='md:text-3xl text-2xl font-medium title-font text-white'>
                Rejoignez nous en 30 secondes
              </h1>
            </div>
            <div className='flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4'>
              <button
                className='bg-amber-500 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  className='w-6 h-6'
                  viewBox='0 0 512 512'
                >
                  <path
                    d='M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z'></path>
                </svg>
                <span className='ml-4 flex items-start flex-col leading-none '>
                <span className='text-xs text-white mb-1'>
                  <Link href='membership'>Adhérer</Link>
                </span>
              </span>
              </button>
            </div>
          </div>
        </section>

      </section>

      <section className='w-full h-screen'>
        <Outings />
      </section>

      <section className='w-full mb-4 mt-4'>
        <Partners />
      </section>

      <Footer />
    </div>
  );
}

function _Guest() {

  return (
    <div>

      <div className="fixed w-full  inset-x-0 top-0 z-50">
       <Navbar />
      </div>


      <Picture306 />


      <Presentation />

      <section className='w-full h-screen'>
        <Outings />
      </section>

      <Partners />

      <Footer />
    </div>
  );
}

async function _handleGoogleSignout() {
  await signOut({ callbackUrl: `${process.env.CLIENT_URL}` });
}

async function checkAuthWithEmail(googleUser: any, setRegistered: any) {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.NEXT_PUBLIC_SUPABASE_KEY || ''
    );
    const { data: members2 } = await supabase
      .from('members')
      .select('*')
      .filter('email', 'eq', googleUser);
    console.log('in members2 we have',members2)
    if (members2?.length !== 0) {
      return setRegistered(true);
    } else {
      console.log('no register in database');
      return setRegistered(false);
    }

  } catch (error) {
    console.log('Erreur lors de la vérif de l\'email');
  }
}
