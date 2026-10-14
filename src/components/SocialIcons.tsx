import { Link } from "@heroui/react"
import { BsFacebook } from 'react-icons/bs'
import { FaYoutube } from 'react-icons/fa'
import { IoLogoDiscord } from 'react-icons/io5'
import { RiInstagramFill } from 'react-icons/ri'

const socialLinks = [
  {
    href: 'https://www.facebook.com/club306france/',
    icon: (
      <BsFacebook
        size={24}
        className="hover:fill-blue-600 transition-colors duration-200"
      />
    ),
    label: 'Facebook',
  },
  {
    href: 'https://discord.gg/uRVtYGpjdV',
    icon: (
      <IoLogoDiscord
        size={26}
        className="hover:fill-blue-700 transition-colors duration-200"
      />
    ),
    label: 'Discord',
  },
  {
    href: 'https://www.instagram.com/club306officielfrance/',
    icon: (
      <RiInstagramFill
        size={26}
        className="hover:fill-blue-500 transition-colors duration-200"
      />
    ),
    label: 'Instagram',
  },
  {
    href: 'https://www.youtube.com/@sylvaintroiscentsix',
    icon: (
      <FaYoutube
        size={26}
        className="hover:fill-red-600 transition-colors duration-200"
      />
    ),
    label: 'YouTube',
  },
]

export const SocialIcons = ({ isMobile = false }: { isMobile?: boolean }) => {
  const containerClass = isMobile
    ? 'flex justify-center space-x-6 w-full py-4'
    : 'hidden lg:flex items-center space-x-3 ml-6'

  return (
    <div className={containerClass}>
      {socialLinks.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          target="_blank"
          className="flex h-9 w-9 items-center justify-center rounded-full text-text-light/80 transition-all duration-200 hover:bg-principal-light/10 hover:text-text-light hover:scale-110 dark:text-text-dark/80 dark:hover:bg-principal-dark/15 dark:hover:text-text-dark"
          aria-label={social.label}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  )
}
