import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { BsFacebook } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { IoLogoDiscord } from 'react-icons/io5'
import { LuCopyleft } from 'react-icons/lu'
import { RiInstagramFill } from 'react-icons/ri'

import Image from 'next/image'
import Link from 'next/link'

import dix31 from '../../public/images/DIX31.png'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// import { useEffect } from 'react';

export const Footer = ({ withMember }: { withMember: boolean }) => {
  const currentYear = new Date().getFullYear()
  // let inputValue = '';
  // function submit(event: any) {
  //   event.preventDefault();
  //   const inputElement = document.getElementById(
  //     'inputNewsletter',
  //   ) as HTMLInputElement | null;
  //   if (inputElement) {
  //     inputValue = inputElement.value;
  //     console.log(inputValue);
  //   }
  // }

  // useEffect(() => {
  //   const newsletterForm = document.getElementById('newsletter');
  //   if (newsletterForm) {
  //     newsletterForm.addEventListener('submit', submit);
  //   }
  // }, []);

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("L'e-mail est obligatoire")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "L'e-mail n'est pas valide",
      ),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  async function handleSendMail(values: any) {
    const data = {
      email: values.email,
      from: 'newsLetter',
    }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }

    fetch(`${process.env.CLIENT_URL}/api/mail`, options)
      .then((response: any) => {
        console.log('respons', response)
        if (response.status === 200) {
          toast.success('Merci de votre inscription à la newsletter')
        } else {
          toast.error("Une erreur s'est produite", response.statusText)
        }
      })
      .catch((error: any) => {
        toast.error("Une erreur s'est produite", error)
      })
  }

  return (
    <footer
      className={`relative  text-white pt-4  ${
        withMember
          ? 'bg-[#6a6145] dark:bg-[#6a6145]'
          : 'bg-[#707070] dark:bg-[#707070]'
      }`}
    >
      <div className="flex-col  flex lg:flex-row justify-between  place self-auto items-center lg:items-start ">
        <div className="lg:w-1/3 w-full lg:ml-4 flex flex-col ">
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
                className="hover:fill-blue-500 cursor-pointer"
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
          {/* btn submit */}
          <form
            onSubmit={handleSubmit(handleSendMail)}
            className="flex flex-col lg:justify-center lg:mx-auto mt-8 space-y-3 md:space-y-0 md:flex-row"
          >
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, value } }) => (
                <input
                  id="email"
                  type="email"
                  className="px-4 py-2 text-[#174191] bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Entrez votre email"
                  onChange={onChange}
                  value={value}
                />
              )}
            />

            {errors.email && (
              <div className="text-red-500 font-mono text-xs">
                {errors.email.message}
              </div>
            )}

            <button
              type="submit"
              className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-red-900 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
            >
              S&apos;abonner
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
                <Link href="/rules" className="hover:text-[#174191] text-sm">
                  Règlement du Club
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#174191] text-sm">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/legalNotice"
                  className="hover:text-[#174191] text-sm"
                >
                  Mentions légales
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-[#174191] text-sm">
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
            className="ml-1 mr-1 hover:underline hover:text-[#174191]"
          >
            Stevens
          </Link>{' '}
          and
          <Link
            href="https://www.linkedin.com/in/mehdi-a-116569290/"
            target="_blank"
            className="ml-1 hover:underline hover:text-[#174191]"
          >
            {' '}
            Mehdi
          </Link>
        </aside>
      </div>
      {/* </legend> */}
      {/* </div> */}
    </footer>
  )
}
