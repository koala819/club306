import React from "react";
import Image from "next/image";
import Link from 'next/link';


const CardStaff = ({picture, name, role, content, car, localisation, facebook, insta, mail}: CardStaffProps) => {
    return (
        <div>

                        <div className="mb-24 md:mb-0">
                            <div className="rounded-lg shadow-lg h-full block bg-white">
                                <div className="flex justify-center">

                                    <div className="pt-2 w-1/2 relative " style={{height: '12rem'}}>
                                        <Image
                                            src={picture}
                                            alt="photo membre club306"
                                            layout="fill"
                                            className="rounded-full mx-auto shadow-lg"
                                        />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h5 className="text-lg font-bold mb-4">{name}</h5>
                                    <p className="text-gray-500 mb-6">{role}</p>
                                    <p className="mb-4">{content}</p>
                                    <p className="mb-4">Voiture(s): {car}</p>
                                    <p className="mb-4">Localisation: {localisation}</p>
                                    <ul className="list-inside flex mx-auto justify-center">
                                        <Link
                                            href={facebook}
                                            className="text-gray-500">
                                            <svg
                                                fill="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </Link>
                                        <Link
                                            href={insta}
                                            className="ml-3 text-gray-500">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                                <path
                                                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                            </svg>
                                        </Link>
                                        <Link
                                            href={mail}
                                            className="ml-4 text-gray-500">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                 strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path
                                                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>


        </div>
    )
}
export interface CardStaffProps {
    picture: string
    name?: string,
    role?: string,
    content?: string,
    car?: string,
    localisation?: string,
    facebook?: any,
    insta?: any,
    mail?: any,
    children?: React.ReactNode
}
export default CardStaff