import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export async function getMemberCars(memberId: number) {
  try {
    const { data, error } = await supabase
      .from('cars')
      .select(
        `min, immatriculation, model:car_model_id (name), finition:car_finition_id (name), hexa:car_color_id(hexa), color_name:car_color_id(name)`
      )
      .eq('member_id', memberId);

    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error: any) {
    console.error("Erreur lors de l'exécution de la requête :", error.message);
    return null;
  }
}

export async function updateCar(
  oldName: string,
  newName: string,
  immatriculation: string,
  partName: string,
  newId?: string
) {
  const valueToChange = newId ? newId : newName;
  const response = await updatePartCar(
    partName,
    valueToChange,
    immatriculation
  );
  if (response.status === 200) {
    const dataResponse = await response.json();

    if (dataResponse.status !== 200) {
      return NextResponse.json({
        message: dataResponse.statusText,
        status: dataResponse.status,
      });
    }
    const immat = partName === 'immatriculation' ? newName : immatriculation;
    const rspSendMail = await sendMailUpdatePartCar(
      immat,
      newName,
      oldName,
      partName
    );

    if (rspSendMail !== undefined) {
      const dataRspMail = await rspSendMail.json();
      if (dataRspMail && dataRspMail.status !== 200) {
        return NextResponse.json({
          message: dataRspMail.statusText,
          status: dataRspMail.status,
        });
      }
    }
    return NextResponse.json({
      message: 'Great Job !!! Update successful :)',
      status: 200,
    });
  } else {
    return NextResponse.json({
      message: response.statusText,
      status: response.status,
    });
  }
}

async function updatePartCar(
  partName: string,
  newValue: string,
  immatriculation: string
) {
  try {
    const { error } = await supabase
      .from('cars')
      .update({ [partName]: newValue })
      .filter('immatriculation', 'eq', immatriculation);

    if (error) {
      return NextResponse.json({
        status: 405,
        statusText: error.message,
      });
    } else {
      return NextResponse.json({
        statusText: 'Great Job !!! Car Model updated successfully :)',
        status: 200,
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      status: 406,
      statusText: error.message,
    });
  }
}

async function sendMailUpdatePartCar(
  immatriculation: string,
  newValue: string,
  oldValue: string,
  partOfCar: string
) {
  try {
    const idMember = await getIdMemberFromImmatriculation(immatriculation);
    if (idMember !== undefined) {
      const dataMemberId = await idMember.json();

      if (dataMemberId.status !== 200) {
        return NextResponse.json({
          status: dataMemberId.status,
          statusText: dataMemberId.statusText,
        });
      }

      if (idMember?.status === 200 && dataMemberId) {
        try {
          const memberName = await getMemberName(
            dataMemberId.data[0].member_id
          );
          if (
            idMember.status === 200 &&
            memberName !== null &&
            memberName.data !== null
          ) {
            const dataSendMail = {
              first_name: memberName.data[0].first_name,
              last_name: memberName.data[0].last_name,
              old_value: oldValue,
              new_value: newValue,
              immatriculation: immatriculation,
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
            } catch (error: any) {
              return NextResponse.json({
                status: 405,
                statusText: error.message,
              });
            }
          }
        } catch (error: any) {
          return NextResponse.json({
            status: 406,
            statusText: error.message,
          });
        }
      }
    }
  } catch (error: any) {
    return NextResponse.json({
      status: 407,
      statusText: error.message,
    });
  }
}

async function getIdMemberFromImmatriculation(immatriculation: string) {
  try {
    const { data, error } = await supabase
      .from('cars')
      .select('member_id')
      .eq('immatriculation', immatriculation);

    if (data?.length === 0) {
      return NextResponse.json({
        status: 407,
        statusText: 'no member found',
      });
    } else {
      return NextResponse.json({
        status: 200,
        statusText: 'Member found',
        data: data,
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      status: 407,
      statusText: error.message,
    });
  }
}

async function getMemberName(id: number) {
  try {
    return await supabase
      .from('members')
      .select('first_name, last_name')
      .eq('id', id);
  } catch (error: any) {
    console.error("Erreur lors de l'exécution de la requête :", error.message);
    return null;
  }
}
