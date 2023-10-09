import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { FaThumbsUp } from 'react-icons/fa';
import WaitSession from '@/components/membership/WaitSession';

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return <WaitSession />;
  }
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="flex flex-col items-center justify-center  bg-[#ADA075] p-4 rounded-lg shadow-lg text-blue-700">
        <p className="text-xl font-semibold mb-4">
          Validation de votre email avec succès
        </p>
        <FaThumbsUp size={100} className="text-blue-700" />
        <p className="mt-8 font-extrabold text-blue-700">
          Vous pouvez fermer cette fenêtre !
        </p>
        <p className="mt-12 text-xs">
          Votre inscription va reprendre et se terminer dans l'autre fenêtre
        </p>
      </div>
    </div>
  );
}
