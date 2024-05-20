import { Button, Input } from '@nextui-org/react'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { ConnectEvents } from '@/src/types/models'

import { checkEmptyToken } from '@/src/lib/token/utils'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const FormEventConnect = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const toggleVisibility = () => setIsVisible(!isVisible)
  const router = useRouter()

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

  async function onSubmit(values: ConnectEvents) {
    try {
      const response = await checkEmptyToken(values.email || '')

      if (response) {
        toast.error('Vous devez valider votre email !')
        router.push('/auth/signIn')
      } else {
        const result = await signIn('credentials', {
          email: values.email,
          password: values.pwd,
          redirect: false,
        })
        if (result?.ok) {
          router.push('/eventsRegistration')
        } else {
          toast.error('Identifiants incorrects !')
        }
      }
    } catch (error: any) {
      toast.error(error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border-2 border-principal-light bg-white dark:bg-bg-dark px-5 py-7 rounded-lg shadow-lg flex flex-col items-center justify-center space-y-8"
    >
      <h2 className="mb-8">Connectez-vous</h2>

      <Input
        {...register('email')}
        type="email"
        variant="underlined"
        isClearable
        label="Email"
        isInvalid={errors.email && true}
        errorMessage={errors.email && errors.email.message}
        className="max-w-xs"
      />

      <Input
        {...register('pwd')}
        label="Mot de passe"
        variant="bordered"
        // placeholder="Enter your password"
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <AiOutlineEye className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <AiOutlineEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? 'text' : 'password'}
        isInvalid={errors.pwd && true}
        errorMessage={errors.pwd && errors.pwd.message}
        className="max-w-xs"
      />

      <Button className="btn-custom" type="submit">
        Se connecter
      </Button>

      <Link
        href="/otpInput"
        className="flex justify-center text-xs text-gray-500 dark:text-gray-200 underline hover:text-red-600 cursor-pointer"
      >
        Mot de passe oublié ?
      </Link>

      <Link
        href={'/membership'}
        className="flex justify-center mb-4 mt-2 text-blue-500 dark:text-red-600 dark:hover:text-blue-500 font-semi-bold hover:text-red-600 hover:border-b-red-600 dark:hover:border-b-blue-500 underline"
      >
        S'inscrire
      </Link>
    </form>
  )
}
