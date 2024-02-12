import { BsFacebook } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { IoLogoDiscord } from 'react-icons/io5';
import { LuCopyleft } from 'react-icons/lu';
import { RiInstagramFill } from 'react-icons/ri';

import Image from 'next/image';
import Link from 'next/link';

import dix31 from '../../public/images/DIX31.png';

export const Footer = ({ withMember }: { withMember: boolean }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className={`relative  text-white pt-4  ${
        withMember
          ? 'bg-[#ADA075] dark:bg-[#6a6145]'
          : 'bg-[#707070] dark:bg-[#6a6145]'
      }`}
    >
      <div className="flex place-self-auto ">
        <div className="w-2/6 ml-4">
          <div className="  text-base font-extrabold mb-4 tracking-wide font-sans ">
            Restons en contact !
          </div>

          <p className="text-sm mb-2 ">
            Retrouvez-nous sur l&apos;une de ces plateformes, nous répondons
            sous 1 à 2 jours ouvrables.
          </p>
          <div className=" flex mt-6 space-x-4">
            <Link href="https://www.facebook.com/club306france/">
              <BsFacebook
                size={28}
                className="hover:fill-blue-600 cursor-pointer"
              />
            </Link>
            <Link href="https://www.discord.com/club306france/">
              <IoLogoDiscord
                size={32}
                className="hover:fill-blue-700 cursor-pointer"
              />
            </Link>
            <Link href="https://www.instagram.com/club306officielfrance/">
              <RiInstagramFill
                size={32}
                className="hover:fill-blue-400 cursor-pointer"
              />
            </Link>
            <Link href="https://www.youtube.com/club306france/">
              <FaYoutube
                size={32}
                className="hover:fill-red-600 cursor-pointer"
              />
            </Link>
          </div>
        </div>
        {/* news letter */}

        <div className="  w-2/6 flex-col justify-center ">
          <div className=" text-center text-base font-extrabold mb-4 tracking-wide font-sans ">
            Rejoins nous dans l'aventure Peugeot 306 !
          </div>

          <p className="text-sm mb-2 text-center">
            Inscrivez-vous à notre newsletter pour suivre nos dernières
            actualitées & remises :
          </p>
          <div className="flex space-x-4 justify-center ">
            <input />
            <button>S'inscrire</button>
          </div>
          {/* <div className="mt-32 mb-12">logo peugeot</div> */}
          <picture className="flex justify-center  text-white pr-1  ">
            <Image
              src="/images/Logo_AVP2.png"
              alt="Logo Aventure Peugeot"
              width={200}
              height={200}
              className="mt-12 mb-12"
            />
          </picture>
        </div>

        <div className=" w-2/6 flex flex-col  items-end ">
          <div className="mr-4">
            <div className="  text-sm font-extrabold mb-4 ">Informations :</div>
            <ul className="list-disc space-y-2 ml-4 ">
              <li>
                <Link href="/rules" className="hover:text-red-600 text-sm">
                  Règlement-du-Club
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-red-600 text-sm">
                  Politique-de-confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/legalNotice"
                  className="hover:text-red-600 text-sm"
                >
                  Mentions-légales
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-red-600 text-sm">
                  Nous-contacter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <legend className=" px-4 mx-auto text-center bg-[#707070] text-white">
        <div className="py-4 flex flex-col md:flex-row space-y-8 md:space-y-0">
          <aside className="flex w-full flex-col md:flex-row items-center text-sm tracking-widest space-y-4 md:space-y-0">
            <text className="flex">
              <LuCopyleft className=" mr-1" size={20} />
              {currentYear} Created by
              <Link
                href="https://www.dix31.com"
                target="_blank"
                className="mx-1 hover:underline"
              >
                <picture className="flex justify-center md:justify-end text-white pr-1 ">
                  <Image
                    src={dix31}
                    alt="Logo DIX31.com"
                    height={18}
                    className="text-white"
                  />
                </picture>
              </Link>
            </text>
          </aside>

          <aside className="flex w-full justify-end text-sm tracking-widest">
            Design by
            <Link
              href="https://www.linkedin.com/in/stevens-ramos-b188b4290/"
              target="_blank"
              className="ml-1 mr-1 hover:underline"
            >
              Stevens
            </Link>{' '}
            and
            <Link
              href="https://www.linkedin.com/in/mehdi-a-116569290/"
              target="_blank"
              className="ml-1 hover:underline"
            >
              {' '}
              Mehdi
            </Link>
          </aside>
        </div>
      </legend>
    </footer>
  );
};
