'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getTokenConfirmMail } from '@/lib/supabase';
import { useSearchParams } from 'next/navigation';
import { ThankYouData } from '@/types/models';
import { Loading } from '@/components/cpanel/Loading';

const ThankYou = () => {
  const [storedPersonalInfo, setStoredPersonalInfo] = useState<
    ThankYouData | null | false
  >();
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    async function fetchData() {
      const token = searchParams.get('token');
      //   console.log('token in ThankYou', token);
      if (token) {
        const data = await getTokenConfirmMail(token);
        // console.log('data in ThankYou', data);
        setStoredPersonalInfo(data);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

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
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col items-center justify-center space-y-2 bg-white p-4 rounded-lg shadow-lg">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 ">
            Verification de votre e-mail avec succès !
          </h1>
          <p>Merci de votre adhésion au Club 306</p>

          <Link
            href="/login"
            onClick={() => {
              if (typeof storedPersonalInfo !== 'boolean') {
                sendWelcomeMail(
                  storedPersonalInfo?.last_name +
                    ' ' +
                    storedPersonalInfo?.first_name,
                  storedPersonalInfo?.email || ''
                );
              }
            }}
          >
            <button
              className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg duration-150 hover:bg-blue-500 active:shadow-lg"
              type="submit"
            >
              Connectez vous
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default ThankYou;
