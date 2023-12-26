'use client';
import ClipLoader from 'react-spinners/ClipLoader';
import MailConfirm from '@/components/membership/MailConfirm';
import { useEffect, useState } from 'react';
import connect from '@/lib/helloAsso/connect';

export default function Page() {
  const [confirmMemberId, setConfirmMemberId] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paymentCode = params.get('code');
    const orderId = params.get('checkoutIntentId');

    async function fetchData() {
      if (paymentCode === 'succeeded' && orderId) {
        const result = await connect({
          url: `https://api.helloasso.com/v5/organizations/club-306-france/checkout-intents/${orderId}`,
          method: 'GET',
        });
        setUserId(result.metadata.userId);
        setConfirmMemberId(true);
      } else {
        console.log('error in fetchData', paymentCode, orderId);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <title>Confirmation de votre inscription</title>

      <div className=" w-1/2">
        <div className="flex w-full items-center justify-center">
          <div className="w-full">
            <div className="flex bg-white dark:bg-gray-800 text-gray-700 dark:text-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
              <picture
                className="hidden lg:block lg:w-1/2 bg-cover"
                style={{
                  backgroundImage:
                    'url(https://raw.githubusercontent.com/koala819/Unlimitd_front/develop/306.jpg)',
                  backgroundPositionX: 'left -270px',
                }}
              />
              {confirmMemberId ? (
                <MailConfirm userIdFromlocalStorage={userId} />
              ) : (
                <section className="w-full lg:w-1/2 py-8">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <h2 className="text-2xl font-semibold text-center mb-16">
                      Mise à jour de votre adhésion
                    </h2>
                    <ClipLoader
                      loading={true}
                      size={120}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                    <p className="pt-16 text-base text-gray-600">
                      Veuillez patienter
                    </p>
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
