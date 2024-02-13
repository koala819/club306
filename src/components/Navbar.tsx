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
} from '@nextui-org/react'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

import { ThemeSwitcher } from '@/components/ThemeSwitcher'

import { useTheme } from '@/context/ThemeContext'

const blackLogo = '/images/logoClub306.png'
const whiteLogo = '/images/logoClub306_blanc.png'

export const Navbar306 = ({ withMember }: { withMember: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const path = usePathname()
  const router = useRouter()
  const { theme } = useTheme()

  const { data: session } = useSession()

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
      callbackUrl: `${process.env.CLIENT_URL}/login`,
    })
  }

  const menuItems = [
    { name: 'LE CLUB', path: '/club' },
    { name: 'DISCORD', path: '#' },
    { name: 'EVENT', path: '/event' },
    { name: 'CONTACT', path: '/contact' },
    { name: 'CONNEXION', path: '/login' },
    {
      name: 'ThemeSwitcher',
      component: <ThemeSwitcher withMember={withMember} />,
    },
  ]

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className={`bg-bg-light dark:bg-bg-dark pb-5 ${
        withMember ? 'bg-light-connect dark:bg-dark-connect' : ''
      }`}
      isBordered={true}
      position="sticky"
      classNames={{
        item: [
          `${
            withMember
              ? 'data-[active=true]:after:bg-principal-light dark:data-[active=true]:after:bg-text-dark'
              : 'data-[active=true]:after:bg-principal-light dark:data-[active=true]:after:bg-text-dark'
          }`,
          'mt-5',
          'flex',
          'relative',
          'h-full',
          'items-center',
          "data-[active=true]:after:content-['']",
          'data-[active=true]:after:absolute',
          'data-[active=true]:after:bottom-0',
          'data-[active=true]:after:left-0',
          'data-[active=true]:after:right-0',
          'data-[active=true]:after:h-[2px]',
          'data-[active=true]:after:rounded-[2px]',
        ],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden mt-5"
        />
        <NavbarBrand className="justify-end lg:justify-start">
          <Link href="/" aria-current="page" color="foreground">
            <Image
              src={theme === 'light' ? blackLogo : whiteLogo}
              // src={logo}
              alt="Club 306 Logo"
              className="object-fill mt-3"
              width={170}
              height={50}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex" justify="center">
        {/* Premier élément avec sous-menu "LE CLUB" et "LE STAFF" */}

        <Dropdown
          className={`
                ${
                  session
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
                className={` ${
                  path.includes('/club')
                    ? 'data-[hover=true]:text-text-dark data-[hover=true]:bg-principal-light navbarliensHover'
                    : 'data-[hover=true]:text-text-dark data-[hover=true]:bg-principal-light navbarliensHover'
                }`}
                endContent={<FiChevronDown />}
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
                 ${
                   withMember
                     ? 'bg-light-connect dark:bg-dark-connect'
                     : 'bg-bg-light dark:bg-bg-dark'
                 }`}
          >
            <DropdownItem
              onClick={() => router.push('/club')}
              className="navbarliensHover data-[hover=true]:text-text-dark data-[hover=true]:bg-principal-light"
            >
              PRÉSENTATION
            </DropdownItem>

            <DropdownItem
              onClick={() => router.push('/club/staff')}
              className="navbarliensHover data-[hover=true]:text-text-dark data-[hover=true]:bg-principal-light"
            >
              LE STAFF
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        {/* Deuxième élément de la barre de navigation */}

        <NavbarItem isActive={path.includes('#')}>
          <Link href="#" aria-current="page" className="navbarliensHover">
            DISCORD
          </Link>
        </NavbarItem>

        {/* Troisième élément de la barre de navigation */}

        <NavbarItem isActive={path.includes('/event')}>
          <Link href="/event" aria-current="page" className="navbarliensHover">
            EVENT
          </Link>
        </NavbarItem>

        {/* Quatrième élément de la barre de navigation */}

        <NavbarItem
          isActive={path.includes('/contact')}
          className="hidden lg:flex"
        >
          <Link
            href="/contact"
            aria-current="page"
            className="navbarliensHover"
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
                ${
                  session
                    ? 'bg-light-connect dark:bg-dark-connect'
                    : 'bg-bg-light dark:bg-bg-dark'
                }
          `}
            >
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    className="mr-10 mb-5 border-transparent bg-principal-light text-text-dark hover:bg-transparent hover:text-principal-light hover:border-principal-light border-2
                        dark:bg-principal-dark dark:text-bg-dark dark:hover:bg-transparent dark:hover:border-principal-dark dark:hover:text-principal-dark"
                  >
                    Espace membres
                  </Button>
                </DropdownTrigger>
              </NavbarItem>

              <DropdownMenu
                aria-label="Espace membres submenu"
                itemClasses={{
                  base: 'gap-4',
                }}
                className={`${
                  withMember
                    ? 'bg-light-connect dark:bg-dark-connect'
                    : 'bg-bg-light dark:bg-bg-dark'
                }`}
              >
                <DropdownItem
                  onClick={() => router.push('/cpanel')}
                  className=" data-[hover=true]:text-text-dark data-[hover=true]:bg-principal-light navbarliensHover"
                >
                  Mon compte
                </DropdownItem>

                <DropdownItem
                  onClick={() => handleSignout()}
                  className=" data-[hover=true]:text-text-dark data-[hover=true]:bg-principal-light navbarliensHover"
                >
                  Déconnexion
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Button
              as={Link}
              onClick={handleSignIn}
              href={'#'}
              className="mr-10 border-transparent bg-principal-light text-text-dark hover:bg-transparent hover:text-principal-light hover:border-principal-light border-2
                   dark:bg-principal-dark dark:text-bg-dark dark:hover:bg-transparent dark:hover:border-principal-dark dark:hover:text-principal-dark"
            >
              Connexion
            </Button>
          )}

          <ThemeSwitcher
            // onThemeChange={handleThemeChange}
            withMember={withMember}
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="mt-4">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            {item.component ? (
              item.component
            ) : (
              <Link href={item.path} size="lg" className="navbarliensHover">
                {item.name}
              </Link>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
