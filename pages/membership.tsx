import { Layout } from '../components/Layout';
import Stepper from '../components/Stepper'

export default function Membership() {
  return (
    <Layout title='Adhesion Membre'>
      <div className="container mx-auto px-5  md:flex-row flex-col items-center">
        <Stepper />
      </div>
    </Layout>
  )
}