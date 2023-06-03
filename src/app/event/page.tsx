'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GoFlame, GoRuby } from 'react-icons/go';
import { GiPartyPopper } from 'react-icons/gi';
import Link from 'next/link';

export default function Event() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/');
    }
  }, [router, session]);

  return (
    <>
      {session && (
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Janvier 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          />
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Février 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          />
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mars 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          />
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{
              borderLeft: '7px solid  rgb(33, 150, 243)',
            }}
            date="Avril 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<GoFlame />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ fontWeight: 700 }}
            >
              Youngtimers festival
            </h3>
            <h4 className="vertical-timeline-element-subtitle">15-16 Avril</h4>
            <p>
              Le circuit de Linas-Montlhéry compte donner un peu plus de place
              encore à ces voitures et aux incroyables passionnés qui les
              bichonnes. Deux jours de fêtes le 15 et 16 avril 2023 avec du son
              des expos ! Les voitures d’après 1990 vont donner de la voix sur
              le circuit 3,405 km tandis que les plus anciennes rivaliseront sur
              les expos et participeront aux parades.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mai 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          />
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Juin 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          />
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Juillet 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          />
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{
              borderLeft: '7px solid  rgb(33, 150, 243)',
            }}
            date="Août 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<GoRuby />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ fontWeight: 700 }}
            >
              Big Car Show
            </h3>
            <h4 className="vertical-timeline-element-subtitle">19-20 Août</h4>
            <p>
              Le Big Car Show est le fruit d&apos;un rêve porté par des
              passionnés d&apos;automobile, qui prend vie sur le Circuit du
              Mans. C&apos;est un projet ambitieux visant à rassembler des fans,
              qu&apos;ils soient similaires à nous ou différents de nous, car le
              Big Car Show représente avant tout la diversité des genres unis
              par la passion de la mécanique et de magnifiques carrosseries.
              Leur devise est : &quot;Différentes voitures, même passion.&quot;
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{
              borderLeft: '7px solid  rgb(33, 150, 243)',
            }}
            date="Septembre 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<GiPartyPopper />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ fontWeight: 700 }}
            >
              Anniversaire des 30ans de la Peugeot 306
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              29 septembre au 01 octobre
            </h4>
            <p>
              Cet événement, minutieusement préparé, a pour objectif de te
              offrir une expérience mémorable. Au programme, tu pourras profiter
              d&apos;une balade découverte de la région, présenter ta Peugeot
              306 dans toute sa splendeur sur le parking du Musée Peugeot,
              déguster un repas au sein du musée et rencontrer d&apos;autres
              passionnés. Les places pour cet événement exclusif sont limitées
              aux membres, c&apos;est pourquoi nous t&apos;encourageons à
              confirmer ta présence dès que possible. Pour cela, il te suffit de
              cliquer sur{' '}
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfQythLymDZHzkqGgkYnFPw3mMsHzP_PqVWIjDd68J_CxWMdQ/viewform"
                className="hover:text-red-600 underline"
              >
                ce lien
              </Link>{' '}
              pour remplir le formulaire d&apos;inscription.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Octobre 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          />
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Novembre 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          />
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Décembre 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          />{' '}
        </VerticalTimeline>
      )}
    </>
  );
}
