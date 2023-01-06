import { Layout } from '../components/Layout';
import { useEffect, useState } from 'react';

export default function Contact() {
  const height = _useLayoutHeight();


  return (
    <Layout title='Contact'>
      <div className="flex justify-center" style={{ height: `${height}px` }}>

        <div className='h-full bg-cover w-2/3'
             style={{backgroundImage: 'url(https://images.unsplash.com/photo-1568106575207-0fe3ec317559)'}}>
        </div>


          <div className='lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 px-4'>
            <h2 className='text-gray-900 text-lg mb-1 font-medium title-font'>Contact</h2>
            <p className='leading-relaxed mb-5 text-gray-600'>Une question concernant l&apos;adhésion ? un évènement ?
              un bon plan à partager? Passer une vitesse, déposer un message et accélérer jusqu&apos;à cliquer sur &quot;envoyer&quot;
              ^_^</p>
            <div className='relative mb-4'>
              <label htmlFor='name' className='leading-7 text-sm text-gray-600'>Nom</label>
              <input type='text' id='name' name='name'
                     className='w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
            </div>
            <div className='relative mb-4'>
              <label htmlFor='email' className='leading-7 text-sm text-gray-600'>Email</label>
              <input type='email' id='email' name='email'
                     className='w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
            </div>
            <div className='relative mb-4'>
              <label htmlFor='message' className='leading-7 text-sm text-gray-600'>Message</label>
              <textarea id='message' name='message'
                        className='w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'></textarea>
            </div>
            <button
              className='text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg'>Envoyer
            </button>
            <p className='text-xs text-gray-500 mt-3'>L&apos;équipe s&apos;organise au mieux afin d&apos;apporter une
              réponse dans les 24 heures. Sportivement</p>
          </div>



      </div>

    </Layout>
  );
}

function _useLayoutHeight() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const divRef = document.getElementById('mainDiv');
    if (divRef) {
      setHeight(divRef.offsetHeight);
    }
  }, []);

  return height;
}