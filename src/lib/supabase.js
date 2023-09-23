import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

async function addCar(vehicles, memberId) {
  try {
    const responses = await Promise.all([
      ...vehicles.map((vehicle) => getIdColor(vehicle.color)),
      ...vehicles.map((vehicle) => getIdFinition(vehicle.finition)),
      ...vehicles.map((vehicle) => getIdModel(vehicle.model)),
    ]);
    const colorIds = responses
      .slice(0, vehicles.length)
      .map((res) => res.data[0].id);
    const finitionIds = responses
      .slice(vehicles.length, vehicles.length * 2)
      .map((res) => res.data[0].id);
    const modelIds = responses
      .slice(vehicles.length * 2)
      .map((res) => res.data[0].id);

    const { data, error } = await supabase.from('cars').upsert([
      {
        member_id: memberId,
        car_model_id: modelIds[0],
        car_finition_id: finitionIds[0],
        car_color_id: colorIds[0],
        immatriculation: vehicles[0].immatriculation,
        min: vehicles[0].mine,
      },
    ]);

    if (!error) {
      return new Response(JSON.stringify(data), {
        status: 200,
        statusText: 'Great Job !!! Car added successfully :)',
      });
    }

    return new Response(JSON.stringify(error.message), {
      status: 405,
      statusText: 'Error to add new car',
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 406,
      statusText: 'Error with supabase request',
    });
  }
}

