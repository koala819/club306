import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const CallToAction = ({ slice }) => (
  <section>
    <PrismicRichText field={slice.primary.title} />
    <PrismicRichText field={slice.primary.body} />
    <span >{ slice.primary.buttontext }</span>
    <img 
      src={slice.primary.backgroundimage.url} 
      alt={slice.primary.backgroundimage.alt} />
  </section>
)

export default CallToAction
