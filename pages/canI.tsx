import { useSession, signIn, signOut } from 'next-auth/react';
import { createClient } from '@supabase/supabase-js';
import { useFormik } from 'formik';
import { FormGroup } from '@mui/material';

export default function Home() {
  const { data: session, status } = useSession();

  const formik = useFormik({
    initialValues: {
      firstName: 'Aude',
      lastName: 'Javel',
    },
    onSubmit,
  });

  if (
    status === 'authenticated' &&
    session?.user?.email ===
      (process.env.USR_CHECK_DB || process.env.USR_CHECK_DB2)
  ) {
    /* USER REGISTERED */
    return (
      <section className="grid h-screen place-items-center">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <button
            type="button"
            onClick={() => signOut()}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Logout
          </button>
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Bienvenue {session?.user?.name}
          </h2>
          <br />
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Qui cherches-tu ?
          </p>
          <form action="" className="" onSubmit={formik.handleSubmit}>
            <FormGroup className="flex border rounded-xl mb-8">
              <label htmlFor="firstName">Prénom</label>
              <input
                type="text"
                className="border rounded-xl focus:outline-none border-none w-full"
                {...formik.getFieldProps('firstName')}
              />
            </FormGroup>

            <FormGroup className="flex border rounded-xl mb-2">
              <label htmlFor="lastName">Nom</label>
              <input
                type="text"
                className="border rounded-xl focus:outline-none border-none w-full"
                {...formik.getFieldProps('lastName')}
              />
            </FormGroup>

            <input
              className="mt-4 border rounded-md hover:bg-[#DB2323] bg-[#3B578E] flex justify-center items-center py-2 px-2 text-[#F7F9FF] text-xl w-full"
              type="submit"
              value="Chercher"
              style={{ cursor: 'pointer' }}
            />
          </form>
        </div>
      </section>
    );
  } else {
    /* USER NOT REGISTERED */
    return (
      <section className="grid h-screen place-items-center">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Bienvenue chez Club306
          </h2>
          <br />
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Pour commencer tu dois être identifié. Clique sur le bouton Login
            pour commencer!
          </p>
          <button
            type="button"
            onClick={() => signIn()}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Login
          </button>
        </div>
      </section>
    );
  }

  async function check(lastName: string, firstName: string) {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.NEXT_PUBLIC_SUPABASE_KEY || ''
    );

    const { data } = await supabase
      .from('members')
      .select('*')
      .filter(
        'first_name',
        'eq',
        firstName.charAt(0).toUpperCase() + firstName.slice(1)
      )
      .filter('last_name', 'eq', lastName.toUpperCase());

    if (data) {
      if (data.length > 0) {
        alert('il existe');
      } else {
        alert('personne dans la base');
      }
    } else {
      console.log('erreur sur la requête en base');
    }
  }

  async function onSubmit(values: any) {
    const data = {
      value: values,
      user: session?.user?.email,
      from: 'canI',
    };
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };

    fetch(`${process.env.CLIENT_URL}/api/mail`, options)
      .then((response: any) => {
        response.status === 200 && console.log('Send mail with SUCCESS :)');
      })
      .catch((error: any) => {
        console.log('ERROR Sir in _canI_ to send the mail', error);
      });

    check(values.lastName, values.firstName);
  }
}
