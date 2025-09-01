import Link from 'next/link';

export default function Privacy() {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='flex text-2xl mb-8 justify-center font-bold'>
        Politique de confidentialité des données
      </h1>

      <div className='text-center mb-8 text-gray-600'>
        <p>V2 du 17/08/2025</p>
      </div>

      {/* PRÉAMBULE */}
      <section className='mb-10 space-y-6'>
        <h2 className='text-lg font-bold'>Préambule</h2>
        <p className='leading-relaxed'>
          L'association loi 1901 Club306 accorde une grande importance à la confidentialité et à la protection des données.
          Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos informations personnelles
          conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
        </p>
      </section>

      {/* ARTICLE 1 */}
      <section className='mb-10 space-y-6'>
        <h2 className='text-lg font-bold'>1. Identité et coordonnées du responsable de traitement</h2>
        <p className='leading-relaxed'>
          Les données à caractère personnel recueillies font l'objet d'un traitement informatique dont le responsable est l'association CLUB306,
          représentée par son Président Pascal Besnard, domiciliée au 12 allée Ledru Rollin, 93320 Les Pavillons-sous-Bois, France.
        </p>
        <p className='leading-relaxed'>
          Pour toute question relative à la protection de vos données personnelles, vous pouvez nous contacter à l'adresse email :{' '}
          <Link href='mailto:contact@club306.fr' className='underline hover:text-red-600'>
            contact@club306.fr
          </Link>
        </p>
      </section>

      {/* ARTICLE 2 */}
      <section className='mb-10 space-y-6'>
        <h2 className='text-lg font-bold'>2. Données personnelles collectées</h2>
        <p className='leading-relaxed'>
          La notion de données personnelles désigne toute information relative à une personne physique identifiée ou identifiable.
        </p>
        <p className='leading-relaxed'>Nous collectons les données suivantes :</p>
        <ul className='list-disc ml-8 space-y-2'>
          <li><strong>Formulaire d'inscription :</strong> civilité, nom, prénom, date de naissance, adresse postale, email, téléphone, réseaux sociaux.</li>
          <li><strong>Activation du compte CLUB306 :</strong> données sur le véhicule, modèle, finition, VIN.</li>
          <li><strong>Utilisation des outils (contact, email...) :</strong> données d'identité similaires au formulaire.</li>
          <li><strong>Navigation sur le site :</strong> adresse IP, données techniques, statistiques d'utilisation.</li>
        </ul>
      </section>

      {/* ARTICLE 3 */}
      <section className='mb-10 space-y-6'>
        <h2 className='text-lg font-bold'>3. Finalités du traitement et base juridique</h2>
        <p className='leading-relaxed'>Le traitement de vos données personnelles est effectué pour les finalités suivantes :</p>
        <ul className='list-disc ml-8 space-y-2'>
          <li>Gestion des abonnements, factures, obligations légales.</li>
          <li>Formulaire de contact et email : gestion des droits et obligations.</li>
          <li>Actions publicitaires pour l'association et ses partenaires.</li>
          <li>Gestion des demandes de droits (accès, rectification, effacement...).</li>
          <li>Justification en cas de litige et respect des obligations légales.</li>
        </ul>
      </section>

      {/* ARTICLE 4 */}
      <section className='mb-10 space-y-6'>
        <h2 className='text-lg font-bold'>4. Durée de conservation des données</h2>
        <p className='leading-relaxed'>
          Les données sont conservées pour une durée limitée selon leur finalité. Les données d'adhésion sont conservées pendant
          la durée de l'adhésion plus 3 ans. Les données commerciales sont conservées au maximum 3 ans à compter du dernier contact.
        </p>
      </section>

      {/* ARTICLE 5 */}
      <section className='mb-10 space-y-6'>
        <h2 className='text-lg font-bold'>5. Destinataires des données personnelles</h2>
        <p className='leading-relaxed'>
          Les données sont protégées et communiquées uniquement au personnel habilité, partenaires autorisés et sous-traitants,
          dans le respect du RGPD. Aucune donnée n'est vendue, louée ou cédée à des tiers à des fins commerciales.
        </p>
      </section>

      {/* ARTICLE 6 */}
      <section className='mb-10 space-y-6'>
        <h2 className='text-lg font-bold'>6. Sécurité et confidentialité des données</h2>
        <p className='leading-relaxed'>
          Des mesures organisationnelles et techniques sont mises en place pour protéger vos données contre tout accès non autorisé,
          modification, divulgation ou destruction. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique
          n'est totalement sécurisée.
        </p>
      </section>

      {/* ARTICLE 7 */}
      <section className='mb-10 space-y-6'>
        <h2 className='text-lg font-bold'>7. Droits des personnes concernées</h2>
        <p className='leading-relaxed'>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul className='list-disc ml-8 space-y-2'>
          <li><strong>Accès, rectification, effacement</strong> de vos données personnelles</li>
          <li><strong>Portabilité</strong> de vos données</li>
          <li><strong>Opposition et limitation</strong> du traitement</li>
          <li><strong>Désinscription</strong> de nos communications</li>
          <li><strong>Directives en cas de décès</strong></li>
          <li><strong>Absence de décision automatisée</strong> basée sur vos données</li>
        </ul>
        <p className='leading-relaxed'>
          Pour exercer ces droits, contactez-nous à l'adresse :{' '}
          <Link href='mailto:contact@club306.fr' className='underline hover:text-red-600'>
            contact@club306.fr
          </Link>
        </p>
      </section>

      {/* ARTICLE 8 */}
      <section className='mb-10 space-y-6'>
        <h2 className='text-lg font-bold'>8. Cookies</h2>
        <p className='leading-relaxed'>
          Notre site utilise des cookies essentiels au fonctionnement du site. Ces petits fichiers texte sont stockés sur votre
          appareil et nous permettent d'améliorer votre expérience de navigation. Vous pouvez configurer votre navigateur pour
          refuser les cookies, mais cela peut affecter le fonctionnement du site.
        </p>
      </section>

      {/* ARTICLE 9 */}
      <section className='mb-10 space-y-6'>
        <h2 className='text-lg font-bold'>9. Liens vers d'autres sites web et services</h2>
        <p className='leading-relaxed'>
          Certains liens du site donnent accès à des services tiers (réseaux sociaux, partenaires). Club306 décline toute
          responsabilité quant à leurs politiques de confidentialité. Nous vous invitons à consulter leurs propres politiques
          de confidentialité.
        </p>
      </section>

      {/* ARTICLE 10 */}
      <section className='mb-10 space-y-6'>
        <h2 className='text-lg font-bold'>10. Autorité de contrôle</h2>
        <p className='leading-relaxed'>
          En cas de non-respect de vos droits, vous pouvez introduire une réclamation auprès de la{' '}
          <Link
            href='https://www.cnil.fr/fr/plaintes'
            className='underline hover:text-red-600'
          >
            Commission Nationale de l'Informatique et des Libertés (CNIL)
          </Link>
          .
        </p>
      </section>

      {/* ARTICLE 11 */}
      <section className='mb-10 space-y-6'>
        <h2 className='text-lg font-bold'>11. Modification de la politique de confidentialité</h2>
        <p className='leading-relaxed'>
          La présente Politique de confidentialité peut être mise à jour à tout moment. Nous vous invitons à consulter régulièrement
          les mises à jour. En cas de modification substantielle, nous vous en informerons par email.
        </p>
      </section>

      {/* CONTACT */}
      <section className='mb-10 space-y-6'>
        <h2 className='text-lg font-bold'>Contact</h2>
        <p className='leading-relaxed'>
          Pour toute question concernant cette politique de confidentialité ou l'exercice de vos droits, contactez-nous :
        </p>
        <div className='bg-gray-50 p-4 rounded-lg'>
          <p><strong>Association Club306</strong></p>
          <p>12 allée Ledru Rollin</p>
          <p>93320 Les Pavillons-sous-Bois, France</p>
          <p>Email :{' '}
            <Link href='mailto:contact@club306.fr' className='underline hover:text-red-600'>
              contact@club306.fr
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
