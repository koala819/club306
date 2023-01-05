import {Layout} from '../components/Layout'
import Image from 'next/image';
import Link from 'next/link';

export default function PageName() {
    return (
      <Layout title="Documents">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="lg:w-2/3 mx-auto">

              <div className="flex flex-wrap -mx-2">

                <div className="px-2 w-1/2">
                  <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                    <Image alt="gallery"
                         className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                         src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                           fill
                           sizes='100vw'
                           style={{
                             objectFit: 'cover',
                             objectPosition: 'center'
                           }}/>
                      <div className="text-center relative z-10 w-full">
                        <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Articles de presse</h2>
                        <Link className="mt-3 text-indigo-500 inline-flex items-center" href='articlesPress'>
                          Découvrir
                          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                               strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                      </div>
                  </div>
                </div>

                <div className="px-2 w-1/2">
                  <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                    <Image alt="gallery"
                           className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                           src="https://images.unsplash.com/photo-1592799152713-5542a82544fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                           fill
                           sizes='100vw'
                           style={{
                             objectFit: 'cover',
                             objectPosition: 'center'
                           }}/>
                    <div className="text-center relative z-10 w-full">
                      <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Magazines</h2>
                      <Link className="mt-3 text-indigo-500 inline-flex items-center" href='magazines'>
                        Découvrir
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                             strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>

              <div className="flex flex-wrap -mx-2 mt-4">

                <div className="px-2 w-1/2">
                  <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                    <Image alt="gallery"
                           className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                           src="https://images.unsplash.com/photo-1622551557132-c949387622e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                           fill
                           sizes='100vw'
                           style={{
                             objectFit: 'cover',
                             objectPosition: 'center'
                           }}/>
                    <div className="text-center relative z-10 w-full">
                      <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Publicités</h2>
                      <Link className="mt-3 text-indigo-500 inline-flex items-center" href='advertisings'>
                        Découvrir
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                             strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="px-2 w-1/2">
                  <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                    <Image alt="gallery"
                           className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                           src="https://images.unsplash.com/photo-1652509621255-709c807ed7c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                           fill
                           sizes='100vw'
                           style={{
                             objectFit: 'cover',
                             objectPosition: 'center'
                           }}/>
                    <div className="text-center relative z-10 w-full">
                      <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Catalogues</h2>
                      <Link className="mt-3 text-indigo-500 inline-flex items-center" href='contactatalogues'>
                        Découvrir
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                             strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </Layout>)
}