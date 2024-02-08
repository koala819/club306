'use client'

// src/components/menbreship/PersonalInfos.tsx
import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import { useTheme } from 'next-themes'
import Link from 'next/link'

import { SchemaBookingEvents } from '@/types/models'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export default function ToBook() {
  const [isLoading, setIsLoading] = useState(true)
  const { resolvedTheme } = useTheme()
  const [personalInfo, setPersonalInfo] = useState<
    SchemaBookingEvents | undefined
  >(undefined)

  const handlePhoneInputChange = () => {
    register('phone')
    return true
  }

  // pour verifier les entrées
  const schema: yup.ObjectSchema<SchemaBookingEvents> = yup.object().shape({
    first_name: yup.string().required('Veuillez fournir votre Nom'),
    last_name: yup.string().required('Veuillez fournir votre Prénom'),

    email: yup.string().required('Veuillez fournir votre Email'),

    phone: yup
      .string()
      .typeError('Veuillez fournir un numéro de téléphone valide')
      .required('Veuillez fournir votre numéro de téléphone'),

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

  async function handleAddPersonalInfos(data: any) {
    try {
      const personalData = data
      console.log(personalData)
    } catch (error) {
      console.error(
        "Erreur lors de l'ajout des informations personnelles :",
        error,
      )
    }
  }

  return (
    <form onSubmit={handleSubmit(handleAddPersonalInfos)}>
      <div className="mt-8 grid h-full grid-cols-6 gap-6 px-2">
        {/* FIRST NAME */}
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

        {/* LAST NAME */}
        <div className="col-span-6 sm:col-span-3 relative z-0 mt-8">
          <input
            type="text"
            id="last_name"
            defaultValue={personalInfo?.last_name || ''}
            className={`${'block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'}
      ${errors.last_name && 'border-red-600'}`}
            {...register('last_name')}
            placeholder=" "
          />
          <label
            htmlFor="last_name"
            className={`${'peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'} ${
              errors.last_name && 'text-red-500 font-mono text-sm'
            }`}
          >
            Nom <span className="text-red-500">*</span>
          </label>
          {errors.last_name && (
            <span className="text-red-500 font-mono text-xs">
              {errors.last_name.message}
            </span>
          )}
        </div>

        {/* EMAIL */}
        <div className="col-span-6 sm:col-span-3 relative z-0 mt-8">
          <input
            type="email"
            id="email"
            defaultValue={personalInfo?.email || ''}
            className={`${'block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'}
    ${errors.email && 'border-red-600'}`}
            {...register('email')}
            placeholder=" "
          />
          <label
            htmlFor="email"
            className={`${'peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'} ${
              errors.email && 'text-red-500 font-mono text-sm'
            }`}
          >
            Email <span className="text-red-500">*</span>
          </label>
          {errors.email && (
            <span className="text-red-500 font-mono text-xs">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* PHONE */}
        <div className="col-span-6 sm:col-span-3 mt-8">
          <span
            className={`${'mb-2'} ${
              errors.phone && 'text-red-500 font-mono text-sm'
            }`}
          >
            Numéro de téléphone<span className="text-red-500">*</span>
          </span>
          <Controller
            name="phone"
            control={control}
            rules={{
              validate: () => handlePhoneInputChange(),
            }}
            render={({ field: { onChange, value } }) => (
              <PhoneInput
                value={value || personalInfo?.phone}
                onChange={onChange}
                inputClass="dark:text-white"
                containerClass={`${'rounded-lg border focus:border-indigo-600 dark:hover:bg-green-500'}
    ${errors.phone && 'border-red-600'}
    ${resolvedTheme === 'dark' ? 'dark:bg-black' : ''}`}
                country="fr"
                onlyCountries={['fr', 'uk', 'be', 'nl', 'ch', 'it', 'es']}
                inputStyle={{
                  width: '100%',
                  background: resolvedTheme === 'dark' ? '#111827' : '',
                }}
                buttonStyle={{
                  background: resolvedTheme === 'dark' ? '#111827' : '',
                }}
                dropdownStyle={{
                  background: resolvedTheme === 'dark' ? '#111827' : '',
                  // color: resolvedTheme === 'dark' ? 'white' : '',
                }}
              />
            )}
          />
          {errors.phone && (
            <span className="text-red-500 font-mono text-xs">
              {errors.phone.message}
            </span>
          )}
        </div>

        {/* CHECKBOXES */}
        <section className="col-span-6 mt-8 space-y-4">
          {/*Check Engagement Club*/}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="checkEngagementClub"
                type="checkbox"
                className="focus:ring-blue-600 h-4 w-4 text-blue-600 border-gray-300 rounded"
                {...register('checkEngagementClub')}
                defaultChecked={personalInfo?.checkEngagementClub}
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="checkEngagementClub"
                className="font-medium text-gray-700"
              >
                <span>
                  Je m&apos;engage à respecter{' '}
                  <Link
                    href="/rules"
                    target="_blank"
                    className="underline hover:text-red-600"
                  >
                    les termes de ses statuts et de son règlement
                  </Link>
                  .
                </span>
                <span className="text-red-500">*</span>
              </label>
              {errors.checkEngagementClub && (
                <div className="text-red-500 font-mono text-xs">
                  {errors.checkEngagementClub.message}
                </div>
              )}
            </div>
          </div>
          {/*Check Privacy Policy*/}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="checkPrivacyPolicy"
                type="checkbox"
                className="focus:ring-blue-600 h-4 w-4 text-blue-600 border-gray-300 rounded"
                {...register('checkPrivacyPolicy')}
                defaultChecked={personalInfo?.checkPrivacyPolicy}
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="checkPrivacyPolicy"
                className="font-medium text-gray-700"
              >
                <span>
                  En soumettant ce formulaire, je confirme avoir pris
                  connaissant de la &nbsp;
                  <Link
                    href="/privacy"
                    target="_blank"
                    className="underline hover:text-red-600"
                  >
                    politique de confidentialité
                  </Link>
                  &nbsp;du Club306. Dès lors, j&apos;autorise Club306 à
                  exploiter les informations saisies dans le cadre de la
                  relation commerciale qui peut en découler.
                </span>
                <span className="text-red-500">*</span>
              </label>
              {errors.checkPrivacyPolicy && (
                <div className="text-red-500 font-mono text-xs">
                  {errors.checkPrivacyPolicy.message}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SUBMIT BUTTON */}
        <div className="flex justify-center col-span-6 mt-8">
          <button
            type="submit"
            className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg duration-150 hover:bg-blue-500 active:shadow-lg"
          >
            Continuer
          </button>
        </div>
      </div>
    </form>
  )
}
