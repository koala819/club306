'use client';
import { CardStaff } from '@/components/CardStaff';

export default function Staff() {
  const StaffMember = [
    {
      picture: '/images/clubBesnardPascal.jpg',
      name: 'Pascal Besnard',
      role: 'Président',
      content:
        'Passionné de 306 depuis son apparition, j’ai suivi avec entousiasme son evolution et impact en\n' +
        ' France (sur les routes et rallye). En 2004, j’ai acquis une 306 1.9 Td bleu sigma ph 2.1. Puis en 2010,\n' +
        ' je l ai vendu pour m’acheter une 306 HDI que j’ai preparé pendant 3 ans. Enfin, je me suis acheté\n' +
        ' la version XU10J4RS que j’ai restauré à neuf.',
      car:
        '306 S16 BV6 1997 Blanc Banquise Premium\n' +
        'X306 S16 BV6 1999 Gris Iceland',
      localisation: 'Île-de-France (93), Angers (49), Toulouse (31)',
      facebook: 'https://www.facebook.com/pascal.besnard',
      insta: '#',
      mail: 'president@club306.fr',
    },
    {
      picture: '/images/clubWerleFabreAmandine.jpg',
      name: 'Amandine Werlé-Fabre',
      role: 'Secrétaire et Vice-Président',
      content:
        'C’est un très beau break 306, bleu iceland, dans un état exceptionnel mais malheureusement\n' +
        ' disparu dans un accident, qui m’a donné la passion de la 306, et révélé ma passion pour les\n' +
        ' voitures youngtimers.\n' +
        ' Conduire une 306, c’est refuser cette ambiance générale morose et culpabilisante pour tout ce qui\n' +
        ' rend heureux. C’est avoir la simplicité, le charisme, l’essentiel entre les mains, un zeste de l’ADN\n' +
        ' de la mythique 205 qui m’a fait tant rêver à l’adolescence, avec la modernité en plus\n' +
        ' Mon souhait, avec le club 306, est de valoriser cette géniale petite voiture française',
      car: '306 1.8 16v Grise Aster\n' + 'X306 Cabriolet Gris',
      localisation: 'Île-de-France (78)',
      facebook: 'https://www.facebook.com/dine.erlew',
      insta: '#',
      mail: 'secretariat@club306.fr',
    },
    {
      picture: '/images/clubBellevziIsciane.jpg',
      name: 'Isciane Belleville',
      role: 'Trésorière et Responsable Evénement',
      content:
        'Ma première voiture, 3 ans avec une 306 XT HDi dont je garde un très bon souvenir, l’aventure à\n' +
        ' continuer avec ma première bv6 en 2015. C’est avec celle-ci que j’ai commencé à vraiment faire des\n' +
        ' rassemblements, à rencontrer des gens formidables, à prendre plaisir à faire des kilomètres dans\n' +
        ' nos belles montagnes… roadtrip, premiers pas sur circuit… beaucoup de bons souvenirs et je compte bien poursuivre l’aventure!',
      car:
        '306 s16 bv6 1998 jaune Vermeer(GTi Suisse)\n' +
        'X306 s16 bv6 noire Onyx',
      localisation: 'Île-de-France (77), Haute-Savoie (74)',
      facebook: 'https://www.facebook.com/isciane.belleville',
      insta: 'https://www.instagram.com/isciane_belleville/',
      mail: 'evenements@club306.fr',
    },
    {
      picture: '/images/clubAzaisAntony.png',
      name: 'Antony Azais',
      role: 'Adjoint Evénement',
      content:
        'Mon premier achat, mon propre cadeau d’anniversaire, a été une voiture pas trop chère une 306\n' +
        ' 1.9d ph1.1 et très économique pour un jeune de 17 ans. J’ai aujourd’hui bientôt 26 ans et j’ai\n' +
        ' actuellement une 306 HDI comme daily et une 306 S16 bv6 ph1 pour les moments de plaisir et de détente.\n' +
        ' Ce qui me plaît ce sont ses formes carré des années 90 qui font penser à ces petites sœurs comme la 106\n' +
        ' XSI ou rallye ou même encore la 205, la « simplicité » et l’accessibilité aux réparations pour un peux\n' +
        ' expérimenté dans le domaine de la mécanique comme moi.',
      car: '306 2.0 HDI 5p de 99\n' + 'X306 s16 BV6 de 97',
      localisation: 'Brive-la-Gaillarde (19)',
      facebook: 'https://www.facebook.com/AntonyCrafted',
      insta: 'https://www.instagram.com/antony.crafted/',
      mail: 'evenements@club306.fr',
    },
    {
      picture: '/images/clubFaurieBastien.jpg',
      name: 'Bastien Faurie',
      role: 'Responsable Communication',
      content:
        'Fier de ma conduite accompagné, j’ai commencé a vouloir avoir ma propre voiture. Les 306, je les\n' +
        ' trouvais tellement belles. Intemporelles, avec une gueule agressive, et pas trop moderne pour pouvoir\n' +
        ' apprendre. Dès ma première, je suis tomber amoureux. Premières modifications, premières rencontres\n' +
        ' avec les copains, première leçon de mécaniques. Suite à un accident, j’ai repris une 306 HDI que je\n' +
        ' possède toujours, la famille s’étant agrandie d’un break 1.8 16s très bien équipé que je remonte,\n' +
        ' chose impossible pour moi avant tout ça. Que de souvenirs partagés grâce à ce modèle.',
      car: '306 2.0 HDI 5p Gris Aster\n' + '306 1.8 16s break Gris Aster',
      localisation: 'Guingamp (22)',
      facebook: 'https://www.facebook.com/bastien.faurie',
      insta: 'https://www.instagram.com/_bastien.f/',
      mail: 'communication@club306.fr',
    },
    {
      picture: '/images/clubWissocqBastien.jpg',
      name: 'Bastien Wissocq',
      role: 'Adjoint Communication',
      content:
        'Naissant exactement un an jour pour jour après la sortie de la Peugeot 306,\n' +
        ' j’ai un anniversaire commun dévoué d’avance. Famille très Peugeotistes depuis toujours.,\n' +
        ' C’est en 1999 que mon grand-père acheta la 306 et c’est le début d’une belle aventure et,\n' +
        ' de passion des lionnes. Le jour du choix d’une première voiture il ne fallut pas longtemps,\n' +
        ' pour trouver le modèle que je voulais : Une 306 Ph1 D-turbo! Le sort en à décider autrement et,\n' +
        ' se fut une Sedan (306 3 volumes) diesel atmosphérique a 10min de la maison! Auto sortie d’un autre,\n' +
        ' temps avec qui j’ai découvert la passion de l’automobile dans une autre dimension ! La suite c’est,\n' +
        ' un peu la même pour tout le monde L’évolution des forums puis des pages/groupes Facebook d’entraide,\n' +
        ' de passionné a donné naissances à de belles amitiés, de rassemblements magiques dans des régions ,\n' +
        ' superbes, d’aventures et de road trips 306 indescriptibles, de sessions casse hilarantes et surtout,\n' +
        ' de nombreux weekend et nuits de mécanique imprévu mémorable.',
      car:
        '306 XSI 2.0 8s 123ch ph1.1 Noir Onyx 01/94\n' +
        'XS 1.6 90ch Ph1.2 Rouge Vallelunga\n' +
        'XT 1.8 16s 112ch Ph2.2 Rouge',
      localisation: 'Lille (59)',
      facebook: 'https://www.facebook.com/Peaceof59',
      insta: 'https://www.instagram.com/peaceof59/',
      mail: 'communication@club306.fr',
    },
    {
      picture: '/images/clubXavierGenolhac.jpg',
      name: 'Xavier Genolhac',
      role: 'Développeur',
      content:
        "Depuis que j'ai découvert la Peugeot 306 2L XS HDI en gris Iceland, ce fut un véritable coup\n" +
        " de cœur. J'ai attendu jusqu'en 2014 pour enfin acquérir ma première 306, une version TD \n" +
        " que j'ai rapidement remplacée pour une HDI Gris Aster. Aujourd'hui, je possède une\n" +
        ' 306 gris Iceland avec un moteur 1.8L.\n' +
        " Je suis fier d'avoir créé le site Club306 avec NextJS, offrant ainsi un espace de rencontre et\n" +
        " d'échange pour les passionnés de cette voiture intemporelle. Grâce à cette plateforme, les \n" +
        ' amateurs de la Peugeot 306 peuvent se retrouver et partager leur passion, renforçant ainsi\n' +
        ' la communauté dédiée à cette icône automobile. ',
      car: '306 1.8 16V 112ch ph2.2 Gris Iceland 03/21',
      localisation: 'Toulouse (31)',
      facebook: '#',
      insta: '#',
      github: 'https://github.com/koala819/',
      linkedin:
        'https://www.linkedin.com/in/xavier%F0%9F%92%BB-genolhac-79a98390/',
      mail: 'contact@club306.fr',
    },
  ];

  return (
    <div className="container my-24 px-6 mx-auto ">
      <section className="mb-32 text-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-32 text-blue-500 dark:text-yellow-600">
          Une équipe à votre écoute
        </h2>
        <div className="grid gap-x-6 lg:gap-x-12 md:grid-cols-3">
          {StaffMember.map((member: any, index) => (
            <CardStaff
              picture={member.picture}
              name={member.name}
              role={member.role}
              content={member.content}
              car={member.car}
              localisation={member.localisation}
              facebook={member.facebook}
              github={member.github}
              linkedin={member.linkedin}
              insta={member.insta}
              youtube={member.youtube}
              mail={member.mail}
              key={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
