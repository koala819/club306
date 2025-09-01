import Link from 'next/link'

export default function Rules2025() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="flex text-2xl mb-8 justify-center font-bold">
        Règlement intérieur
      </h1>

      {/* ARTICLE 1 */}
      <section id="article1" className="mb-10 space-y-6">
        <h2 className="text-lg font-bold">ARTICLE 1 – PRÉAMBULE</h2>
        <p className="leading-relaxed">
          Ce règlement intérieur est destiné à fixer les points non prévus par
          les statuts, notamment ceux qui ont trait à l&apos;administration et à
          la réglementation interne de l&apos;association{' '}
          <span className="font-bold">Club306</span>.
        </p>
        <p className="leading-relaxed">
          Les dispositions de ce règlement s&apos;imposant de manière obligatoire
          à chaque membre de l&apos;association. Il est rappelé que
          l'acceptation électronique lors de l'inscription en ligne oblige le
          membre à se conformer à ce règlement. De plus, l&apos;octroi de la
          qualité de membre de l&apos;association est constitué sous réserve de
          l&apos;application de l&apos;article 2 et 10.
        </p>
      </section>

      {/* ARTICLE 2 */}
      <section id="article2" className="mb-10 space-y-6">
        <h2 className="text-lg font-bold">ARTICLE 2 – MEMBRE</h2>
        <p className="leading-relaxed">
          Est considéré comme &quot;Membre&quot; de l&apos;association{' '}
          <span className="font-bold">Club306</span>, la personne à jour de sa
          cotisation et ayant accepté pleinement le règlement intérieur. Les
          autres personnes participant aux sorties ne sont considérées que comme
          &quot;Accompagnants&quot; et ne peuvent se prévaloir du statut de
          Membre.
        </p>
        <p className="leading-relaxed">
          En apposant les stickers du <span className="font-bold">Club306</span>
          , le membre adhérent devient un élément qui permet de faire connaitre
          le <span className="font-bold">Club306</span> et de mettre en avant
          une communauté. Le membre s'engage à véhiculer les valeurs de partage,
          respect, et entraide.
        </p>
      </section>

      {/* ARTICLE 3 */}
      <section id="article3" className="mb-10 space-y-6">
        <h2 className="text-lg font-bold">
          ARTICLE 3 – ADJOINTS ET CHARGÉS DE MISSION
        </h2>
        <p className="leading-relaxed">
          Conformément à l&apos;article 9 des statuts, le membres du bureau
          peuvent désigner parmi les membres à jour de cotisation des adjoints
          et des chargés de mission. Ainsi le bureau s'entoure des membres
          pouvant prêter main forte au secrétariat, à la trésorerie, à la
          communication, à la partie technique et commerciale et toute autre
          tâche pouvant apporter un travail bénéfique à l'association.
        </p>
        <p className="leading-relaxed">Durée : 1 an (renouvelable sans limite)</p>
      </section>

      {/* ARTICLE 4 */}
      <section id="article4" className="mb-10 space-y-6">
        <h2 className="text-lg font-bold">ARTICLE 4 – ADHÉSION</h2>

        <h3 className="text-md font-bold ml-6">A – Adhésion</h3>
        <p>La cotisation annuelle s&apos;entend :</p>
        <ul className="list-disc ml-10 space-y-2">
          <li>Par personne physique ou morale ;</li>
          <li>Par période du 1 Janvier au 31 décembre (aucun prorata temporis) ;</li>
          <li>Fixée à 20 euros annuellement lors d'un renouvellement ;</li>
          <li>Fixée à 25 euros annuellement lors de la première inscription ;</li>
          <li>Révisée annuellement lors de l'Assemblé Générale ;</li>
        </ul>
        <p>
          De plus, le membre s'engage à fournir l'ensemble des informations et
          documents réclamées par le formulaire d'inscription.
        </p>
        <p>Une fois l'adhésion au <span className="font-bold">Club306</span>, le membre accèdera :</p>
        <ul className="list-disc ml-10 space-y-2">
          <li>À une carte de membre virtuelle via son espace membre sur le site Club306.fr ;</li>
          <li>À un autocollant membre à apposer sur le véhicule ;</li>
          <li>À l'accès aux remises Club par nos partenaires ;</li>
          <li>À l'accès à des dossiers et articles uniques.</li>
        </ul>

        <h3 className="text-md font-bold ml-6">B – Renouvellement</h3>
        <p>
          L'adhésion est renouvelée par tacite reconduction l'année suivant sous
          réserve du paiement d'une nouvelle cotisation annuelle aux conditions
          en vigueur.
        </p>
        <p>
          L'appel au renouvellement se fera via le bureau (mail, téléphone, sms,
          courrier).
        </p>
      </section>

      {/* ARTICLE 5 */}
      <section id="article5" className="mb-10 space-y-6">
        <h2 className="text-lg font-bold">ARTICLE 5 – RESPONSABILITÉ</h2>
        <p className="leading-relaxed">
          Chaque membre de l&apos;association participant aux manifestations
          organisées par <span className="font-bold">Club306</span>, le fait en
          pleine connaissance des risques qu&apos;il peut encourir et sous sa
          propre responsabilité. Chaque membre reste seul responsable de ses
          actes et des dommages corporels et/ou matériels causés de son fait.
        </p>
        <p className="leading-relaxed">
          Chaque membre exonère l&apos;association{' '}
          <span className="font-bold">Club306</span> et ses dirigeants de toute
          responsabilité et renonce à tout recours, action ou demande en cas de
          :
        </p>
        <ul className="list-disc ml-10 space-y-2">
          <li>Dommages corporels et/ou matériels subis par lui et ses accompagnants ;</li>
          <li>Ou causés à un autre membre de l&apos;association ou à un tiers ;</li>
        </ul>
        <p className="leading-relaxed">
          À l&apos;occasion d&apos;accident ou de vol survenu pendant et /ou à
          l&apos;occasion d&apos;une manifestation organisée par
          l&apos;association <span className="font-bold">Club306</span>.
        </p>
      </section>

      {/* ARTICLE 6 */}
      <section id="article6" className="mb-10 space-y-6">
        <h2 className="text-lg font-bold">ARTICLE 6 – DOMMAGE</h2>
        <p className="leading-relaxed">
          Chaque membre de l&apos;association, ayant causé des dommages
          corporels et/ou matériels à des tiers à l&apos;occasion de
          manifestations, engage sa responsabilité si celui-ci venait à être mis
          en cause par des tiers notamment mais non exclusivement, en cas de
          dommages corporels infligés au propriétaire, à l&apos;exploitant et/ou
          au préposé chargé de l&apos;exploitation du circuit.
        </p>
        <p className="leading-relaxed">
          Il en est de même en ce qui concerne les agents de l&apos;État ou de
          toutes autres collectivités publiques participant au service d&apos;ordre
          ou de sécurité et/ou en cas de dommages matériels infligés au
          propriétaire ou à l&apos;exploitant du circuit (exemple : détérioration
          des rails de sécurité, des grillages, du revêtement du circuit, etc..)
          sont donc à la charge du fautif.
        </p>
      </section>

      {/* ARTICLE 7 */}
      <section id="article7" className="mb-10 space-y-6">
        <h2 className="text-lg font-bold">ARTICLE 7 – VÉHICULES</h2>
        <p className="leading-relaxed">
          Seuls sont admis, les véhicules de marque PEUGEOT modèle 306 toutes
          finitions confondues (y compris les versions dites « export »). Toutes
          les PEUGEOT 306 ayant reçues des modifications* en désaccord avec les
          lois en vigueur dans son pays d&apos;immatriculation, non prévue par le
          constructeur et/ou avec des pièces non homologuées, ou modification
          esthétiques lourdes, devront être signalées lors de l&apos;inscription.
        </p>
        <p className="leading-relaxed">
          Le membre s'engage à avoir un véhicule conforme et en règle pour
          circuler librement sur la voie publique et de pouvoir les présenter
          lors d'un contrôle d'officier de l'État :
        </p>
        <ul className="list-disc ml-10 space-y-2">
          <li>Permis de conduire en cours de validité ;</li>
          <li>Contrôle technique à jour confirmant le bon état du véhicule ;</li>
          <li>Police d'assurance en cours de validité.</li>
        </ul>
        <p className="text-xs">
          *Le bureau se réserve le droit d'accepter ou non l'accès aux événements
          ainsi qu&apos;au club. Toutes décisions prises seront irrévocables.
        </p>
      </section>

      {/* ARTICLE 8 */}
      <section id="article8" className="mb-10 space-y-6">
        <h2 className="text-lg font-bold">ARTICLE 8 – CODE DE LA ROUTE</h2>
        <p className="leading-relaxed">
          Le présent article rappelle au souscripteur quelques règles
          impératives et spécifiques à la circulation sur route ouverte et en
          convoi. Tout déplacement sur route ouverte implique le respect du{' '}
          <Link
            href="https://www.legifrance.gouv.fr/affichCode.do;?cidTexte=LEGITEXT000006074228"
            className="underline hover:text-red-600"
          >
            code de la route
          </Link>{' '}
          de la part de chaque membre.
        </p>
        <p className="leading-relaxed">
          Tout convoi de voitures est encadré par le{' '}
          <Link
            href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000268934&dateTexte=&categorieLien=id"
            className="underline hover:text-red-600"
          >
            Décret 2006-554
          </Link>{' '}
          du 16 mai 2006.
        </p>
      </section>

      {/* ARTICLE 9 */}
      <section id="article9" className="mb-10 space-y-6">
        <h2 className="text-lg font-bold">ARTICLE 9 – ÉVÉNEMENT</h2>
        <p className="leading-relaxed">
          Pour faciliter l&apos;organisation logistique, il est décidé que le{' '}
          <span className="font-bold">Club306</span> pourra valider toute
          inscription à un événement payant sous réserve que le règlement
          préalable de chaque adhérent souhaitant participer soit réalisé, dans
          un délai défini, auprès du trésorier du club.
        </p>
        <p>Ces prestations pourront concerner (liste non-exhaustive) :</p>
        <ul className="list-disc ml-10 space-y-2">
          <li>Le logement : bungalow, chambres, camping…</li>
          <li>Les repas : restaurant, barbecue, …</li>
          <li>Les activités : culturelle, sportive, …</li>
        </ul>
      </section>

      {/* ARTICLE 10 */}
      <section id="article10" className="mb-10 space-y-6">
        <h2 className="text-lg font-bold">ARTICLE 10 – RÈGLEMENT</h2>
        <p className="leading-relaxed">
          L&apos;adhésion à l'association{' '}
          <span className="font-bold">Club306</span> implique l&apos;acceptation
          sans réserve du présent règlement. Ce dernier pourra être révisé et
          mis à jour par le Bureau avec effet immédiat.
        </p>
        <p className="leading-relaxed">
          Le nouveau règlement sera disponible sur le site club306.fr pour être
          consultable à tout moment et par tout membre.
        </p>
      </section>

      {/* SIGNATURE */}
      <section className="mb-10 space-y-6">
        <p>Etabli à Les Pavillons-sous-Bois (93320), le 29/08/2025</p>
        <div className="flex">
          <div className="flex-1">
            <p>Pascal Besnard</p>
            <p>
              Président du <span className="font-bold">Club306</span>
            </p>
          </div>
          <div className="flex-1 text-right">
            <p>Amandine Werlé-Fabre</p>
            <p>
              Secrétaire du <span className="font-bold">Club306</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
