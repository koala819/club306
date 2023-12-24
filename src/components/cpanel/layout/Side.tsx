'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
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
import { Tooltip } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import picture306 from '../../../../public/images/logoClub306_blanc.png';
import { onlyStaff } from '@/lib/supabase';
// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { ThemeSwitcher } from './ThemeSwitcher';
import { signOut, useSession } from 'next-auth/react';
// import { redirect } from 'next/navigation';

export default function Side() {
  const [staffMember, setStaffMember] = useState(false);
  const path = usePathname();
  const [waitSession, setWaitSession] = useState(true);
  const { data: dataSession } = useSession();

  useEffect(() => {
    async function fetchData() {
      const result = await onlyStaff(dataSession?.user?.email);
      console.log('result', result);
      setStaffMember(result);
    }
    if (dataSession !== undefined) {
      fetchData();
    }
  }, [dataSession]);

  async function handleSignout() {
    signOut({
      redirect: true,
      callbackUrl: `${process.env.CLIENT_URL}/login`,
    });
  }

  return (
    <aside className="hidden md:block bg-gray-800 text-white w-64  min-h-screen">
      <div className="flex items-center justify-center mt-4">
        <Link href="/cpanel">
          <Image
            src={picture306}
            alt="logo club 306"
            width={120}
            height={23}
            style={{
              width: '80%',
              height: 'auto',
            }}
          />
        </Link>
      </div>
      <div className="flex items-center justify-center mt-8">
        <ThemeSwitcher />
      </div>
      <nav className="bg-cpanel-main-bg-darker mt-2">
        <ul
          className={`pt-0 p-4 flex flex-col ${
            staffMember ? 'gap-2' : 'gap-3'
          } justify-start`}
        >
          <li
            className={`rounded-xl w-11/12  ${
              path.includes('/cpanel/infos') ? 'bg-cpanel-main-bg' : null
            }`}
          >
            <Link
              className="pt-4 pb-4 flex items-center justify-start w-full h-full text-white"
              href="/cpanel/infos"
            >
              <AiOutlineUser className="inline-block text-3xl mr-4" />
              <span>Mes Informations</span>
            </Link>
          </li>
          <li
            className={`rounded-xl w-11/12  ${
              path.includes('/cpanel/addCar') ? 'bg-cpanel-main-bg' : null
            }`}
          >
            <Link
              className="pt-4 pb-4 flex items-center justify-start w-full h-full text-white"
              href="/cpanel/addCar"
            >
              <MdAddToPhotos className="inline-block text-3xl mr-4" />
              <span>Ajouter une voiture</span>
            </Link>
          </li>
          <li
            className={`rounded-xl w-11/12  ${
              path.includes('/cpanel/garage') ? 'bg-cpanel-main-bg' : null
            }`}
          >
            <Link
              className="pt-4 pb-4 flex items-center justify-start w-full h-full text-white"
              href="/cpanel/garage"
            >
              <GiMechanicGarage className="inline-block text-3xl mr-4" />
              <span>Garage</span>
            </Link>
          </li>
          <li
            className={`rounded-xl w-11/12  ${
              path.includes('/cpanel/event') ? 'bg-cpanel-main-bg' : null
            }`}
          >
            <Link
              className="pt-4 pb-4 flex items-center justify-start w-full h-full text-white"
              href="/cpanel/event"
            >
              <AiOutlineCalendar className="inline-block text-3xl mr-4" />
              <span>Saison {new Date().getFullYear()}</span>
            </Link>
          </li>
          <li
            className={`rounded-xl w-11/12  ${
              path.includes('/cpanel/partners') ? 'bg-cpanel-main-bg' : null
            }`}
          >
            <Link
              className="pt-4 pb-4 flex items-center justify-start w-full h-full text-white"
              href="/cpanel/partners"
            >
              <FaUserFriends className="inline-block text-3xl mr-4" />
              <span>Nos Partenaires</span>
            </Link>
          </li>
          <li>
            <Link
              className="pt-4 pb-4 flex items-center justify-start w-full h-full text-white"
              href="/"
            >
              <TbHomeHeart className="inline-block text-3xl mr-4" />
              <span>Accueil du Club 306</span>
            </Link>
          </li>
          {staffMember && (
            <>
              <li
                className={`rounded-xl w-11/12  ${
                  path.includes('/cpanel/admin/stats')
                    ? 'bg-cpanel-main-bg-admin text-white'
                    : 'text-red-500'
                }`}
              >
                <Link
                  className="pt-4 pb-4 flex items-center justify-start w-full h-full"
                  href="/cpanel/admin/stats"
                >
                  <MdQueryStats className="inline-block text-3xl mr-4" />
                  <span>Statistiques</span>
                </Link>
              </li>
              <li
                className={`rounded-xl w-11/12  ${
                  path.includes('/cpanel/admin/colors')
                    ? 'bg-cpanel-main-bg-admin text-white'
                    : 'text-red-500'
                }`}
              >
                <Link
                  className="pt-4 pb-4 flex items-center justify-start w-full h-full"
                  href="/cpanel/admin/colors"
                >
                  <IoColorPalette className="inline-block text-3xl mr-4" />
                  <span>Gérer les couleurs</span>
                </Link>
              </li>
              <li
                className={`rounded-xl w-11/12  ${
                  path.includes('/cpanel/admin/partners')
                    ? 'bg-cpanel-main-bg-admin text-white'
                    : 'text-red-500'
                }`}
              >
                <Link
                  className="pt-4 pb-4 flex items-center justify-start w-full h-full"
                  href="/cpanel/admin/partners"
                >
                  <GiCash className="inline-block text-3xl mr-4" />
                  <span>Partenaires</span>
                </Link>
              </li>
              <li
                className={`rounded-xl w-11/12  ${
                  path.includes('/cpanel/admin/event')
                    ? 'bg-cpanel-main-bg-admin text-white'
                    : 'text-red-500'
                }`}
              >
                <Link
                  className="pt-4 pb-4 flex items-center justify-start w-full h-full"
                  href="/cpanel/admin/event"
                >
                  <MdEditCalendar className="inline-block text-3xl mr-4" />
                  <span>Saison {new Date().getFullYear()}</span>
                </Link>
              </li>
              <li
                className={`rounded-xl w-11/12  ${
                  path.includes('/cpanel/admin/supabase')
                    ? 'bg-cpanel-main-bg-admin text-white'
                    : 'text-red-500'
                }`}
              >
                <Link
                  className="pt-4 pb-4 flex items-center justify-start w-full h-full"
                  href="/cpanel/admin/supabase"
                >
                  <BsDatabaseFillLock className="inline-block text-3xl mr-4" />
                  <span>Base de données</span>
                </Link>
              </li>
            </>
          )}

          <li>
            <Tooltip content="Se déconnecter">
              <button
                className=" flex items-center justify-center w-full h-full text-red-500"
                onClick={() => handleSignout()}
              >
                <AiOutlineLogout size={33} />
              </button>
            </Tooltip>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
