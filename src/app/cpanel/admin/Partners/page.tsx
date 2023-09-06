'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import RootLayout from '@/app/layout';
import CustomLayout from '../../layout';
import { ourPartners } from '@/lib/supabase';
import { PartnerInfoType } from '@/types/Components';
import EditPartner from './components/EditPartner';
import { deleteParner } from '@/lib/supabase';
import { deleteImageFromGitHub } from '@/lib/githubImage';

export default function OurPartners() {
  const [partnerData, setPartnerData] = useState<PartnerInfoType[] | null>(
    null
  );
  const [selectedPartner, setSelectedPartner] =
    useState<PartnerInfoType | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ourPartners();
        if (response.data !== null) {
          const formattedData = response.data.map(
            (item: { [x: string]: any }) => {
              return {
                id: item.id,
                title: item.title,
                code: item.code,
                linkImg: item.linkImg,
                remise: item.remise,
                site: item.site,
                alt: item.alt,
              };
            }
          );
          setPartnerData(formattedData);
        }
      } catch (error) {
        console.error('Error to get data from partners : ', error);
      }
    };
    fetchData();
  }, []);

  const handleEditClick = (partner: PartnerInfoType) => {
    partner !== null && partner !== undefined && setSelectedPartner(partner);
    setIsEditing(true);
  };

  const handleDeleteClick = async (partner: PartnerInfoType) => {
    if (partner.linkImg !== null && partner.linkImg !== undefined) {
      const response = await deleteImageFromGitHub(partner.linkImg);
      console.log('response', response);
      if (response.status === 200) {
        const response = await deleteParner(partner.id);
        console.log('response', response);

        if (response.status === 200) {
          window.location.reload();
        }
      }
    }
  };

  const handleAddNewPartner = () => {
    setSelectedPartner(null);
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setSelectedPartner(null);
    setIsEditing(false);
  };

  // const handleSavePartner = (editedPartner: PartnerInfoType) => {
  //   console.log('save partner', editedPartner);
  //   // Vous pouvez implémenter la logique pour sauvegarder le partenaire ici
  //   setIsEditing(false);
  //   // Si vous souhaitez ajouter un nouveau partenaire, vous pouvez également gérer cela ici
  // };

  return (
    <RootLayout hideFooter hideNavbar>
      <CustomLayout>
        <div className="mb-4 text-right">
          <button
            onClick={handleAddNewPartner}
            className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded"
          >
            Ajouter un nouveau partenaire
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {partnerData !== null &&
            partnerData
              .slice()
              .sort((a, b) => (a.title ?? '').localeCompare(b.title ?? ''))
              .map((partner) => (
                <div
                  key={partner.id}
                  className="border border-gray-300 rounded p-4"
                >
                  <Image
                    src={partner.linkImg || ''}
                    alt={partner.alt || ''}
                    className="w-full h-auto mb-2"
                    width={1000}
                    height={1000}
                  />
                  <h3 className="text-lg font-semibold">{partner.title}</h3>
                  <p className="text-gray-600">{partner.site}</p>
                  <p className="text-gray-700">Code: {partner.code}</p>
                  <p className="text-green-600">Remise: {partner.remise}</p>
                  <div className="flex justify-center">
                    <button
                      onClick={() => handleEditClick(partner)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mt-2"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleDeleteClick(partner)}
                      className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded mt-2 ml-4"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              ))}
        </div>
        {isEditing && (
          <EditPartner
            partner={selectedPartner}
            // onEdit={handleSavePartner}
            // onAdd={handleSavePartner}
            onCancel={handleCancelClick}
          />
        )}
      </CustomLayout>
    </RootLayout>
  );
}
