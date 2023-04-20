import { createClient } from '@supabase/supabase-js';
import { signOut } from 'next-auth/react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_KEY || ''
);

async function check(dataFromAccountGoogle) {
  //console.log('informations are :', dataFromAccountGoogle?.user?.email);

  const { data: registeredMember } = await supabase
    .from('members')
    .select('*')
    .filter('email', 'eq', dataFromAccountGoogle?.user?.email);

  if (registeredMember?.length !== 0) {
    //console.log('registeredMember have this information', registeredMember);
    return true;
  } else {
    alert('no registration in database');
    await signOut({
      callbackUrl: `${process.env.CLIENT_URL}` || `${process.env.CLIENT_URL2}`,
    });
    return false;
  }
}

function record(dataFromLocalStorage, setIsRegistered, nextStep, mailGoogle) {
  //Account GOOGLE
  if (mailGoogle) {
    const updatedWithGoogleData = {
      ...dataFromLocalStorage,
      email: mailGoogle,
      password: '',
      from: 'recordDataBase',
    };

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedWithGoogleData),
    };

    fetch(`${process.env.CLIENT_URL}/api/recordMemberInfo`, options)
      .then(async (response) => {
        if (response.status === 208) {
          console.log(
            '_MembershipContent4_ New member has been created in db supabase with success :)'
          );
          setIsRegistered(true);
          nextStep.onClick(5);
        }
      })
      .catch((error) => {
        console.log('ERROR Sir in _MembershipContent4_ ', error);
      });
  }

  //With email and password
  const updatedWithFrom = {
    ...dataFromLocalStorage,
    from: 'recordDataBase',
  };

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedWithFrom),
  };

  fetch(`${process.env.CLIENT_URL}/api/recordMemberInfo`, options)
    .then(async (response) => {
      if (response.status === 208) {
        console.log(
          '_MembershipContent4_ New member has been created in db supabase with success :)'
        );
        setIsRegistered(true);
        nextStep.onClick(5);
      }
    })
    .catch((error) => {
      console.log('ERROR Sir in _MembershipContent4_ ', error);
    });
}

async function ourPartners() {
  return await supabase.from('partners_codePromo').select('*');
}

export { check, record, ourPartners };
