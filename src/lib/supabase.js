import { createClient } from '@supabase/supabase-js';
import { signOut } from 'next-auth/react';
import bcrypt from 'bcryptjs';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_KEY || ''
);

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

async function getAllColors() {
  try {
    return await supabase.from('car_colors').select('*');
  } catch (error) {
    console.error("Erreur lors de l'exécution de la requête :", error.message);
    return null;
  }
}
async function getAllFinitions() {
  try {
    return await supabase.from('car_finitions').select('*');
  } catch (error) {
    console.error("Erreur lors de l'exécution de la requête :", error.message);
    return null;
  }
}

async function getAllModels() {
  try {
    return await supabase.from('car_models').select('*');
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

async function getIdColor(name) {
  try {
    return await supabase
      .from('car_colors')
      .select('id')
      .eq('name', name)
      .limit(1);
  } catch (error) {
    console.error("Erreur lors de l'exécution de la requête :", error.message);
    return null;
  }
}

async function getIdFinition(name) {
  try {
    return await supabase
      .from('car_finitions')
      .select('id')
      .eq('name', name)
      .limit(1);
  } catch (error) {
    console.error("Erreur lors de l'exécution de la requête :", error.message);
    return null;
  }
}

async function getIdModel(name) {
  try {
    return await supabase
      .from('car_models')
      .select('id')
      .eq('name', name)
      .limit(1);
  } catch (error) {
    console.error("Erreur lors de l'exécution de la requête :", error.message);
    return null;
  }
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

async function getMemberId() {
  try {
    return await supabase
      .from('members')
      .select('id')
      .order('id', { ascending: false })
      .limit(1);
  } catch (error) {
    console.error("Erreur lors de l'exécution de la requête :", error.message);
    return null;
  }
}

async function ourPartners() {
  return await supabase.from('partners_codePromo').select('*');
}

async function record(
  personalInfo,
  vehicles,
  email,
  memberId,
  setIsRegistered
) {
  recordMember(personalInfo, vehicles, email, memberId, setIsRegistered);
}

async function recordCar(setIsRegistered, vehicles, memberId, personalInfo) {
  Promise.all([
    ...vehicles.map((vehicle) => getIdColor(vehicle.color)),
    ...vehicles.map((vehicle) => getIdFinition(vehicle.finition)),
    ...vehicles.map((vehicle) => getIdModel(vehicle.model)),
  ]).then((responses) => {
    const colorIds = responses
      .slice(0, vehicles.length)
      .map((res) => res.data[0].id);
    const finitionIds = responses
      .slice(vehicles.length, vehicles.length * 2)
      .map((res) => res.data[0].id);
    const modelIds = responses
      .slice(vehicles.length * 2)
      .map((res) => res.data[0].id);

    const updatedVehicles = vehicles.map((vehicle, index) => ({
      ...vehicle,
      color: colorIds[index],
      finition: finitionIds[index],
      model: modelIds[index],
    }));

    const vehiclesData = {
      member_id: memberId,
      vehicles: updatedVehicles,
    };
    // console.log('vehiclesData', vehiclesData);

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(vehiclesData),
    };

    fetch(`${process.env.CLIENT_URL}/api/recordCars`, options).then(
      async (response) => {
        // console.log('response', response);
        if (response.status === 200) {
          sendMailRecordDb(personalInfo, setIsRegistered);
        } else {
          alert(
            'Erreur dans le traitement des données, veuillez nous contacter et nous excuser pour la gêne occasionnée, merci de nous indiquer\n\n le code erreur : ' +
              response.status +
              "\n\net le message d'erreur : " +
              response.statusText
          );
        }
      }
    );
  });
}

async function recordMember(
  personalInfo,
  vehicles,
  email,
  memberId,
  setIsRegistered
) {
  const { phone, ...rest } = personalInfo;
  const countryCodes = {
    33: 'France',
    32: 'Belgique',
    39: 'Italie',
    31: 'Hollande',
    34: 'Espagne',
    41: 'Suisse',
  };

  const countryCode = phone.substring(0, 2);
  const country = countryCodes[countryCode] || '';
  let memberData;

  if (email.pwd) {
    //Member is registered with email and password
    memberData = {
      ...rest,
      email: email.email,
      pwd: email.pwd,
      member_id: memberId,
      country,
      phone,
    };
  } else {
    //Member is registered with Google
    memberData = {
      ...rest,
      email,
      member_id: memberId,
      country,
      phone,
    };
  }
  // console.log('memberData', memberData);

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(memberData),
  };

  await fetch(`${process.env.CLIENT_URL}/api/recordMember`, options).then(
    (response) => {
      if (response.status === 200) {
        recordCar(setIsRegistered, vehicles, memberId, personalInfo);
      } else {
        alert(
          'Erreur dans le traitement des données, veuillez nous contacter et nous excuser pour la gêne occasionnée, merci de nous indiquer\n\n le code erreur : ' +
            response.status +
            "\n\net le message d'erreur : " +
            response.statusText
        );
      }
    }
  );
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

async function sendMailRecordDb(personalInfo, setIsRegistered) {
  const dataSendMail = {
    first_name: personalInfo.first_name,
    last_name: personalInfo.last_name,
    from: 'recordDataBase',
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(dataSendMail),
  };
  await fetch(`${process.env.CLIENT_URL}/api/mail`, options).then(
    (response) => {
      response.status === 200 && setIsRegistered(true);
    }
  );
}

export {
  checkForCanI,
  checkForStartSession,
  checkMail,
  checkRegisteredMember,
  getAllColors,
  getAllFinitions,
  getAllModels,
  getCarColor,
  getMemberCars,
  getMemberId,
  ourPartners,
  record,
  returnMemberInfo,
};
