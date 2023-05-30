import { useState, useEffect } from 'react';
import Image from 'next/image';
import picture306 from '../public/images/logoClub306.png';
import Avp from '../public/images/Logo_AVP.png';
import Link from 'next/link';
import styles from '../styles/navbar.module.css';
import { signOut, useSession } from 'next-auth/react';
import { checkForStartSession } from '../lib/supabase';
import { CiMail } from 'react-icons/ci';
import { IoIosContact } from 'react-icons/io';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLeClubOpen, setLeClubOpen] = useState(false);
  const [isEventOpen, setEventOpen] = useState(false);
  const [isMemberOpen, setMemberOpen] = useState(false);
  // const [isTuturialOpen, setTutorialOpen] = useState(false);
  const { data: session } = useSession();
  const [registeredMember, setRegisteredMember] = useState(false);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    if (session?.user !== undefined) {
      if (Object.keys(session?.user).length !== 0) {
        checkForStartSession(session).then((response) => {
          setRegisteredMember(response);
        });
      } else {
        console.log('we have a standard account with login / pwd');
        setRegisteredMember(true);
      }
    }
  }, [session]);

  return (
    <div className="relative ">
      {/* <nav className="w-full bg-white shadow"> */}
      <nav
        className="flex px-4 md:shadow-lg items-center
            dark:bg-gray-900 dark:border-gray-700  bg-white"
        style={{
          /*backgroundColor: props.bgColor || '#3B578E',
             color: '#F7F9FF'}}*/
          backgroundColor: registeredMember ? '#ADA075' : '#F7F9FF',
          color: '#3B578E',
        }}
      >
        <div className="justify-between px-4 mx-auto  md:items-center md:flex md:px-8 w-full">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:blockw-full  ">
              <Link href="/">
                <Image
                  src={picture306}
                  alt="logo club 306"
                  width={240}
                  height={46}
                  // className="mr-3 h-6 sm:h-10"
                  className={`mr-3 h-6 sm:h-10 ${navbar ? 'hidden' : 'block'}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </Link>
              <div>
                <Image
                  src={Avp}
                  alt="logo l'Aventure Peugeot"
                  width={240}
                  height={46}
                  className={'hidden md:block ml-4 h-12 md:h-24 lg:h-24'}
                  // style={{
                  //   width: 'auto',
                  //   height: 'auto',
                  // }}
                />
              </div>
              <div className="md:hidden ">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  // onClick={() => setNavbar(!navbar)}
                  onClick={() => {
                    setNavbar(!navbar);
                    setIsNavOpen((prev) => !prev);
                  }}
                >
                  {!navbar && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className=" ">
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              {/*SECTION MOBILE*/}
              <section className="MOBILE-MENU flex center md:hidden ml-auto top-full left-0 right-0 z-50 min-h-[950px]">
                <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
                  {/* CLOSE BUTTON */}
                  <div
                    className="absolute top-0 right-0 px-8 py-8"
                    onClick={() => {
                      setIsNavOpen(false);
                      setNavbar(!navbar);
                    }}
                  >
                    <svg
                      className="h-8 w-8 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <ul className="flex flex-col items-center justify-between min-h-[450px] ">
                    <li
                      className={
                        registeredMember
                          ? styles.aMobileRegister
                          : styles.aMobile
                      }
                    >
                      <Link href="/">Accueil</Link>
                    </li>

                    <li onClick={() => setLeClubOpen((prev) => !prev)}>
                      <div
                        className={
                          registeredMember
                            ? styles.aMobileRegister
                            : styles.aMobile
                        }
                      >
                        <span>le Club</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={styles.arrow}
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                        </svg>
                      </div>
                      <ul
                        className={isLeClubOpen ? 'showSubMenu' : 'hideMenuNav'}
                      >
                        <li
                          className={
                            registeredMember
                              ? styles.aSubMenuRegister
                              : styles.aSubMenu
                          }
                        >
                          <Link href="/presentation">Présentation</Link>
                        </li>
                        <li
                          className={
                            registeredMember
                              ? styles.aSubMenuRegister
                              : styles.aSubMenu
                          }
                        >
                          <Link href="/staff">le Staff</Link>
                        </li>
                        {/* <li
                          className={
                            registeredMember
                              ? styles.aSubMenuRegister
                              : styles.aSubMenu
                          }
                        >
                          <Link href="/rules">Règlement du Club</Link>
                        </li>
                        <li
                          className={
                            registeredMember
                              ? styles.aSubMenuRegister
                              : styles.aSubMenu
                          }
                        >
                          <Link href="/press">Revue de presse</Link>
                        </li> */}
                      </ul>
                    </li>

                    {/* <li
                      className={
                        registeredMember
                          ? styles.aMobileRegister
                          : styles.aMobile
                      }
                    >
                      <Link href="/documents">Documents</Link>
                    </li> */}

                    {registeredMember ? (
                      <li onClick={() => setEventOpen((prev) => !prev)}>
                        <div className={styles.aMobileRegister}>
                          <span>Evènements</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={styles.arrow}
                            viewBox="0 0 24 24"
                          >
                            <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                          </svg>
                        </div>
                        <ul
                          className={
                            isEventOpen ? 'showSubMenu' : 'hideMenuNav'
                          }
                        >
                          <li className={styles.aSubMenuRegister}>
                            <Link href="event">Evènements à venir</Link>
                          </li>
                          <li className={styles.aSubMenuRegister}>
                            <Link href="/blog">Blog : évènements passés</Link>
                          </li>
                        </ul>
                      </li>
                    ) : (
                      <li className={styles.aMobile}>
                        <Link href="/blog">Blog</Link>
                      </li>
                    )}

                    <li onClick={() => setMemberOpen((prev) => !prev)}>
                      <div
                        className={
                          registeredMember
                            ? styles.aMobileRegister
                            : styles.aMobile
                        }
                      >
                        <span>Membres</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={styles.arrow}
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                        </svg>
                      </div>
                      <ul
                        className={isMemberOpen ? 'showSubMenu' : 'hideMenuNav'}
                      >
                        {registeredMember ? (
                          <li className={styles.aNormalRegister}>
                            <Link href="/idg">Mon Compte</Link>
                          </li>
                        ) : (
                          <li className={styles.aNormal}>
                            <Link href="/membership">Adhérer</Link>
                          </li>
                        )}

                        {/* {!registeredMember && (
                          <li className={styles.aNormal}>
                            <Link href="/membership">Adhérer</Link>
                          </li>
                        )} */}

                        {registeredMember && (
                          <li className={styles.aSubMenuRegister}>
                            <Link href="/partners">Partenariats</Link>
                          </li>
                        )}

                        {registeredMember ? (
                          <li
                            className={styles.aSubMenuRegister}
                            onClick={() => _handleGoogleSignout()}
                          >
                            Se Déconnecter
                          </li>
                        ) : (
                          <li className={styles.aSubMenu}>
                            <Link href="/login">Se Connecter</Link>
                          </li>
                        )}
                      </ul>
                    </li>

                    {/* {registeredMember && (
                      <li onClick={() => setTutorialOpen((prev) => !prev)}>
                        <div className={styles.aMobileRegister}>
                          <span>Tutoriels</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={styles.arrow}
                            viewBox="0 0 24 24"
                          >
                            <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                          </svg>
                        </div>
                        <ul
                          className={
                            isTuturialOpen ? 'showSubMenu' : 'hideMenuNav'
                          }
                        >
                          <li
                            className={
                              registeredMember
                                ? styles.aSubMenuRegister
                                : styles.aSubMenu
                            }
                          >
                            <Link href="mecanique">Mécanique</Link>
                          </li>
                          <li
                            className={
                              registeredMember
                                ? styles.aSubMenuRegister
                                : styles.aSubMenu
                            }
                          >
                            <Link href="electrique">Electrique</Link>
                          </li>
                          <li
                            className={
                              registeredMember
                                ? styles.aSubMenuRegister
                                : styles.aSubMenu
                            }
                          >
                            <Link href="moteur">Moteur</Link>
                          </li>
                        </ul>
                      </li>
                    )} */}

                    <li
                      className={
                        registeredMember
                          ? styles.aMobileRegister
                          : styles.aMobile
                      }
                    >
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </section>

              {/*SECTION NORMALE*/}
              <ul className="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0 hidden space-x-8 z-50">
                <li
                  className={
                    registeredMember ? styles.aNormalRegister : styles.aNormal
                  }
                >
                  <Link href="/">Accueil</Link>
                </li>
                <li className="relative parent">
                  <div
                    className={
                      registeredMember ? styles.aNormalRegister : styles.aNormal
                    }
                  >
                    <span>le Club</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.arrow}
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                    </svg>
                  </div>
                  <ul
                    className={` ${
                      registeredMember
                        ? 'bg-[#f5f5dca2] rounded-3xl'
                        : 'bg-[#d1d9f1bb] rounded-none'
                    } child transition duration-300 md:absolute top-full right-0 md:w-48 md:shadow-lg `}
                  >
                    <li
                      className={
                        registeredMember
                          ? styles.aNormalRegister
                          : styles.aNormal
                      }
                    >
                      <Link href="/presentation">Présentation</Link>
                    </li>
                    <li
                      className={
                        registeredMember
                          ? styles.aNormalRegister
                          : styles.aNormal
                      }
                    >
                      <Link href="/staff">le Staff</Link>
                    </li>
                    {/* <li
                      className={
                        registeredMember
                          ? styles.aNormalRegister
                          : styles.aNormal
                      }
                    >
                      <Link href="/rules">Règlement du Club</Link>
                    </li>
                    <li
                      className={
                        registeredMember
                          ? styles.aNormalRegister
                          : styles.aNormal
                      }
                    >
                      <Link href="/press">Revue de presse</Link>
                    </li> */}
                  </ul>
                </li>
                {/* <li
                  className={
                    registeredMember ? styles.aNormalRegister : styles.aNormal
                  }
                >
                  <Link href="/documents">Documents</Link>
                </li> */}
                {registeredMember ? (
                  <li className="relative parent">
                    <div
                      className={
                        registeredMember
                          ? styles.aNormalRegister
                          : styles.aNormal
                      }
                    >
                      <span>Evènements</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.arrow}
                        viewBox="0 0 24 24"
                      >
                        <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                      </svg>
                    </div>
                    <ul className="bg-[#f5f5dca2] rounded-3xl child transition duration-300 md:absolute top-full right-0 md:w-48 md:shadow-lg">
                      <li
                        className={
                          registeredMember
                            ? styles.aNormalRegister
                            : styles.aNormal
                        }
                      >
                        <Link href="/event">Evènements à venir</Link>
                      </li>
                      <li
                        className={
                          registeredMember
                            ? styles.aNormalRegister
                            : styles.aNormal
                        }
                      >
                        <Link href="/blog">Blog : évènements passés</Link>
                      </li>
                    </ul>
                  </li>
                ) : (
                  <li className={styles.aNormal}>
                    <Link href="/blog">Blog</Link>
                  </li>
                )}

                {/* {registeredMember && (
                  <li className="relative parent">
                    <div className={styles.aNormalRegister}>
                      <span>Tutoriels</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.arrow}
                        viewBox="0 0 24 24"
                      >
                        <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                      </svg>
                    </div>
                    <ul className="bg-[#f5f5dca2] child transition duration-300 md:absolute top-full right-0 md:w-48 md:shadow-lg rounded-3xl">
                      <li className={styles.aNormalRegister}>
                        <Link href="/mecanique">Mécanique</Link>
                      </li>
                      <li className={styles.aNormalRegister}>
                        <Link href="/electrique">Electrique</Link>
                      </li>
                      <li className={styles.aNormalRegister}>
                        <Link href="/moteur">Moteur</Link>
                      </li>
                    </ul>
                  </li>
                )} */}

                <li
                  className={
                    registeredMember ? styles.aNormalRegister : styles.aNormal
                  }
                >
                  <Link href="/contact">
                    <CiMail size={26} className="" />
                  </Link>
                </li>

                <li className="relative parent">
                  <div
                    className={
                      registeredMember ? styles.aNormalRegister : styles.aNormal
                    }
                  >
                    <IoIosContact size={26} className="" />

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.arrow}
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                    </svg>
                  </div>
                  {/* <ul className="bg-[#f5f5dca2] child transition duration-300 md:absolute top-full right-0 md:w-48 md:shadow-lg rounded-3xl"> */}
                  <ul
                    className={`${
                      registeredMember
                        ? 'bg-[#f5f5dca2] rounded-3xl'
                        : 'bg-[#d1d9f1bb]  rounded-none'
                    } child transition duration-300 md:absolute top-full right-0 md:w-48 md:shadow-lg `}
                  >
                    {registeredMember ? (
                      <li className={styles.aNormalRegister}>
                        <Link href="/idg">Mon Compte</Link>
                      </li>
                    ) : (
                      <li className={styles.aNormal}>
                        <Link href="/membership">Adhérer</Link>
                      </li>
                    )}

                    {/* {!registeredMember && (
                      <li className={styles.aNormal}>
                        <Link href="/membership">Adhérer</Link>
                      </li>
                    )} */}

                    {registeredMember && (
                      <li className={styles.aNormalRegister}>
                        <Link href="/partners">Partenariats</Link>
                      </li>
                    )}
                    {registeredMember ? (
                      <li
                        className={styles.aNormalRegister}
                        onClick={() => _handleGoogleSignout()}
                      >
                        Se Déconnecter
                      </li>
                    ) : (
                      <li className={styles.aNormal}>
                        <Link href="/login">Se Connecter</Link>
                      </li>
                    )}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

async function _handleGoogleSignout() {
  await signOut({
    callbackUrl: `${process.env.CLIENT_URL}` || `${process.env.CLIENT_URL2}`,
  });
}
