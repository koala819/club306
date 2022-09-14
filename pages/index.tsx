import type { NextPage } from 'next'
import Header from './components/Header';
import Presentation from './components/Presentation';
import Adhesion from './components/Adhesion';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Presentation />
      <Adhesion />
    </div>
  )
}

export default Home
