import type { NextPage } from 'next'
import Header from './components/Header'
import Presentation from './components/Presentation'
import Adhesion from './components/Adhesion'
import Outings from './components/Outings'
import Partners from './components/Partners'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Presentation />
      <Adhesion />
      <Outings />
      <Partners />
    </div>
  )
}

export default Home
