import React, { useState } from 'react';

import Image from 'next/image';

const CardSlider = ({ img, imgAlt, code, remise, title, url }: any) => {
  const [message, setMessage] = useState('Voir le code');

  function displayPresent() {
    setMessage(code);
  }
  return (
    <div className="lg:flex content-center justify-center rounded mx-auto">
      <div className="w-full rounded overflow-hidden shadow-lg m-10 relative flex flex-col">
        <Image className="w-full" src={img} alt={imgAlt} />
        <div className="px-6 py-4 h-full">
          <div className="font-[700] text-xl mb-2 flex justify-center">
            <a
              href={url}
              className="underline decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit"
            >
              {title}
            </a>
          </div>
          <div className="h-16 flex items-center">
            <p className="text-gray-700 text-base text-center">{remise}</p>
          </div>
        </div>
        <button
          className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded flex content-center"
          onClick={displayPresent}
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
          <span>{message}</span>
        </button>
      </div>
    </div>
  );
};
export default CardSlider;
