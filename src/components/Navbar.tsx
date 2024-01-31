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
import { NextUIProvider } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

import { useTheme } from 'next-themes'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

import { ThemeSwitcher } from '@/components/ThemeSwitcher'

// Interface pour déclarer le type de handleThemeChange
interface Navbar306Props {
  withMember?: boolean
}

const blacklogo = '/images/logoClub306.png'
const whitelogo = '/images/logoClub306_blanc.png'

export const Navbar306 = ({ withMember }: { withMember: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const path = usePathname()
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [logo, setLogo] = useState(blacklogo)

  // Fonction de mise à jour du thème
  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)

    // Condition pour déterminer le logo en fonction du thème
    if (newTheme === 'light') {
      setLogo(blacklogo)
    } else {
      setLogo(whitelogo)
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  const menuItems = [
    { name: 'LE CLUB', path: '/' },
    { name: 'DISCORD', path: '/' },
    { name: 'EVENT', path: '/' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <Navbar
          onMenuOpenChange={setIsMenuOpen}
          maxWidth="full"
          className={`bg-bg-light dark:bg-bg-dark pb-4 ${
            withMember ? 'bg-[#ADA075] dark:bg-[#6a6145]' : ''
          }`}
          isBordered={true}
          position="sticky"
          classNames={{
            item: [
              `${withMember ? 'data-[active=true]:after:bg-principal-light dark:data-[active=true]:after:bg-text-dark' : 'data-[active=true]:after:bg-principal-light dark:data-[active=true]:after:bg-principal-dark'}`,
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
              className="sm:hidden"
            />
            <NavbarBrand>
              <Link href="/" aria-current="page" color="foreground">
                {
                  <Image
                    src={logo}
                    alt="Club 306 Logo"
                    className="object-fill mt-3 "
                    width={170}
                    height={50}
                  />
                }
              </Link>
            </NavbarBrand>
          </NavbarContent>
          <NavbarContent className="hidden sm:flex " justify="center">
            {/* Premier élément avec sous-menu "LE CLUB" et "LE STAFF" */}

            <Dropdown>
              <NavbarItem isActive={path === '/'}>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className={` ${
                      path === '/'
                        ? 'text-base text-principal-light dark:text-text-dark data-[hover=true]:text-text-dark data-[hover=true]:bg-principal-light dark:hover:bg-principal-dark dark:hover:text-bg-dark  '
                        : 'p-0 text-base   '
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
                 ${withMember ? 'bg-[#ADA075] dark:bg-[#6a6145]' : 'bg-bg-light dark:bg-bg-dark'}`}
              >
                <DropdownItem
                  onClick={() => router.push('/club')}
                  className="text-principal-light dark:text-text-dark data-[hover=true]:text-text-dark data-[hover=true]:bg-principal-light dark:hover:bg-principal-dark dark:hover:text-bg-dark "
                >
                  LE CLUB
                </DropdownItem>

                <DropdownItem
                  onClick={() => router.push('/club/staff')}
                  className="text-principal-light dark:text-text-dark data-[hover=true]:text-text-dark data-[hover=true]:bg-principal-light dark:hover:bg-principal-dark dark:hover:text-bg-dark "
                >
                  LE STAFF
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            {/* Deuxième élément de la barre de navigation */}

            <NavbarItem isActive={path.includes('/discord')}>
              <Link
                href="/discord"
                aria-current="page"
                className="text-principal-light rounded-lg p-2 dark:text-text-dark hover:text-text-dark hover:bg-principal-light dark:hover:bg-principal-dark dark:hover:text-bg-dark"
              >
                DISCORD
              </Link>
            </NavbarItem>

            {/* Troisième élément de la barre de navigation */}

            <NavbarItem isActive={path.includes('/event')}>
              <Link
                href="/event"
                aria-current="page"
                className="text-principal-light rounded-lg p-2 dark:text-text-dark hover:text-text-dark hover:bg-principal-light dark:hover:bg-principal-dark dark:hover:text-bg-dark"
              >
                EVENT
              </Link>
            </NavbarItem>

            {/* Quatrième élément de la barre de navigation */}

            <NavbarItem
              isActive={path.includes('/contact')}
              className="hidden sm:flex"
            >
              <Link
                href="/contact"
                aria-current="page"
                className="text-principal-light rounded-lg p-2 dark:text-text-dark hover:text-text-dark hover:bg-principal-light dark:hover:bg-principal-dark dark:hover:text-bg-dark"
              >
                CONTACT
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end" className="flex ">
            <NavbarItem>
              <Button
                as={Link}
                href="auth/signIn"
                className="mr-10 border-transparent bg-principal-light text-text-dark hover:bg-transparent hover:text-principal-light hover:border-principal-light border-2
                 dark:bg-principal-dark dark:text-bg-dark dark:hover:bg-transparent dark:hover:border-principal-dark dark:hover:text-principal-dark"
              >
                Connexion
              </Button>
              <ThemeSwitcher
                onThemeChange={handleThemeChange}
                withMember={withMember}
              />
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu className="mt-8">
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  //color={theme === 'light' ? 'primary' : 'secondary'}
                  href={item.path}
                  size="lg"
                >
                  {item.name}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </NextThemesProvider>
    </NextUIProvider>
  )
}
