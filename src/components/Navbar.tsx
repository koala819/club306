'use client'

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/react'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { FiChevronDown, FiLogIn } from 'react-icons/fi'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

import { MenuItem } from '@/src/types/models'

import { SocialIcons } from '@/src/components/SocialIcons'
import { ThemeSwitcher } from '@/src/components/ThemeSwitcher'

import Avp from '@/public/images/Logo_AVP.png'
import blackLogo from '@/public/images/logoClub306.png'
import whiteLogo from '@/public/images/logoClub306_blanc.png'
import { useTheme } from '@/src/context/ThemeContext'

export const Navbar306 = ({ withMember }: { withMember: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isCompact, setIsCompact] = useState(false)
  const path = usePathname()
  const router = useRouter()
  const { theme } = useTheme()

  const { data: session } = useSession()

  useEffect(() => {
    const onScroll = () => setIsCompact(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSignIn = () => {
    if (
      typeof window !== 'undefined' &&
      !window.location.pathname.includes('/login')
    ) {
      router.push('/login')
    }
  }

  async function handleSignout() {
    signOut({
      redirect: true,
      callbackUrl: `${process.env.NEXT_PUBLIC_CLIENT_URL}/login`,
    })
  }

  const generateMenuItems = (withMember: boolean): MenuItem[] => {
    const items: MenuItem[] = [
      { name: 'LE CLUB', path: '/club' },
      { name: 'LE STAFF', path: '/club/staff' },
      { name: 'DISCORD', path: 'https://discord.gg/uRVtYGpjdV' },
      {
        name: 'BOUTIQUE',
        path: 'https://club306.teampulseshop.com',
      },
      { name: 'EVENT', path: '/event' },
      { name: 'CONTACT', path: '/contact' },
      {
        name: 'ThemeSwitcher',
        component: <ThemeSwitcher withMember={withMember} />,
      },
    ]

    if (withMember) {
      items.unshift({ name: 'ESPACE MEMBRES', path: '/cpanel' })
      items.push({ name: 'déconnexion', onClick: handleSignout })
    } else {
      items.push({ name: 'CONNEXION', path: '/login' })
    }

    return items
  }

  const navLinkClass =
    'degrade-border text-text-light dark:text-text-dark text-sm font-medium tracking-[0.12em] transition-opacity duration-200 hover:opacity-70'

  return (
    <>
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      isBlurred
      className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${
        isCompact
          ? 'pb-0 border-black/5 dark:border-white/10 bg-bg-light/80 dark:bg-bg-dark/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl'
          : 'pb-5 border-transparent bg-bg-light/95 dark:bg-bg-dark/95 shadow-none backdrop-blur-md'
      } ${withMember ? '!bg-light-connect/90 dark:!bg-dark-connect/90' : ''}`}
      style={{ zIndex: 50 }}
      isBordered={false}
      position="static"
      classNames={{
        item: [
          'data-[active=true]:after:bg-principal-light dark:data-[active=true]:after:bg-text-dark',
          isCompact ? 'mt-0' : 'mt-5',
          'flex',
          'relative',
          'h-full',
          'items-center',
          'transition-[margin] duration-300',
          "data-[active=true]:after:content-['']",
          'data-[active=true]:after:absolute',
          'data-[active=true]:after:bottom-0',
          'data-[active=true]:after:left-0',
          'data-[active=true]:after:right-0',
          'data-[active=true]:after:h-[2px]',
          'data-[active=true]:after:rounded-full',
          'data-[active=true]:after:transition-all',
        ],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className={`lg:hidden transition-[margin] duration-300 ${
            isCompact ? 'mt-0' : 'mt-5'
          }`}
        />
        <NavbarBrand className="justify-end lg:justify-start">
          <Link
            href="/"
            aria-current="page"
            color="foreground"
            className="transition-transform duration-300 hover:scale-[1.03]"
          >
            <Image
              src={theme === 'light' ? blackLogo : whiteLogo}
              alt="Club 306 Logo"
              className={`object-contain h-auto transition-all duration-300 ${
                isCompact ? 'mt-0 w-[120px]' : 'mt-3 w-[170px]'
              }`}
              width={170}
              height={50}
            />
          </Link>

          <div
            className={`flex items-center space-x-4 ml-2 transition-all duration-300 ${
              isCompact ? 'mt-0' : 'mt-3 lg:mt-2'
            }`}
          >
            <Image
              src={Avp}
              alt="Logo l'Aventure Peugeot"
              className={`h-auto opacity-90 transition-all duration-300 hover:opacity-100 ${
                isCompact ? 'w-20' : 'w-28'
              }`}
            />
          </div>

          <SocialIcons />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex" justify="center">
        {/* Premier élément avec sous-menu "LE CLUB" et "LE STAFF" */}
        <Dropdown
          className={`
                ${session
              ? 'bg-light-connect dark:bg-dark-connect'
              : 'bg-bg-light dark:bg-bg-dark'
            }
          `}
        >
          <NavbarItem
            isActive={path.includes('/club') || path.includes('/club/staff')}
          >
            <DropdownTrigger>
              <Button
                disableRipple
                className={`${navLinkClass} bg-transparent data-[hover=true]:bg-transparent`}
                endContent={<FiChevronDown className="opacity-60" />}
                radius="sm"
                variant="light"
              >
                LE CLUB
              </Button>
            </DropdownTrigger>
          </NavbarItem>

          {/* Sous-menu pour "LE CLUB" */}
          <DropdownMenu
            aria-label="Le Club submenu"
            itemClasses={{
              base: 'gap-4',
            }}
            className={`
                 ${withMember
                ? 'bg-light-connect dark:bg-dark-connect'
                : 'bg-bg-light dark:bg-bg-dark'
              }`}
          >
            <DropdownItem
              key={'presentation'}
              onClick={() => router.push('/club')}
              className="degrade-border text-text-light dark:text-text-dark"
            >
              PRÉSENTATION
            </DropdownItem>

            <DropdownItem
              key={'staff'}
              onClick={() => router.push('/club/staff')}
              className="degrade-border text-text-light dark:text-text-dark"
            >
              LE STAFF
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem isActive={path.includes('#')}>
          <Link
            href="https://discord.gg/uRVtYGpjdV"
            aria-current="page"
            className={navLinkClass}
          >
            DISCORD
          </Link>
        </NavbarItem>

        <NavbarItem isActive={path.includes('/event')}>
          <Link
            href="/event"
            aria-current="page"
            className={navLinkClass}
          >
            EVENT
          </Link>
        </NavbarItem>

        <NavbarItem isActive={path.includes('teampulseshop')}>
          <Link
            href="https://club306.teampulseshop.com"
            target="_blank"
            aria-current="page"
            className={navLinkClass}
          >
            BOUTIQUE
          </Link>
        </NavbarItem>

        <NavbarItem
          isActive={path.includes('/contact')}
          className="hidden lg:flex"
        >
          <Link
            href="/contact"
            aria-current="page"
            className={navLinkClass}
          >
            CONTACT
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden lg:flex">
        <NavbarItem>
          {session ? (
            <Dropdown
              className={`
                ${session
                  ? 'bg-light-connect dark:bg-dark-connect'
                  : 'bg-bg-light dark:bg-bg-dark'
                }
          `}
            >
              <DropdownTrigger>
                <Button
                  radius="full"
                  size={isCompact ? 'sm' : 'md'}
                  className={`mr-6 btn-custom shadow-sm transition-all duration-300 hover:-translate-y-px hover:shadow-md ${
                    isCompact ? 'mb-0 px-3.5 text-sm' : 'mb-5 px-5'
                  }`}
                >
                  Espace membres
                </Button>
              </DropdownTrigger>

              <DropdownMenu
                aria-label="Espace membres submenu"
                itemClasses={{
                  base: 'gap-4',
                }}
                className={`${withMember
                  ? 'bg-light-connect dark:bg-dark-connect'
                  : 'bg-bg-light dark:bg-bg-dark'
                  }`}
              >
                <DropdownItem
                  key={'Mon Compte'}
                  onClick={() => router.push('/cpanel')}
                  className=" data-[hover=true]:text-text-dark data-[hover=true]:bg-principal-light navbarLinkHover"
                >
                  Mon compte
                </DropdownItem>

                <DropdownItem
                  key={'Déconnexion'}
                  onClick={() => handleSignout()}
                  className=" data-[hover=true]:text-text-dark data-[hover=true]:bg-principal-light navbarLinkHover"
                >
                  Déconnexion
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <div
              className={`mr-4 flex items-center gap-3 transition-all duration-300 ${
                isCompact ? 'mb-0' : 'mb-5'
              }`}
            >
              <Button
                as={Link}
                href="/membership"
                radius="full"
                size={isCompact ? 'sm' : 'md'}
                className={`bg-principal-light font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-px hover:shadow-md hover:brightness-110 dark:bg-principal-dark dark:text-bg-dark ${
                  isCompact ? 'min-h-8 px-3.5 text-sm' : 'min-h-9 px-5'
                }`}
              >
                Adhérer
              </Button>
              <Button
                as={Link}
                onClick={handleSignIn}
                href={'#'}
                variant="light"
                size={isCompact ? 'sm' : 'md'}
                startContent={<FiLogIn className={isCompact ? 'text-base' : 'text-lg'} />}
                className={`bg-transparent px-1 font-medium text-principal-light transition-all duration-300 hover:bg-transparent hover:text-principal-light/70 dark:text-principal-dark dark:hover:text-principal-dark/70 ${
                  isCompact ? 'min-h-8 text-sm gap-1' : 'min-h-9 gap-1.5'
                }`}
              >
                Connexion
              </Button>
            </div>
          )}

          <div
            className={`transition-[margin] duration-300 ${
              isCompact ? 'mb-0' : 'mb-5'
            }`}
          >
            <ThemeSwitcher withMember={withMember} compact={isCompact} />
          </div>
        </NavbarItem>
      </NavbarContent>

      {/* MOBILE VIEW */}
      <NavbarMenu className="mt-4">
        <SocialIcons isMobile />
        {generateMenuItems(withMember).map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            {item.component ? (
              item.component
            ) : item.onClick ? (
              <Button onClick={item.onClick} color="danger" variant="light">
                {item.name.toUpperCase()}
              </Button>
            ) : (
              <Link
                href={item.path || '#'}
                size="lg"
                className="navbarLinkHover"
              >
                {item.name}
              </Link>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    <div
      aria-hidden
      className={`shrink-0 transition-[height] duration-300 ${
        isCompact ? 'h-16' : 'h-28'
      }`}
    />
    </>
  )
}
