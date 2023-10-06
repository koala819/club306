'use client';
import ClipLoader from 'react-spinners/ClipLoader';

export function Loading({ text }: { text?: string }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="flex flex-col items-center justify-center bg-white dark:bg-slate-500 p-4 rounded-lg shadow-lg text-black">
        <p className="text-xl font-semibold mb-4">Veuillez patienter</p>
        <ClipLoader
          loading={true}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <p className="mt-8 text-black">
          {text ? text : 'Chargement des données ...'}
        </p>
      </div>
    </div>
  );
}
