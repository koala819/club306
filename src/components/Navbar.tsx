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
import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

import { ThemeSwitcher } from '@/components/cpanel/layout/ThemeSwitcher';

// import whitelogo from '@/public/images/Navbar_logo.svg'
// import blackLogo from '@/public/images/Navbar_logo_dark.png'

export const Navbar306 = ({ withMember }: { withMember?: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const path = usePathname()
  const router = useRouter()
  const {theme} = useTheme()

  // const logo = theme === 'dark' ? blackLogo : whitelogo
  const toggleTheme = theme === 'dark' ? 'light' : 'dark';

  const menuItems = [
    { name: 'LE CLUB', path: '/' },
    { name: 'DISCORD', path: '/' },
    { name: 'EVENT', path: '/' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="pb-4"
      isBordered={true}
      position="sticky"
      classNames={{
        item: [
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
          'data-[active=true]:after:bg-primary',
          'dark:data-[active=true]:after:bg-orange-600',
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
              src="/images/logoClub306.png"
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

          <NavbarItem isActive={path === '/'} >

            <DropdownTrigger>
              <Button
                disableRipple
                className={` ${
                path === '/'
                ? 'font-bold text-base data-[hover=true]:bg-transparent text-[#174191]'
                : 'p-0 text-base data-[hover=true]:bg-transparent hover:text-gray-600'
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
          className="w-[200px] text-[#174191]"
          itemClasses={{
          base: 'gap-4',
          }}
          >
            <DropdownItem
              onClick={() => router.push('/club')}
              >
              LE CLUB
            </DropdownItem>

            <DropdownItem
              onClick={() => router.push('/club/staff')}
              >
              LE STAFF
            </DropdownItem>
        </DropdownMenu>
        </Dropdown>

        {/* Deuxième élément de la barre de navigation */}

        <NavbarItem isActive={path.includes('/discord')}>
          <Link href="/discord" aria-current="page" className='text-[#174191]'>
          DISCORD
          </Link>
        </NavbarItem>

        {/* Troisième élément de la barre de navigation */}

        <NavbarItem isActive={path.includes('/event')}>
          <Link href="/event" aria-current="page" className='text-[#174191]'>
          EVENT
          </Link>
        </NavbarItem>

        {/* Quatrième élément de la barre de navigation */}

        <NavbarItem isActive={path.includes('/contact')} className="hidden sm:flex" >
          <Link href="/contact" aria-current="page" className='text-[#174191]'>
          CONTACT
          </Link>
        </NavbarItem>

      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>

          <Button as={Link} color="primary" href="auth/signIn" className='mr-10'>
            Connexion
          </Button>
            {/* <ThemeSwitcher /> */}
            <ThemeSwitcher/>

        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="mt-8">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={'foreground'}
              // color={
              //   index === 2
              //     ? "primary"
              //     : index === menuItems.length - 1
              //     ? "danger"
              //     : "foreground"
              // }
              className="w-full hover:bg-rose-500 hover:text-white p-2 hover:rounded-xl hover:w-1/2 "
              href={item.path}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      
    </Navbar>
  )
}