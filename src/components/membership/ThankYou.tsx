'use client';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useEffect, useState } from 'react';
import { MailPwd, PersonalInfo, Vehicles } from '@/types/models';
import { getMemberId, record } from '@/lib/supabase';
import { RxAvatar } from 'react-icons/rx';
import { GiFinishLine } from 'react-icons/gi';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const ThankYou = ({
  personalInfo,
  vehicles,
  mailInfo,
}: {
  personalInfo: PersonalInfo;
  vehicles: Vehicles[];
  mailInfo: MailPwd;
}) => {
  const { data: session } = useSession();
  const [isRegistered, setIsRegistered] = useState(false);
  const [tmpMemberId, setTmpMemberId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const resultMemberId = await getMemberId();
      resultMemberId?.data !== null &&
        setTmpMemberId(() => resultMemberId?.data[0].id);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (tmpMemberId !== null) {
        if (session) {
          const storedPersonalInfo = JSON.parse(
            sessionStorage.getItem('personalInfo') || '{}'
          ) as PersonalInfo;
          const storedVehicles = JSON.parse(
            sessionStorage.getItem('vehicles') || '[]'
          ) as Vehicles[];
          const response = await record(
            storedPersonalInfo,
            storedVehicles,
            session?.user?.email,
            tmpMemberId + 1
          );
          const data = await response.json();
          if (data.status !== 200) {
            alert(
              'Erreur pour vous enregistrer, merci de contacter le staff svp  et communiquer cette erreur : \n\n\n' +
                data.message +
                "\n\n Sans le message de l'erreur, il nous sera difficile de vous aider !!!"
            );
            router.push('/contact');
          } else {
            setIsRegistered(true);
          }
        } else {
          /*USER WITH MAIL & PWD*/
          const response = await record(
            personalInfo,
            vehicles,
            mailInfo,
            tmpMemberId + 1
          );
          const data = await response.json();
          if (data.status !== 200) {
            alert(
              'Erreur pour vous enregistrer, merci de contacter le staff svp  et communiquer cette erreur : \n\n\n' +
                data.message +
                "\n\n Sans le message de l'erreur, il nous sera difficile de vous aider !!!"
            );
            router.push('/contact');
          } else {
            setIsRegistered(true);
          }
        }
      }
    };
    fetchData();
  }, [tmpMemberId]);

  async function sendWelcomeMail(firstName: string, mail: string) {
    const data = {
      first_name: firstName,
      mail: mail,
      from: 'newMember',
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    };

    await fetch(`${process.env.CLIENT_URL}/api/mail`, options).then(
      (response: Response) => {
        console.log('what is the response', response);
        response.status === 200
          ? console.log('Send mail with SUCCESS :)')
          : console.log('Send mail with ERROR :(');
      }
    );
  }

  return (
    <section>
      {!isRegistered && (
        <div className="flex flex-col justify-center items-center space-y-2 bg-white dark:bg-gray-800 dark:text-white p-8 rounded-lg shadow-lg">
          <ClipLoader
            loading={true}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <p>Enregistrement des informations dans notre base de données</p>
          <p>Veuillez patienter</p>
        </div>
      )}

      {isRegistered && (
        <div className="flex flex-col justify-center items-center space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          {session ? (
            <Image
              alt="picture user"
              height={100}
              width={100}
              className="rounded-full"
              src={`${session.user?.image}`}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          ) : (
            <span className="flex justify-center ">
              <RxAvatar size={100} />
            </span>
          )}
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 ">
            Merci{' '}
            {session?.user?.name ||
              personalInfo.last_name + ' ' + personalInfo.first_name}
          </h1>

          <p>
            pour ta participation à cette grande et belle aventure mécanique
            autour de la merveilleuse 306.
          </p>
          <Link
            href="/"
            onClick={() =>
              sendWelcomeMail(
                session?.user?.name || personalInfo.first_name,
                session?.user?.email || mailInfo.email
              )
            }
          >
            {/* <ConfigProvider
              theme={{
                token: {
                  fontSize: 18,
                },
              }}
            >
              <Button type="primary" size="large" icon={<TrophyFilled />}>
                <span>Terminer</span>
              </Button>
            </ConfigProvider> */}
            <button
              className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg duration-150 hover:bg-blue-500 active:shadow-lg"
              type="submit"
            >
              <GiFinishLine className="mr-2" size={26} />
              Terminer
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};