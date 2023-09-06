import React, { useState } from 'react';
import Image from 'next/image';
import { useForm, Controller } from 'react-hook-form';
import { PartnerInfoType } from '@/types/Components';
import { uploadImageToGitHub } from '@/lib/githubImage';
import { createNewPartner, updatePartner } from '@/lib/supabase';

interface EditPartnerProps {
  partner?: PartnerInfoType | null; // Partenaire à éditer (facultatif)
  // onEdit?: (partner: PartnerInfoType) => void; // Fonction appelée lors de l'édition
  // onAdd?: (partner: PartnerInfoType) => void; // Fonction appelée lors de l'ajout
  onCancel?: () => void; // Fonction appelée lors de l'annulation
}

const EditPartner: React.FC<EditPartnerProps> = ({
  partner,
  // onEdit,
  // onAdd,
  onCancel,
}) => {
  // const [editedPartner, setEditedPartner] = useState<PartnerInfoType | null>(
  //   partner || null
  // );
  const [editedImage, setEditedImage] = useState<File | null>(null);
  const { handleSubmit, control, formState } = useForm({
    defaultValues: {
      title: partner?.title || '',
      site: partner?.site || '',
      code: partner?.code || '',
      remise: partner?.remise || '',
      // title: editedPartner?.title || '',
      // site: editedPartner?.site || '',
      // code: editedPartner?.code || '',
      // remise: editedPartner?.remise || '',
      image: '',
    },
  });
  const { errors } = formState;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // if (e.target.files !== null) {
    //   const selectedImage = e?.target?.files[0];
    //   setEditedImage(selectedImage);
    // }
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const image = new window.Image();
        image.src = event?.target?.result as string;
        image.onload = () => {
          const width = image.width;
          const height = image.height;

          if (width !== 892 || height !== 609) {
            alert(
              "L'image doit avoir une largeur de 892 pixels et une hauteur de 609 pixels."
            );
            return;
          }
          setEditedImage(file);
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: any) => {
    // Cas pour éditer un partenaire avec image
    if (data.image === '' && editedImage) {
      const response = await updatePartner(data, partner?.id, editedImage.name);
      if (response.status === 200) {
        window.location.reload();
      }
    }

    // Cas pour éditer un partenaire sans image
    else if (data.image === '') {
      const response = checkBeforeSaveInDB(partner, data);
      if (response) {
        const response = await updatePartner(data, partner?.id);
        if (response.status === 200) {
          window.location.reload();
        }
      } else if (onCancel) {
        onCancel();
      }
    }
    // Cas pour ajouter un nouveau partenaire
    else if (editedImage) {
      console.log('cas pour ajouter un nouveau partenaire', data);

      const response = await uploadImageToGitHub(
        URL.createObjectURL(editedImage)
      );
      if (response.status === 200) {
        console.log('data to save', data);
        const imagePath = data.image;
        const imageName = imagePath.substring(imagePath.lastIndexOf('\\') + 1);
        const response = await createNewPartner(data, imageName);
        if (response.status === 200) {
          window.location.reload();
        }
      } else if (onCancel) {
        onCancel();
      }
    }
    // if (editedPartner) {
    //   if (editedImage) {
    //     editedPartner.linkImg = URL.createObjectURL(editedImage);
    //   }
    //   // if (partner) {
    //   //   // Si le partenaire existe, on appelle la fonction onEdit pour l'éditer
    //   //   if (onEdit) {
    //   //     onEdit(editedPartner);
    //   //   }
    //   // } else {
    //   //   // Si le partenaire n'existe pas, on appelle la fonction onAdd pour l'ajouter
    //   //   if (onAdd) {
    //   //     onAdd(editedPartner);
    //   //   }
    //   // }
    // }
    // if (onCancel) {
    //   onCancel(); // Annule l'édition ou l'ajout après la sauvegarde si onCancel existe
    // }
  };

  function checkBeforeSaveInDB(anciennesValeurs: any, nouvellesValeurs: any) {
    // Comparez les propriétés titre, site, remise et code entre les anciennes et les nouvelles valeurs
    const proprietesAComparer = ['title', 'site', 'remise', 'code'];

    for (const propriete of proprietesAComparer) {
      if (anciennesValeurs[propriete] !== nouvellesValeurs[propriete]) {
        return true; // Si au moins une valeur est modifiée, retournez true
      }
    }

    return false; // Si aucune valeur n'est modifiée, retournez false
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white p-4 rounded shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">
            {partner
              ? 'Modifier le partenaire'
              : 'Ajouter un nouveau partenaire'}
          </h2>

          <label htmlFor="editedTitle" className="mb-2">
            Titre :
          </label>
          <Controller
            name="title"
            control={control}
            defaultValue=""
            rules={{ required: 'Ce champ est requis' }}
            render={({ field }) => (
              <input
                type="text"
                id="editedTitle"
                className={`border border-gray-300 rounded px-2 py-1 mb-2 ${
                  errors.title ? 'border-red-500' : ''
                }`}
                {...field}
              />
            )}
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
          <label htmlFor="editedSite" className="mb-2">
            Site :
          </label>
          <Controller
            name="site"
            control={control}
            defaultValue=""
            rules={{ required: 'Ce champ est requis' }}
            render={({ field }) => (
              <input
                type="text"
                id="editedSite"
                className={`border border-gray-300 rounded px-2 py-1 mb-2 ${
                  errors.site ? 'border-red-500' : ''
                }`}
                {...field}
              />
            )}
          />
          {errors.site && <p className="text-red-500">{errors.site.message}</p>}
          <label htmlFor="editedRemise" className="mb-2">
            Remise :
          </label>
          <Controller
            name="remise"
            control={control}
            defaultValue=""
            rules={{ required: 'Ce champ est requis' }}
            render={({ field }) => (
              <input
                type="text"
                id="editedRemise"
                className={`border border-gray-300 rounded px-2 py-1 mb-2 ${
                  errors.remise ? 'border-red-500' : ''
                }`}
                {...field}
              />
            )}
          />
          {errors.remise && (
            <p className="text-red-500">{errors.remise.message}</p>
          )}
          <label htmlFor="editedCode" className="mb-2">
            Code :
          </label>
          <Controller
            name="code"
            control={control}
            defaultValue=""
            rules={{ required: 'Ce champ est requis' }}
            render={({ field }) => (
              <input
                type="text"
                id="editedCode"
                className={`border border-gray-300 rounded px-2 py-1 mb-2 ${
                  errors.code ? 'border-red-500' : ''
                }`}
                {...field}
              />
            )}
          />
          {errors.code && <p className="text-red-500">{errors.code.message}</p>}

          <label htmlFor="editedImage" className="mb-2">
            Image (Width: 892px, Height: 609px) :
          </label>
          {partner?.linkImg ? (
            <input
              type="file"
              id="editedImage"
              accept="image/*"
              className="mt-2"
              onChange={handleImageChange}
            />
          ) : (
            <Controller
              name="image"
              control={control}
              rules={{ required: 'Ce champ est requis' }}
              render={({ field }) => (
                <input
                  type="file"
                  id="editedImage"
                  accept="image/*"
                  className="mt-2"
                  onChange={(e) => {
                    field.onChange(e);
                    handleImageChange(e);
                  }}
                />
              )}
            />
          )}
          {errors.image && (
            <p className="text-red-500">{errors.image.message}</p>
          )}

          {editedImage && (
            <Image
              src={URL.createObjectURL(editedImage)}
              alt="partner preview"
              className="w-1/8 h-1/8"
              width={100}
              height={100}
            />
          )}
          <div className="flex mt-8">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2"
            >
              Enregistrer
            </button>
            <button
              onClick={onCancel}
              className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
            >
              Annuler
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditPartner;
