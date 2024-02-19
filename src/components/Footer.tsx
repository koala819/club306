import { BsFacebook } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { IoLogoDiscord } from 'react-icons/io5';
import { LuCopyleft } from 'react-icons/lu';
import { RiInstagramFill } from 'react-icons/ri';

import Image from 'next/image';
import Link from 'next/link';

import dix31 from '../../public/images/DIX31.png';
import Mail from 'nodemailer/lib/mailer';
import { useEffect } from 'react';

export const Footer = ({ withMember }: { withMember: boolean }) => {
  const currentYear = new Date().getFullYear();
  let inputValue = '';
  function submit(event: any) {
    event.preventDefault();
    const inputElement = document.getElementById(
      'inputNewsletter',
    ) as HTMLInputElement | null;
    if (inputElement) {
      inputValue = inputElement.value;
      console.log(inputValue);
    }
  }

  useEffect(() => {
    const newsletterForm = document.getElementById('newsletter');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', submit);
    }
  }, []);

  return (
    <footer
      className={`relative  text-white pt-4  ${
        withMember
          ? 'bg-[#ADA075] dark:bg-[#6a6145]'
          : 'bg-[#707070] dark:bg-[#6a6145]'
      }`}
    >
      <div className="flex-col  flex lg:flex-row justify-between  place self-auto items-center lg:items-start ">
        <div className="lg:w-1/3 w-full ml-4 flex flex-col ">
          <div className="  text-base font-extrabold mb-4 tracking-wide font-sans text-center lg:text-left">
            Restons en contact !
          </div>

          <p className="text-sm mb-2 lg:w-2/3  flex justify-center items-center lg:text-start text-center  ">
            Retrouvez-nous sur l&apos;une de ces plateformes, nous répondons
            sous 1 à 2 jours ouvrables.
          </p>
          <div className=" flex mt-6 space-x-4 justify-center lg:justify-start mb-6">
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

        <div className="  w-1/3 flex flex-col justify-center ">
          <div className=" text-center text-base font-extrabold mb-4 tracking-wide font-sans ">
            Rejoins nous dans l'aventure Peugeot 306 !
          </div>

          <p className="text-sm mb-2 text-center">
            Inscrivez-vous à notre newsletter pour suivre nos dernières
            actualitées & remises :
          </p>
          <form
            id="newsletter"
            className=" flex lg:flex-row lg:space-x-2 justify-center flex-col text-black"
          >
            <input
              type="email"
              id="inputNewsletter"
              className="flex items-center  lg:mb-0  mb-4"
            />
            {/* <span className="flex items-full"></span> */}
            <button
              type="submit"
              // id="btnNewsletter"
              // onClick={submit()}
              className="text-white bg-[#174191] m-0 rounded-md"
            >
              S'inscrire
            </button>
          </form>
          {/* <div className="mt-32 mb-12">logo peugeot</div> */}
          {/* <picture className="flex justify-center  text-white pr-1  ">
            <Image
              order-2
              src="/images/Logo_AVP2.png"
              alt="Logo Aventure Peugeot"
              width={200}
              height={200}
              className="mt-12 mb-12"
            />
          </picture> */}
        </div>

        <div className=" w-1/3 flex flex-col items-center lg:items-end justify-center lg:my-0 my-4">
          <div className="mr-0 lg:mr-4 ">
            <div className="  text-sm font-extrabold mb-4 text-center lg:text-start">
              Informations :
            </div>
            <ul className="list-disc space-y-2 ml-4 ">
              <li>
                <Link href="/rules" className="hover:text-red-600 text-sm">
                  Règlement du Club
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-red-600 text-sm">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/legalNotice"
                  className="hover:text-red-600 text-sm"
                >
                  Mentions légales
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-red-600 text-sm">
                  Nous contacter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <picture className="flex justify-center  text-white pr-1  ">
        <Image
          order-2
          src="/images/Logo_AVP2.png"
          alt="Logo Aventure Peugeot"
          width={200}
          height={200}
          className=""
        />
      </picture>
      <div className="flex md:flex-row flex-col  w-full justify-between  my-4 ">
        {/* <legend className=" px-4 mx-auto text-center bg-[#707070] text-white"> */}
        {/* <div className="py-4 flex flex-col md:flex-row space-y-8 md:space-y-0"> */}
        <aside className="flex w-full flex-col md:flex-row items-center text-sm tracking-widest space-y-4 md:space-y-0 justify-center md:justify-start my-2 ml-0 md:ml-4">
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

        <aside className="flex w-full md:justify-end justify-center text-sm tracking-widest md:mr-4 my-2 mr-0">
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
      {/* </legend> */}
      {/* </div> */}
    </footer>
  );
};
