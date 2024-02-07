// src/components/menbreship/PersonalInfos.tsx

import { Controller, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
// pour virifier les entrés
const schema: yup.ObjectSchema<SchemaPersonalInfo> = yup.object().shape({
  first_name: yup.string().required('Veuillez fournir votre Nom'),
  last_name: yup.string().required('Veuillez fournir votre Prénom'),
  address: yup
    .string()
    .required('Veuillez fournir votre Adresse')
    .min(8, 'Adresse trop courte'),
  zip_code: yup
    .string()
    .required('Veuillez fournir votre Code Postal')
    .min(4, 'Code Postal trop court')
    .max(8, 'Code Postal trop long'),
  town: yup.string().required('Veuillez fournir votre Ville'),
  phone: yup
    .string()
    .typeError('Veuillez fournir un numéro de téléphone valide')
    .required('Veuillez fournir votre numéro de téléphone'),
  birth_date: yup
    .date()
    .nullable()
    .typeError('Invalid Date')
    .max(dayjs().subtract(18, 'years'), 'Vous devez avoir minimum 18 ans')
    .required('Veuillez fournir votre date de naissance'),
  checkCotisation: yup
    .boolean()
    .isTrue('Veuillez approuver la cotisation ...!'),
  checkCertificateHonour: yup
    .boolean()
    .isTrue(
      "Veuillez approuver sur l'honneur que vous êtes bien propriétaire du véhicule ...!",
    ),
  checkEngagementClub: yup
    .boolean()
    .isTrue('Veuillez approuver notre règlement ...!'),
  checkPrivacyPolicy: yup
    .boolean()
    .isTrue('Veuillez approuver notre politique de confidentialité ...!'),
})
// le bidule a mettre pour que ca fonctionne
const {
  register,
  handleSubmit,
  control,
  formState: { errors },
} = useForm({
  resolver: yupResolver(schema),
})

<form onSubmit={handleSubmit(handleAddPersonalInfos)}>

<div className="col-span-6 sm:col-span-3 relative z-0 mt-8">
              <input
                type="text"
                id="first_name"
                defaultValue={personalInfo?.first_name || ''}
                className={`${'block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'}
      ${errors.first_name && 'border-red-600'}`}
                {...register('first_name')}
                placeholder=" "
              />
              <label
                htmlFor="first_name"
                className={`${'peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'} ${
                  errors.first_name && 'text-red-500 font-mono text-sm'
                }`}
              >
                Prénom <span className="text-red-500">*</span>
              </label>
              {errors.first_name && (
                <span className="text-red-500 font-mono text-xs">
                  {errors.first_name.message}
                </span>
              )}
            </div>

            <button
                type="submit"
                className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg duration-150 hover:bg-blue-500 active:shadow-lg"
              >
                Continuer
              </button>