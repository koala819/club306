import { FaTimesCircle } from 'react-icons/fa';

export default async function Page() {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="flex flex-col items-center justify-center  bg-red-800 p-4 rounded-lg shadow-lg text-white">
        <p className="text-xl font-semibold mb-4">
          Une erreur technique s'est produite avec le serveur d'Hello Asso
        </p>
        <FaTimesCircle size={100} className="text-white" />
        <p className="mt-8 font-extrabold text-white">
          Veuillez nous en excuser
        </p>
      </div>
    </div>
  );
}
