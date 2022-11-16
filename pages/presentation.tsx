import type { NextPage } from 'next';
import Header from "../components/Header";
import Footer from "../components/Footer";
import AdhesionComponent from "../components/Adhesion";
import pictureCircuit from "../public/images/LGHA-Juin2019.jpg";
import pictureField from "../public/images/rassemblement306.jpg";
import pictureYellow from "../public/images/306Jaune.jpg";
import Image from "next/image";


const Presentation : NextPage = () => {

    return (
        <div>
            <Header />
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    {/*FIRST BLOC*/}
                    <div
                        className="flex border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="basis-1/3">
                            <Image
                                src={pictureCircuit}
                                alt="306 sur circuit"
                            />
                        </div>
                        <div className="basis-2/3 sm:pl-4 pl-0 ">
                            <div className="flex flex-col justify-center h-full">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-2 ">Histoire</h2>
                                <p className="leading-relaxed text-base">Le club a été créé suite a un besoin exprimé par de
                                    nombreuses personnes qui sont membres de forums ou groupes. Sous l’impulsion d’une dizaine
                                    de volontaire en 2016, le Club306 est officiellement lancé.</p>
                                <p className="mt-3 leading-relaxed text-base">Son bureau se compose de personnes venant principalement
                                    d’<a
                                        href="https://fr-fr.facebook.com/Original306/"
                                        className="text-blue-500 inline-flex items-center">Original306</a>,&nbsp;
                                    <a
                                        href="http://www.306inside.com/"
                                        className="text-blue-500 inline-flex items-center"> 306inside</a> et de
                                    <a
                                        href="https://www.facebook.com/groups/204058419941566/"
                                        className="text-blue-500 inline-flex items-center">&nbsp;l’Amicale Peugeot 306</a>.</p>
                            </div>
                        </div>
                    </div>
                    {/*SECOND BLOC*/}
                    <div
                        className="flex flex-row border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="basis-2/3 pr-4">
                            <div className="flex flex-col justify-center h-full">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Philosophie</h2>
                                <p className="leading-relaxed text-base">La vision du club est de fédérer un maximum de passionné(e)s
                                    de tout âge, toute origine, et tout horizon. Grâce à cette combinaison unique, le Club306
                                    a su grandir et devient un acteur incontournable sur le web concernant&nbsp;
                                    <a
                                        href="https://fr.wikipedia.org/wiki/Peugeot_306"
                                        className="text-blue-500 inline-flex items-center">la Peugeot 306</a>.
                                    De plus, le Club306 participe a de nombreux rassemblement officiels organisé par Peugeot
                                    (
                                    <a
                                        href="lgla"
                                        className="text-blue-500 inline-flex items-center">LGHA</a>,
                                    <a
                                        href="2019-ler"
                                        className="text-blue-500 inline-flex items-center">&nbsp;Liberte Egalite Roulez</a> ),
                                    a créé son rassemblement annuel, et est affilié à de nombreux partenaires.</p>
                                <p className="mt-3 leading-relaxed text-base">Notre but est d’offrir a chaque membre une expérience
                                    unique au travers des avantages du Club. En 2019, Le club continue de s’agrandir ce qui
                                    nous permet de rechercher des partenaires pour refabriquer des pieces d’origines.&nbsp;
                                    <a
                                        href="https://www.boutique-laventure-association.com/fr/33-306"
                                        className="text-blue-500 inline-flex items-center">L’Aventure Peugeot</a> en propose certaines déja.</p>
                            </div>
                        </div>
                        <div className="basis-1/3">
                            <Image
                                src={pictureField}
                                alt="306 in field"
                                width={720}
                                height={600}
                            />
                        </div>
                    </div>
                    {/*THIRD BLOC*/}
                    <div
                        className="flex sm:flex-row flex-col">
                        <div className="basis-1/3">
                            <Image
                                src={pictureYellow}
                                alt="Door Yellow 306"
                            />
                        </div>
                        <div className="basis-2/3 sm:pl-4 pl-0 ">
                            <div className="flex flex-col justify-center h-full">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-2 ">Devenir Membre</h2>
                                <p className="leading-relaxed text-base">En tant que membre, vous allez bénéficiez des partenariats
                                    et des prix réduits sur des pieces pour entretenir votre
                                    <a
                                        href="https://www.peugeot.fr/"
                                        className="text-blue-500 inline-flex items-center ml-2">Peugeot</a> 306.</p>
                                <p className="mt-3 leading-relaxed text-base">Annuellement, vous serez convié a participer au
                                    rassemblement du Club306 qui se déroulera en France.</p>
                                <p className="mt-3 leading-relaxed text-base">Vous serez privilégié pour vous enregistrer et
                                    participer à des événements uniques avec le Club. Lors des
                                    <a
                                        href="lgla"
                                        className="text-blue-500 inline-flex items-center ml-2">LGHA 2018</a>, nos membres ont pu
                                    rencontrer
                                    <a
                                        href="https://fr.wikipedia.org/wiki/Gilles_Panizzi"
                                        className="text-blue-500 inline-flex items-center ml-2">Gilles Pannizzi</a> et obtenir une
                                    dédicace. Plus récemment, un de nos membre a pu rencontrer
                                    <a
                                        href="https://fr.wikipedia.org/wiki/S%C3%A9bastien_Loeb"
                                        className="text-blue-500 inline-flex items-center ml-2">Sebastien Loeb</a> lors des
                                    <a
                                        href="2019RencontresPeugeotSport"
                                        className="text-blue-500 inline-flex items-center ml-2">Rencontres Peugeot Sport 2019</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AdhesionComponent />
            <Footer />
        </div>
    )
}

export default Presentation
