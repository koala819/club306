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
import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

import { MenuItem } from '@/src/types/models'

import { ThemeSwitcher } from '@/src/components/ThemeSwitcher'

import blackLogo from '@/public/images/logoClub306.png'
import whiteLogo from '@/public/images/logoClub306_blanc.png'
import { useTheme } from '@/src/context/ThemeContext'

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

  const generateMenuItems = (withMember: boolean): MenuItem[] => {
    const items: MenuItem[] = [
      { name: 'LE CLUB', path: '/club' },
      { name: 'LE STAFF', path: '/club/staff' },
      { name: 'DISCORD', path: 'https://discord.gg/Wn7aNTub' },
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
                    ? 'degrade-border text-text-light dark:text-text-dark'
                    : 'degrade-border text-text-light dark:text-text-dark'
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
              className="degrade-border text-text-light dark:text-text-dark"
            >
              PRÉSENTATION
            </DropdownItem>

            <DropdownItem
              onClick={() => router.push('/club/staff')}
              className="degrade-border text-text-light dark:text-text-dark"
            >
              LE STAFF
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        {/* Deuxième élément de la barre de navigation */}

        <NavbarItem isActive={path.includes('#')}>
          <Link
            href="https://discord.gg/Wn7aNTub"
            aria-current="page"
            className="degrade-border text-text-light dark:text-text-dark"
          >
            DISCORD
          </Link>
        </NavbarItem>

        {/* Troisième élément de la barre de navigation */}

        <NavbarItem isActive={path.includes('/event')}>
          <Link
            href="/event"
            aria-current="page"
            className="degrade-border text-text-light dark:text-text-dark"
          >
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
            className="degrade-border text-text-light dark:text-text-dark"
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
                  <Button className="mr-10 mb-5 btn-custom">
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
                  className=" data-[hover=true]:text-text-dark data-[hover=true]:bg-principal-light navbarLinkHover"
                >
                  Mon compte
                </DropdownItem>

                <DropdownItem
                  onClick={() => handleSignout()}
                  className=" data-[hover=true]:text-text-dark data-[hover=true]:bg-principal-light navbarLinkHover"
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
              className="mr-10 border-transparent btn-custom"
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
  )
}
