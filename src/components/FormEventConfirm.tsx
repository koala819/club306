'use client'

import { signIn, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { returnMemberInfo } from '@/lib/supabase'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const FormEventConfirm = ({ userMail }: { userMail: string }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const { data: session } = useSession()
  const schema = yup.object().shape({
    first_name: yup.string().required('Le prénom est obligatoire'),
    last_name: yup.string().required('Le nom est obligatoire'),
    email: yup
      .string()
      .required("L'email est obligatoire")
      .email("Le format de l'email est invalide"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      first_name: firstName,
      last_name: lastName,
      email: userMail,
    },
  })

  const [reservationSuccess, setReservationSuccess] = useState(false)

  const onSubmit = () => {
    setReservationSuccess(true)
    // rediriger vers la page d'Accueil ?
  }

  useEffect(() => {
    if (session) {
      async function fetchData() {
        const { last_name, first_name } = await returnMemberInfo(userMail)
        setFirstName(first_name)
        setLastName(last_name)
      }
      fetchData()
    }
  }, [session])

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border-2 border-principal-light bg-white dark:bg-bg-dark px-5 py-7 rounded-lg shadow-lg"
    >
      <div className="h-full px-2 mx-10 pt-8">
        <h1 className="mb-8">Réservez votre place</h1>
        {/* First Name */}
        <div className="relative z-0">
          <input
            value={firstName}
            type="text"
            id="first_name"
            className={`${'block py-2.5 px-0 w-3/4 xl:w-1/2 text-sm text-gray dark:text-white bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'} ${
              errors.first_name && 'border-red-600'
            }`}
            {...register('first_name')}
            placeholder=""
          />
          <label
            htmlFor="first_name"
            className={`${'peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'} ${
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
        {/* Last Name */}
        <div className="relative z-0 mt-6">
          <input
            value={lastName}
            type="text"
            id="last_name"
            className={`${'block py-2.5 px-0 w-3/4 xl:w-1/2 text-sm text-gray dark:text-white bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'} ${
              errors.last_name && 'border-red-600'
            }`}
            {...register('last_name')}
            placeholder=" "
          />
          <label
            htmlFor="last_name"
            className={`${'peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'} ${
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
        {/* Email */}
        <div className="relative z-0 mt-6">
          <input
            type="email"
            id="email"
            className={`${'block py-2.5 px-0 w-3/4 xl:w-1/2 text-sm text-gray dark:text-white bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'} ${
              errors.email && 'border-red-600'
            }`}
            {...register('email')}
            placeholder=" "
          />
          <label
            htmlFor="email"
            className={`${'peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'} ${
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
        {/* Submit Button */}
        <div className="flex justify-center mt-10">
          <button
            type="submit"
            className="flex items-center px-4 py-2 rounded-lg duration-150 active:shadow-lg navbarlinkHover border-principal-light border-2 font-bold dark:border-principal-dark dark:text-principal-dark"
          >
            Confirmez ma participation
          </button>
        </div>
        {reservationSuccess && (
          <div className="text-center mt-4 text-green-600">
            Votre réservation a été confirmée avec succès !
          </div>
        )}
      </div>
    </form>
  )
}
