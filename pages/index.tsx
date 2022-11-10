import Adhesion from '../components/Adhesion'
import Outings from '../components/Outings'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import {NextPage} from "next";
import {signOut, useSession} from "next-auth/react"

const Home: NextPage = () => {
    const {data: session} = useSession()
    const content =
        {
            adhesionTitle: '',
            adhesionTxtBtn: '',
            presentationTitle: 'Le Premier et Unique Club en France dédié à la Peugeot 306',
            presentationTxt: 'Le club a été crée suite à un besoin exprimé par de nombreuses personnes qui sont membres de forums ou de groupes.',
            presentationTxtBtn: 'En savoir plus ...'
        }

    return (
        <div>
            <Header/>
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            {session ? _User() : _Guest(content)}
        </div>
    )
}

export default Home

//Guest
function _Guest(content: { adhesionTitle?: string; adhesionTxtBtn?: string; presentationTitle: any; presentationTxt: any; presentationTxtBtn: any; }) {
    return (
        <div>
            <Presentation title={content.presentationTitle} txt={content.presentationTxt}
                          txtButton={content.presentationTxtBtn}/>
            <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fclub306france&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="500" height="500"
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"/>
            <Adhesion/>
            <Outings/>
            <Partners/>
            <Footer/>
        </div>
    )
}

//User
function _User() {
    return (
        <main className="container mx-auto text-center py-20">
            <h3 className="text-4xl font-bold">Authorize User Homepage</h3>
            <div className="text-right text-gray-400" onClick={()=> _handleGoogleSignout()}>
                Se déconnecter

            </div>
        </main>
    )
}

async function _handleGoogleSignout() {
    await signOut({callbackUrl: 'https://pascal306.vercel.app'})
}