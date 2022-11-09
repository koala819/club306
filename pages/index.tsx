import Adhesion from '../components/Adhesion'
import Outings from '../components/Outings'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import Header from "../components/Header";
import Presentation from "../components/Presentation";
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
            <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fclub306france&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="500" height="500"
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"/>
        <Adhesion />
        <Outings />
        <Partners />
        <Footer />
    </div>
    )
    }

export default Home