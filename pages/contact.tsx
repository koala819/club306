import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useFormik } from 'formik';
import { contact_validate } from '../lib/validate';

export default function Contact() {
  const [confirmationSend, setConfirmationSend] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      first_name: '',
      email: '',
      msg: '',
    },
    validate: contact_validate,
    onSubmit,
  });

  async function onSubmit(values: any) {
    const data = {
      firstName: values.first_name,
      email: values.email,
      message: values.msg,
      from: 'contact',
    };

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };

    fetch(`${process.env.CLIENT_URL}/api/mail`, options)
      .then((response: any) => {
        console.log('response or Not', response);
        response.status === 200 && console.log('Send mail with SUCCESS :)');
        setConfirmationSend(true);
      })
      .catch((error: any) => {
        console.log('ERROR to send the mail in contact.tsx', error);
      });
  }

  return (
    <Layout title="Contact">
      <div className="flex justify-center h-full">
        <div
          className="hidden md:block h-full bg-cover w-2/3"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1568106575207-0fe3ec317559)',
          }}
        ></div>

        {/* <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 px-4"> */}
        <div className="md:w-1/2 flex w-full items-center justify-center">
          {!confirmationSend && (
            <div className="w-11/12">
              <form action="" className="" onSubmit={formik.handleSubmit}>
                {/* <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Contact
              </h2> */}
                <p className="leading-relaxed mb-5 text-gray-600">
                  Une question concernant l&apos;adhésion ? un évènement ? un
                  bon plan à partager? Passer une vitesse, déposer un message et
                  accélérer jusqu&apos;à cliquer sur &quot;envoyer&quot; ^_^
                </p>

                <div className="relative mb-4">
                  <label
                    htmlFor="first_name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="Alain"
                    onChange={formik.handleChange}
                    value={formik.values.first_name}
                    className={`w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                      formik.errors.first_name &&
                      formik.touched.first_name &&
                      'border-red-600'
                    }`}
                  />
                  <span className="text-red-600 text-xs">
                    {formik.errors.first_name}
                  </span>
                </div>

                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="alain.proviste@club306.fr"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className={`w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                      formik.errors.email &&
                      formik.touched.email &&
                      'border-red-600'
                    }`}
                  />
                  <span className="text-red-600 text-xs">
                    {formik.errors.email}
                  </span>
                </div>

                <div className="relative mb-4">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    typeof="text"
                    name="msg"
                    placeholder="Veuillez saisir votre message ici..."
                    onChange={formik.handleChange}
                    value={formik.values.msg}
                    className={`w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                      formik.errors.msg &&
                      formik.touched.msg &&
                      'border-red-600'
                    }`}
                  ></textarea>
                  <span className="text-red-600 text-xs">
                    {formik.errors.msg}
                  </span>
                </div>

                <div className="flex justify-center items-center">
                  <input
                    className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-[#DB2323] rounded text-lg"
                    type="submit"
                    value="Envoyer"
                  />
                </div>
              </form>
            </div>
          )}
          {confirmationSend && (
            <p className="leading-relaxed mb-5 text-gray-600 mt-3">
              Merci pour votre message. L&apos;équipe s&apos;organise au mieux
              afin d&apos;apporter une réponse dans les 24 heures. Sportivement
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
}
