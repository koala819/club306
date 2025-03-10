'use client'

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  User,
} from '@heroui/react'
import { signOut, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import {
  AiOutlineCalendar,
  AiOutlineLogout,
  AiOutlineUser,
} from 'react-icons/ai'
import { BiMenu } from 'react-icons/bi'
import { BsDatabaseFillLock } from 'react-icons/bs'
import { FaUserFriends } from 'react-icons/fa'
import { GiCash, GiMechanicGarage } from 'react-icons/gi'
import { IoColorPalette } from 'react-icons/io5'
import { MdAddToPhotos, MdEditCalendar, MdQueryStats } from 'react-icons/md'
import { TbHomeHeart } from 'react-icons/tb'

import { useRouter } from 'next/navigation'

// import { Avatar, AvatarFallback } from '@/components/ui/avatar'
// import { Button } from '@/components/ui/button'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu'
import { ThemeSwitcher } from './ThemeSwitcher'

import { onlyStaff, returnMemberInfo } from '@/src/lib/supabase'

export default function BurgerMenu() {
  const [staffMember, setStaffMember] = useState(false)
  const [name, setName] = useState('')
  const router = useRouter()
  const { data: dataSession } = useSession()
  const iconClasses = 'mr-2 h-4 w-4'

  useEffect(() => {
    async function fetchData() {
      const result = await onlyStaff(dataSession?.user?.email)
      setStaffMember(result)

      const data = await returnMemberInfo(dataSession?.user?.email)
      setName(() => data.first_name + ' ' + data.last_name)
    }

    if (dataSession !== undefined) {
      fetchData()
    }
  }, [dataSession])

  async function handleSignout() {
    signOut({
      redirect: true,
      callbackUrl: `${process.env.NEXT_PUBLIC_CLIENT_URL}/login`,
    })
  }

  const DropdownContent = () => (
    <Dropdown>
      <DropdownTrigger>
        <Button color={'primary'} variant={'shadow'} className="capitalize">
          <BiMenu size={80} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Custom item styles"
        disabledKeys={['fake', 'profile']}
        className="p-3"
        itemClasses={{
          base: [
            'rounded-md',
            'text-default-500',
            'transition-opacity',
            'data-[selectable=true]:focus:bg-default-50',
            'data-[pressed=true]:opacity-70',
            'data-[focus-visible=true]:ring-default-500',
          ],
        }}
      >
        <DropdownSection aria-label="Member Menu" showDivider>
          <DropdownItem
            isReadOnly
            key="profile"
            className="h-14 gap-2 opacity-100"
          >
            <User
              name={name}
              description={dataSession?.user?.email}
              classNames={{
                name: 'text-default-600',
                description: 'text-default-500',
              }}
            />
          </DropdownItem>
          <DropdownItem
            key="infos"
            startContent={<AiOutlineUser className={iconClasses} />}
            onClick={() => router.push('/cpanel/infos')}
          >
            Mes Informations
          </DropdownItem>
          <DropdownItem
            key="addCar"
            startContent={<MdAddToPhotos className={iconClasses} />}
            onClick={() => router.push('/cpanel/addCar')}
          >
            Ajouter une voiture
          </DropdownItem>
          <DropdownItem
            key="garage"
            startContent={<GiMechanicGarage className={iconClasses} />}
            onClick={() => router.push('/cpanel/garage')}
          >
            Mon Garage
          </DropdownItem>
          <DropdownItem
            key="event"
            startContent={<AiOutlineCalendar className={iconClasses} />}
            onClick={() => router.push('/event')}
          >
            Saison {new Date().getFullYear()}
          </DropdownItem>
          <DropdownItem
            key="partners"
            startContent={<FaUserFriends className={iconClasses} />}
            onClick={() => router.push('/cpanel/partners')}
          >
            Partenaires
          </DropdownItem>
          <DropdownItem
            key="home"
            startContent={<TbHomeHeart className={iconClasses} />}
            onClick={() => router.push('/')}
          >
            Retour à l'accueil
          </DropdownItem>
        </DropdownSection>
        {staffMember ? (
          <DropdownSection aria-label="Only Staff Section" showDivider>
            <DropdownItem
              key="stats"
              startContent={<MdQueryStats className={`{iconClasses}`} />}
              className="text-danger"
              color="danger"
              onClick={() => router.push('/cpanel/admin/stats')}
            >
              Statistiques
            </DropdownItem>
            <DropdownItem
              key="colors"
              startContent={<IoColorPalette className={`{iconClasses}`} />}
              className="text-danger"
              color="danger"
              onClick={() => router.push('/cpanel/admin/colors')}
            >
              Gérer les couleurs
            </DropdownItem>
            <DropdownItem
              key="partnersAdmin"
              startContent={<GiCash className={`{iconClasses}`} />}
              className="text-danger"
              color="danger"
              onClick={() => router.push('/cpanel/admin/partners')}
            >
              Partenaires
            </DropdownItem>
            <DropdownItem
              key="eventAdmin"
              startContent={<MdEditCalendar className={`{iconClasses}`} />}
              className="text-danger"
              color="danger"
              onClick={() => router.push('/cpanel/admin/event')}
            >
              Saison {new Date().getFullYear()}
            </DropdownItem>
            <DropdownItem
              key="db"
              startContent={<BsDatabaseFillLock className={`{iconClasses}`} />}
              className="text-danger"
              color="danger"
              onClick={() => router.push('/cpanel/admin/supabase')}
            >
              Base de données
            </DropdownItem>
            <DropdownItem
              key="museum"
              startContent={<BsDatabaseFillLock className={`{iconClasses}`} />}
              className="text-danger"
              color="danger"
              onClick={() => router.push('/cpanel/admin/old-garage')}
            >
              Vieux Garage
            </DropdownItem>
          </DropdownSection>
        ) : (
          <DropdownSection aria-label="Fake section">
            <DropdownItem key="fake"></DropdownItem>
          </DropdownSection>
        )}

        <DropdownSection aria-label="SignOut">
          <DropdownItem
            key="signOut"
            startContent={<AiOutlineLogout className={`{iconClasses}`} />}
            className="text-danger"
            color="danger"
            onClick={handleSignout}
          >
            Déconnexion
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  )

  return (
    <nav className="p-4 flex border-b-2 border-gray-400 text-[#3B578E] bg-gray-800">
      <div className="flex items-center justify-center md:justify-center w-full"></div>
      <div className="md:hidden flex items-center space-x-4 md:w-1/4 justify-end">
        <ThemeSwitcher />
        <DropdownContent />
      </div>
    </nav>
  )
}
