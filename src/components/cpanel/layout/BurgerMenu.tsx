'use client'

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

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

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
      callbackUrl: `${process.env.CLIENT_URL}/login`,
    })
  }

  const DropdownContent = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default">
          <BiMenu className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="flex items-center gap-2 p-2">
          <Avatar>
            <AvatarFallback>
              {name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{name}</span>
            <span className="text-xs text-muted-foreground">
              {dataSession?.user?.email}
            </span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => router.push('/cpanel/infos')}>
          <AiOutlineUser className={iconClasses} />
          Mes Informations
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push('/cpanel/addCar')}>
          <MdAddToPhotos className={iconClasses} />
          Ajouter une voiture
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push('/cpanel/garage')}>
          <GiMechanicGarage className={iconClasses} />
          Mon Garage
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push('/cpanel/event')}>
          <AiOutlineCalendar className={iconClasses} />
          Saison {new Date().getFullYear()}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push('/cpanel/partners')}>
          <FaUserFriends className={iconClasses} />
          Partenaires
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push('/')}>
          <TbHomeHeart className={iconClasses} />
          Retour à l'accueil
        </DropdownMenuItem>

        {staffMember && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Administration</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => router.push('/cpanel/admin/stats')}
              className="text-red-500"
            >
              <MdQueryStats className={iconClasses} />
              Statistiques
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push('/cpanel/admin/colors')}
              className="text-red-500"
            >
              <IoColorPalette className={iconClasses} />
              Gérer les couleurs
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push('/cpanel/admin/partners')}
              className="text-red-500"
            >
              <GiCash className={iconClasses} />
              Partenaires
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push('/cpanel/admin/event')}
              className="text-red-500"
            >
              <MdEditCalendar className={iconClasses} />
              Saison {new Date().getFullYear()}
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push('/cpanel/admin/supabase')}
              className="text-red-500"
            >
              <BsDatabaseFillLock className={iconClasses} />
              Base de données
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push('/cpanel/admin/old-garage')}
              className="text-red-500"
            >
              <BsDatabaseFillLock className={iconClasses} />
              Vieux Garage
            </DropdownMenuItem>
          </>
        )}

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignout} className="text-red-500">
          <AiOutlineLogout className={iconClasses} />
          Déconnexion
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
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
