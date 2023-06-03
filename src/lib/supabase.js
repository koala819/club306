import { createClient } from '@supabase/supabase-js';
import { signOut } from 'next-auth/react';
import bcrypt from 'bcryptjs';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_KEY || ''
);

async function checkMail(mail) {
  const { data, error } = await supabase
    .from('members')
    .select('*')
    .filter('email', 'eq', mail);

  if (error) {
    console.error(error);
    return false;
  }

  return data.length > 0;
}

async function returnMemberInfo(mail) {
  const { data, error } = await supabase
    .from('members')
    .select('*')
    .filter('email', 'eq', mail);

  if (error) {
    console.error(error);
    return false;
  }

  return data;
}

async function checkForCanI(lastName, firstName) {
  return await supabase
    .from('members')
    .select('*')
    .filter(
      'first_name',
      'eq',
      firstName.charAt(0).toUpperCase() + firstName.slice(1)
    )
    .filter('last_name', 'eq', lastName.toUpperCase());
}

async function checkForStartSession(dataFromAccountGoogle) {
  const { data: registeredMember } = await supabase
    .from('members')
    .select('*')
    .filter('email', 'eq', dataFromAccountGoogle?.user?.email);

  if (registeredMember?.length !== 0) {
    return true;
  } else {
    alert('no registration in database');
    await signOut({
      callbackUrl: `${process.env.CLIENT_URL}` || `${process.env.CLIENT_URL2}`,
    });
    return false;
  }
}

async function checkRegisteredMember(credentialsProvider) {
  const { data, error } = await supabase
    .from('members')
    .select('*')
    .eq('email', credentialsProvider?.email)
    .limit(1);

  if (error) {
    //throw new Error(error);
    console.error('Error to check if member is registered in our db', error);
  }

  if (data.length > 0) {
    if (
      await bcrypt.compare(credentialsProvider?.password, data[0]?.password)
    ) {
      console.log('Great Job !!! User has been founded :)');
      return 'find';
    }
    console.error('Error to check if member is registered in our db');
    return null;
  } else {
    console.error('Error to check if member is registered in our db');
    return null;
  }
}

async function ourPartners() {
  return await supabase.from('partners_codePromo').select('*');
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

async function getMemberCars(idMember) {
  try {
    const { data, error } = await supabase
      .from('members')
      .select(
        `members_cars (member_id, modele, finition, min, immatriculation, color_id)`
      )
      .eq('id', idMember)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data.members_cars;
  } catch (error) {
    console.error("Erreur lors de l'exécution de la requête :", error.message);
    return null;
  }
}

async function getCarColor(idColor) {
  try {
    const { data, error } = await supabase
      .from('car_colors')
      .select('*')
      .eq('id', idColor)
      .single();
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    console.error("Erreur lors de l'exécution de la requête :", error.message);
    return null;
  }
}

export {
  checkMail,
  checkForStartSession,
  checkForCanI,
  checkRegisteredMember,
  record,
  ourPartners,
  returnMemberInfo,
  getMemberCars,
  getCarColor,
};
