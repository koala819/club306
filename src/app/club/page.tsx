'use client';
import { Adhesion } from '../homepage/Adhesion';
import pictureCircuit from '../../../public/images/LGHA-Juin2019.jpg';
import pictureField from '../../../public/images/rassemblement306.jpg';
import pictureYellow from '../../../public/images/306Jaune.jpg';
import Image from 'next/image';
import Link from 'next/link';
import '../globals.css';

export default function Presentation() {
  return (
    <div className="container px-5 py-24 mx-auto">
      {/*FIRST BLOC*/}
      <section className="flex border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
        <div className="basis-1/3">
          <Image
            src={pictureCircuit}
            alt="306 sur circuit"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </div>
        <div className="basis-2/3 sm:pl-4 pl-0 ">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2 ">
              Histoire{' '}
            </h2>
            <p className="leading-relaxed text-base">
              Le club a été créé suite a un besoin exprimé par de nombreuses
              personnes qui sont membres de forums ou groupes. Sous l’impulsion
              d’une dizaine de volontaire en 2016, le Club306 est officiellement
              lancé.
            </p>
            <p className="mt-3 leading-relaxed text-base">
              Son bureau se compose de personnes venant principalement d&apos;
              <Link
                href="https://fr-fr.facebook.com/Original306/"
                className="my-link"
              >
                Original306
              </Link>
              ,{' '}
              <Link href="https://www.306inside.com/" className="my-link">
                306inside
              </Link>{' '}
              et de{' '}
              <Link
                href="https://www.facebook.com/groups/204058419941566/"
                className="my-link"
              >
                l’Amicale Peugeot 306
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
      {/*SECOND BLOC*/}
      <section className="flex border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
        <div className="basis-2/3 pr-4">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Philosophie
            </h2>
            <p className="leading-relaxed text-base">
              La vision du club est de fédérer un maximum de passionné(e)s de
              tout âge, toute origine, et tout horizon. Grâce à cette
              combinaison unique, le Club306 a su grandir et devient un acteur
              incontournable sur le web concernant{' '}
              <Link
                href="https://fr.wikipedia.org/wiki/Peugeot_306"
                className="my-link"
              >
                la Peugeot 306
              </Link>
              . De plus, le Club306 participe a de nombreux rassemblement
              officiels organisé par Peugeot (
              <Link href="#" className="my-link">
                LGHA
              </Link>
              ,{' '}
              <Link href="#" className="my-link">
                Liberte Egalite Roulez
              </Link>
              ), a créé son rassemblement annuel, et est affilié à de nombreux
              partenaires.
            </p>
            <p className="mt-3 leading-relaxed text-base">
              Notre but est d’offrir a chaque membre une expérience unique au
              travers des avantages du Club. En 2019, Le club continue de
              s’agrandir ce qui nous permet de rechercher des partenaires pour
              refabriquer des pieces d’origines.{' '}
              <Link
                href="https://www.boutique-laventure-association.com/fr/33-306"
                className="my-link"
              >
                L’Aventure Peugeot
              </Link>{' '}
              en propose certaines déja.
            </p>
          </div>
        </div>
        <div className="basis-1/3">
          <Image
            src={pictureField}
            alt="306 in field"
            loading="lazy"
            width={720}
            height={600}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </div>
      </section>
      {/*THIRD BLOC*/}
      <section className="flex sm:flex-row flex-col mb-12">
        <div className="basis-1/3">
          <Image
            src={pictureYellow}
            alt="Door Yellow 306"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </div>
        <div className="basis-2/3 sm:pl-4 pl-0 ">
          <div className="flex flex-col justify-center h-full">
            <h2
            // className="text-gray-900 text-lg font-extrabold mb-2"
            >
              Devenir Membre
            </h2>
            <div className="leading-relaxed text-base">
              En tant que membre, vous allez bénéficiez des partenariats et des
              prix réduits sur des pieces pour entretenir votre
              <h2 className="font-bold" style={{ fontWeight: 700 }}>
                Peugeot 306
              </h2>
              .
            </div>
            <div className="mt-3 leading-relaxed text-base">
              Annuellement, vous serez convié a participer au rassemblement du
              Club306 qui se déroulera en France.
            </div>
            <div className="mt-3 leading-relaxed text-base">
              Vous serez privilégié pour vous enregistrer et participer à des
              événements uniques avec le Club. Lors des{' '}
              <Link href="#" className="my-link">
                LGHA 2018
              </Link>
              , nos membres ont pu rencontrer{' '}
              <Link
                href="https://fr.wikipedia.org/wiki/Gilles_Panizzi"
                className="my-link"
              >
                Gilles Pannizzi
              </Link>{' '}
              et obtenir une dédicace. Plus récemment, un de nos membre a pu
              rencontrer{' '}
              <Link
                href="https://fr.wikipedia.org/wiki/S%C3%A9bastien_Loeb"
                className="my-link"
              >
                Sebastien Loeb
              </Link>{' '}
              lors des{' '}
              <Link href="#" className="my-link">
                Rencontres Peugeot Sport 2019
              </Link>
              .
            </div>
          </div>
        </div>
      </section>
      {/*ADHESION BLOC*/}
      <Adhesion />
    </div>
  );
}
