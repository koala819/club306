'use client'

import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { HiThumbUp } from 'react-icons/hi'

import Link from 'next/link'

import { change_pwd } from '@/src/lib/validate'
import { useFormik } from 'formik'

export default function RecoverPwd() {
  const [pwdChanged, setIsPopupOpen] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    const storedEmail = localStorage.getItem('email')
    storedEmail !== null && setEmail(storedEmail)
  }, [])
  const formik = useFormik({
    initialValues: {
      pwd: '',
      cpwd: '',
    },
    validate: change_pwd,
    onSubmit,
  })
  async function onSubmit(values: { pwd: string }) {
    const data = {
      pwd: values.pwd,
      email: email,
    }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }

    fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/api/changePwd`, options)
      .then(async (response) => {
        if (response.status === 200) {
          toast.success('Mot de Passe changé avec succès')
          setIsPopupOpen(true)
        } else {
          toast.error('Une erreur est survenue')
        }
      })
      .catch((error) => {
        console.log('ERROR to change pwd ! ', error)
      })
  }
  return (
    <div className="flex h-full items-center justify-center">
      {/* <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0"> */}
      <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8 flex justify-center items-center flex-col space-y-4">
        <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          {pwdChanged
            ? 'Mot de Passe changé avec succès'
            : 'Saisir le nouveau Mot de Passe'}
        </h2>
        {pwdChanged ? (
          <Link href="/login">
            <button
              className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg duration-150 hover:bg-blue-500 active:shadow-lg"
              type="submit"
            >
              Retour <HiThumbUp className="ml-2" size={22} />
            </button>
          </Link>
        ) : (
          <form
            onSubmit={formik.handleSubmit}
            className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
          >
            <div>
              <label
                htmlFor="pwd"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-8"
              >
                Mot de Passe
              </label>
              <input
                type="password"
                name="pwd"
                placeholder="••••••••"
                onChange={formik.handleChange}
                value={formik.values.pwd}
                className={` w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                  formik.errors.pwd && formik.touched.pwd && 'border-red-600'
                }`}
              />
              <span className="text-red-600 text-xs">{formik.errors.pwd}</span>
            </div>
            <div>
              <label
                htmlFor="cpwd"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirmer le Mot de Passe
              </label>
              <input
                type="password"
                name="cpwd"
                placeholder="••••••••"
                onChange={formik.handleChange}
                value={formik.values.cpwd}
                className={` w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                  formik.errors.cpwd && formik.touched.cpwd && 'border-red-600'
                }`}
              />
              <span className="text-red-600 text-xs">{formik.errors.cpwd}</span>
            </div>

            <div className="flex justify-center items-center">
              <button
                className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg duration-150 hover:bg-blue-500 active:shadow-lg"
                type="submit"
              >
                Confirmer
              </button>
            </div>
          </form>
        )}
      </div>
      {/* </div> */}
    </div>
  )
}
