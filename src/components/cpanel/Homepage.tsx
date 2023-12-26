'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Garage from '@/components/cpanel/Garage';
import { returnMemberInfo } from '@/lib/supabase';

export function Homepage({ userMail }: { userMail: string }) {
  const [name, setName] = useState('');

  useEffect(() => {
    async function fetchData() {
      const { last_name, first_name } = await returnMemberInfo(userMail);

      setName(() => first_name + ' ' + last_name);
    }
    fetchData();
  }, []);

  return (
    <section>
      <div className="text-center mt-6 mb-8">
        <span className="text-3xl font-bold text-gray-800 dark:text-white">
          Bienvenue
        </span>
      </div>
      <div className="flex flex-wrap text-justify">
        <div className="p-4 md:w-2/3 w-full">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg dark:bg-slate-500 text-gray-700 dark:text-gray-950 text-xl leading-relaxed space-y-4">
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
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg w-full dark:bg-slate-500 text-gray-700 dark:text-white">
            <Link href="/cpanel/garage">
              <h1 className="font-bold text-xl ml-6">Mon Garage</h1>
            </Link>
            <div className="mt-4 ">
              <Garage userMail={userMail} hide={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
