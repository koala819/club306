import Link from 'next/link'

export default function legalNotice() {
  return (
    <div className="container mx-auto p-4">
      <h1
        className="flex text-2xl mb-8 justify-center"
        style={{ fontWeight: 700 }}
      >
        Mentions légales
      </h1>
      <section className="mb-10 space-y-8">
        <h2 className="text-lg font-bold" style={{ fontWeight: 700 }}>
          Propriétaire et exploitation du site
        </h2>
        <p>
          Pascal BESNARD
          <br />
          Association : W472001920
          <br />
          12 allée Ledru Rollin
          <br />
          93320 LES PAVILLONS-SOUS-BOIS
        </p>
      </section>
      <section className="mb-10 space-y-8">
        <h2 className="text-lg font-bold" style={{ fontWeight: 700 }}>
          Nom de domaine
        </h2>
        <p>
          Club306.fr est un nom de domaine déposé.
          <br />
          Nom de domaine réservé chez O2SWITCH
        </p>
      </section>
      <section className="mb-10 space-y-8">
        <h2 className="text-lg font-bold" style={{ fontWeight: 700 }}>
          Hébergement
        </h2>
        <p>Site hébergé par Vercel</p>
      </section>
      <section className="mb-10 space-y-8">
        <h2 className="text-lg font-bold" style={{ fontWeight: 700 }}>
          Création du site
        </h2>
        <p>Xavier GENOLHAC</p>
        <p>
          Le site a été réalisé en utilisant plusieurs technologies modernes et
          puissantes. La partie front-end a été développée avec Next.js, un
          framework JavaScript populaire qui offre des fonctionnalités avancées
          telles que le rendu côté serveur et le routage dynamique. Pour le
          style et la mise en page, nous avons utilisé Tailwind CSS, une
          bibliothèque CSS utilitaire qui permet une personnalisation facile et
          rapide. TypeScript a été choisi comme langage de programmation pour
          assurer une meilleure maintenabilité et une détection précoce des
          erreurs. Enfin, Prismic a été utilisé comme système de gestion de
          contenu (CMS), permettant une gestion facile et flexible du contenu du
          site. En combinant ces technologies, nous avons créé un site web
          moderne, performant et facile à maintenir.
        </p>
        <p>
          De plus, le code source du site est accessible librement.
          Actuellement, il est hébergé dans un un dépôt privé sur GitHub, mais
          nous sommes ouverts à fournir l&apos;accès à quiconque en fait la
          demande. Nous croyons en la transparence et en la collaboration, et
          nous encourageons la contribution et l&apos;amélioration continue du
          site. Si vous êtes intéressé par l&apos;accès au code source,
          n&apos;hésitez pas à{' '}
          <Link href="/contact" className="hover:text-red-600 underline">
            nous contacter
          </Link>{' '}
          et nous serons heureux de discuter des possibilités de collaboration.
        </p>
      </section>
      <section className="mb-10 space-y-8">
        <h2 className="text-lg font-bold" style={{ fontWeight: 700 }}>
          CLUB306.FR
        </h2>
        <p>
          Toutes les marques citées sur le site{' '}
          <span style={{ fontWeight: 700 }}>www.club306.fr</span> et notamment «
          PEUGEOT » sont des marques déposées. A défaut d’un accord écrit
          préalable de l’administrateur, l’exploitation et/ou l’utilisation de
          la marque « CLUB306 » est strictement interdite à quelque titre que ce
          soit.
        </p>
      </section>
      <section className="mb-10 space-y-8">
        <h2 className="text-lg font-bold" style={{ fontWeight: 700 }}>
          Bon usage – Responsabilité
        </h2>
        <p>
          Le site <span style={{ fontWeight: 700 }}>www.club306.fr</span> a pour
          objectif de présenter la vision du club, les services qu’il propose
          ainsi que les dernières sorties.
        </p>
        <p>En tout état de cause, il est rappelé que :</p>
        <ul className="space-y-4 mt-4 mb-4 ml-4 list-disc">
          <li>
            Les Documents et plus généralement le contenu du site{' '}
            <span style={{ fontWeight: 700 }}>www.club306.fr</span> sont
            uniquement consultables, certains sont téléchargeables pour un usage
            personnel uniquement,
          </li>
          <li>
            Les documents et plus généralement le contenu du site{' '}
            <span style={{ fontWeight: 700 }}>www.club306.fr</span> ne sont pas
            contractuels.
          </li>
        </ul>
      </section>
      <section className="mb-10 space-y-8">
        <h2 className="text-lg font-bold" style={{ fontWeight: 700 }}>
          Le site CLUB306
        </h2>
        <ul className="space-y-4 mt-4 mb-4 ml-4 list-disc">
          <li>
            Ne garantit pas l&apos;exactitude des informations qu&apos;il met en
            ligne sur son site{' '}
            <span style={{ fontWeight: 700 }}>www.club306.fr</span> même
            s&apos;il s&apos;efforce d&apos;y parvenir. A ce titre, le site web
            n&apos;est en aucun cas responsable des éventuels dommages ou pertes
            que chacun peut subir après consultation de ces informations,
          </li>
          <li>
            Se réserve le droit de modifier*, à tout moment, tout ou partie du
            site <span style={{ fontWeight: 700 }}>www.club306.fr</span>,
          </li>
          <li>
            Décline toute responsabilité pour les difficultés ou désagréments
            rencontrés lors de l&apos;accès à son site. Le site web ne garantit
            pas que le serveur hébergeant le site{' '}
            <span style={{ fontWeight: 700 }}>www.club306.fr</span> soit exempt
            de virus ou qu&apos;il puisse survenir un problème technique pouvant
            endommager les composants ou les données stockées dans
            l&apos;ordinateur de l&apos;utilisateur.
          </li>
        </ul>
        <p className="text-xs">
          *Toute modification entrera en vigueur à compter de sa mise en ligne
          sur le site précité. L&apos;utilisateur sera supposé avoir accepté
          cette modification pour la suite de sa consultation.
        </p>
      </section>
      <section className="mb-10 space-y-8">
        <h2 className="text-lg font-bold" style={{ fontWeight: 700 }}>
          Droits d&apos;auteur et de reproduction
        </h2>
        <p>
          En application des lois du 11 mars 1957 et du 1er juillet 1992
          relatives au code de la propriété intellectuelle, (ou autres droits
          similaires), l&apos;exploitation, l&apos;utilisation, la reproduction,
          la diffusion, la commercialisation, l&apos;extraction ou la
          modification de tout ou partie des éléments se trouvant dans le site{' '}
          <span style={{ fontWeight: 700 }}>www.club306.fr</span> est
          strictement interdite. Le Club306 ne cède aucun droit de propriété
          intellectuelle sur les Documents et plus généralement sur le contenu
          du site <span style={{ fontWeight: 700 }}>www.club306.fr</span>,
          quelle qu&apos;en soit la forme.
        </p>
        <p>
          Conformément aux règles de « Bon usage » ci-dessus mentionnées, la
          consultation des Documents ne peut s&apos;interpréter comme une
          cession, même partielle ou temporaire, des droits de reproduction, de
          représentation et d&apos;adaptation de tout ou partie des textes,
          présentations méthodologiques ou éléments visuels ou graphiques
          composant le site{' '}
          <span style={{ fontWeight: 700 }}>www.club306.fr</span>.
        </p>
        <p>
          Les conditions d&apos;exploitation qui s&apos;attachent aux Documents
          et plus généralement au contenu du site{' '}
          <span style={{ fontWeight: 700 }}>www.club306.fr</span>
          sont les suivantes :{' '}
          <span className="uppercase">
            DROITS RESERVES – TEXTES, ELEMENTS VISUELS, GRAPHIQUES UNIQUEMENT
            CONSULTABLES SUR LE SITE INTERNET KIIVI DESIGN. REPRODUCTION ET/OU
            DIFFUSION INTERDITE
          </span>
        </p>
      </section>
      <section className="mb-10 space-y-8">
        <h2 className="text-lg font-bold" style={{ fontWeight: 700 }}>
          Nature des informations diffusées sur ce site
        </h2>
        <p>
          Nous déclinons toutes responsabilités pour la diffusion
          d&apos;informations introduites frauduleusement au travers de notre
          site pouvant causer des dommages. Nous déclinons aussi toutes
          responsabilités pour tous les désagréments que vous pouvez rencontrer
          au travers de ce site : tel que l&apos;infection par un virus pouvant
          générer un dommage logiciel ou matériel, et tel que
          l&apos;interruption de fonctionnement du site rompant l&apos;accès aux
          informations quelles qu&apos;en soient les raisons.
        </p>
      </section>
      <section className="mb-10 space-y-8">
        <h2 className="text-lg font-bold" style={{ fontWeight: 700 }}>
          Informations nominatives
        </h2>
        <p>
          Conformément à la loi « Informatique et Liberté » du 6 janvier 1978,
          vous disposez d&apos;un droit d&apos;accès, de modification, de
          rectification et de suppression des données personnelles qui vous
          concernent. Pour cela, vous pouvez nous en faire la demande en nous
          contactant soit par{' '}
          <Link href="/contact" className="hover:text-red-600 underline">
            e-mail
          </Link>{' '}
          ou par courrier à l&apos;adresse indiquée ci-dessus.
        </p>
      </section>
      <section className="mb-10 space-y-8">
        <h2 className="text-lg font-bold" style={{ fontWeight: 700 }}>
          Liens hypertexes et partenariats
        </h2>
        <p>
          L&apos;accès à des sites autres que celui de «{' '}
          <span style={{ fontWeight: 700 }}>www.club306.fr</span> » peut se
          faire au travers des liens hypertextes. Nous déclinons toutes
          responsabilités sur leur contenu à partir du moment où vous activez le
          lien. Veillez à vous renseigner sur les conditions légales spécifiques
          à ces sites avant de les parcourir.
        </p>
      </section>
    </div>
  )
}
