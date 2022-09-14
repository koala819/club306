import type { NextPage } from 'next'
import Header from './components/Header'
import Presentation from './components/Presentation'
import Adhesion from './components/Adhesion'
import Outings from './components/Outings'
import Partners from './components/Partners'
import Footer from './components/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Presentation />
      <Adhesion />
      <Outings />
      <Partners />
      <Footer />
    </div>
  )
}

export default Home
