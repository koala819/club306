import { signIn, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { ConnectEvents } from '@/types/models'

import { FormEventConfirm } from './FormEventConfirm'

import { sendConfirmationMail } from '@/lib/mail/utils'
import { returnMemberInfo } from '@/lib/supabase'
import { checkEmptyToken, memberInfo } from '@/lib/token/utils'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const FormEventConnect = ({ userMail }: { userMail: string }) => {
  const [showPwd, setShowPwd] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [mailWithToken, setMailWithToken] = useState<boolean>(false)
  const [name, setName] = useState('')
  const schema: yup.ObjectSchema<ConnectEvents> = yup.object().shape({
    email: yup
      .string()
      .required("L'email est obligatoire")
      .email("Le format de l'email est invalide"),
    pwd: yup
      .string()
      .required('Le mot de passe est obligatoire')
      .min(8, 'Le mot de passe doit avoir 8 caractères minimum'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConnectEvents>({
    resolver: yupResolver(schema),
  })

  const { data: session } = useSession()

  async function verifInfo(values: ConnectEvents) {
    try {
      const response = await checkEmptyToken(values.email || '')

      if (response) {
        toast.error('Vous devez valider votre email !')
        setMailWithToken(true)
        return
      } else {
        await signIn('credentials', {
          email: values.email,
          password: values.pwd,
          redirect: false,
        })
        // Vous pouvez rediriger ici si nécessaire
      }
    } catch (error: any) {
      toast.error(error)
    }
  }

  async function sendToken() {
    try {
      const response = await memberInfo(email)
      const mailData = await response.json()
      console.log('token', mailData.data.user_token)
      const mailResponse = await sendConfirmationMail(
        mailData.data.first_name,
        mailData.data.last_name,
        email,
        mailData.data.user_token,
      )
      const finished = await mailResponse.json()

      if (finished.status === 200) {
        toast.success(
          'Veuillez consulter votre boite mail. Pensez à vérifier vos SPAMS !',
        )
      } else {
        console.error('Send mail with ERROR ', finished.data)
      }
    } catch (error: any) {
      toast.error(error)
    }
  }

  // Rediriger l'utilisateur
  useEffect(() => {
    if (session) {
      async function fetchData() {
        const { last_name, first_name } = await returnMemberInfo(userMail)

        setName(() => first_name + ' ' + last_name)
      }
      fetchData()
    }
  }, [session])

  if (session) {
    return (
      <div className="text-center">
        <FormEventConfirm userMail={userMail} />
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(verifInfo)}
      className="border-2 border-principal-light bg-white dark:bg-bg-dark px-5 py-7 rounded-lg shadow-lg"
    >
      <div className=" h-full px-2 mx-10 pt-8">
        <h1 className="mb-8">Connectez-vous</h1>
        {/* EMAIL */}
        <div className="relative z-0">
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

        {/* PASSWORD */}
        <div className="mt-8 ">
          <div className="">
            <label
              htmlFor="pwd"
              className={`${'block  text-sm font-bold mb-2'} ${
                errors.pwd && 'text-red-500 font-mono text-sm'
              }`}
            >
              Mot de passe
            </label>
            <div className="my-3 flex border rounded-xl border-gray">
              <input
                type={`${showPwd ? 'text' : 'password'}`}
                id="pwd"
                className={`${'bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none'} ${
                  errors.pwd && 'border-red-600'
                }`}
                {...register('pwd')}
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
            {errors.pwd && (
              <span className="text-red-500 font-mono text-xs">
                {errors.pwd.message}
              </span>
            )}
          </div>
          {/* SUBMIT BUTTON */}
          <div className="flex justify-center m-10">
            <button
              type="submit"
              className="flex items-center px-4 py-2 rounded-lg duration-150 active:shadow-lg navbarlinkHover border-principal-light border-2 font-bold dark:border-principal-dark dark:text-principal-dark"
            >
              Se connecter
            </button>
          </div>

          {mailWithToken ? (
            <span
              onClick={sendToken}
              className="text-xs text-gray-500 dark:text-gray-200 underline hover:text-red-600 cursor-pointer"
            >
              Valider votre adresse mail
            </span>
          ) : (
            <Link
              href="/otpInput"
              className="flex justify-center text-xs text-gray-500 dark:text-gray-200 underline hover:text-red-600 cursor-pointer"
            >
              Mot de passe oublié ?
            </Link>
          )}
        </div>

        <Link
          href={'/membership'}
          className="flex justify-center mb-4 mt-2 text-blue-500 dark:text-red-600 dark:hover:text-blue-500 font-semi-bold hover:text-red-600 hover:border-b-red-600 dark:hover:border-b-blue-500 underline"
        >
          S'inscrire
        </Link>
      </div>
    </form>
  )
}
