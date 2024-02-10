'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

import { MemberEventRegistration } from '@/types/models'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const FormEventMember = () => {
  const [showPwd, setShowPwd] = useState<boolean>(false)
  const schema = yup.object().shape({
    emailMember: yup
      .string()
      .required("L'email est obligatoire")
      .email("Le format de l'email est invalide"),
    pwdMember: yup
      .string()
      .required('Le mot de passe est obligatoire')
      .min(8, 'Le mot de passe doit avoir 8 caractères minimum'),
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

  const verifInfo: SubmitHandler<MemberEventRegistration> = (data) => {
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
    <form onSubmit={handleSubmit(verifInfo)}>
      <div className="mt-8 grid h-full grid-cols-6 gap-6 px-2">
        {/* EMAIL */}
        <div className="col-span-6 sm:col-span-3 relative z-0 mt-8">
          <input
            type="email"
            id="email"
            className={`${'block py-2.5 px-0 w-3/4 xl:w-1/2 text-sm text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'}
    ${errors.emailMember && 'border-red-600'}`}
            {...register('emailMember')}
            placeholder=" "
          />
          <label
            htmlFor="email"
            className={`${'peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'} ${
              errors.emailMember && 'text-red-500 font-mono text-sm'
            }`}
          >
            Email <span className="text-red-500">*</span>
          </label>
          {errors.emailMember && (
            <span className="text-red-500 font-mono text-xs">
              {errors.emailMember.message}
            </span>
          )}
        </div>

        {/* PASSWORD */}
        <div className="mt-4">
          <div className="flex justify-between">
            <label
              htmlFor="pwd"
              className={`${'block  text-sm font-bold mb-2'} ${
                errors.pwdMember && 'text-red-500 font-mono text-sm'
              }`}
            >
              Mot de passe
            </label>

            {/* {mailWithToken ? (
                  <text
                    onClick={sendToken}
                    className="text-xs text-gray-500 dark:text-gray-200 underline hover:text-red-600 cursor-pointer"
                  >
                    Valider votre adresse mail
                  </text>
                ) : (
                  <Link
                    href="/otpInput"
                    className="text-xs text-gray-500 dark:text-gray-200 underline hover:text-red-600 cursor-pointer"
                  >
                    Mot de passe oublié ?
                  </Link>
                )}
              </div> */}

            <div className="my-3 flex border rounded-xl">
              <input
                type={`${showPwd ? 'text' : 'password'}`}
                id="pwd"
                className={`${'bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none'}
                  ${errors.pwdMember && 'border-red-600'}`}
                {...register('pwdMember')}
              />
              <span
                className="flex items-center px-2 text-[#3B578E] hover:text-[#DB2323] active:text-[#D7DEED] dark:text-white"
                onClick={() => setShowPwd((prevState) => !prevState)}
              >
                {showPwd ? (
                  <AiOutlineEye size={25} />
                ) : (
                  <AiOutlineEyeInvisible size={25} />
                )}
              </span>
            </div>
            {/* {{errors.pwdMenbre && (
                  <span className="text-red-500 font-mono text-xs">
                    {errors.pwdMember.message}
                  </span>
                )}} */}
          </div>

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
      </div>
    </form>
  )
}
