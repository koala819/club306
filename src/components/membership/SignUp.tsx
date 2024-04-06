'use client'

import { Button, Input } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { TiArrowBack } from 'react-icons/ti'

import { MailPwd } from '@/types/models'

import { checkMail } from '@/lib/supabase'
import { yupResolver } from '@hookform/resolvers/yup'
import bcrypt from 'bcryptjs'
import * as yup from 'yup'

export const SignUp = ({ setStep }: any) => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [cPasswordVisible, setCPasswordVisible] = useState(false)
  const [sessionMemberId, setSessionMemberId] = useState<string>()

  const schema: yup.ObjectSchema<MailPwd> = yup.object().shape({
    email: yup
      .string()
      .required("L'email est obligatoire")
      .email("Le format de l'email est invalide"),
    pwd: yup
      .string()
      .required('Le mot de passe est obligatoire')
      .min(8, 'Le mot de passe doit avoir 8 caractères minimum'),
    cpwd: yup
      .string()
      .required('Le mot de passe est obligatoire')
      .oneOf([yup.ref('pwd')], 'Les mots de passe doivent être identiques'),
  })

  useEffect(() => {
    const memberIDSessionJSON = sessionStorage.getItem('memberId')
    if (memberIDSessionJSON) {
      setSessionMemberId(() => JSON.parse(memberIDSessionJSON))
    }
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MailPwd>({
    resolver: yupResolver(schema),
  })

  function handleGoBack() {
    setStep((s: number) => {
      return s - 1
    })
  }

  async function handleNext(data: any) {
    const mailExist = await checkMail(data.email.toLowerCase())

    if (mailExist) {
      toast.error('Cet email est déjà utilisé')
    } else {
      const localStockageJSON = localStorage.getItem(
        `personalInfo_${sessionMemberId}`,
      )
      const oldData = localStockageJSON ? JSON.parse(localStockageJSON) : {}
      const pwdCrypt = await bcrypt.hash(data.pwd, 10)
      const newData = { ...oldData, pwd: pwdCrypt, email: data.email }
      localStorage.setItem(
        `personalInfo_${sessionMemberId}`,
        JSON.stringify(newData),
      )

      setStep((s: number) => {
        return s + 1
      })
    }
  }

  return (
    <section className="grid sm:grid-cols-12 sm:gap-12 py-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden mx-auto">
      <div className="flex items-center justify-center col-span-12">
        <div className="flex rounded-lg overflow-hidden  w-full">
          <div className="w-full p-8 space-y-12 flex justify-center items-center flex-col">
            <form className="space-y-8" onSubmit={handleSubmit(handleNext)}>
              <h1>Créez Votre Compte Club306</h1>

              {/* EMAIL */}
              <div className="col-span-6 sm:col-span-3 relative z-0 mt-8">
                <Input
                  {...register('email')}
                  radius="none"
                  type="text"
                  color="primary"
                  variant="bordered"
                  isClearable
                  label="Email"
                  labelPlacement="outside"
                  isInvalid={errors.email && true}
                  errorMessage={errors.email && errors.email.message}
                />
              </div>

              {/* PASSWORD */}
              <div className="col-span-6 sm:col-span-3 relative z-0 mt-8 flex items-center space-x-4">
                <Input
                  {...register('pwd')}
                  radius="none"
                  label="Mot de passe"
                  color="primary"
                  labelPlacement="outside"
                  variant="bordered"
                  isInvalid={errors.pwd && true}
                  errorMessage={errors.pwd && errors.pwd.message}
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={() =>
                        setPasswordVisible((prevState) => !prevState)
                      }
                    >
                      {passwordVisible ? (
                        <AiOutlineEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <AiOutlineEye className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={passwordVisible ? 'text' : 'password'}
                />
              </div>

              {/* CONFIRM PASSWORD */}
              <div className="col-span-6 sm:col-span-3 relative z-0 mt-8  flex items-center space-x-4">
                <Input
                  {...register('cpwd')}
                  radius="none"
                  label="Confirmer le Mot de passe"
                  color="primary"
                  labelPlacement="outside"
                  variant="bordered"
                  isInvalid={errors.cpwd && true}
                  errorMessage={errors.cpwd && errors.cpwd.message}
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={() =>
                        setCPasswordVisible((prevState) => !prevState)
                      }
                    >
                      {cPasswordVisible ? (
                        <AiOutlineEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <AiOutlineEye className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={cPasswordVisible ? 'text' : 'password'}
                />
              </div>

              {/* BUTTONS NEXT & CANCEL */}
              <div className="flex  w-full justify-between mt-4">
                <Button
                  color="danger"
                  startContent={<TiArrowBack />}
                  onClick={() => {
                    handleGoBack()
                  }}
                >
                  Précédent
                </Button>

                <Button color="primary" type="submit">
                  Continuer
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
