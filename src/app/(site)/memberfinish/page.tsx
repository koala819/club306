'use client';
import WaitSession from '@/components/membership/WaitSession';
import MailConfirm from '@/components/membership/MailConfirm';
import { useEffect, useState } from 'react';
import connect from '@/lib/helloAsso/connect';

export default function Page() {
  const [showThankYou, setShowThankYou] = useState<boolean>(false);
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
        setShowThankYou(true);
      } else {
        console.log('error in fetchData', paymentCode, orderId);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {showThankYou ? (
        <MailConfirm userIdFromlocalStorage={userId} />
      ) : (
        <WaitSession />
      )}
    </div>
  );
}
