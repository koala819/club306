'use client';
import ClipLoader from 'react-spinners/ClipLoader';

export default function NoSession() {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center space-y-2 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <ClipLoader
          loading={true}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <p>Chargement</p>
      </div>
    </div>
  );
}
