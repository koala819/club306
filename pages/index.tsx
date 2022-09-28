import Adhesion from './components/Adhesion'
import Outings from './components/Outings'
import Partners from './components/Partners'
import Footer from './components/Footer'
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import {NextPage} from "next";

const Home: NextPage = () => {

    const content =
        {
            adhesionTitle : '',
            adhesionTxtBtn: '',
            presentationTitle: 'Le Premier et Unique Club en France dédié à la Peugeot 306',
            presentationTxt: 'Le club a été crée suite à un besoin exprimé par de nombreuses personnes qui sont membres de forums ou de groupes.',
            presentationTxtBtn: 'En savoir plus ...'
        }

    return (
        <div>
        <Header />
        <Presentation title={content.presentationTitle} txt={content.presentationTxt} txtButton={content.presentationTxtBtn} />
        <Adhesion />
        <Outings />
        <Partners />
        <Footer />
    </div>
    )
    }

export default Home