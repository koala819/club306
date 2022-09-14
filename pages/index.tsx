import type { NextPage } from 'next'
import Header from './components/Header'
import Presentation from './components/Presentation'
import Adhesion from './components/Adhesion'
import Outings from './components/Outings'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Presentation />
      <Adhesion />
      <Outings />
    </div>
  )
}

export default Home
