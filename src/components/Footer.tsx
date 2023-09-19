import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { BsFacebook } from 'react-icons/bs';
import { RiInstagramFill, RiCopyleftLine } from 'react-icons/ri';

export const Footer = async () => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div>
      <footer
        // className="relative bg-[#3B578E] text-white pt-4"
        className={`relative  text-white pt-4 ${
          user
            ? 'bg-[#ADA075] dark:bg-[#6a6145]'
            : 'bg-[#3B578E] dark:bg-[#2b2c2e]'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-blueGray-700">
                Restons en contact !
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Retrouvez-nous sur l&apos;une de ces plateformes, nous répondons
                sous 1 à 2 jours ouvrables.
              </h5>
              <div className=" flex mt-6 space-x-4">
                <Link href="https://www.facebook.com/club306france/">
                  <BsFacebook
                    size={28}
                    className="hover:fill-red-600 cursor-pointer"
                  />
                </Link>
                <Link href="https://www.instagram.com/club306officielfrance/">
                  <RiInstagramFill
                    size={32}
                    className="hover:fill-red-600 cursor-pointer"
                  />
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                {/* <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/presentation?ref=njs-profile"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://blog.creative-tim.com?ref=njs-profile"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.github.com/creativetimofficial?ref=njs-profile"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                      >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div> */}
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Autres ressources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/rules" className="hover:text-red-600">
                        Règlement du Club
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy" className="hover:text-red-600">
                        Politique de confidentialité
                      </Link>
                    </li>
                    <li>
                      <Link href="/legalNotice" className="hover:text-red-600">
                        Mentions légales
                      </Link>
                    </li>

                    <li>
                      <Link href="/contact" className="hover:text-red-600">
                        Nous contacter
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center justify-center ">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center ">
              <div className="text-sm text-blueGray-500 font-semibold py-1 flex space-x-8 ">
                <Link
                  href="https://www.gnu.org/licenses/copyleft.fr.html"
                  className="hover:text-red-600"
                >
                  Copyleft
                </Link>{' '}
                <RiCopyleftLine className="ml-2" size={16} />
                <span id="get-current-year">2023</span>
                <Link href="#">by</Link>
                <Link
                  href="https://github.com/koala819"
                  className="hover:text-red-600"
                >
                  Xavier
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
