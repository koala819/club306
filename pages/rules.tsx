import Link from 'next/link';
import Layout from '../components/Layout';

export default function Rules() {
  return (
    <Layout title="Règlement intérieur">
      <div className="container mx-auto p-4">
        <h1
          className="mb-8 flex justify-center text-2xl"
          style={{ fontWeight: 700 }}
        >
          Règlement intérieur
        </h1>
        <section className="mb-10 space-y-8">
          <h2 className="font-bold text-lg" style={{ fontWeight: 700 }}>
            ARTICLE 1
          </h2>
          <p>
            Ce règlement intérieur est destiné à fixer les points non prévus par
            les statuts, notamment ceux qui ont trait à l&apos;administration et
            à la réglementation interne de l&apos;association{' '}
            <span style={{ fontWeight: 700 }}>Club306</span>.
          </p>
          <p>
            Les dispositions de ce règlement s&apos;imposant de manière
            obligatoire à chaque membre de l&apos;association. Il est rappelé
            que l’acceptation électronique lors de l’inscription en ligne oblige
            le membre à se conformer à ce règlement. De plus, l&apos;octroi de
            la qualité de membre de l&apos;association est constitué sous
            réserve de l&apos;application de l&apos;article 2 et 10.
          </p>
        </section>
        <section className="mb-10 space-y-8">
          <h2 className="font-bold text-lg" style={{ fontWeight: 700 }}>
            ARTICLE 2
          </h2>
          <p>
            Est considéré comme &quot;Membre&quot; de l&apos;association
            <span style={{ fontWeight: 700 }}>Club306</span>, la personne à jour
            de sa cotisation et ayant accepté pleinement le règlement intérieur.
            Les autres personnes participant aux sorties ne sont considérées que
            comme &quot;Accompagnants&quot; et ne peuvent se prévaloir du statut
            de Membre.
          </p>
        </section>
        <section className="mb-10 space-y-8">
          <h2 className="font-bold text-lg" style={{ fontWeight: 700 }}>
            ARTICLE 3
          </h2>
          <p>
            En apposant les stickers du{' '}
            <span style={{ fontWeight: 700 }}>Club306</span>, le membre adhérent
            devient un élément qui permet de faire connaître le{' '}
            <span style={{ fontWeight: 700 }}>Club306</span> et de mettre en
            avant une communauté.
          </p>
          <p>
            Le membre s’engage à véhiculer les valeurs de partage, respect, et
            entraide.
          </p>
        </section>
        <section className="mb-10 space-y-8">
          <h2 className="font-bold text-lg" style={{ fontWeight: 700 }}>
            ARTICLE 4
          </h2>
          <p>
            Chaque membre de l&apos;association participant aux manifestations
            organisées par <span style={{ fontWeight: 700 }}>Club306</span>, le
            fait en pleine connaissance des risques qu&apos;il peut encourir et
            sous sa propre responsabilité. Chaque membre reste seul responsable
            de ses actes et des dommages corporels et/ou matériels causés de son
            fait.
          </p>
        </section>
        <section className="mb-10 space-y-8">
          <h2 className="font-bold text-lg" style={{ fontWeight: 700 }}>
            ARTICLE 5
          </h2>
          <div>
            Chaque membre exonère l&apos;association{' '}
            <span style={{ fontWeight: 700 }}>Club306</span> et ses dirigeants
            de toute responsabilité et renonce à tout recours, action ou demande
            en cas de
            <ul className="mb-4 ml-4 mt-4 list-disc space-y-4">
              <li>
                Dommages corporels et/ou matériels subis par lui et ses
                accompagnants,
              </li>
              <li>
                Ou causés à un autre membre de l&apos;association ou à un tiers,
              </li>
            </ul>
            à l&apos;occasion d&apos;accident ou de vol survenu pendant et /ou à
            l&apos;occasion d&apos;une manifestation organisée par de
            l&apos;association <span style={{ fontWeight: 700 }}>Club306</span>.
          </div>
        </section>
        <section className="mb-10 space-y-8">
          <h2 className="font-bold text-lg" style={{ fontWeight: 700 }}>
            ARTICLE 6
          </h2>
          <p>
            Pour faciliter l&apos;organisation logistique, il est décidé que le{' '}
            <span style={{ fontWeight: 700 }}>Club306</span> pourra valider
            toute inscription à un événement payant sous réserve que le
            règlement préalable de chaque adhérent souhaitant participer soit
            réalisé, dans un délai défini, auprès du trésorier du club. Ces
            prestations pourront concerner la location de chambres d’hôtels,
            campings, gîtes, repas et restaurants, musées ou autres prestations
            équivalentes.
          </p>
        </section>
        <section className="mb-10 space-y-8">
          <h2 className="font-bold text-lg" style={{ fontWeight: 700 }}>
            ARTICLE 7
          </h2>
          <p>
            Le présent article rappelle au souscripteur quelques règles
            impératives et spécifiques à la circulation sur route ouverte et en
            convoi. Tout déplacement sur route ouverte implique le respect du{' '}
            <Link
              href="https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000006074228"
              className="underline hover:text-red-600"
            >
              code de la route
            </Link>{' '}
            de la part de chaque membre.
          </p>
          <p>
            Tout convoi de voitures est encadré par le{' '}
            <Link
              href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000268934"
              className="underline hover:text-red-600"
            >
              Décret 2006-554
            </Link>{' '}
            du 16 mai 2006.
          </p>
        </section>
        <section className="mb-10 space-y-8">
          <h2 className="font-bold text-lg" style={{ fontWeight: 700 }}>
            ARTICLE 8
          </h2>
          <p>
            Chaque membre de l&apos;association, ayant causé des dommages
            corporels et/ou matériels à des tiers à l&apos;occasion de
            manifestations, engage sa responsabilité si celui-ci venait à être
            mise en cause par des tiers notamment mais non exclusivement, en cas
            de dommages corporels infligés au propriétaire, à l&apos;exploitant
            et/ou au préposé chargé de l&apos;exploitation du circuit.
          </p>
          <p>
            Il en est de même en ce qui concerne les agents de l&apos;Etat ou de
            toutes autres collectivités publiques participant au service
            d&apos;ordre ou de sécurité et/ou en cas de dommages matériels
            infligés au propriétaire ou à l&apos;exploitant du circuit (exemple
            : détérioration des rails de sécurité, des grillages, du revêtement
            du circuit, etc..) sont donc à la charge du fautif.
          </p>
        </section>
        <section className="mb-10 space-y-8">
          <h2 className="font-bold text-lg" style={{ fontWeight: 700 }}>
            ARTICLE 9
          </h2>
          <p>
            Seuls sont admis, les véhicules de marque PEUGEOT modèle 306 toutes
            finitions confondues (y compris les versions dites « export »).
            Toutes les PEUGEOT 306 ayant reçues des modifications* en désaccord
            avec les lois en vigueur dans son pays d&apos;immatriculation, non
            prévue par le constructeur et/ou avec des pièces non homologuées, ou
            modification esthétiques lourdes, devront être signalées lors de
            l&apos;inscription. Le membre s&apos;engage à avoir un véhicule
            conforme et en règle pour circuler librement sur la voie publique.
          </p>
          <p className="text-xs">
            *Le bureau se réserve le droit d’accepter ou non l’accès aux
            événements ainsi qu&apos;au club. Toutes décisions prises seront
            irrévocables.
          </p>
        </section>
        <section className="mb-10 space-y-8">
          <h2 className="font-bold text-lg" style={{ fontWeight: 700 }}>
            ARTICLE 10
          </h2>
          <h3 className="text-md font-bold ml-8" style={{ fontWeight: 700 }}>
            A - ADHÉSION
          </h3>
          <p>La cotisation annuelle s&apos;entend :</p>
          <ul className="mb-4 ml-4 mt-4 list-disc space-y-4">
            <li>Par personne,</li>
            <li>
              Sur une période du 1 Janvier au 31 décembre (aucun prorata
              temporis),
            </li>
            <li>
              Fixée à 20 euros annuellement (révisée annuellement lors de
              l&apos;Assemblé Générale),
            </li>
          </ul>
          <p>
            De plus, le membre s&apos;engage à fournir l&apos;ensemble des
            informations et documents réclamées par le formulaire
            d&apos;inscription.
          </p>
          <p>
            Une fois l&apos;adhésion au{' '}
            <span style={{ fontWeight: 700 }}>Club306</span>, le membre recevra
            une carte de membre dite « carte Club » (format électronique) ; 1
            autocollant membre à apposer sur le véhicule ; l&apos;accès au
            remise Club par nos partenaires ; et l&apos;accès à des dossiers et
            articles uniques
          </p>
          <h3 className="text-md font-bold ml-8" style={{ fontWeight: 700 }}>
            B - RENOUVELLEMENT
          </h3>
          <p>
            L&apos;adhésion est renouvelée par tacite reconduction l&apos;année
            suivant sous réserve du paiement d&apos;une nouvelle cotisation
            annuelle aux conditions en vigueur.
          </p>
          <p>
            L&apos;appel au renouvellement se fera via le bureau (mail,
            téléphone, sms, courrier).
          </p>
          <h3 className="text-md font-bold ml-8" style={{ fontWeight: 700 }}>
            C – RADIATION
          </h3>
          <p>La qualité de membre de l’association se perd par :</p>
          <ul className="mb-4 ml-4 mt-4 list-disc space-y-4">
            <li>La démission adressée au président de l&apos;association,</li>
            <li>
              Le non-paiement de la cotisation au 31 janvier de chaque année,
            </li>
            <li>
              Piratage ou copie ou vol de documents mis à la disposition par le{' '}
              <span style={{ fontWeight: 700 }}>Club306</span>,
            </li>
            <li>Le décès, ou, pour les personnes morales, la dissolution,</li>
            <li>
              Pour faute ou motif grave (assimilable au non-respect des articles
              des présents statuts et du règlement). Dans tous les cas, la ou
              les cotisation(s) déjà payée(s) reste(nt) acquise(s) à
              l&apos;association.
            </li>
          </ul>
          <p>
            Le décès, la démission, l&apos;exclusion ou la radiation d&apos;un
            ou de plusieurs membre(s) ne met pas fin à l&apos;association.
          </p>
          <h3 className="text-md font-bold ml-8" style={{ fontWeight: 700 }}>
            D - EXCLUSION
          </h3>
          <p>
            Le bureau se réserve le droit d&apos;exclure un membre (cas
            ci-dessous). Après avoir pris connaissance des explications de
            l&apos;intéressé, si ce dernier le souhaite (signifiées par lettre
            recommandée avec accusé de réception), l&apos;exclusion est
            prononcée par le Président après avis unanime des membres du Bureau.
          </p>
          <ul className="mb-4 ml-4 mt-4 list-disc space-y-4">
            <li>Comportement inapproprié,</li>
            <li>Mise en danger d&apos;autrui,</li>
            <li>Consommation substance licite et/ou illicite.</li>
          </ul>
        </section>
        <section className="mb-10 space-y-8">
          <h2 className="font-bold text-lg" style={{ fontWeight: 700 }}>
            ARTICLE 11
          </h2>
          <p>
            L&apos;adhésion à l’association{' '}
            <span style={{ fontWeight: 700 }}>Club306</span> implique
            l&apos;acceptation sans réserve du présent règlement. Ce dernier
            pourra être révisé et mis à jour par le Bureau avec effet immédiat.
          </p>
          <p>
            Le nouveau règlement sera disponible sur le site club306.fr pour
            être consultable à tout moment et par tout membre. Une notification
            de mise à jour sera envoyée à chaque membre à l’email indiqué lors
            de l’inscription dudit membre.
          </p>
        </section>
        <section className="mb-10 space-y-8">
          <p>Etabli à Les Pavillons-sous-Bois (93320), le 01/01/2023</p>
          <div className="flex">
            <div className="flex-1">
              <p>Pascal Besnard</p>
              <p>
                Président du <span style={{ fontWeight: 700 }}>Club306</span>
              </p>
            </div>
            <div className="flex-1 text-right">
              <p>Amandine Werlé-Fabre</p>
              <p>
                Secrétaire du <span style={{ fontWeight: 700 }}>Club306</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
