import type { NextPage } from 'next'
import Layout from './components/Layout'

const Home: NextPage = () => {
    const content =
        {
            adhesionTitle : 'Rejoignez nous en 30 secondes',
            adhesionTxtBtn: 'Adhérer',
            presentationTitle: 'Le Premier et Unique Club en France dédié à la Peugeot 306',
            presentationTxt: 'Le club a été crée suite à un besoin exprimé par de nombreuses personnes qui sont membres de forums ou de groupes.',
            presentationTxtBtn: 'En savoir plus ...'
        }
  return (
    <div>

      {/*
      <Outings />
      <Partners />*/}
      <Layout content={content} />
    </div>
  )
}

export default Home
