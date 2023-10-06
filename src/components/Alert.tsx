import { IoIosContact, IoMdCloseCircle } from 'react-icons/io';
import { IconContext } from 'react-icons';
import styles from '@/styles/alert.module.css';
import Link from 'next/link';

export default function Alert({
  setDisplayBox,
}: {
  setDisplayBox: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleClick = () => {
    setDisplayBox(false);
  };

  return (
    <div className="modal fixed z-50 top-0 w-full h-full">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="p-4 rounded-md bg-blue-50 border border-blue-300">
          <div className="w-full flex justify-end">
            <IconContext.Provider
              value={{ color: '#eb0000', className: `${styles.contactIcon}` }}
            >
              <IoMdCloseCircle onClick={handleClick} />
            </IconContext.Provider>
          </div>
          <div className="flex gap-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className=" w-full">
              <span className="text-blue-600 font-extrabold">
                Mise à jour disponible
              </span>
              <div className="text-blue-600 space-y-2 mt-2">
                <p className="sm:text-sm flex">
                  Vous êtes invité à mettre à jour les informations de votre 306
                  !!! Rendez-vous dans{' '}
                  <IoIosContact size={20} className="mx-1" /> mon Compte pour
                  mettre à jour votre Garage ...
                </p>
              </div>
              <div className="text-red-600 space-y-2 mt-2">
                <p className="sm:text-sm">
                  Si vous rencontrez un bug, merci de nous le signaler via notre
                  <Link href="/contact" className="underline">
                    {' '}
                    page de contact{' '}
                  </Link>
                  svp !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
