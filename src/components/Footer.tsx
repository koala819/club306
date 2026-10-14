'use client'

import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { BsFacebook } from 'react-icons/bs'
import { FaYoutube } from 'react-icons/fa'
import { IoLogoDiscord } from 'react-icons/io5'
import { LuCopyleft } from 'react-icons/lu'
import { RiInstagramFill } from 'react-icons/ri'

import Image from 'next/image'
import Link from 'next/link'

import dix31 from '@/public/images/DIX31.png'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const LINKEDIN_XAVIER =
  'https://www.linkedin.com/in/xavier%F0%9F%92%BB-genolhac-79a98390/'

const socialLinks = [
  {
    href: 'https://www.facebook.com/club306france/',
    label: 'Facebook',
    icon: BsFacebook,
    size: 22,
  },
  {
    href: 'https://discord.gg/uRVtYGpjdV',
    label: 'Discord',
    icon: IoLogoDiscord,
    size: 24,
  },
  {
    href: 'https://www.instagram.com/club306officielfrance/',
    label: 'Instagram',
    icon: RiInstagramFill,
    size: 24,
  },
  {
    href: 'https://www.youtube.com/@sylvaintroiscentsix',
    label: 'YouTube',
    icon: FaYoutube,
    size: 24,
  },
]

const infoLinks = [
  { href: '/status', label: 'Statuts', download: true },
  { href: '/rules', label: 'Règlement intérieur' },
  { href: '/RGPD', label: 'RGPD' },
  { href: '/legalNotice', label: 'Mentions légales' },
  { href: '/contact', label: 'Nous contacter' },
]

export const Footer = ({ withMember }: { withMember: boolean }) => {
  const currentYear = new Date().getFullYear()

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

  async function handleSendMail(values: { email: string }) {
    const data = {
      email: values.email,
      from: 'newsLetter',
    }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }

    fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/api/mail`, options)
      .then((response) => {
        if (response.status === 200) {
          toast.success('Merci de votre inscription à la newsletter')
        } else {
          toast.error(
            response.statusText
              ? `Une erreur s'est produite : ${response.statusText}`
              : "Une erreur s'est produite",
          )
        }
      })
      .catch((error) => {
        toast.error(
          error instanceof Error
            ? `Une erreur s'est produite : ${error.message}`
            : "Une erreur s'est produite",
        )
      })
  }

  return (
    <footer
      className={`relative border-t border-white/10 text-white ${
        withMember
          ? 'bg-[#6a6145] dark:bg-[#6a6145]'
          : 'bg-[#5c5c5c] dark:bg-[#2a2a3d]'
      }`}
    >
      <div className="flex w-full flex-col items-center justify-between gap-10 px-4 py-8 lg:flex-row lg:items-start lg:gap-6">
        {/* Contact / réseaux */}
        <div className="flex w-full flex-col items-center lg:w-1/3 lg:items-start lg:pl-0">
          <h3 className="mb-3 w-full text-center text-base font-semibold tracking-wide lg:text-left">
            Restons en contact !
          </h3>
          <p className="mb-5 w-full text-center text-sm leading-relaxed text-white/75 lg:text-left">
            Retrouvez-nous sur l&apos;une de ces plateformes, nous répondons sous
            1 à 2 jours ouvrables.
          </p>
          <div className="flex w-full justify-center gap-3 lg:justify-start">
            {socialLinks.map(({ href, label, icon: Icon, size }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:scale-110 hover:bg-white/20"
              >
                <Icon size={size} />
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex w-full flex-col lg:w-1/3">
          <h3 className="mb-3 text-center text-base font-semibold tracking-wide">
            Rejoins-nous dans l&apos;aventure Peugeot 306 !
          </h3>
          <p className="mb-5 text-center text-sm leading-relaxed text-white/75">
            Inscrivez-vous à notre newsletter pour suivre nos dernières
            actualités & remises :
          </p>
          <form
            onSubmit={handleSubmit(handleSendMail)}
            className="mx-auto flex w-full flex-col gap-3 sm:max-w-md sm:flex-row sm:items-start"
          >
            <div className="w-full flex-1">
              <Controller
                name="email"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-full border border-white/15 bg-white/95 px-4 py-2.5 text-sm text-[#174191] outline-none transition focus:border-white/40 focus:ring-2 focus:ring-white/20 dark:bg-white/10 dark:text-white dark:placeholder:text-white/50"
                    placeholder="Entrez votre email"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
              {errors.email && (
                <p className="mt-1.5 px-2 text-xs text-red-300">
                  {errors.email.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-white px-6 py-2.5 text-sm font-medium text-[#174191] shadow-sm transition-all duration-200 hover:-translate-y-px hover:bg-white/90 hover:shadow-md sm:w-auto dark:bg-principal-dark dark:text-bg-dark"
            >
              S&apos;abonner
            </button>
          </form>
        </div>

        {/* Infos */}
        <div className="flex w-full flex-col items-center lg:w-1/3 lg:items-end">
          <h3 className="mb-3 text-base font-semibold tracking-wide">
            Informations
          </h3>
          <ul className="space-y-2 text-center lg:text-right">
            {infoLinks.map((item) => (
              <li key={item.href}>
                {item.download ? (
                  <div className="flex items-center justify-center gap-2 lg:justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        const link = document.createElement('a')
                        link.href = '/Club-306-status.pdf'
                        link.download = 'statuts-club306.pdf'
                        link.click()
                      }}
                      className="rounded-full p-1 text-white/70 transition hover:bg-white/10 hover:text-white"
                      title="Télécharger les statuts en PDF"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </button>
                    <Link
                      href={item.href}
                      className="text-sm text-white/80 transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="flex w-full flex-col items-center justify-between gap-3 px-4 py-4 text-xs tracking-wide text-white/60 md:flex-row md:text-sm">
          <aside className="flex items-center gap-1.5">
            <LuCopyleft size={16} className="opacity-80" />
            <span>{currentYear} Created by</span>
            <Link
              href={LINKEDIN_XAVIER}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-0.5 inline-flex items-center opacity-90 transition hover:opacity-100"
              title="Xavier Genolhac sur LinkedIn"
            >
              <Image
                src={dix31}
                alt="DIX31 — Xavier Genolhac"
                height={16}
                className="brightness-0 invert"
              />
            </Link>
          </aside>

          <aside className="flex flex-wrap items-center justify-center gap-1">
            <span>Design by</span>
            <Link
              href="https://www.linkedin.com/in/stevens-ramos-b188b4290/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/80 transition hover:text-white"
            >
              Stevens
            </Link>
            <span>and</span>
            <Link
              href="https://www.linkedin.com/in/mehdi-a-116569290/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/80 transition hover:text-white"
            >
              Mehdi
            </Link>
          </aside>
        </div>
      </div>
    </footer>
  )
}
