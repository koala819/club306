import Image from 'next/image';
import React from 'react';
import headerBackground from '../public/images/fondHeader.jpg';

export default function Picture306() {
    return(
        <Image className='absolute'
        alt="Mountains"
        src={headerBackground}
        height={800}
        layout="fill" // required
        objectFit="cover" // change to suit your needs
      />
    )
}



