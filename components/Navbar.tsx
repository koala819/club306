import { useState, useEffect } from 'react';
import Image from 'next/image';
import picture306 from '../public/images/logoClub306.png';
import Avp from '../public/images/Logo_AVP.png';
import Link from 'next/link';
import styles from '../navbar.module.css';
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
        className="flex items-center bg-white px-4
            dark:border-gray-700 dark:bg-gray-900  md:shadow-lg"
        style={{
          /*backgroundColor: props.bgColor || '#3B578E',
             color: '#F7F9FF'}}*/
          backgroundColor: registeredMember ? '#ADA075' : '#F7F9FF',
          color: '#3B578E',
        }}
      >
        <div className="mx-auto w-full justify-between  px-4 md:flex md:items-center md:px-8">
          <div>
            <div className="md:blockw-full flex items-center justify-between py-3 md:py-5  ">
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
                  className={'ml-4 hidden h-12 md:block md:h-24 lg:h-24'}
                  // style={{
                  //   width: 'auto',
                  //   height: 'auto',
                  // }}
                />
              </div>
              <div className="md:hidden ">
                <button
                  className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                  // onClick={() => setNavbar(!navbar)}
                  onClick={() => {
                    setNavbar(!navbar);
                    setIsNavOpen((prev) => !prev);
                  }}
                >
                  {!navbar && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
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
              className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              {/*SECTION MOBILE*/}
              <section className="MOBILE-MENU center left-0 right-0 top-full z-50 ml-auto flex min-h-[950px] md:hidden">
                <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
                  {/* CLOSE BUTTON */}
                  <div
                    className="absolute right-0 top-0 px-8 py-8"
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
                  <ul className="flex min-h-[450px] flex-col items-center justify-between ">
                    <Link
                      href="/"
                      onClick={() => {
                        setIsNavOpen(false);
                        setNavbar(!navbar);
                      }}
                    >
                      <li
                        className={
                          registeredMember
                            ? styles.aMobileRegister
                            : styles.aMobile
                        }
                      >
                        Accueil
                      </li>
                    </Link>
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
                        <Link
                          href="/presentation"
                          onClick={() => {
                            setIsNavOpen(false);
                            setNavbar(!navbar);
                          }}
                        >
                          <li
                            className={
                              registeredMember
                                ? styles.aSubMenuRegister
                                : styles.aSubMenu
                            }
                          >
                            Présentation
                          </li>
                        </Link>
                        <Link
                          href="/staff"
                          onClick={() => {
                            setIsNavOpen(false);
                            setNavbar(!navbar);
                          }}
                        >
                          <li
                            className={
                              registeredMember
                                ? styles.aSubMenuRegister
                                : styles.aSubMenu
                            }
                          >
                            le Staff
                          </li>
                        </Link>
                        <Link href="/rules">
                          <li
                            className={
                              registeredMember
                                ? styles.aSubMenuRegister
                                : styles.aSubMenu
                            }
                          >
                            Règlement du Club
                          </li>
                        </Link>
                        {/* 
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
                          <Link
                            href="event"
                            onClick={() => {
                              setIsNavOpen(false);
                              setNavbar(!navbar);
                            }}
                          >
                            <li className={styles.aSubMenuRegister}>
                              Evènements à venir
                            </li>
                          </Link>
                          <Link
                            href="/blog"
                            onClick={() => {
                              setIsNavOpen(false);
                              setNavbar(!navbar);
                            }}
                          >
                            <li className={styles.aSubMenuRegister}>
                              Blog : évènements passés
                            </li>
                          </Link>
                        </ul>
                      </li>
                    ) : (
                      <Link
                        href="/blog"
                        onClick={() => {
                          setIsNavOpen(false);
                          setNavbar(!navbar);
                        }}
                      >
                        <li className={styles.aMobile}>Blog</li>
                      </Link>
                    )}

                    <Link href="/contact">
                      <li
                        className={
                          registeredMember
                            ? styles.aMobileRegister
                            : styles.aMobile
                        }
                      >
                        Contact
                      </li>
                    </Link>

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
                          <>
                            <Link
                              href="/idg"
                              onClick={() => {
                                setIsNavOpen(false);
                                setNavbar(!navbar);
                              }}
                            >
                              <li className={styles.aNormalRegister}>
                                Mon Compte
                              </li>
                            </Link>
                            <Link
                              href="/partners"
                              onClick={() => {
                                setIsNavOpen(false);
                                setNavbar(!navbar);
                              }}
                            >
                              <li className={styles.aSubMenuRegister}>
                                Partenariats
                              </li>
                            </Link>
                            <li
                              className={styles.aSubMenuRegister}
                              onClick={() => _handleGoogleSignout()}
                            >
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
                            <Link
                              href="/membership"
                              onClick={() => {
                                setIsNavOpen(false);
                                setNavbar(!navbar);
                              }}
                            >
                              <li className={styles.aNormal}>Adhérer</li>
                            </Link>
                          </>
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
                  </ul>
                </div>
              </section>

              {/*SECTION NORMALE*/}
              <ul className="absolute left-0 right-0 top-full z-50 ml-auto hidden space-x-8 md:relative md:flex md:space-x-2 md:px-2">
                <Link href="/">
                  <li
                    className={
                      registeredMember ? styles.aNormalRegister : styles.aNormal
                    }
                  >
                    Accueil
                  </li>
                </Link>
                <li className="parent relative">
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
                        ? 'rounded-3xl bg-[#f5f5dca2]'
                        : 'rounded-none bg-[#d1d9f1bb]'
                    } child right-0 top-full transition duration-300 md:absolute md:w-48 md:shadow-lg `}
                  >
                    <Link href="/presentation">
                      <li
                        className={
                          registeredMember
                            ? styles.aNormalRegister
                            : styles.aNormal
                        }
                      >
                        Présentation
                      </li>
                    </Link>
                    <Link href="/staff">
                      <li
                        className={
                          registeredMember
                            ? styles.aNormalRegister
                            : styles.aNormal
                        }
                      >
                        le Staff
                      </li>
                    </Link>
                    <Link href="/rules">
                      <li
                        className={
                          registeredMember
                            ? styles.aNormalRegister
                            : styles.aNormal
                        }
                      >
                        Règlement du Club
                      </li>
                    </Link>
                    {/* <li
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
                  <li className="parent relative">
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
                    <ul className="child right-0 top-full rounded-3xl bg-[#f5f5dca2] transition duration-300 md:absolute md:w-48 md:shadow-lg">
                      <Link href="/event">
                        <li
                          className={
                            registeredMember
                              ? styles.aNormalRegister
                              : styles.aNormal
                          }
                        >
                          Evènements à venir
                        </li>
                      </Link>
                      <Link href="/blog">
                        <li
                          className={
                            registeredMember
                              ? styles.aNormalRegister
                              : styles.aNormal
                          }
                        >
                          Blog : évènements passés
                        </li>
                      </Link>
                    </ul>
                  </li>
                ) : (
                  <Link href="/blog">
                    <li className={styles.aNormal}>Blog</li>
                  </Link>
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

                <Link href="/contact">
                  <li
                    className={
                      registeredMember ? styles.aNormalRegister : styles.aNormal
                    }
                  >
                    <CiMail size={26} className="" />
                  </li>
                </Link>

                <li className="parent relative">
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
                        ? 'rounded-3xl bg-[#f5f5dca2]'
                        : 'rounded-none  bg-[#d1d9f1bb]'
                    } child right-0 top-full transition duration-300 md:absolute md:w-48 md:shadow-lg `}
                  >
                    {registeredMember ? (
                      <>
                        <Link href="/idg">
                          <li className={styles.aNormalRegister}>Mon Compte</li>
                        </Link>
                        <Link href="/partners">
                          <li className={styles.aNormalRegister}>
                            Partenariats
                          </li>
                        </Link>
                        <li
                          className={styles.aNormalRegister}
                          onClick={() => _handleGoogleSignout()}
                        >
                          Se Déconnecter
                        </li>
                      </>
                    ) : (
                      <>
                        <li className={styles.aNormal}>
                          <Link href="/login">Se Connecter</Link>
                        </li>
                        <Link href="/membership">
                          <li className={styles.aNormal}>Adhérer</li>
                        </Link>
                      </>
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