async function addThemeEvent(name, color, background) {
  try {
    const { data, error } = await supabase
      .from('event_theme')
      .select('*')
      .filter('name', 'eq', name);

    if (data && data.length > 0) {
      return new Response(JSON.stringify(data), {
        status: 405,
        statusText: 'Error to add theme event',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      try {
        const { data, error } = await supabase
          .from('event_theme')
          .insert({ name: name, color: color, background: background });

        if (!error) {
          return new Response(JSON.stringify(data), {
            status: 200,
            statusText: 'Great Job !!! New Event Theme successfully created :)',
          });
        }
        return new Response(JSON.stringify(error.message), {
          status: 405,
          statusText: 'Error to create a new Event Theme :(',
        });
      } catch (error) {
        return new Response(JSON.stringify(error), {
          status: 406,
          statusText: 'Error with supabase request',
        });
      }
    }
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 406,
      statusText: 'Error with supabase request',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

async function cancelEvent(month) {
  try {
    const { data, error } = await supabase
      .from('event')
      .update({
        title: '',
        description: '',
        dates: '',
        theme: 3,
      })
      .filter('month', 'eq', month);

    if (!error) {
      return new Response(JSON.stringify(data), {
        status: 200,
        statusText: 'Great Job !!! Event had been successfully cancelled :)',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    return new Response(JSON.stringify(error.message), {
      status: 405,
      statusText: 'Error to cancel the event',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 406,
      statusText: 'Error with supabase request',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
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
    return false;
  }
}

async function checkImmatInMuseum(immat) {
  try {
    const { data, error } = await supabase
      .from('museum')
      .select('*')
      .filter('immatriculation', 'eq', immat)
      .single();

    if (!data) {
      return new Response(JSON.stringify(data), {
        status: 200,
        statusText: 'Immatriculation not exist in museum :)',
      });
    }

    return new Response(JSON.stringify(error), {
      status: 404,
      statusText: 'Immatriculation déjà existante !',
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 406,
      statusText: 'Error with supabase request',
    });
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

async function checkRegisteredMember(email, pwd) {
  try {
    const { data: signInData, error: signInError } =
      await supabase.auth.signInWithPassword({
        email: email,
        password: pwd,
      });

    if (signInError) {
      return {
        statusText: signInError.message,
        status: signInError.status,
      };
    }

    try {
      const { data, error } = await supabase
        .from('members')
        .select('*')
        .eq('email', signInData.user.email)
        .limit(1);

      if (error) {
        return {
          statusText: error.message,
          status: error.status,
        };
      }

      return {
        statusText: {
          id: data[0].id,
          email: signInData.user.email,
          name: data[0].last_name + ' ' + data[0].first_name,
        },
        status: 200,
      };
    } catch (error) {
      return {
        statusText: error.message,
        status: 407,
      };
    }
  } catch (error) {
    return {
      statusText: error.message,
      status: 406,
    };
  }
}

async function createNewPartner(value, imageName) {
  try {
    const { data, error } = await supabase.from('partners_codePromo').insert({
      title: value.title,
      code: value.code,
      site: value.site,
      remise: value.remise,
      linkImg:
        'https://raw.githubusercontent.com/koala819/Unlimitd_front/develop/' +
        imageName,
      alt: imageName.slice(0, -4),
    });

    if (!error) {
      return new Response(JSON.stringify(data), {
        status: 200,
        statusText: 'Great Job !!! Partner created successfully :)',
        headers: {
          value,
        },
      });
    }

    return new Response(JSON.stringify(error.message), {
      status: 405,
      statusText: 'Error to create partner',
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 406,
      statusText: 'Error with supabase request',
    });
  }
}

async function countCars() {
  const { data, error } = await supabase
    .from('cars')
    .select('count', { count: 'exact' });

  if (error) {
    console.error(error);
  } else {
    const nbCars = data[0].count;
    return nbCars;
  }
}

async function countCarsByModel() {
  const carModelCounts = {};

  try {
    const { data: count1, error: error1 } = await supabase
      .from('cars')
      .select('count', { count: 'exact' })
      .eq('car_model_id', 1);

    if (error1) {
    } else {
      carModelCounts[1] = count1[0].count || 0;
    }

    const { data: count2, error: error2 } = await supabase
      .from('cars')
      .select('count', { count: 'exact' })
      .eq('car_model_id', 2);

    if (error2) {
      console.error(error2);
    } else {
      carModelCounts[2] = count2[0].count || 0;
    }

    const { data: count3, error: error3 } = await supabase
      .from('cars')
      .select('count', { count: 'exact' })
      .eq('car_model_id', 3);

    if (error3) {
      console.error(error3);
    } else {
      carModelCounts[3] = count3[0].count || 0;
    }
    const { data: count4, error: error4 } = await supabase
      .from('cars')
      .select('count', { count: 'exact' })
      .eq('car_model_id', 4);

    if (error4) {
      console.error(error4);
    } else {
      carModelCounts[4] = count4[0].count || 0;
    }

    const { data: count5, error: error5 } = await supabase
      .from('cars')
      .select('count', { count: 'exact' })
      .eq('car_model_id', 5);

    if (error5) {
      console.error(error5);
    } else {
      carModelCounts[5] = count5[0].count || 0;
    }

    return carModelCounts;
  } catch (error) {
    console.error(error);
    return carModelCounts;
  }
}

async function countMembers() {
  const { data, error } = await supabase
    .from('members')
    .select('count', { count: 'exact' });

  if (error) {
    console.error(error);
  } else {
    const nbMembers = data[0].count;
    return nbMembers;
  }
}

async function countMembersByAge() {
  let result = {
    age_0_18: [],
    age_18_30: 0,
    age_30_40: 0,
    age_40_50: 0,
    age_more_50: 0,
  };

  try {
    const { data: members, error: errorMembers } = await supabase
      .from('members')
      .select(`birth_date, email`);

    if (errorMembers) {
      throw errorMembers;
    }
    const currentDate = new Date();

    const age_0_18 = members
      .filter((member) => {
        const birthDate = new Date(member.birth_date);
        const age = currentDate.getFullYear() - birthDate.getFullYear();
        return age >= 0 && age <= 18;
      })
      .map((member) => member.email);

    const age_18_30 = members.filter((member) => {
      const birthDate = new Date(member.birth_date);
      const age = currentDate.getFullYear() - birthDate.getFullYear();
      return age > 18 && age <= 30;
    }).length;

    const age_30_40 = members.filter((member) => {
      const birthDate = new Date(member.birth_date);
      const age = currentDate.getFullYear() - birthDate.getFullYear();
      return age > 30 && age <= 40;
    }).length;

    const age_40_50 = members.filter((member) => {
      const birthDate = new Date(member.birth_date);
      const age = currentDate.getFullYear() - birthDate.getFullYear();
      return age > 40 && age <= 50;
    }).length;

    const age_more_50 = members.filter((member) => {
      const birthDate = new Date(member.birth_date);
      const age = currentDate.getFullYear() - birthDate.getFullYear();
      return age > 50;
    }).length;

    result = {
      age_0_18,
      age_18_30,
      age_30_40,
      age_40_50,
      age_more_50,
    };
    return result;
  } catch (error) {
    console.error('Error retrieving age statistics', error.message);
    return result;
  }
}

async function countMembersByCountry() {
  const countryCounts = {};
  try {
    const { data: members, error } = await supabase
      .from('members')
      .select('country');

    if (error) {
      return countryCounts;
    } else {
      for (const member of members) {
        const country = member.country;
        if (countryCounts[country]) {
          countryCounts[country]++;
        } else {
          countryCounts[country] = 1;
        }
      }
      return countryCounts;
    }
  } catch (error) {
    console.error(error);
  }
}

/** @returns {{ [key: string]: number }} */
async function countMembersByMonth() {
  const countsByMonth = {};

  try {
    const { data, error } = await supabase.from('members').select('created_at');

    if (error) {
    } else {
      data.forEach((member) => {
        const createdAt = new Date(member.created_at);
        const monthYearKey = `${
          createdAt.getMonth() + 1
        }-${createdAt.getFullYear()}`;

        if (countsByMonth[monthYearKey]) {
          countsByMonth[monthYearKey]++;
        } else {
          countsByMonth[monthYearKey] = 1;
        }
      });

      return countsByMonth;
    }
  } catch (error) {
    console.error(error);
    return countsByMonth;
  }
}

async function deleteCar(car, memberId, reason) {
  try {
    const response = await recordCarInMuseum(car, memberId, reason);
    if (response !== undefined && response.status === 404) {
      return new Response(JSON.stringify(), {
        status: 404,
        statusText: 'Immatriculation déjà existante !',
      });
    }

    if (response !== undefined && response.status === 200) {
      const { data, error } = await supabase
        .from('cars')
        .delete()
        .eq('immatriculation', car.immatriculation);

      if (!error) {
        return new Response(JSON.stringify(data), {
          status: 200,
          statusText: 'Great Job !!! Car successfully removed :)',
        });
      }

      return new Response(JSON.stringify(error.message), {
        status: 405,
        statusText: 'Error to remove car :(',
      });
    }
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 406,
      statusText: 'Error with supabase request',
    });
  }
}

async function deleteParner(partnerId) {
  try {
    const { data, error } = await supabase
      .from('partners_codePromo')
      .delete()
      .eq('id', partnerId);

    if (!error) {
      return new Response(JSON.stringify(data), {
        status: 200,
        statusText: 'Great Job !!! Partner successfully removed :)',
      });
    }

    return new Response(JSON.stringify(error.message), {
      status: 405,
      statusText: 'Error to remove Partner :(',
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 406,
      statusText: 'Error with supabase request',
    });
  }
}

async function deleteThemeEvent(id) {
  try {
    const { data, error } = await supabase
      .from('event')
      .select('*')
      .filter('theme', 'eq', id);

    if (data && data.length > 0) {
      return new Response(JSON.stringify(data), {
        status: 405,
        statusText: 'Error to delete theme event',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      try {
        const { data, error } = await supabase
          .from('event_theme')
          .delete()
          .eq('id', id);

        if (!error) {
          return new Response(JSON.stringify(data), {
            status: 200,
            statusText: 'Great Job !!! Event Theme successfully removed :)',
          });
        }

        return new Response(JSON.stringify(error.message), {
          status: 405,
          statusText: 'Error to remove Event Theme :(',
        });
      } catch (error) {
        return new Response(JSON.stringify(error), {
          status: 406,
          statusText: 'Error with supabase request',
        });
      }
    }
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 406,
      statusText: 'Error with supabase request',
      headers: {
        'Content-Type': 'application/json',
      },
    });
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

async function getAllEvents(year) {
  try {
    const { data, error } = await supabase
      .from('event')
      .select('*')
      .eq('year', year);

    if (!error) {
      return data;
    }

    return new Response(JSON.stringify(error.message), {
      status: 405,
      statusText: 'Error to get events :(',
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 406,
      statusText: 'Error with supabase request',
    });
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

async function getAllThemesEvent() {
  try {
    const { data, error } = await supabase.from('event_theme').select('*');

    if (!error) {
      return data;
    }

    return new Response(JSON.stringify(error.message), {
      status: 405,
      statusText: 'Error to get themes event :(',
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 406,
      statusText: 'Error with supabase request',
    });
  }
}

async function getHexaCarColor(colorName) {
  try {
    const { data, error } = await supabase
      .from('car_colors')
      .select('hexa')
      .eq('name', colorName);

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

async function getIdMemberFromImmatriculation(immatriculation) {
  try {
    return await supabase
      .from('cars')
      .select('member_id')
      .eq('immatriculation', immatriculation);
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

async function getMemberCars(memberId) {
  try {
    const { data, error } = await supabase
      .from('cars')
      .select(
        `min, immatriculation, model:car_model_id (name), finition:car_finition_id (name), hexa:car_color_id(hexa), color_name:car_color_id(name)`
      )
      .eq('member_id', memberId);
    // .single();

    if (error) {
      throw new Error(error.message);
    }
    return data;
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

async function getMemberName(id) {
  try {
    return await supabase
      .from('members')
      .select('first_name, last_name')
      .eq('id', id);
  } catch (error) {
    console.error("Erreur lors de l'exécution de la requête :", error.message);
    return null;
  }
}

function getTokenFromSupabase(access_token) {
  const options = {};

  if (access_token) {
    options.global = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
  }

  return supabase;
}

async function ourPartners() {
  return await supabase.from('partners_codePromo').select('*');
}

async function record(personalInfo, vehicles, email, newMemberId) {
  const rspRecMember = await recordMember(personalInfo, email, newMemberId);
  const dataRecMember = await rspRecMember.json();
  if (dataRecMember.status !== 200) {
    return NextResponse.json({
      message: dataRecMember.statusText,
      status: dataRecMember.status,
    });
  }

  const rspRecCar = await recordCar(vehicles, newMemberId);
  const dataRecCar = await rspRecCar.json();
  if (dataRecCar.status !== 200) {
    return NextResponse.json({
      message: dataRecCar.statusText,
      status: dataRecCar.status,
    });
  }
  const rspSendMail = await sendMailRecordDb(personalInfo);
  const dataSendMail = await rspSendMail.json();
  if (dataSendMail.status !== 200) {
    return NextResponse.json({
      message: dataRecCar.statusText,
      status: dataRecCar.status,
    });
  }

  return NextResponse.json({
    message:
      'Great Job !!! User and car have created successfully with send the mail :)',
    status: 200,
  });
}

async function recordCar(vehicles, memberId) {
  const responses = await Promise.all([
    ...vehicles.map((vehicle) => getIdColor(vehicle.color)),
    ...vehicles.map((vehicle) => getIdFinition(vehicle.finition)),
    ...vehicles.map((vehicle) => getIdModel(vehicle.model)),
  ]);

  if (responses !== undefined) {
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

    const insertionPromises = updatedVehicles.map(async (vehicle) => {
      const { immatriculation, mine, model, color, finition } = vehicle;
      try {
        const { error } = await supabase.from('cars').insert({
          car_color_id: color,
          car_finition_id: finition,
          car_model_id: model,
          immatriculation: immatriculation,
          member_id: memberId,
          min: mine,
        });
        if (error) {
          return NextResponse.json({
            statusText: error.message,
            status: 409,
          });
        }
        return NextResponse.json({
          message: 'Great Job !!! Car(s) has created successfully :)',
          status: 200,
        });
      } catch (error) {
        return NextResponse.json({
          statusText: error.message,
          status: 406,
        });
      }
    });

    const results = await Promise.all(insertionPromises);
    if (results[0] && results[0].status === 200) {
      return results[0];
    }
    return results;
  }
}

async function recordCarInMuseum(car, memberId, reason) {
  try {
    const response = await checkImmatInMuseum(car.immatriculation);

    if (response !== undefined && response.status === 404) {
      return new Response(JSON.stringify(), {
        status: 404,
        statusText: 'Immatriculation déjà existante !',
      });
    }

    if (response !== undefined && response.status === 200) {
      const responses = await Promise.all([
        getIdColor(car.color.name),
        getIdFinition(car.finition),
        getIdModel(car.model),
      ]);
      const idColor = responses[0].data[0].id;
      const idFinition = responses[1].data[0].id;
      const idModel = responses[2].data[0].id;

      const { data, error } = await supabase.from('museum').upsert([
        {
          member_id: memberId,
          car_model_id: idModel,
          car_finition_id: idFinition,
          car_color_id: idColor,
          immatriculation: car.immatriculation,
          min: car.min,
          reason: reason,
          deleted_at: new Date(),
        },
      ]);
      if (!error) {
        return new Response(JSON.stringify(data), {
          status: 200,
          statusText: 'Great Job !!! Car added successfully in museum :)',
        });
      }

      return new Response(JSON.stringify(error.message), {
        status: 405,
        statusText: 'Error to add new car in museum :(',
      });
    }
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 406,
      statusText: 'Error with supabase request',
    });
  }
}

async function recordMember(personalInfo, email, newMemberId) {
  const { address, birth_date, first_name, last_name, phone, town, zip_code } =
    personalInfo;
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
  try {
    const { error } = await supabase.from('members').insert({
      id: newMemberId,
      cotisation: true,
      address,
      birth_date,
      country,
      email: email,
      first_name: first_name.charAt(0).toUpperCase() + first_name.slice(1),
      last_name: last_name.toUpperCase(),
      phone,
      town,
      zip_code,
    });
    if (error) {
      return NextResponse.json({
        statusText: error.message,
        status: 409,
      });
    }

    return NextResponse.json({
      message: 'Great Job !!! User has created successfully :)',
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      statusText: error.message,
      status: 406,
    });
  }
}

async function recordModifyColorInCpanel(oldColor, newColor) {
  try {
    const newColorGoodFormat = newColor.slice(1);

    const { data, error } = await supabase
      .from('car_colors')
      .update({ hexa: newColorGoodFormat })
      .eq('hexa', oldColor);

    if (!error) {
      return new Response(JSON.stringify(data), {
        status: 200,
        statusText: 'Great Job !!! Color successfully modify :)',
      });
    }

    return new Response(JSON.stringify(error.message), {
      status: 405,
      statusText: 'Error to modify the color',
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 406,
      statusText: 'Error with supabase request',
    });
  }
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

async function sendMailRecordDb(personalInfo) {
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
  try {
    const response = await fetch(`${process.env.CLIENT_URL}/api/mail`, options);

    if (response.status === 200) {
      return NextResponse.json({
        message: 'Great Job !!! Mail had been send successfully :)',
        status: 200,
      });
    }

    return NextResponse.json({
      message: 'Error to send mail',
      status: 409,
    });
  } catch (error) {
    return {
      statusText: error.message,
      status: 406,
    };
  }
}

async function sendMailNewCarCPanel(newCar, memberId) {
  try {
    const memberName = await getMemberName(memberId);
    const dataSendMail = {
      first_name: memberName.data[0].first_name,
      last_name: memberName.data[0].last_name,
      color: newCar.color,
      finition: newCar.finition,
      immatriculation: newCar.immatriculation,
      mine: newCar.mine,
      model: newCar.model,
      from: 'newCar',
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(dataSendMail),
    };
    const { data, error } = await fetch(
      `${process.env.CLIENT_URL}/api/mail`,
      options
    );
    if (!error) {
      return new Response(JSON.stringify(data), {
        status: 200,
        statusText: 'Great Job !!! send email successfully :)',
      });
    }

    return new Response(JSON.stringify(error.message), {
      status: 405,
      statusText: 'Error to send email',
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 406,
      statusText: 'Error to retrieve member id from immat',
    });
  }
}

async function sendMailUpdatePartCar(
  immatriculation,
  newValue,
  oldValue,
  partOfCar
) {
  try {
    const idMember = await getIdMemberFromImmatriculation(immatriculation);
    if (idMember.status === 200) {
      try {
        const memberName = await getMemberName(idMember.data[0].member_id);
        if (idMember.status === 200) {
          const dataSendMail = {
            first_name: memberName.data[0].first_name,
            last_name: memberName.data[0].last_name,
            old_value: oldValue,
            new_value: newValue,
            type: partOfCar,
            from: 'updateCarInfo',
          };
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify(dataSendMail),
          };
          try {
            const mailResponse = await fetch(
              `${process.env.CLIENT_URL}/api/mail`,
              options
            );
            if (mailResponse.status === 200) {
              return new Response(JSON.stringify(mailResponse), {
                status: 200,
                statusText: 'Great Job !!! send email successfully :)',
              });
            }
          } catch (error) {
            return new Response(JSON.stringify(error), {
              status: 405,
              statusText: 'Error to send email',
            });
          }
        }
      } catch (error) {
        return new Response(JSON.stringify(error), {
          status: 406,
          statusText: 'Error to retrieve member name from id',
        });
      }
    }
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 407,
      statusText: 'Error to retrieve member id from immat',
    });
  }
}

async function sendMailRemoveCarCPanel(oldCar, memberId, reason) {
  try {
    const memberName = await getMemberName(memberId);
    const dataSendMail = {
      first_name: memberName.data[0].first_name,
      last_name: memberName.data[0].last_name,
      color: oldCar.color.name,
      finition: oldCar.finition,
      immatriculation: oldCar.immatriculation,
      mine: oldCar.min,
      model: oldCar.model,
      reason: reason,
      from: 'oldCar',
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(dataSendMail),
    };
    const { data, error } = await fetch(
      `${process.env.CLIENT_URL}/api/mail`,
      options
    );
    if (!error) {
      return new Response(JSON.stringify(data), {
        status: 200,
        statusText: 'Great Job !!! send email successfully :)',
      });
    }

    return new Response(JSON.stringify(error.message), {
      status: 405,
      statusText: 'Error to send email',
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 406,
      statusText: 'Error to retrieve member id from immat',
    });
  }
}

async function sendMailUpdateCarInIdg(
  oldValue,
  newValue,
  immatriculation,
  type
) {
  try {
    const idMember = await getIdMemberFromImmatriculation(immatriculation);
    try {
      const memberName = await getMemberName(idMember.data[0].member_id);
      const dataSendMail = {
        first_name: memberName.data[0].first_name,
        last_name: memberName.data[0].last_name,
        old_value: oldValue,
        new_value: newValue,
        type: type,
        from: 'updateCarInfo',
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
    } catch (error) {
      return new Response(JSON.stringify(error), {
        status: 406,
        statusText: 'Error to retrieve member name from id',
      });
    }
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 406,
      statusText: 'Error to retrieve member id from immat',
    });
  }
}

async function updateCarColor(value, immatriculation) {
  try {
    const { data, error } = await supabase
      .from('cars')
      .update({ car_color_id: value })
      .filter('immatriculation', 'eq', immatriculation);

    if (!error) {
      return new Response(JSON.stringify(data), {
        status: 200,
        statusText: 'Great Job !!! Car Color updated successfully :)',
        headers: {
          value,
        },
      });
    }

    return new Response(JSON.stringify(error.message), {
      status: 405,
      statusText: 'Error to update car color',
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 406,
      statusText: 'Error with supabase request',
    });
  }
}

async function updateCarFinition(value, immatriculation) {
  try {
    const { data, error } = await supabase
      .from('cars')
      .update({ car_finition_id: value })
      .filter('immatriculation', 'eq', immatriculation);

    if (!error) {
      return new Response(JSON.stringify(data), {
        status: 200,
        statusText: 'Great Job !!! Car Finition updated successfully :)',
        headers: {
          value,
        },
      });
    }

    return new Response(JSON.stringify(error.message), {
      status: 405,
      statusText: 'Error to update car finition',
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 406,
      statusText: 'Error with supabase request',
    });
  }
}

async function updateCarImmatriculation(value, immatriculation) {
  try {
    const { data, error } = await supabase
      .from('cars')
      .update({ immatriculation: value })
      .filter('immatriculation', 'eq', immatriculation);

    if (!error) {
      return new Response(JSON.stringify(data), {
        status: 200,
        statusText: 'Great Job !!! Immatriculation updated successfully :)',
      });
    }

    return new Response(JSON.stringify(error.message), {
      status: 405,
      statusText: 'Error to update Immatriculation',
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 406,
      statusText: 'Error with supabase request',
    });
  }
}

async function updateCarMin(value, immatriculation) {
  try {
    const { data, error } = await supabase
      .from('cars')
      .update({ min: value })
      .filter('immatriculation', 'eq', immatriculation);

    if (!error) {
      return new Response(JSON.stringify(data), {
        status: 200,
        statusText: 'Great Job !!! Type Mine updated successfully :)',
      });
    }

    return new Response(JSON.stringify(error.message), {
      status: 405,
      statusText: 'Error to update type mine',
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 406,
      statusText: 'Error with supabase request',
    });
  }
}

async function updateCarModel(value, immatriculation) {
  try {
    const { data, error } = await supabase
      .from('cars')
      .update({ car_model_id: value })
      .filter('immatriculation', 'eq', immatriculation);

    if (!error) {
      return new Response(JSON.stringify(data), {
        status: 200,
        statusText: 'Great Job !!! Car Model updated successfully :)',
        headers: {
          value,
        },
      });
    }

    return new Response(JSON.stringify(error.message), {
      status: 405,
      statusText: 'Error to update car model',
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 406,
      statusText: 'Error with supabase request',
    });
  }
}

async function updateEvent(value, month, theme) {
  try {
    const { data, error } = await supabase
      .from('event')
      .update({
        title: value.title,
        description: value.description,
        dates: value.dates,
        theme: theme,
      })
      .filter('month', 'eq', month);

    if (!error) {
      return new Response(JSON.stringify(data), {
        status: 200,
        statusText: 'Great Job !!! Car Model updated successfully :)',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return new Response(JSON.stringify(error.message), {
      status: 405,
      statusText: 'Error to update car model',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 406,
      statusText: 'Error with supabase request',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

async function updatePartner(value, id, imageName) {
  try {
    const updateData = {
      title: value.title,
      code: value.code,
      site: value.site,
      remise: value.remise,
    };

    // Si imageName est fourni, ajoutez le lien de l'image
    if (imageName) {
      updateData.linkImg =
        'https://raw.githubusercontent.com/koala819/Unlimitd_front/develop/' +
        imageName;
      updateData.alt = imageName.slice(0, -4);
    }

    const { data, error } = await supabase
      .from('partners_codePromo')
      .update(updateData)
      .filter('id', 'eq', id);

    if (!error) {
      return new Response(JSON.stringify(data), {
        status: 200,
        statusText: 'Great Job !!! Partner updated successfully :)',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return new Response(JSON.stringify(error.message), {
      status: 405,
      statusText: 'Error to update partner',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 406,
      statusText: 'Error with supabase request',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

async function updateThemeEvent(color, name, item) {
  try {
    const { data, error } = await supabase
      .from('event_theme')
      .update({
        ...(item === 'background' ? { background: color } : { color: color }),
      })
      .filter('name', 'eq', name);

    if (!error) {
      return new Response(JSON.stringify(data), {
        status: 200,
        statusText: 'Great Job !!! Theme event updated successfully :)',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return new Response(JSON.stringify(error.message), {
      status: 405,
      statusText: 'Error to update theme event',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 406,
      statusText: 'Error with supabase request',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export {
  addCar,
  addThemeEvent,
  cancelEvent,
  checkForCanI,
  checkForStartSession,
  checkMail,
  checkRegisteredMember,
  countCars,
  countCarsByModel,
  countMembers,
  countMembersByAge,
  countMembersByCountry,
  countMembersByMonth,
  createNewPartner,
  deleteCar,
  deleteParner,
  deleteThemeEvent,
  getAllColors,
  getAllEvents,
  getAllFinitions,
  getAllModels,
  getAllThemesEvent,
  getHexaCarColor,
  getMemberCars,
  getMemberId,
  getTokenFromSupabase,
  ourPartners,
  record,
  recordModifyColorInCpanel,
  returnMemberInfo,
  sendMailNewCarCPanel,
  sendMailUpdatePartCar,
  sendMailRemoveCarCPanel,
  sendMailUpdateCarInIdg,
  updateCarColor,
  updateCarFinition,
  updateCarImmatriculation,
  updateCarMin,
  updateCarModel,
  updateEvent,
  updatePartner,
  updateThemeEvent,
};
