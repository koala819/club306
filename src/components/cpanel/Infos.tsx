'use client';
import { useEffect, useState } from 'react';
import { returnMemberInfo } from '@/lib/supabase';
import { Input } from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import { Loading } from '@/components/cpanel/Loading';
import { Member } from '@/types/models';
const dayjs = require('dayjs');
const localeFr = require('dayjs/locale/fr');

export default function Infos({ session }: any) {
  const [member, setMember] = useState<Member | undefined>(undefined);
  dayjs.locale(localeFr);

  useEffect(() => {
    const fetchData = async () => {
      const response = await returnMemberInfo(session?.user?.email);

      if (response !== false && response[0] !== undefined) {
        const memberData: Member = {
          address: response[0].address,
          birth_date: response[0].birth_date,
          created_at: response[0].created_at,
          first_name: response[0].first_name,
          email: response[0].email,
          id: response[0].id,
          country: response[0].country,
          last_name: response[0].last_name,
          phone: response[0].phone,
          town: response[0].town,
          zip_code: response[0].zip_code,
        };
        setMember(() => memberData);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {member === undefined ? (
        <Loading />
      ) : (
        <div className="w-full lg:w-8/12 px-4 mx-auto mt-6 flex items-center justify-center">
          <div className="flex flex-col min-w-0 break-words w-11/12 lg:w-full mb-6 shadow-lg rounded-lg bg-white dark:bg-slate-500 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="flex justify-center md:justify-end">
                <Image
                  className="w-auto h-32 lg:h-48"
                  src="https://raw.githubusercontent.com/koala819/Unlimitd_front/develop/QR_Code.png"
                  alt="QR Code officiel Club306"
                  width="1000"
                  height="1000"
                />
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                informations de l'utilisateur
              </h6>
              <div className="flex flex-wrap ">
                <div className="w-full lg:w-6/12 px-4 mb-4">
                  <Input
                    isReadOnly
                    key="memberId"
                    type="text"
                    color="secondary"
                    label="ID membre"
                    defaultValue={
                      member?.id !== undefined && member?.id <= 100
                        ? '00' + member?.id.toString()
                        : member?.id.toString()
                    }
                    className="max-w-xs"
                  />
                </div>
                <div className="w-full lg:w-6/12 px-4 mb-4">
                  <Input
                    isReadOnly
                    key="email"
                    type="email"
                    color="secondary"
                    label="Email"
                    defaultValue={member?.email}
                    className="max-w-xs"
                  />
                </div>
                <div className="w-full lg:w-6/12 px-4 mb-4">
                  <Input
                    isReadOnly
                    key="firstName"
                    type="text"
                    color="secondary"
                    label="Prénom"
                    defaultValue={member?.first_name}
                    className="max-w-xs"
                  />
                </div>
                <div className="w-full lg:w-6/12 px-4 mb-4">
                  <Input
                    isReadOnly
                    key="lastName"
                    type="text"
                    color="secondary"
                    label="Nom"
                    defaultValue={member?.last_name}
                    className="max-w-xs"
                  />
                </div>
                <div className="w-full lg:w-6/12 px-4 mb-4">
                  <Input
                    isReadOnly
                    key="phone"
                    type="text"
                    color="secondary"
                    label="Téléphone"
                    defaultValue={`+${member?.phone}`}
                    className="max-w-xs"
                  />
                </div>
                <div className="w-full lg:w-6/12 px-4 mb-4">
                  <Input
                    isReadOnly
                    key="birthday"
                    type="text"
                    color="secondary"
                    label="Date Anniversaire"
                    // defaultValue={member?.birth_date}
                    defaultValue={dayjs(member?.birth_date).format(
                      'DD MMMM YYYY'
                    )}
                    className="max-w-xs"
                  />
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Coordonnées
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4 mb-4">
                  <Input
                    isReadOnly
                    key="address"
                    type="text"
                    color="primary"
                    label="Adresse"
                    defaultValue={member?.address}
                    className="max-w-xs"
                  />
                </div>
                <div className="w-full lg:w-4/12 px-4 mb-4">
                  <Input
                    isReadOnly
                    key="town"
                    type="text"
                    color="primary"
                    label="Ville"
                    defaultValue={member?.town}
                    className="max-w-xs"
                  />
                </div>
                <div className="w-full lg:w-4/12 px-4 mb-4">
                  <Input
                    isReadOnly
                    key="country"
                    type="text"
                    color="primary"
                    label="Pays"
                    defaultValue={member?.country}
                    className="max-w-xs"
                  />
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <Input
                    isReadOnly
                    key="postalCode"
                    type="text"
                    color="primary"
                    label="Code Postal"
                    defaultValue={member?.zip_code}
                    className="max-w-xs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
