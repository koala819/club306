import { Layout } from '../components/Layout';

export default function Contact() {

  return (
    <Layout title='Contact'>
      <section className='center text-gray-600 body-font relative'>
        <div className='container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap'>
          <div
            className='lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.4837782314116!2d2.5016583150511273!3d48.906174505296015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e61309abfa1ec7%3A0x8b5008655e255987!2s12%20All.%20Ledru%20Rollin%2C%2093320%20Les%20Pavillons-sous-Bois!5e0!3m2!1sfr!2sfr!4v1672912951927!5m2!1sfr!2sfr"
              width='100%' height='100%' loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'></iframe>
          </div>
          <div className='lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'>
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
      </section>
    </Layout>
  );
}