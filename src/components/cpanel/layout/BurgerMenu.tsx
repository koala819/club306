'use client';
import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { onlyStaff, returnMemberInfo } from '@/lib/supabase';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
  User,
} from '@nextui-org/react';
import {
  AiOutlineCalendar,
  AiOutlineLogout,
  AiOutlineUser,
} from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { GiMechanicGarage, GiCash } from 'react-icons/gi';
import { MdAddToPhotos, MdEditCalendar, MdQueryStats } from 'react-icons/md';
import { IoColorPalette } from 'react-icons/io5';
import { BsDatabaseFillLock } from 'react-icons/bs';
import { TbHomeHeart } from 'react-icons/tb';
import { BiMenu } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import { ThemeSwitcher } from './ThemeSwitcher';
import { signOut, useSession } from 'next-auth/react';

export default function BurgerMenu() {
  const [staffMember, setStaffMember] = useState(false);
  const [name, setName] = useState('');
  const router = useRouter();
  const iconClasses =
    'text-xl text-default-500 pointer-events-none flex-shrink-0';
  const { data: dataSession } = useSession();

  useEffect(() => {
    async function fetchData() {
      const result = await onlyStaff(dataSession?.user?.email);
      // console.log('onlyStaff', result);
      setStaffMember(result);

      const data = await returnMemberInfo(dataSession?.user?.email);
      // console.log('data', data);
      setName(() => data.first_name + ' ' + data.last_name);
    }

    if (dataSession !== undefined) {
      fetchData();
    }
  }, [dataSession]);

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
            onClick={() => router.push('/cpanel/event')}
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
  );

  async function handleSignout() {
    signOut({
      redirect: true,
      callbackUrl: `${process.env.CLIENT_URL}/login`,
    });
  }

  return (
    <nav className="p-4 flex border-b-2 border-gray-400 text-[#3B578E] bg-gray-800">
      <div className="flex items-center justify-center md:justify-center w-full"></div>
      <div className="md:hidden flex items-center space-x-4 md:w-1/4 justify-end">
        <ThemeSwitcher />
        <DropdownContent />
      </div>
    </nav>
  );
}
