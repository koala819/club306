'use client';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import picture306 from '../../public/images/logoClub306.png';
import Avp from '../../public/images/Logo_AVP.png';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { CiMail } from 'react-icons/ci';
import { IoIosContact } from 'react-icons/io';
import { signOut } from 'next-auth/react';
import { FaHouseUser } from 'react-icons/fa';
import { RiLogoutCircleLine } from 'react-icons/ri';

export const Navbar = ({ withMember }: { withMember?: boolean }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLeClubOpen, setLeClubOpen] = useState(false);
  const [isMemberOpen, setMemberOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  async function handleSignout() {
    signOut({
      redirect: true,
      callbackUrl: `${process.env.CLIENT_URL}/login`,
    });
  }

  return (
    <div className="relative ">
      <nav
        className="flex px-4 md:shadow-lg items-center"
        style={{
          backgroundColor: withMember
            ? resolvedTheme === 'dark'
              ? '#6a6145'
              : '#ADA075'
            : resolvedTheme !== 'dark'
            ? '#F7F9FF'
            : '#2b2c2e',
          // color: '#3B578E',
          color: resolvedTheme === 'dark' ? '#FFF' : '#3B578E',
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
                />
              </div>
              <div className="md:hidden ">
                <button
                  className="p-2 text-gray-700 dark:text-white rounded-md outline-none focus:border-gray-400 focus:border"
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
                      className="h-8 w-8 text-gray-600 dark:text-white"
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
                    <Link
                      href="/"
                      onClick={() => {
                        setIsNavOpen(false);
                        setNavbar(!navbar);
                      }}
                    >
                      <li
                        className={
                          withMember ? styles.aMobileRegister : styles.aMobile
                        }
                      >
                        Accueil
                      </li>
                    </Link>

                    <li onClick={() => setLeClubOpen((prev) => !prev)}>
                      <div
                        className={
                          withMember ? styles.aMobileRegister : styles.aMobile
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
                        <Link
                          href="/club"
                          onClick={() => {
                            setIsNavOpen(false);
                            setNavbar(!navbar);
                          }}
                        >
                          <li
                            className={
                              withMember
                                ? styles.aSubMenuRegister
                                : styles.aSubMenu
                            }
                          >
                            Présentation
                          </li>
                        </Link>
                        <Link
                          href="/club/staff"
                          onClick={() => {
                            setIsNavOpen(false);
                            setNavbar(!navbar);
                          }}
                        >
                          <li
                            className={
                              withMember
                                ? styles.aSubMenuRegister
                                : styles.aSubMenu
                            }
                          >
                            le Staff
                          </li>
                        </Link>
                        {/* <li
                          className={
                            withMember
                              ? styles.aSubMenuRegister
                              : styles.aSubMenu
                          }
                        >
                          <Link href="/rules">Règlement du Club</Link>
                        </li>
                        <li
                          className={
                            withMember
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
                        withMember
                          ? styles.aMobileRegister
                          : styles.aMobile
                      }
                    >
                      <Link href="/documents">Documents</Link>
                    </li> */}

                    <Link
                      href="/blog"
                      onClick={() => {
                        setIsNavOpen(false);
                        setNavbar(!navbar);
                      }}
                    >
                      <li
                        className={
                          withMember ? styles.aMobileRegister : styles.aMobile
                        }
                      >
                        Blog
                      </li>
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => {
                        setIsNavOpen(false);
                        setNavbar(!navbar);
                      }}
                    >
                      <li
                        className={
                          withMember ? styles.aMobileRegister : styles.aMobile
                        }
                      >
                        Contact
                      </li>
                    </Link>
                    <li onClick={() => setMemberOpen((prev) => !prev)}>
                      <div
                        className={
                          withMember ? styles.aMobileRegister : styles.aMobile
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
                        {withMember ? (
                          <>
                            <li className={styles.aSubMenuRegister}>
                              <Link
                                href="/cpanel"
                                onClick={() => {
                                  setIsNavOpen(false);
                                  setNavbar(!navbar);
                                }}
                              >
                                <FaHouseUser size={26} />
                                Mon Compte
                              </Link>
                            </li>
                            {/* <Link
                              href="/event"
                              onClick={() => {
                                setIsNavOpen(false);
                                setNavbar(!navbar);
                              }}
                            >
                              <li
                                className={`flex justify-between  ${styles.aSubMenuRegister}`}
                              >
                                <MdEventNote size={26} />
                                Saison 2023
                              </li>
                            </Link>
                            <li className={styles.aSubMenuRegister}>
                              <Link
                                href="/partners"
                                onClick={() => {
                                  setIsNavOpen(false);
                                  setNavbar(!navbar);
                                }}
                              >
                                <TbCirclesRelation size={26} />
                                Nos Partenaires
                              </Link>
                            </li> */}
                            <li
                              className={styles.aSubMenuRegister}
                              onClick={() => handleSignout()}
                            >
                              <RiLogoutCircleLine size={26} />
                              Se Déconnecter
                            </li>
                          </>
                        ) : (
                          <>
                            <Link
                              href="/login"
                              onClick={() => {
                                setIsNavOpen(false);
                                setNavbar(!navbar);
                              }}
                            >
                              <li className={styles.aSubMenu}>Se Connecter</li>
                            </Link>
                            <li className={styles.aSubMenu}>
                              <Link
                                href="/membership"
                                onClick={() => {
                                  setIsNavOpen(false);
                                  setNavbar(!navbar);
                                }}
                              >
                                Adhérer
                              </Link>
                            </li>
                          </>
                        )}
                      </ul>
                    </li>

                    {/* {withMember && (
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
                              withMember
                                ? styles.aSubMenuRegister
                                : styles.aSubMenu
                            }
                          >
                            <Link href="mecanique">Mécanique</Link>
                          </li>
                          <li
                            className={
                              withMember
                                ? styles.aSubMenuRegister
                                : styles.aSubMenu
                            }
                          >
                            <Link href="electrique">Electrique</Link>
                          </li>
                          <li
                            className={
                              withMember
                                ? styles.aSubMenuRegister
                                : styles.aSubMenu
                            }
                          >
                            <Link href="moteur">Moteur</Link>
                          </li>
                        </ul>
                      </li>
                    )} */}
                  </ul>
                </div>
              </section>

              {/*SECTION NORMALE*/}
              <ul className="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0 hidden space-x-8 z-50">
                <Link href="/">
                  <li
                    className={
                      withMember ? styles.aNormalRegister : styles.aNormal
                    }
                  >
                    Accueil
                  </li>
                </Link>
                <li className="relative parent">
                  <div
                    className={
                      withMember ? styles.aNormalRegister : styles.aNormal
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
                      withMember
                        ? resolvedTheme === 'dark'
                          ? 'bg-[#6a6145] rounded-xl border-[#6E654B] border-2'
                          : 'bg-[#ADA075] rounded-xl border-[#6E654B] border-2'
                        : 'bg-[#d1d9f1bb] dark:bg-[#2b2c2e] rounded-none'
                    } child transition duration-300 md:absolute top-full right-0 md:w-48 md:shadow-lg `}
                  >
                    <Link href="/club">
                      <li
                        className={
                          withMember ? styles.aNormalRegister : styles.aNormal
                        }
                      >
                        Présentation
                      </li>
                    </Link>
                    <Link href="/club/staff">
                      <li
                        className={
                          withMember ? styles.aNormalRegister : styles.aNormal
                        }
                      >
                        le Staff
                      </li>
                    </Link>
                  </ul>
                </li>
                {/* <li
                  className={
                    withMember ? styles.aNormalRegister : styles.aNormal
                  }
                >
                  <Link href="/documents">Documents</Link>
                </li> */}

                {/* {withMember && (
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

                <Link href="/blog">
                  <li
                    className={
                      withMember ? styles.aNormalRegister : styles.aNormal
                    }
                  >
                    Blog
                  </li>
                </Link>

                <Link href="/contact">
                  <li
                    className={
                      withMember ? styles.aNormalRegister : styles.aNormal
                    }
                  >
                    <CiMail size={26} className="" />
                  </li>
                </Link>

                <li className="relative parent">
                  <div
                    className={
                      withMember ? styles.aNormalRegister : styles.aNormal
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
                    className={` ${
                      withMember
                        ? resolvedTheme === 'dark'
                          ? 'bg-[#6a6145] rounded-xl border-[#6E654B] border-2'
                          : 'bg-[#ADA075] rounded-xl border-[#6E654B] border-2'
                        : 'bg-[#d1d9f1bb] dark:bg-[#2b2c2e] rounded-none'
                    } child transition duration-300 md:absolute top-full right-0 md:w-48 md:shadow-lg `}
                  >
                    {withMember ? (
                      <>
                        <Link href="/cpanel">
                          <li
                            className={`flex justify-between  ${styles.aNormalRegister}`}
                          >
                            <FaHouseUser size={26} />
                            Mon Compte
                          </li>
                        </Link>
                        {/* <Link href="/event"> 
                           <li
                            className={`flex justify-between  ${styles.aNormalRegister}`}
                          >
                            <MdEventNote size={26} />
                            Saison 2023
                          </li>
                        </Link>
                        <Link href="/partners">
                          <li
                            className={`flex justify-between  ${styles.aNormalRegister}`}
                          >
                            <TbCirclesRelation size={26} />
                            Nos Partenaires
                          </li>
                        </Link> */}
                        <li
                          className={`flex justify-between  ${styles.aNormalRegister}`}
                          onClick={() => handleSignout()}
                        >
                          <RiLogoutCircleLine size={26} />
                          Se Déconnecter
                        </li>
                      </>
                    ) : (
                      <>
                        <Link href="/login">
                          <li className={styles.aNormal}>Se Connecter</li>
                        </Link>
                        <Link href="/membership">
                          <li className={styles.aNormal}>Adhérer</li>
                        </Link>
                      </>
                    )}
                  </ul>
                </li>
                {/* <li className="relative parent">
                  <button
                    onClick={() =>
                      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                    }
                  >
                    {resolvedTheme === 'dark' ? (
                      <HiMoon size={26} className="h-5 w-5 text-orange-300" />
                    ) : (
                      <HiSun size={26} className="h-5 w-5 text-slate-800" />
                    )}
                  </button>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
