import type { NextPage } from 'next'
import Layout from './components/Layout'

const Home: NextPage = () => {
    const content =
        {
            adhesionTitle : 'Rejoignez nous en 30 secondes',
            adhesionTxtBtn: 'Adhérer'
        }
  return (
    <div>

      {/*<Presentation />
      <Adhesion />
      <Outings />
      <Partners />*/}
      <Layout content={content} />
    </div>
  )
}

export default Home
