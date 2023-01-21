import { useState, useEffect } from 'react';
import Image from 'next/image';
import picture306 from '../public/images/logoClub306.png';
import Link from 'next/link';
import styles from '../styles/navbar.module.css';
import { signOut, useSession } from 'next-auth/react';
import check from '../lib/checkRecordMember';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLeClubOpen, setLeClubOpen] = useState(false);
  const [isEventOpen, setEventOpen] = useState(false);
  const [isMemberOpen, setMemberOpen] = useState(false);
  const [isTuturialOpen, setTutorialOpen] = useState(false);
  const { data: session } = useSession();
  const [registeredMember, setRegisteredMember] = useState(false);

  useEffect(() => {
    if (session?.user !== undefined) {

      if (Object.keys(session?.user).length !== 0) {
        check(session)
          .then((response) => {
            setRegisteredMember(response);
          });
      } else {
        console.log('we have a standard account with login / pwd');
        setRegisteredMember(true);
      }

    }
  }, [session]);

  return (
    <div className='relative '>
      <nav className='flex px-4 md:shadow-lg items-center px-2
            dark:bg-gray-900 dark:border-gray-700  bg-white'
           style={{
             /*backgroundColor: props.bgColor || '#3B578E',
             color: '#F7F9FF'}}*/
             backgroundColor: registeredMember ? '#ADA075' : '#F7F9FF',
             color: '#3B578E'
           }}
      >
        <Link href='/'>
          <Image
            src={picture306}
            alt='logo club 306'
            width={240}
            height={46}
            className='mr-3 h-6 sm:h-10'
            style={{
              maxWidth: '100%',
              height: 'auto'
            }} />
        </Link>
        {/*SECTION MOBILE*/}
        <section className='MOBILE-MENU flex md:hidden ml-auto top-full left-0 right-0 z-50'>
          <div
            className='HAMBURGER-ICON space-y-2'
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
          </div>

          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            <div
              className='absolute top-0 right-0 px-8 py-8'
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className='h-8 w-8 text-gray-600'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            </div>
            <ul className='flex flex-col items-center justify-between min-h-[250px]'>
              <li
                className='flex justify-between p-4 items-center hover:bg-gray-50 space-x-2 border-b border-gray-400 my-8 uppercase'>
                <Link href='/'>Accueil</Link>
              </li>

              <li onClick={() => setLeClubOpen((prev) => !prev)}>
                <div
                  className='flex justify-between p-4 items-center hover:bg-gray-50 space-x-2 border-b border-gray-400 my-8 uppercase'
                >
                  <span>le Club</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-4 h-4 fill-current pt-1'
                    viewBox='0 0 24 24'
                  >
                    <path d='M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z' />
                  </svg>
                </div>
                <ul className={isLeClubOpen ? 'showSubMenu' : 'hideMenuNav'}>
                  <li>
                    <Link href='presentation' className='flex px-4 py-3 hover:bg-gray-50'>
                      Présentation
                    </Link>
                  </li>
                  <li>
                    <Link href='staff' className='flex px-4 py-3 hover:bg-gray-50'>
                      le Staff
                    </Link>
                  </li>
                  <li>
                    <Link href='rules' className='flex px-4 py-3 hover:bg-gray-50'>
                      Règlement du Club
                    </Link>
                  </li>
                  <li>
                    <Link href='press' className='flex px-4 py-3 hover:bg-gray-50'>
                      Revue de presse
                    </Link>
                  </li>
                </ul>
              </li>

              <li className='flex justify-between p-4 items-center hover:bg-gray-50 space-x-2 border-b border-gray-400 my-8 uppercase'>
                <Link href='documents'>
                  Documents
                </Link>
              </li>

              { registeredMember ?
                <li onClick={() => setEventOpen((prev) => !prev)}>
                  <div
                    className='flex justify-between p-4 items-center hover:bg-gray-50 space-x-2 border-b border-gray-400 my-8 uppercase'
                  >
                    <span>Evènements</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-4 h-4 fill-current pt-1'
                      viewBox='0 0 24 24'
                    >
                      <path d='M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z' />
                    </svg>
                  </div>
                  <ul className={isEventOpen ? 'showSubMenu' : 'hideMenuNav'}>
                    <li>
                      <Link href='event' className='flex px-4 py-3 hover:bg-gray-50'>
                        Evènements à venir
                      </Link>
                    </li>
                    <li>
                      <Link href='blog' className='flex px-4 py-3 hover:bg-gray-50'>
                        Blog : évènements passés
                      </Link>
                    </li>
                  </ul>
                </li>
                : <li
                  className='flex justify-between p-4 items-center hover:bg-gray-50 space-x-2 border-b border-gray-400 my-8 uppercase'>
                  <Link href='blog'>Blog</Link>
                </li>
              }

              <li onClick={() => setMemberOpen((prev) => !prev)}>
                <div
                  className='flex justify-between p-4 items-center hover:bg-gray-50 space-x-2 border-b border-gray-400 my-8 uppercase'
                >
                  <span>Membres</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-4 h-4 fill-current pt-1'
                    viewBox='0 0 24 24'
                  >
                    <path d='M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z' />
                  </svg>
                </div>
                <ul className={isMemberOpen ? 'showSubMenu' : 'hideMenuNav'}>
                  <li>
                    {registeredMember && <Link href='partners'
                                               className={styles.a}
                    >
                      Partenariats
                    </Link>
                    }
                  </li>
				<li>
					{!registeredMember &&
					<Link href='membership'
							className={styles.a}>
						Adhérer
					</Link>
					}
				</li>
                  <li>
                    {registeredMember ?
                      <div className={styles.a}
                           onClick={() => _handleGoogleSignout()}
                      >
                        Se Déconnecter
                      </div>
                      :
                      <Link href='login'
                            className={styles.a}>
                        Se Connecter
                      </Link>}

                  </li>
                </ul>
              </li>

              { registeredMember &&
                <li onClick={() => setTutorialOpen((prev) => !prev)}>
                  <div
                    className='flex justify-between p-4 items-center hover:bg-gray-50 space-x-2 border-b border-gray-400 my-8 uppercase'
                  >
                    <span>Tutoriels</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-4 h-4 fill-current pt-1'
                      viewBox='0 0 24 24'
                    >
                      <path d='M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z' />
                    </svg>
                  </div>
                  <ul className={isTuturialOpen ? 'showSubMenu' : 'hideMenuNav'}>
                    <li>
                      <Link href='mecanique' className='flex px-4 py-3 hover:bg-gray-50'>
                        Mécanique
                      </Link>
                    </li>
                    <li>
                      <Link href='electrique' className='flex px-4 py-3 hover:bg-gray-50'>
                        Electrique
                      </Link>
                    </li>
                    <li>
                      <Link href='moteur' className='flex px-4 py-3 hover:bg-gray-50'>
                        Moteur
                      </Link>
                    </li>
                  </ul>
                </li>
              }

              <li className='flex justify-between p-4 items-center hover:bg-gray-50 space-x-2 border-b border-gray-400 my-8 uppercase'>
                <Link href='contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </section>

        {/*SECTION NORMALE*/}
        <ul
          className='md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0 DESKTOP-MENU hidden space-x-8 z-50'>
          <li>
            <Link href='/'
                  className={styles.a}
            >
              Accueil
            </Link>
          </li>
          <li className='relative parent'>
            <div
              className='flex justify-between md:inline-flex p-4 items-center hover:bg-[#D7DEED] space-x-2'>
              <span>le Club</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-4 h-4 fill-current pt-1'
                viewBox='0 0 24 24'
              >
                <path d='M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z' />
              </svg>
            </div>
            <ul
              className='bg-[#F7F9FF] child transition duration-300 md:absolute top-full right-0 md:w-48 md:shadow-lg md:rounded-b'
            >
              <li>
                <Link href='presentation'
                      className={styles.a}
                >
                  Présentation
                </Link>
              </li>
              <li>
                <Link href='staff' className={styles.a}>
                  le Staff
                </Link>
              </li>
              <li>
                <Link href='rules' className={styles.a}>
                  Règlement du Club
                </Link>
              </li>
              <li>
                <Link href='press' className={styles.a}>
                  Revue de presse
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href='documents'
                  className={styles.a}>
              Documents
            </Link>
          </li>
          { registeredMember ?
            <li className='relative parent'>
              <div
                className='flex justify-between md:inline-flex p-4 items-center hover:bg-[#D7DEED] space-x-2'>
                <span>Evènements</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-4 h-4 fill-current pt-1'
                  viewBox='0 0 24 24'
                >
                  <path d='M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z' />
                </svg>
              </div>
              <ul
                className='child transition duration-300 md:absolute top-full right-0 md:w-48 md:shadow-lg md:rounded-b bg-[#F7F9FF]'>
                <li>
                  <Link href='event' className={styles.a}>
                    Evènements à venir
                  </Link>
                </li>
                <li>
                  <Link href='blog' className={styles.a}>
                    Blog : évènements passés
                  </Link>
                </li>
              </ul>
            </li>
            : <li>
              <Link href='blog'
                    className={styles.a}
              >
                Blog
              </Link>
            </li>
          }
          <li className='relative parent'>
            <div
              className='flex justify-between md:inline-flex p-4 items-center hover:bg-[#D7DEED] space-x-2'
            >
              <span>Membres</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-4 h-4 fill-current pt-1'
                viewBox='0 0 24 24'
              >
                <path d='M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z' />
              </svg>
            </div>
            <ul
              className='child transition duration-300 md:absolute top-full right-0 md:w-48 bg-[#F7F9FF] md:shadow-lg md:rounded-b'
            >
              <li>
                {registeredMember && <Link href='partners'
                                           className={styles.a}
                >
                  Partenariats
                </Link>
                }
              </li>
			<li>
                {!registeredMember &&
                  <Link href='membership'
                        className={styles.a}>
                    Adhérer
                  </Link>
                  }
			</li>
			<li>
                {registeredMember ?
                  <div className={styles.a}
                       onClick={() => _handleGoogleSignout()}
                  >
                    Se Déconnecter
                  </div>
                  :
                  <Link href='login'
                        className={styles.a}>
                    Se Connecter
                  </Link>}

              </li>
            </ul>
          </li>

          { registeredMember &&
            <li className='relative parent'>
              <div
                className='flex justify-between md:inline-flex p-4 items-center hover:bg-[#D7DEED] space-x-2'>
                <span>Tutoriels</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-4 h-4 fill-current pt-1'
                  viewBox='0 0 24 24'
                >
                  <path d='M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z' />
                </svg>
              </div>
              <ul
                className='child transition duration-300 md:absolute top-full right-0 md:w-48 md:shadow-lg md:rounded-b bg-[#F7F9FF]'>
                <li>
                  <Link href='mecanique' className={styles.a}>
                    Mécanique
                  </Link>
                </li>
                <li>
                  <Link href='electrique' className={styles.a}>
                    Electrique
                  </Link>
                </li>
                <li>
                  <Link href='moteur' className={styles.a}>
                    Moteur
                  </Link>
                </li>
              </ul>
            </li>
          }

          <li>
            <Link href='contact'
                  className={styles.a}>
              Contact
            </Link>
          </li>
        </ul>
        {/* <div className="ml-auto md:hidden text-gray-500 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
        </div> */}
      </nav>
    </div>
  );
}

async function _handleGoogleSignout() {
  await signOut({ callbackUrl: `${process.env.CLIENT_URL}` });
}
