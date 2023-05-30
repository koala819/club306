import Image from 'next/image';
import moment from 'moment';
require('moment/locale/fr');

export default function Subscription({
  beginDate,
}: {
  beginDate: string | undefined;
}) {
  return (
    <div
      className="flex justify-center items-center rounded-b-2xl"
      style={{
        height:
          window.innerWidth <= 768
            ? window.innerHeight <= 375
              ? '64vh'
              : '70vh'
            : '50vh',
      }}
    >
      <div className="w-11/12 rounded-t-2xl">
        <Image
          loading="lazy"
          className="rounded-t-2xl object-cover w-full h-10 sm:h-40 2xl:h-55"
          src="https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/337560069_1185394442178089_8015614733131388189_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=AfVUb1RvbogAX9hV1jX&_nc_ht=scontent-cdg4-2.xx&oh=00_AfBqHkumAYbt8EgRglXQAvVM9UbiiLsNzJqZrT5eL4s7Eg&oe=64748A57"
          alt="photo du club 306"
          width="1000"
          height="1000"
        />

        <div className="p-4 ">
          <h1 className="text-xs sm:text-sm lg:text-xl font-medium text-slate-600 pb-2">
            Bienvenue dans le Club 306 !
          </h1>
          <p className="text-xs sm:text-sm lg:text-md text-slate-400 text-justify">
            Votre aventure au sein de notre communauté sportive a débuté à
            partir du{' '}
            <span className="underline decoration-pink-500">
              {moment(beginDate).locale('fr').format('D MMMM YYYY')}
            </span>
            , jour où vous avez franchi nos portes. Profitez pleinement de votre
            adhésion et préparez-vous à vivre des moments inoubliables avec
            d&apos;autres passionnés de la voiture 306. Nous sommes ravis de
            vous avoir parmi nous et nous sommes impatients de partager des
            expériences uniques ensemble. Préparez-vous à découvrir le plaisir
            de conduire et à repousser les limites de l&apos;excitation
            automobile au sein du Club 306 !
          </p>

          <p className="text-blue-500 text-xs mt-4 text-justify">
            Accrochez-vous au volant de votre voiture 306 et préparez-vous pour
            une expérience sportive inoubliable ! Les inscriptions pour rester
            membre s&apos;ouvrent en décembre, vous offrant ainsi une occasion
            en or de rester dans notre communauté de passionnés de conduite. Ne
            manquez pas cette opportunité de vivre des moments palpitants et de
            repousser vos limites au volant de votre puissante 306. Restons
            ensemble et laissez l&apos;adrénaline prendre le contrôle !...
          </p>
        </div>
      </div>
    </div>
  );
}
