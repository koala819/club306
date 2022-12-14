import {NextPage} from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import CardStaff from "../components/CardStaff";


const Staff: NextPage = () => {
    const StaffMember = [
        {
            picture: "/images/clubGaucherotFabrice.jpg",
            name: "Fabrice Gaucherot",
            role: "Président",
            content: "J’ai appris à conduire avec une 306 1.6l 90ch ph 1 bleu miami\n" +
                " importée d’Italie. Une fois le permis en poche plusieurs Peugeot sont passées\n" +
                " (104 gls,106 xsi, 205 xt) jusqu’à ma 306 1.4l 75ch blanc banquise série limitée\n" +
                "  Palm Beach ph 2.1. La famille s’est agrandie et d’autres voitures sont passées\n" +
                " (205 gti 1.6) jusqu’à ma 306 2.0l S16 gris quartz ph 2.1 que je m’efforce de\n" +
                " restaurer au fil du temps.",
            car: "306 2.0 BV6 S16 ph 2.1 de 1997",
            localisation: "Clermont-Ferrand (63)",
            facebook: "https://www.facebook.com/club306france/",
            insta: "https://www.instagram.com/club306officielfrance",
            mail: "president@club306.fr"
        },
        {
            picture: "/images/clubBienaszAurelien.jpg",
            name: "Aurélien Bienasz",
            role: "Trésorier",
            content: "En 2006 étant encore étudiant j’ai commencé par une 2.0 hdi de 2001 qui me\n" +
                " faisait envie depuis des années. Puis après un accident j’ai décidé de passer à autre\n" +
                "  chose. En 2012 je me suis mis en quête d’une sportive type 205 gti mais je suis tombé par\n" +
                "  hasard sur une 306 s16 acav (le virus avait repris le dessus) que je possède toujours et\n" +
                "  qui est en restauration petit à petit. Depuis 2018 la 1.4 l’a rejointe comme voiture de tous\n" +
                "  les jours et pour les travaux de la maison.",
            car: "306 1.4 Profil ph.1 de 97 et 306 s16 acav de 94",
            localisation: "Pinterville (27)",
            facebook: "https://www.facebook.com/club306france/",
            insta: "https://www.instagram.com/club306officielfrance",
            mail: "tresorier@club306.fr"
        },
        {
            picture: "/images/clubBerthetYoann.jpg",
            name: "Yoann Berthet",
            role: "Secrétaire/Vice-President",
            content: "Commencée en 2003 lors de la recherche de ma première voiture. Je suis tombé vite amoureux de ma\n" +
                " 306 1.4. Petit moteur mais qui m’as permis de faire des rassemblements, apprendre la mécanique et\n" +
                " surtout rencontrer, beaucoup de personnes qui aujourd’hui ne sont pas que de simples amis passionnés.\n" +
                " Cette passion m’a amené à acquérir une 1.9TD eden park de 95 qui malheureusement était trop malade\n" +
                " pour être sauvée. Remplacée très vite par le Break qui lui subit une remise en forme. Présent dès\n" +
                " le début de l’aventure du Club, pour essayer de réunir un maximum de monde sous une même bannière,\n" +
                " car la passion c’est autour de toutes les 306 modèles et motorisations confondues",
            car: "306 1.4L ph2. 2 de 1999 et 306 Break 2L Hdi de 2001",
            localisation: "Lorient (56)",
            facebook: "https://www.facebook.com/club306france/",
            insta: "https://www.instagram.com/club306officielfrance",
            mail: "secretariat@club306.fr"
        },
        {
            picture: "/images/clubCheminSebastien.jpg",
            name: "Sébastien Chemin",
            role: "Responsable boutique",
            content: "À la base, grand fan de Peugeot de père en fils donc la peugeot 306 1.8 16s a été ma première\n" +
                " voiture avec qui j’ai eu beaucoup de bons et mauvais souvenirs. Entre temps j’ai eu différents modèles\n" +
                " de la marque aux Lions (204 break, 207, 407, et puis le retour aux sources 306 GTI, HDI et XSI)",
            car: "306 GTI (origine Suisse) de 2000 et 306 XSI 8s (origine Allemande) de 1995",
            localisation: "Marne-la-Vallée (77)",
            facebook: "https://www.facebook.com/club306france/",
            insta: "https://www.instagram.com/club306officielfrance",
            mail: "boutique@club306.fr"
        },
        {
            picture: "/images/clubAzaisAntony.png",
            name: "Antony Azais",
            role: "Adjoint boutique",
            content: "Mon premier achat, mon propre cadeau d’anniversaire, a été une voiture pas trop chère une 306\n" +
                " 1.9d ph1.1 et très économique pour un jeune de 17 ans. J’ai aujourd’hui bientôt 26 ans et j’ai\n" +
                " actuellement une 306 HDI comme daily et une 306 S16 bv6 ph1 pour les moments de plaisir et de détente.\n" +
                " Ce qui me plaît ce sont ses formes carré des années 90 qui font penser à ces petites sœurs comme la 106\n" +
                " XSI ou rallye ou même encore la 205, la « simplicité » et l’accessibilité aux réparations pour un peux\n" +
                " expérimenté dans le domaine de la mécanique comme moi.",
            car: "306 2.0 HDI 5p de 99 et 306 s16 BV6 de 97",
            localisation: "Brive-la-Gaillarde (19)",
            facebook: "https://www.facebook.com/club306france/",
            insta: "https://www.instagram.com/club306officielfrance",
            mail: "secretariat@club306.fr"
        },
        {
            picture: "/images/clubFaurieBastien.jpg",
            name: "Bastien Faurie",
            role: "Responsable Partenariat",
            content: "Fier de ma conduite accompagné, j’ai commencé a vouloir avoir ma propre voiture. Les 306, je les\n" +
                " trouvais tellement belles. Intemporelles, avec une gueule agressive, et pas trop moderne pour pouvoir\n" +
                " apprendre. Dès ma première, je suis tomber amoureux. Premières modifications, premières rencontres\n" +
                " avec les copains, première leçon de mécaniques. Suite à un accident, j’ai repris une 306 HDI que je\n" +
                " possède toujours, la famille s’étant agrandie d’un break 1.8 16s très bien équipé que je remonte,\n" +
                " chose impossible pour moi avant tout ça. Que de souvenirs partagés grâce à ce modèle.",
            car: "306 2.0 HDI 5p Gris Aster et 306 1.8 16s break Gris Aster",
            localisation: "Guingamp (22)",
            facebook: "https://www.facebook.com/club306france/",
            insta: "https://www.instagram.com/club306officielfrance",
            mail: "partenariat@club306.fr"
        },
        {
            picture: "/images/clubGachetMickael.jpg",
            name: "Mikael Gachet",
            role: "Responsable communication",
            content: "C’est ma première voiture, j’ai tellement de bons souvenirs avec elle aux quatre coins de la\n" +
                " France qu’il m’est impossible de m’en séparer. J’ai tout appris avec elle niveau mécanique et elle\n" +
                " m’a permis de rencontrer des gens qui sont aujourd’hui de vrais amis",
            car: "306 1.4 ph2. 1 de 1997 Équinoxe",
            localisation: "Segré (49) ",
            facebook: "https://www.facebook.com/club306france/",
            insta: "https://www.instagram.com/club306officielfrance",
            mail: "communication@club306.fr"
        },
        {
            picture: "/images/clubThiouxEstel.png",
            name: "Estel Thioux",
            role: "Adjointe Communication",
            content: "Je suis issue d’une famille où beaucoup de membres travaillent (ou ont travaillé) dans le milieu\n" +
                " de l’automobile. J’ai passé mon permis de conduire sur une 306 XRDT. Après avoir longtemps roulé\n" +
                " au quotidien en 309 GTI, j’ai également eu (entre autres) plusieurs modèles emblématiques de Renault\n" +
                " avant de revenir à une 306 avec un historique connu. J’ai choisi ce modèle en particulier pour sa\n" +
                " fiabilité, son côté pratique et sa facilité d’entretien. Je fais également partie d’un club local de véhicules anciens. ",
            car: "306 TD 1995 – R16 L 1973 – R25 Txi J.O. 1992 – Porsche 944 1983",
            localisation: "Rosporden (29)",
            facebook: "https://www.facebook.com/club306france/",
            insta: "https://www.instagram.com/club306officielfrance",
            mail: "secretariat@club306.fr"
        },
        {
            picture: "/images/clubBellevziIsciane.jpg",
            name: "Isciane Bellevzi",
            role: "Responsable Evenement",
            content: "Ma première voiture, 3 ans avec une 306 XT HDi dont je garde un très bon souvenir, l’aventure à\n" +
                " continuer avec ma première bv6 en 2015. C’est avec celle-ci que j’ai commencé à vraiment faire des\n" +
                " rassemblements, à rencontrer des gens formidables, à prendre plaisir à faire des kilomètres dans\n" +
                " nos belles montagnes… roadtrip, premiers pas sur circuit… beaucoup de bons souvenirs et je compte bien poursuivre l’aventure!",
            car: "306 s16 bv6 1998 jaune Vermeer(GTi Suisse) et 306 s16 bv6 noire Onyx",
            localisation: "Île-de-France (94), Haute-Savoie (74)",
            facebook: "https://www.facebook.com/club306france/",
            insta: "https://www.instagram.com/club306officielfrance",
            mail: "secretariat@club306.fr"
        },
        {
            picture: "/images/clubBesnardPascal.jpg",
            name: "Pascal Besnard",
            role: "Webmaster",
            content: "Passionné de 306 depuis son apparition, j’ai suivi avec entousiasme son evolution et impact en\n" +
                " France (sur les routes et rallye). En 2004, j’ai acquis une 306 1.9 Td bleu sigma ph 2.1. Puis en 2010,\n" +
                " je l ai vendu pour m’acheter une 306 HDI que j’ai preparé pendant 3 ans. Enfin, je me suis acheté\n" +
                " la version XU10J4RS que j’ai restauré à neuf.",
            car: "306 S16 BV6 1997 Blanc Banquise Premium et 306 S16 BV6 1999 Gris Iceland",
            localisation: "Seattle (USA), Angers (49), Toulouse (31)",
            facebook: "https://www.facebook.com/club306france/",
            insta: "https://www.instagram.com/club306officielfrance",
            mail: "webmaster@club306.fr"
        }
    ];

    return (
        <div>
            <Header/>
            <div className="container my-24 px-6 mx-auto">
                <section className="mb-32 text-gray-800 text-center">

                    <h2 className="text-3xl font-bold mb-32 text-blue-500">Une équipe à votre écoute</h2>
                    <div className="grid gap-x-6 lg:gap-x-12 md:grid-cols-3">
                        {
                            StaffMember.map((member: any, index) =>
                                <CardStaff
                                    picture={member.picture}
                                    name={member.name}
                                    role={member.role}
                                    content={member.content}
                                    car={member.car}
                                    localisation={member.localisation}
                                    facebook={member.facebook}
                                    insta={member.insta}
                                    mail={member.mail}
                                    key={index}
                                />
                            )
                        }
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    )
}

export default Staff