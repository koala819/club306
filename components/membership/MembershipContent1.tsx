import { useFormik } from 'formik';
import { membership_validate } from '../../lib/validate';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import styles from '../../styles/MemberShip.module.css';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Router from 'next/router';

export default function MembershipContent1(nextStep: any) {
  const { data: session } = useSession();
  if (session?.user !== undefined) {
    nextStep.onClick(4);
  }
  const height = _useLayoutHeight();

  const [value, setValue] = useState<Dayjs | null>(
    dayjs('2014-08-18T21:11:54')
  );

  const formik = useFormik({
    initialValues: {
      textInput: '',
      checkboxInput: false,
      first_name: '',
      last_name: '',
      address: '',
      zip_code: '',
      town: '',
      phone: '',
      immatriculation: '',
      birth_date: new Date(),
      color: '',
      model: '',
      submitEvent: '',
      checkCotisation: false,
      checkCertificateHonour: false,
      checkEngagementClub: false,
      checkPrivacyPolicy: false,
      /*email: 'mj23@club306.fr'*/
    },
    validate: membership_validate,
    onSubmit,
  });

  useEffect(() => {
    localStorage.getItem('mySession');
  }, []);

  function onSubmit(values: any) {
    nextStep.onClick(2);
    localStorage.setItem('mySession', JSON.stringify(values));
  }

  const optionInputTextItem = 'peer border-gray-300';

  return (
    <form action="" name="myForm" onSubmit={formik.handleSubmit}>
      <div
        className="w-full flex flex-col items-center justify-center text-center md:px-16  mt-4 my-4"
        style={{ height: `${height - 80}px` }}
      >
        <div className="w-full grid md:grid-cols-3 gap-12 h-full py-12">
          {/*First Name*/}
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              id="first_name"
              className={`${styles.inputTextItem} ${optionInputTextItem}
                                  ${
                                    formik.errors.first_name &&
                                    formik.touched.first_name &&
                                    'border-red-600'
                                  }`}
              {...formik.getFieldProps('first_name')}
            />
            <label
              htmlFor="first_name"
              className={`${
                'peer-focus:font-medium absolute text-lg text-black duration-300' +
                'transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600' +
                'peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0' +
                'peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold'
              }
                        ${
                          formik.errors.first_name &&
                          formik.touched.first_name &&
                          'text-red-600 font-mono'
                        }`}
            >
              Prénom
            </label>
          </div>

          {/*Last Name*/}
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              id="last_name"
              className={`${styles.inputTextItem} ${optionInputTextItem}
                                  ${
                                    formik.errors.last_name &&
                                    formik.touched.last_name &&
                                    'border-red-600'
                                  }`}
              {...formik.getFieldProps('last_name')}
            />
            <label
              htmlFor="last_name"
              className={`${
                'peer-focus:font-medium absolute text-lg text-black duration-300' +
                'transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600' +
                'peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0' +
                'peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold'
              }
                        ${
                          formik.errors.last_name &&
                          formik.touched.last_name &&
                          'text-red-600 font-mono'
                        }`}
            >
              Nom
            </label>
          </div>

          {/*Address*/}
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              id="address"
              className={`${styles.inputTextItem} ${optionInputTextItem}
                                  ${
                                    formik.errors.address &&
                                    formik.touched.address &&
                                    'border-red-600'
                                  }`}
              {...formik.getFieldProps('address')}
            />
            <label
              htmlFor="address"
              className={`${
                'peer-focus:font-medium absolute text-lg text-black duration-300' +
                'transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600' +
                'peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0' +
                'peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold'
              }
                        ${
                          formik.errors.address && formik.touched.address
                            ? 'text-red-600 font-mono'
                            : ''
                        }`}
            >
              Adresse
            </label>
          </div>

          {/*Zip Code*/}
          <div className="relative z-0 mb-6 w-full group mt-4">
            <input
              type="text"
              id="zip_code"
              className={`${styles.inputTextItem} ${optionInputTextItem}
                                  ${
                                    formik.errors.zip_code &&
                                    formik.touched.zip_code &&
                                    'border-red-600'
                                  }`}
              {...formik.getFieldProps('zip_code')}
            />
            <label
              htmlFor="zip_code"
              className={`${
                'peer-focus:font-medium absolute text-lg text-black duration-300' +
                'transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600' +
                'peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0' +
                'peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold'
              } 
                       ${
                         formik.errors.zip_code && formik.touched.zip_code
                           ? 'text-red-600 font-mono'
                           : ''
                       }`}
            >
              Code Postal
            </label>
          </div>

          {/*Town*/}
          <div className="relative z-0 mb-6 w-full group mt-4">
            <input
              type="text"
              id="town"
              className={`${styles.inputTextItem} ${optionInputTextItem}
                                  ${
                                    formik.errors.town &&
                                    formik.touched.town &&
                                    'border-red-600'
                                  }`}
              {...formik.getFieldProps('town')}
            />
            <label
              htmlFor="town"
              className={`${
                'peer-focus:font-medium absolute text-lg text-black duration-300' +
                'transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600' +
                'peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0' +
                'peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold'
              }
                        ${
                          formik.errors.town &&
                          formik.touched.town &&
                          'text-red-600 font-mono'
                        }`}
            >
              Ville
            </label>
          </div>

          {/*Phone*/}
          <div className="relative z-0 mb-6 w-full group mt-4">
            <input
              type="text"
              id="phone"
              className={`${styles.inputTextItem} ${optionInputTextItem}
                                  ${
                                    formik.errors.phone &&
                                    formik.touched.phone &&
                                    'border-red-600'
                                  }`}
              {...formik.getFieldProps('phone')}
            />
            <label
              htmlFor="phone"
              className={`${
                'peer-focus:font-medium absolute text-lg text-black duration-300' +
                'transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600' +
                'peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0' +
                'peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold'
              } 
                       ${
                         formik.errors.phone &&
                         formik.touched.phone &&
                         'text-red-600 font-mono'
                       }`}
            >
              Numéro de Téléphone
            </label>
          </div>

          {/*Immatriculation*/}
          <div className="relative z-0 mb-6 w-full group mt-4">
            <input
              type="text"
              id="immatriculation"
              className={`${styles.inputTextItem} ${optionInputTextItem}
                                  ${
                                    formik.errors.immatriculation &&
                                    formik.touched.immatriculation &&
                                    'border-red-600'
                                  }`}
              {...formik.getFieldProps('immatriculation')}
            />
            <label
              htmlFor="immatriculation"
              className={`${
                'peer-focus:font-medium absolute text-lg text-black duration-300' +
                'transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600' +
                'peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0' +
                'peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold'
              }
                       ${
                         formik.errors.immatriculation &&
                         formik.touched.immatriculation &&
                         'text-red-600'
                       }`}
            >
              Immatriculation de la 306
            </label>
          </div>

          {/*Mail
              <div className='relative z-0 mb-6 w-full group mt-4'>
                <input type='text'
                       id='email'
                       className={`${styles.inputTextItem} ${optionInputTextItem}
                                  ${formik.errors.email && formik.touched.email && 'border-red-600'}`}
                       {...formik.getFieldProps('email')}
                />
                <label htmlFor='email'
                       className={`${'peer-focus:font-medium absolute text-lg text-black dark:text-gray-400 duration-300' +
                       'transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600' +
                       'peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0' +
                       'peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold'}
                       ${formik.errors.email && formik.touched.email && 'text-red-600 font-mono'}`}
                >
                  E-mail
                </label>
              </div>*/}

          {/*Birth Date*/}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              className={`${
                formik.errors.birth_date && formik.touched.birth_date
                  ? 'border-red-600 border-b-3 text-red-600'
                  : ''
              }`}
              label="Date de Naissance"
              inputFormat="DD/MM/YYYY"
              value={value}
              onChange={(date) => {
                const birthDateFormatted = dayjs(date).format('DD/MM/YYYY');
                setValue(date);
                formik.setFieldValue('birth_date', birthDateFormatted, false);
              }}
              renderInput={(params) => (
                <TextField id="birth_date" {...params} />
              )}
            />
          </LocalizationProvider>

          {/*Car Model*/}
          <select
            id="model"
            onChange={(event) =>
              formik.setFieldValue('model', event.target.value)
            }
            className={`${
              'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg' +
              'focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            } ${
              formik.errors.model && formik.touched.model
                ? 'border-red-600 border-b-3 text-red-600'
                : ''
            }`}
          >
            <option value="" label="Quel est le modèle de votre 306 ?"></option>
            <option value="3 Portes" label="3 Portes">
              3 Portes
            </option>
            <option value="5 Portes" label="5 Portes">
              5 Portes
            </option>
            <option value="Break" label="Break">
              Break
            </option>
            <option value="Cabriolet" label="Cabriolet">
              Cabriolet
            </option>
          </select>

          {/*Car Color*/}
          <select
            id="color"
            onChange={(event) =>
              formik.setFieldValue('color', event.target.value)
            }
            className={`${
              'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg' +
              'focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            } ${
              formik.errors.color && formik.touched.color
                ? 'border-red-600 border-b-3 text-red-600'
                : ''
            }`}
          >
            <option value="" label="De quelle couleur est votre 306 ?"></option>
            <option value="Blanc" label="Blanc">
              Blanc
            </option>
            <option value="Bleu" label="Bleu">
              Bleu
            </option>
            <option value="Gris" label="Gris">
              Gris
            </option>
            <option value="Jaune" label="Jaune">
              Jaune
            </option>
            <option value="Noir" label="Noir">
              Noir
            </option>
            <option value="Prune" label="Prune">
              Prune
            </option>
            <option value="Rouge" label="Rouge">
              Rouge
            </option>
            <option value="Vert" label="Vert">
              Vert
            </option>
          </select>
        </div>

        <fieldset>
          {/*Check Cotisation*/}
          <div className="flex items-center mb-4 mt-12">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
              {...formik.getFieldProps('checkCotisation')}
            />
            <label
              htmlFor="checkCotisation"
              className={`ml-2 text-sm font-medium text-black font-sans text-left 
                       ${
                         formik.errors.checkCotisation &&
                         formik.touched.checkCotisation
                           ? 'text-red-500 font-mono'
                           : ''
                       }`}
            >
              <p id="helper-checkCotisation">
                Cotisation : Je comprends que la cotisation annuelle au Club306
                est fixée à 20 euros pour une année pleine en adhésion (01/01 au
                31/12).
              </p>
            </label>
          </div>

          {/*Check Certificate Honour*/}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
              {...formik.getFieldProps('checkCertificateHonour')}
            />
            <label
              htmlFor="checkCertificateHonour"
              className={`ml-2 text-sm font-medium text-black font-sans text-left 
                       ${
                         formik.errors.checkCertificateHonour &&
                         formik.touched.checkCertificateHonour
                           ? 'text-red-500 font-mono'
                           : ''
                       }`}
            >
              <p id="check-checkCertificateHonour">
                J’atteste sur l’honneur que je suis bien le (la) propriétaire de
                chaque véhicule déclaré, que les caractéristiques communiquées
                sont conformes à la réalité et que le véhicule est à jour de son
                assurance et du contrôle technique.
              </p>
            </label>
          </div>

          {/*Check Engagement CLub*/}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
              {...formik.getFieldProps('checkEngagementClub')}
            />
            <label
              htmlFor="checkEngagementClub"
              className={`ml-2 text-sm font-medium text-black font-sans text-left 
                       ${
                         formik.errors.checkEngagementClub &&
                         formik.touched.checkEngagementClub
                           ? 'text-red-500 font-mono'
                           : ''
                       }`}
            >
              <p id="check-checkCertificateHonour">
                Je m&apos;engage, en adhérant au Club à respecter{' '}
                <Link
                  href="/reglement"
                  className="text-blue-600 hover:underline"
                >
                  &nbsp;les termes de ses statuts et de son règlement
                </Link>
                .
              </p>
            </label>
          </div>

          {/*Check Privacy Policy*/}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
              {...formik.getFieldProps('checkPrivacyPolicy')}
            />
            <label
              htmlFor="checkPrivacyPolicy"
              className={`ml-2 text-sm font-medium text-black font-sans  text-left 
                       ${
                         formik.errors.checkPrivacyPolicy &&
                         formik.touched.checkPrivacyPolicy
                           ? 'text-red-500 font-mono'
                           : ''
                       }`}
            >
              <p id="check-checkPrivacyPolicy">
                En soumettant ce formulaire, je confirme avoir pris connaissant
                de
                <Link
                  href="/confidentialite"
                  className="text-blue-600 hover:underline"
                >
                  &nbsp;la politique de confidentialité
                </Link>
                &nbsp;du Club306. Des lors, j&apos;autorise Club306 à exploiter
                les informations saisies dans le cadre de la relation
                commerciale qui peut en découler.
              </p>
            </label>
          </div>
        </fieldset>
        <div>
          <button
            className=" hover:bg-[#DB2323] bg-[#3B578E]  active:bg-green-600 text-gray-100 text-xl px-7 py-1.5 rounded"
            onClick={() => {
              Router.push({
                pathname: '/',
              });
            }}
          >
            Retour
          </button>
          &nbsp;
          <button
            type="submit"
            className="text-[#F7F9FF] text-xl bg-[#3B578E] hover:bg-[#DB2323] active:bg-green-600 text-gray-100 px-7 py-1.5 rounded"
          >
            Suivant
          </button>
        </div>
      </div>
    </form>
  );
}

function _useLayoutHeight() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const divRef = document.getElementById('mainDiv');
    if (divRef) {
      setHeight(divRef.offsetHeight);
    }
  }, []);

  return height;
}
