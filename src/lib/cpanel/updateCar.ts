import { NextResponse } from 'next/server';
import { Car, Vehicles } from '@/types/models';
import { getIdColor, getIdFinition, getIdModel } from '@/lib/supabase';
import supabase from 'backend/config/dbConnect';

export async function addCar(vehicles: Vehicles, email: string) {
  try {
    const memberId = await transformEmailToId(email);

    if (memberId === null) {
      return NextResponse.json({
        status: 306,
        statusText: 'Member not found',
      });
    }
    const { error } = await supabase.from('cars').upsert([
      {
        member_id: memberId,
        car_model_id: vehicles.model,
        car_finition_id: vehicles.finition,
        car_color_id: vehicles.color,
        immatriculation: vehicles.immatriculation,
        min: vehicles.mine,
      },
    ]);

    if (!error) {
      const mailResponse = await sendMailNewCarCPanel(vehicles, memberId);
      const dataMailResponse = await mailResponse.json();

      if (mailResponse.status === 200) {
        return NextResponse.json({
          status: 200,
          statusText: 'Car added  and email sent !',
        });
      }
      return NextResponse.json({
        status: 409,
        statusText: 'Error to send email',
      });
    } else {
      return NextResponse.json({
        status: 405,
        statusText: error?.message,
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      status: 406,
      statusText: error.message,
    });
  }
}

async function checkImmatInMuseum(immat: string) {
  try {
    const { error } = await supabase
      .from('museum')
      .select('*')
      .filter('immatriculation', 'eq', immat)
      .single();

    if (!error) {
      return NextResponse.json({
        status: 200,
        statusText: 'Immatriculation no exist in museum :)',
      });
    }

    return NextResponse.json({
      status: 404,
      statusText: 'Immatriculation déjà existante !',
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 416,
      statusText: error.message,
    });
  }
}

export async function deleteCar(car: Car, memberId: number, reason: string) {
  try {
    const response = await recordCarInMuseum(car, memberId, reason);
    if (response?.status === 404) {
      return NextResponse.json({
        status: 404,
        statusText: 'Immatriculation déjà existante !',
      });
    }

    if (response?.status === 200) {
      const { error } = await supabase
        .from('cars')
        .delete()
        .eq('immatriculation', car.immatriculation);

      if (!error) {
        const response = await sendMailRemoveCarCPanel(car, memberId, reason);
        const dataResponse = await response.json();

        if (dataResponse.status === 200) {
          return NextResponse.json({
            status: 200,
            statusText: 'Car successfully removed',
          });
        }
        return NextResponse.json({
          status: 405,
          statusText: 'Error to remove car :(',
        });
      }

      return NextResponse.json({
        status: 405,
        statusText: 'Error to remove car :(',
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      status: 426,
      statusText: error.message,
    });
  }
}

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

async function getIdMemberFromImmatriculation(immatriculation: string) {
  try {
    const { data } = await supabase
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

async function recordCarInMuseum(car: Car, memberId: number, reason: string) {
  try {
    const response = await checkImmatInMuseum(car.immatriculation);

    if (response?.status === 404) {
      return NextResponse.json({
        status: 404,
        statusText: 'Immatriculation déjà existante !',
      });
    }

    if (response?.status === 200) {
      const responses = await Promise.all([
        getIdColor(car.color.name),
        getIdFinition(car.finition),
        getIdModel(car.model),
      ]);
      if (responses[0] !== null && responses[0].data && responses[0].data[0]) {
        const idColor = responses[0].data[0].id;
        if (
          responses[1] !== null &&
          responses[1].data &&
          responses[1].data[0]
        ) {
          const idFinition = responses[1].data[0].id;
          if (
            responses[2] !== null &&
            responses[2].data &&
            responses[2].data[0]
          ) {
            const idModel = responses[2].data[0].id;

            const { data, error } = await supabase.from('museum').upsert([
              {
                member_id: memberId,
                car_model_id: idModel,
                car_finition_id: idFinition,
                car_color_id: idColor,
                immatriculation: car.immatriculation,
                min: car.mine,
                reason: reason,
                deleted_at: new Date(),
              },
            ]);
            if (!error) {
              return NextResponse.json({
                status: 200,
                statusText: 'Great Job !!! Car added successfully in museum :)',
              });
            }
            return NextResponse.json({
              status: 405,
              statusText: error.message,
            });
          } else {
            return NextResponse.json({
              status: 404,
              statusText: 'Model non existant !',
            });
          }
        } else {
          return NextResponse.json({
            status: 404,
            statusText: 'Finition déjà existante !',
          });
        }
      } else {
        return NextResponse.json({
          status: 404,
          statusText: 'Immatriculation déjà existante !',
        });
      }
    }
  } catch (error: any) {
    return NextResponse.json({
      status: 436,
      statusText: error.message,
    });
  }
}

async function sendMailNewCarCPanel(newCar: Vehicles, memberId: number) {
  try {
    const memberName = await getMemberName(memberId);
    if (memberName?.data !== null) {
      const dataSendMail = {
        first_name: memberName?.data[0].first_name,
        last_name: memberName?.data[0].last_name,
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
      const data = await fetch(`${process.env.CLIENT_URL}/api/mail`, options);
      if (data.status === 200) {
        return NextResponse.json({
          status: 200,
          statusText: 'Send email successfully',
        });
      }
      return NextResponse.json({
        status: 405,
        statusText: 'Error to send email',
      });
    }
    return NextResponse.json({
      status: 405,
      statusText: 'Error to get member name',
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 406,
      statusText: error.message,
    });
  }
}

async function sendMailRemoveCarCPanel(
  oldCar: Car,
  memberId: number,
  reason: string
) {
  try {
    const memberName = await getMemberName(memberId);
    if (memberName?.data !== null) {
      const dataSendMail = {
        first_name: memberName?.data[0].first_name,
        last_name: memberName?.data[0].last_name,
        color: oldCar.color.name,
        finition: oldCar.finition,
        immatriculation: oldCar.immatriculation,
        mine: oldCar.mine,
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
      const data = await fetch(`${process.env.CLIENT_URL}/api/mail`, options);

      if (data.status === 200) {
        return NextResponse.json({
          status: 200,
          statusText: 'Send email successfully',
        });
      }
      return NextResponse.json({
        status: 405,
        statusText: 'Error to send email',
      });
    }

    return NextResponse.json({
      status: 405,
      statusText: 'Error to send email',
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 446,
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
                return NextResponse.json({
                  status: 200,
                  statusText: 'Send email successfully',
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

export async function transformEmailToId(email: string) {
  try {
    const response = await supabase
      .from('members')
      .select('id')
      .eq('email', email)
      .limit(1);
    if (response.data && response.data.length > 0) {
      return response.data[0].id;
    } else {
      return null;
    }
  } catch (error: any) {
    throw new Error(
      error.message || "Erreur lors de l'exécution de la requête"
    );
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
