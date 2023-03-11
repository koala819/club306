import React, { useState, useEffect } from 'react';
import Card from './CardSlider';
import { useSession } from 'next-auth/react';
import { dataPartners } from '../pages/partner';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import check from '../lib/checkRecordMember';

const MySlider = () => {
  const { data: session } = useSession();
  const [registredMember, setRegistredMember] = useState(false);


  useEffect(() => {
    if (session?.user !== undefined) {
      if (Object.keys(session?.user).length !== 0) {
        check(session).then((response) => {
          setRegistredMember(response);
          //console.log('ce membre Google est-il autorisé ?', setRegistredMember);
        });
      } else {
        //console.log('we have a standard account with login / pwd');
        setRegistredMember(true);
      }
    }
  }, [session]);

  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  return (
    <div className="w-full">
      <Slide
        slidesToScroll={2}
        slidesToShow={3}
        indicators={false}
        responsive={responsiveSettings}
      >
        {dataPartners.map((item: any, index: any) => (
          <Card
            code={registredMember ? item.code : 'Réservé à nos membres !!!'}
            img={item.linkImg}
            imgAlt={item.alt}
            key={index}
            remise={item.remise}
            title={item.title}
            url={item.site}
          />
        ))}
      </Slide>
    </div>
  );
};

export default MySlider;
