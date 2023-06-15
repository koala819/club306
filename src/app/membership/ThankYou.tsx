'use client';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useEffect, useRef, useState } from 'react';
import { MailPwd, PersonalInfo, Vehicles } from '../models';
import { getMemberId, record } from '@/lib/supabase';
import { RxAvatar } from 'react-icons/rx';
import { Button, ConfigProvider } from 'antd';
import { TrophyFilled } from '@ant-design/icons';

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
  //useRef est utilisé comme hack pour eviter que useEffect soit exécuté plusieurs fois
  const isExecutedRef = useRef(false);

  useEffect(() => {
    const fetchData = async () => {
      const tmpMemberId = await getMemberId();

      if (
        !isExecutedRef.current &&
        tmpMemberId !== null &&
        tmpMemberId.data !== null
      ) {
        /*GOOGLE USER*/
        if (session) {
          const storedPersonalInfo = JSON.parse(
            sessionStorage.getItem('personalInfo') || '{}'
          ) as PersonalInfo;
          const storedVehicles = JSON.parse(
            sessionStorage.getItem('vehicles') || '[]'
          ) as Vehicles[];
          record(
            storedPersonalInfo,
            storedVehicles,
            session?.user?.email,
            tmpMemberId.data[0].id + 1,
            setIsRegistered
          );
        } else {
          /*USER WITH MAIL & PWD*/
          record(
            personalInfo,
            vehicles,
            mailInfo,
            tmpMemberId.data[0].id + 1,
            setIsRegistered
          );
        }

        isExecutedRef.current = true; // Définir la valeur de isExecutedRef à true une fois que le useEffect a été exécuté
      }
    };

    fetchData();
  }, [session]);

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

    console.log('options', options);

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
        <div className="flex flex-col justify-center items-center space-y-2 bg-white p-8 rounded-lg shadow-lg">
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
        <div className="flex flex-col justify-center items-center space-y-8 bg-white p-8 rounded-lg shadow-lg">
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

          <ConfigProvider
            theme={{
              token: {
                fontSize: 18,
              },
            }}
          >
            <Button
              onClick={() =>
                sendWelcomeMail(
                  session?.user?.name || personalInfo.first_name,
                  session?.user?.email || mailInfo.email
                )
              }
              type="primary"
              size="large"
              href="/"
              icon={<TrophyFilled />}
            >
              <span>Terminer</span>
            </Button>
          </ConfigProvider>
        </div>
      )}
    </section>
  );
};
