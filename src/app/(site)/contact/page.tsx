'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export default function Contact() {
  const [confirmationSend, setConfirmationSend] = useState<boolean>(false)

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("L'e-mail est obligatoire")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "L'e-mail n'est pas valide",
      ),

    first_name: yup.string().required('Veuillez saisir votre nom'),
    msg: yup.string().required('Veuillez saisir votre message'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  async function handleSendMail(values: any) {
    console.log('ready to send mail with values', values)
    const data = {
      firstName: values.first_name,
      email: values.email,
      message: values.msg,
      from: 'contact',
    }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }

    fetch(`${process.env.CLIENT_URL}/api/mail`, options)
      .then((response: any) => {
        console.log('response or Not', response)
        response.status === 200 && console.log('Send mail with SUCCESS :)')
        setConfirmationSend(true)
      })
      .catch((error: any) => {
        console.log('ERROR to send the mail in contact.tsx', error)
      })
  }

  return (
    <div className="flex justify-center h-full">
      <div
        className="md:block bg-cover w-2/3 "
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1568106575207-0fe3ec317559)',
        }}
      ></div>

      <div className="md:w-1/2 flex w-full items-center justify-center text-gray-600 dark:bg-gray-800 dark:text-gray-100">
        {!confirmationSend && (
          <div className="w-11/12 mt-10">
            <form onSubmit={handleSubmit(handleSendMail)}>
              <p className="leading-relaxed mb-10 ">
                Une question concernant l&apos;adhésion ? un évènement ? un bon
                plan à partager? Passer une vitesse, déposer un message et
                accélérer jusqu&apos;à cliquer sur Envoyer
              </p>

              <div className="relative mb-4">
                <label
                  htmlFor="first_name"
                  className={`leading-7 text-sm${
                    errors.first_name ? 'text-red-500 font-mono text-sm' : ''
                  }`}
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="first_name"
                  placeholder="Alain"
                  {...register('first_name')}
                  className={`w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                    errors.first_name ? 'border-red-600' : ''
                  }`}
                />

                {errors.first_name && (
                  <div className="text-red-500 font-mono text-xs">
                    {errors.first_name.message}
                  </div>
                )}
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className={`leading-7 text-sm${
                    errors.email ? 'text-red-500 font-mono text-sm' : ''
                  }`}
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="alain.proviste@club306.fr"
                  {...register('email')}
                  className={`w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                    errors.email ? 'border-red-600' : ''
                  }`}
                />

                {errors.email && (
                  <div className="text-red-500 font-mono text-xs">
                    {errors.email.message}
                  </div>
                )}
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className={`leading-7 text-sm${
                    errors.msg ? 'text-red-500 font-mono text-sm' : ''
                  }`}
                >
                  Message
                </label>
                <textarea
                  typeof="text"
                  id="msg"
                  placeholder="Veuillez saisir votre message ici..."
                  {...register('msg')}
                  className={`w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                    errors.msg ? 'border-red-600' : ''
                  }`}
                ></textarea>

                {errors.msg && (
                  <div className="text-red-500 font-mono text-xs">
                    {errors.msg.message}
                  </div>
                )}
              </div>

              <div className="flex justify-center items-center">
                <button
                  className="flex items-center px-4 py-2 rounded-lg duration-150 active:shadow-lg mb-10 bg-principal-light text-text-dark dark:bg-principal-dark dark:text-bg-dark"
                  type="submit"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        )}
        {confirmationSend && (
          <p className="leading-relaxed mb-5 text-gray-600 text-center">
            Merci pour votre message. L&apos;équipe s&apos;organise au mieux
            afin d&apos;apporter une réponse dans les 24 heures. Sportivement
          </p>
        )}
      </div>
    </div>
  )
}
