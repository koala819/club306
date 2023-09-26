'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Garage from '@/components/cpanel/Garage';
import { checkRegisteredMember } from '@/lib/supabase';

export function Homepage({ session }: any) {
  const [name, setName] = useState('');
  useEffect(() => {
    async function fetchData() {
      const data = await checkRegisteredMember(session?.user?.email);

      setName(
        () => data.statusText[0].first_name + ' ' + data.statusText[0].last_name
      );
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="text-center mt-6 mb-8">
        <span className="text-3xl font-bold text-gray-800 dark:text-white">
          Bienvenue
        </span>
      </div>
      <div className="flex flex-wrap text-justify">
        <div className="p-4 md:w-2/3 w-full">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg dark:bg-slate-400 text-gray-700 dark:text-gray-950 text-xl leading-relaxed space-y-4">
            <p>
              Prépare-toi à plonger dans une expérience extraordinaire,{' '}
              <span className="font-bold">{name}</span>. Notre interface
              exclusive, dédiée aux membres privilégiés du Club 306, va bien
              au-delà de tes attentes. Elle est un monde en constante
              transformation, créé pour te fournir une expérience inégalée à
              chaque étape de ton voyage.
            </p>
            <p>
              Au cœur de cette interface se trouve notre engagement envers toi,
              notre précieux membre. Nous travaillons sans relâche pour apporter
              des améliorations continues, introduire de nouvelles
              fonctionnalités et repousser les limites de l'innovation. Ici, tu
              n'es pas un simple utilisateur, mais un membre actif et influent
              du Club 306.
            </p>

            <p>
              Alors, n'hésite pas à explorer, à interagir et à contribuer.
              Découvre les trésors que nous avons soigneusement préparés pour
              toi et deviens un acteur clé de cette expérience en perpétuelle
              évolution. Ensemble, nous écrivons l'histoire du Club 306.
            </p>
          </div>
        </div>
        <div className="p-4 md:w-1/3 w-full">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg w-full dark:bg-slate-400 text-gray-700">
            <Link href="/cpanel/Garage">
              <h1 className="font-bold text-xl">Mon Garage</h1>
            </Link>
            <Garage session={session} hide={true} />
          </div>
        </div>
      </div>
    </>
  );
}
