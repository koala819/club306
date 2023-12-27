import Link from 'next/link';
import { BsFacebook } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import { LuCopyleft } from 'react-icons/lu';
import Image from 'next/image';
import dix31 from '../../public/images/DIX31.png';

export const Footer = ({ withMember }: { withMember: boolean }) => {
  return (
    <footer
      className={`relative  text-white pt-4 ${
        withMember
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
      </div>
      <legend className="w-full px-4 mx-auto text-center bg-[#47464D] text-white">
        <div className="py-4 flex flex-col md:flex-row space-y-8 md:space-y-0">
          <aside className="flex w-full flex-col md:flex-row items-center text-sm tracking-widest space-y-4 md:space-y-0">
            <text className="flex">
              2023 Created by
              <Link
                href="https://www.dix31.com"
                target="_blank"
                className="mx-1 hover:underline"
              >
                <picture className="flex justify-center md:justify-end text-white pr-1 mt-1">
                  <Image
                    src={dix31}
                    alt="Logo DIX31.com"
                    height={15}
                    className="text-white"
                  />
                </picture>
              </Link>
            </text>
            <text className="flex">
              with
              <Link
                href="https://fr.wikipedia.org/wiki/Copyleft"
                target="_blank"
                className="flex justify-center mx-1 hover:underline"
              >
                Copyleft license
                <LuCopyleft />
              </Link>
            </text>
          </aside>

          <aside className="flex w-full justify-center text-sm tracking-widest">
            Design by
            <Link
              href="https://github.com/koala819/"
              target="_blank"
              className="ml-1 hover:underline"
            >
              Xavier
            </Link>
          </aside>
        </div>
      </legend>
    </footer>
  );
};
