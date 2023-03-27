import React, { useState, useEffect } from 'react';

import { useSession } from 'next-auth/react';
import { dataPartners } from '../pages/api/partner';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from '../styles/slider.module.css';

import check from '../lib/checkRecordMember';
import Image from 'next/image';

const MySlider = () => {
  const { data: session } = useSession();
  const [registredMember, setRegistredMember] = useState(false);
  const [presentCodes, setPresentCodes] = useState(
    dataPartners.map(() => ({ code: '' }))
  );

  useEffect(() => {
    if (session?.user !== undefined) {
      if (Object.keys(session?.user).length !== 0) {
        check(session).then((response) => {
          setRegistredMember(response);
        });
      } else {
        setRegistredMember(true);
      }
    }
  }, [session]);

  const responsiveSettings = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 180,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  function displayPresent(index: number) {
    setPresentCodes((prevState) => {
      const newState = [...prevState];
      newState[index] = { code: dataPartners[index].code };
      return newState;
    });
  }

  return (
    <div className={styles.container}>
      <Slide
        slidesToScroll={2}
        slidesToShow={3}
        indicators={false}
        responsive={responsiveSettings}
      >
        {dataPartners.map((item: any, index: any) => (
          <div key={index}>
            <div className={styles.card}>
              <div className="flex w-full justify-center">
                <Image
                  src={item.linkImg}
                  alt={item.alt}
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="px-6 py-4 h-full">
                <div className="font-[700] text-xl mb-2 flex justify-center">
                  <a
                    href={item.site}
                    className="underline decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit"
                  >
                    {item.title}
                  </a>
                </div>
                <div className="h-16 flex items-center justify-center">
                  <p className="text-gray-700 text-base text-center">
                    {item.remise}
                  </p>
                </div>
              </div>

              <button
                className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded flex content-center"
                onClick={
                  registredMember ? () => displayPresent(index) : undefined
                }
              >
                <svg
                  fill="#000000"
                  className="fill-current w-5 h-5 mr-2"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 464.628 464.628"
                  enable-background="new 0 0 464.628 464.628"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <path d="m394.33,105.596h-76.136c22.944-22.372 37.216-53.596 37.216-88.096 0-9.665-7.835-17.5-17.5-17.5-44.786,0-84.057,24.045-105.596,59.9-21.539-35.855-60.81-59.9-105.595-59.9-9.665,0-17.5,7.835-17.5,17.5 0,34.5 14.273,65.724 37.216,88.096h-76.137c-9.665,0-17.5,7.835-17.5,17.5v324.033c0,9.665 7.835,17.5 17.5,17.5h324.032c9.665,0 17.5-7.835 17.5-17.5v-324.033c0-9.665-7.835-17.5-17.5-17.5zm-17.5,162.016h-127.016v-127.016h127.016v127.016zm-58.646-230.385c-7.525,32.765-33.378,58.618-66.144,66.143 7.526-32.766 33.379-58.619 66.144-66.143zm-105.596,66.142c-32.765-7.525-58.618-33.378-66.143-66.143 32.765,7.525 58.618,33.378 66.143,66.143zm2.226,37.227v127.016h-127.016v-127.016h127.016zm-127.016,162.016h127.016v127.017h-127.016v-127.017zm162.016,127.016v-127.016h127.016v127.017h-127.016z"></path>{' '}
                  </g>
                </svg>
                <span>
                  {presentCodes[index].code
                    ? presentCodes[index].code
                    : registredMember
                    ? 'Voir le code'
                    : 'Réservé à nos membres !!!'}
                </span>
              </button>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default MySlider;
