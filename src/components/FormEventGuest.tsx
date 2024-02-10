'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form'

import Link from 'next/link'

import { SchemaBookingEvents } from '@/types/models'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const FormEventGuest = () => {
  const [showPwd, setShowPwd] = useState<boolean>(false)
  const schema = yup.object().shape({
    first_name: yup.string().required('Veuillez fournir votre Nom'),
    last_name: yup.string().required('Veuillez fournir votre Prénom'),
    email: yup.string().required('Veuillez fournir votre Email'),
    checkEngagementClub: yup
      .boolean()
      .required('Veuillez approuver notre règlement ...!')
      .isTrue('Veuillez approuver notre règlement ...!'),
    checkPrivacyPolicy: yup
      .boolean()
      .required('Veuillez approuver notre politique de confidentialité ...!')
      .isTrue('Veuillez approuver notre politique de confidentialité ...!'),
  })
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const handleAddPersonalInfos: SubmitHandler<SchemaBookingEvents> = (data) => {
    try {
      console.log(data)
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
            className={`${'block py-2.5 px-0 w-3/4 xl:w-1/2 text-sm text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'}
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
            className={`${'block py-2.5 px-0 w-3/4 xl:w-1/2 text-sm text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'}
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
            className={`${'block py-2.5 px-0 w-3/4 xl:w-1/2 text-sm text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'}
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
