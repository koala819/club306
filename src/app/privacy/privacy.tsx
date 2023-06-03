import Link from 'next/link';
import { Layout } from '../../components/Layout';

export default function Privacy() {
  return (
    <Layout title='Politique de confidentialité'>
      <div className='container mx-auto p-4'>
        <h1
          className='flex text-2xl mb-8 justify-center'
          style={{ fontWeight: 700 }}
        >
          Politique de confidentialité
        </h1>
        <section className='mb-10 space-y-8'>
          <h2 className='text-lg font-bold' style={{ fontWeight: 700 }}>
            A. Conservation et Utilisation de vos données personnelles
          </h2>
          <p>
            Les informations recueillies sur ce formulaire sont enregistrées
            dans un fichier informatisé par le Club306. Elles sont conservées
            pendant <span style={{ fontWeight: 700 }}>3 ans</span> et sont
            destinées{' '}
            <span style={{ fontWeight: 700 }}>
              au bureau de l&apos;association
            </span>
            .
          </p>
          <p>
            Ce fichier est accessible uniquement par le/la président(e) de
            l&apos;association et le/la secrétaire de l&apos;association.
          </p>
          <p>
            Conformément à la loi «{' '}
            <Link
              href='https://www.cnil.fr/fr/la-loi-informatique-et-libertes'
              className='underline hover:text-red-600 cursor-pointer'
            >
              informatique et libertés
            </Link>{' '}
            », vous pouvez exercer votre droit d&apos;accès aux données vous
            concernant et les faire rectifier en nous contactant par voie
            postale :
          </p>
          <p className='flex justify-center'>
            Club306 – 12 allée Ledru Rollin – 93320 Les Pavillons-sous-Bois
            (France)
          </p>
          <p>
            et/ou par courriel en utilisant notre formulaire de contact
            disponible{' '}
            <Link
              href='mailto:contact@club306.fr'
              className='underline hover:text-red-600'
            >
              ici
            </Link>{' '}
            ou sur notre{' '}
            <Link href='/contact' className='underline hover:text-red-600'>
              site
            </Link>
            .
          </p>
        </section>
        <section className='mb-10 space-y-8'>
          <h2 className='text-lg font-bold' style={{ fontWeight: 700 }}>
            B. Consentement et Traitement de vos données personnelles
          </h2>
          <p>
            En cochant la case de consentement obligatoire avant soumission de
            chaque formulaire du site web www.club306.fr (« En soumettant ce
            formulaire, j’autorise le Club306 à exploiter les informations
            saisies dans le cadre de la relation commerciale qui peut en
            découler ») vous autorisez explicitement le stockage et le
            traitement de vos données dans le but de vous faire connaître de nos
            services. Vous autorisez :
          </p>
        </section>
        <section className='mb-10 space-y-8'>
          <h2 className='text-lg font-bold' style={{ fontWeight: 700 }}>
            C. Retrait du Consentement concernant vos données personnelles
          </h2>
          <h3 className='text-md font-bold ml-8' style={{ fontWeight: 700 }}>
            C.1. Droit d&apos;accès à vos données personnelles
          </h3>
          <p>
            Vous disposez d&apos;un droit d&apos;accès, de modification et/ou de
            suppression des données vous concernant à tout moment en contactant
            notre service informatique :
          </p>
          <p>
            <span style={{ fontWeight: 700 }}>Par voie postale :</span> Club306
            – 12 allée Ledru Rollin – 93320 Les Pavillons-sous-Bois (France)
            accompagné d&apos;une copie d&apos;une pièce d&apos;identité.
            Idéalement, en recommandé avec accusé de réception.
          </p>
          <p>
            <span style={{ fontWeight: 700 }}>Prenons rendez-vous :</span> avec
            présentation d&apos;une pièce d&apos;identité. La CNIL précise : «
            Il est possible de se faire accompagner par la personne de son
            choix. La consultation doit durer suffisamment longtemps pour
            prendre note commodément et complètement. Il est possible de
            demander une copie des données ».
          </p>
          <p>
            Le responsable du fichier dispose d&apos;un délai de réponse maximal
            de 2 mois à compter de la demande, qu&apos;elle ait été exercée par
            voie postale ou sur place. La CNIL précise : « Si la demande est
            incomplète (absence de la pièce d&apos;identité par exemple), le
            responsable du fichier est en droit de demander des compléments : le
            délai est alors suspendu et court à nouveau une fois ces éléments
            fournis ».
          </p>
          <p>
            Les limites au droit d’accès sont précisées sur le site de la CNIL
            et consultables{' '}
            <Link
              href='https://www.cnil.fr/fr/respecter-les-droits-des-personnes'
              className='underline hover:text-red-600'
            >
              ici
            </Link>
          </p>
        </section>
        <section className='space-y-8'>
          <h3 className='text-md font-bold ml-8' style={{ fontWeight: 700 }}>
            C.2. Modification de la relation
          </h3>
          <p>Vous ne souhaitez plus donner votre consentement ?</p>
          <p>Vous ne souhaitez plus recevoir de communication par email ?</p>
          <p>
            Envoyez-nous un mail en utilisant notre formulaire de contact
            disponible{' '}
            <Link href='/contact' className='underline hover:text-red-600'>
              ici
            </Link>
            .
          </p>
        </section>
      </div>
    </Layout>
  );
}
