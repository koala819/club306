import Layout from '../components/Layout';
import Stepper from '../components/membership/Stepper';

export default function Membership() {
  return (
    <Layout title="Adhesion Membre" displayNavbar={false}>
      <div className="container mx-auto px-5  md:flex-row flex-col items-center">
        <Stepper />
      </div>
    </Layout>
  );
}
