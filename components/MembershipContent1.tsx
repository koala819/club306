import { useFormik } from 'formik';
import { membership_validate } from '../lib/validate';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';


export default function MembershipContent1(nextStep: any) {
console.log('updateNumberStep',nextStep)
  const [value, setValue] = useState(null);
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      address: '',
      zip_code: '',
      town: '',
      phone: '',
      matriculation: '',
      birthDate: null,
      color: '',
      model: '',
      submitEvent: '',
      registrationDocument: '',
      checkCotisation: false,
      checkCertificateHonour: false,
      checkEngagementClub: false,
      checkPrivacyPolicy: false
    },
    validate: membership_validate,
    onSubmit
  });
  const toShowError = formik.errors['birthDate'];
useEffect(() => {
  console.log({formik})
},[])
  async function onSubmit(values: any) {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    };

    await fetch('https://pascal306.vercel.app/api/auth/recordMemberInfo', options)
      .then(res => res.json())
      .then(res => {
        if (res.status === 422) {
          alert('Un compte avec cette immatriculation existe déjà... !');
          throw new Error('User already exist...!');
        }
        if (res._id) {
          nextStep.onClick(2)
          nextStep.updateNumberStep(2)
          console.log('finish with success');
        }
      })
  }

  return (

    <section className='min-h-screen flex items-stretch text-black'>
      <div className='w-full flex items-center justify-center text-center md:px-16 px-0 z-0'>
        <div className='w-full z-20'>
          <form action=''
                name='myForm'
                onSubmit={formik.handleSubmit}
          >
            <div className='grid md:grid-cols-2 md:gap-6'>

              {/*First Name*/}
              <div className='relative z-0 mb-6 w-full group'>
                <input type='text'
                       id='first_name'
                       className={`${'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent ' +
                       'border-0 border-b-2 border-gray-300 appearance-none dark:text-white ' +
                       'dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 ' +
                       'focus:border-blue-600 peer'} ${formik.errors.first_name && formik.touched.first_name ? 'border-red-600' : ''}`}
                       {...formik.getFieldProps('first_name')}
                />
                <label htmlFor='first_name'
                       className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
                                           duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                           peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                                           peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Nom
                </label>
                {formik.errors.first_name && formik.touched.first_name ?
                  <span className='text-rose-500'>{formik.errors.first_name}</span> : <></>}
              </div>

              {/*Last Name*/}
              <div className='relative z-0 mb-6 w-full group'>
                <input type='text'
                       id='last_name'
                       className={`${'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent ' +
                       'border-0 border-b-2 border-gray-300 appearance-none dark:text-white ' +
                       'dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 ' +
                       'focus:border-blue-600 peer'} ${formik.errors.last_name && formik.touched.last_name ? 'border-red-600' : ''}`}
                       {...formik.getFieldProps('last_name')}
                />
                <label htmlFor='last_name'
                       className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
                                           duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                           peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                                           peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Prénom
                </label>
                {formik.errors.last_name && formik.touched.last_name ?
                  <span className='text-red-500'>{formik.errors.last_name}</span> : <></>}
              </div>

              {/*Address*/}
              <div className='relative z-0 mb-6 w-full group'>
                <input type='text'
                       id='address'
                       className={`${'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent ' +
                       'border-0 border-b-2 border-gray-300 appearance-none dark:text-white ' +
                       'dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 ' +
                       'focus:border-blue-600 peer'} ${formik.errors.address && formik.touched.address ? 'border-red-600' : ''}`}
                       {...formik.getFieldProps('address')}
                />
                <label htmlFor='address'
                       className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
                                           duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                           peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                                           peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Adresse
                </label>
                {formik.errors.address && formik.touched.address ?
                  <span className='text-red-500'>{formik.errors.address}</span> : <></>}
              </div>

              {/*Zip Code*/}
              <div className='relative z-0 mb-6 w-full group'>
                <input type='text'
                       id='zip_code'
                       className={`${'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent ' +
                       'border-0 border-b-2 border-gray-300 appearance-none dark:text-white ' +
                       'dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 ' +
                       'focus:border-blue-600 peer'} ${formik.errors.zip_code && formik.touched.zip_code ? 'border-red-600' : ''}`}
                       {...formik.getFieldProps('zip_code')}
                />
                <label htmlFor='zip_code'
                       className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
                                           duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                           peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                                           peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Code Postal
                </label>
                {formik.errors.zip_code && formik.touched.zip_code ?
                  <span className='text-red-500'>{formik.errors.zip_code}</span> : <></>}
              </div>

              {/*Town*/}
              <div className='relative z-0 mb-6 w-full group'>
                <input type='text'
                       id='town'
                       className={`${'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent ' +
                       'border-0 border-b-2 border-gray-300 appearance-none dark:text-white ' +
                       'dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 ' +
                       'focus:border-blue-600 peer'} ${formik.errors.town && formik.touched.town ? 'border-red-600' : ''}`}
                       {...formik.getFieldProps('town')}
                />
                <label htmlFor='town'
                       className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
                                           duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                           peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                                           peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Ville
                </label>
                {formik.errors.town && formik.touched.town ?
                  <span className='text-red-500'>{formik.errors.town}</span> : <></>}
              </div>

              {/*Phone*/}
              <div className='relative z-0 mb-6 w-full group'>
                <input type='text'
                       id='phone'
                       className={`${'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent ' +
                       'border-0 border-b-2 border-gray-300 appearance-none dark:text-white ' +
                       'dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 ' +
                       'focus:border-blue-600 peer'} ${formik.errors.phone && formik.touched.phone ? 'border-red-600' : ''}`}
                       {...formik.getFieldProps('phone')}
                />
                <label htmlFor='phone'
                       className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
                                           duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                           peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                                           peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Numéro de Téléphone
                </label>
                {formik.errors.phone && formik.touched.phone ?
                  <span className='text-red-500'>{formik.errors.phone}</span> : <></>}
              </div>

              {/*Immatriculation*/}
              <div className='relative z-0 mb-6 w-full group'>
                <input type='text'
                       id='matriculation'
                       className={`${'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent ' +
                       'border-0 border-b-2 border-gray-300 appearance-none dark:text-white ' +
                       'dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 ' +
                       'focus:border-blue-600 peer'} ${formik.errors.matriculation && formik.touched.matriculation ? 'border-red-600' : ''}`}
                       {...formik.getFieldProps('matriculation')}
                />
                <label htmlFor='matriculation'
                       className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
                                           duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
                                           peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                                           peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Immatriculation de la 306
                </label>
                {formik.errors.matriculation && formik.touched.matriculation ?
                  <span className='text-red-500'>{formik.errors.matriculation}</span> : <></>}
              </div>

              {/*Birth Date*/}
              <div className='relative z-0 mb-6 w-full group'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label='Date de Naissance'
                    onChange={(date) => {
                      const birthDateFormatted = dayjs(date).format('DD/MM/YYYY')
                      setValue(date)
                      formik.setFieldValue('birthDate', birthDateFormatted, false);
                    }}
                    inputFormat='DD/MM/YYYY'
                    value={value}
                    renderInput={(params) => (
                      <TextField {...params}
                                 id='birthDate'
                                 name='birthDate'
                                 error={Boolean(toShowError)}
                                 /*helperText={params?.inputProps?.placeholder}*/
                                 helperText={toShowError ?? params.helperText}

                      />
                    )}
                    className={`${formik.errors.birthDate && formik.touched.birthDate ? 'border-red-600' : ''}`}
                  />
                </LocalizationProvider>
              </div>

              {/*Car Model*/}
              <select id='model'
                      onChange={event => formik.setFieldValue('model', event.target.value)}
                      className={`${'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg' +
                      'focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700' +
                      'dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500' +
                      'dark:focus:border-blue-500'} ${formik.errors.model && formik.touched.model ? 'border-red-600' : ''}`}
              >
                <option value='' label='Quel est le modèle de votre 306 ?'></option>
                <option value='3 Portes' label='3 Portes'>3 Portes</option>
                <option value='5 Portes' label='5 Portes'>5 Portes</option>
                <option value='Break' label='Break'>Break</option>
                <option value='Cabriolet' label='Cabriolet'>Cabriolet</option>
              </select>

              {/*Car Color*/}
              <select id='color'
                      onChange={event => formik.setFieldValue('color', event.target.value)}
                      className={`${'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg' +
                      'focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700' +
                      'dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500' +
                      'dark:focus:border-blue-500'} ${formik.errors.color && formik.touched.color ? 'border-red-600' : ''}`}
              >
                <option value='' label='De quelle couleur est votre 306 ?'></option>
                <option value='Blanc' label='Blanc'>Blanc</option>
                <option value='Bleu' label='Bleu'>Bleu</option>
                <option value='Gris' label='Gris'>Gris</option>
                <option value='Jaune' label='Jaune'>Jaune</option>
                <option value='Noir' label='Noir'>Noir</option>
                <option value='Prune' label='Prune'>Prune</option>
                <option value='Rouge' label='Rouge'>Rouge</option>
                <option value='Vert' label='Vert'>Vert</option>
              </select>

              {/*Registration Document */}
              <select id='registrationDocument'
                      onChange={event => formik.setFieldValue('registrationDocument', event.target.value)}
                      className={`${'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg' +
                      'focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700' +
                      'dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500' +
                      'dark:focus:border-blue-500'} ${formik.errors.registrationDocument && formik.touched.registrationDocument ? 'border-red-600' : ''}`}
              >
                <option value='' label='La carte grise est-elle à votre nom ?'></option>
                <option value='Oui' label='Oui'>Oui</option>
                <option value='Non' label='Non'>Non</option>
              </select>
            </div>



            <fieldset>
              {/*Check Cotisation*/}
              <div className='flex items-center mb-4 mt-4'>
                <input type='checkbox'
                       className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500
                                           dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                       {...formik.getFieldProps('checkCotisation')}
                />
                <label htmlFor='checkCotisation'
                       className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left'
                >
                  <p id='helper-checkCotisation'>
                    Cotisation : Je comprends que la cotisation annuelle au Club306 est fixée à 20 euros pour
                    une année pleine en adhésion (01/01 au 31/12).
                  </p>
                  {formik.errors.checkCotisation && formik.touched.checkCotisation ?
                    <span className='text-red-500'>{formik.errors.checkCotisation}</span> : <></>}
                </label>
              </div>

              {/*Check Certificate Honour*/}
              <div className='flex items-center mb-4'>
                <input type='checkbox'
                       className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500
                                           dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                       {...formik.getFieldProps('checkCertificateHonour')}

                />
                <label htmlFor='checkCertificateHonour'
                       className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left'
                >
                  <p id='check-checkCertificateHonour'>
                    J’atteste sur l’honneur que je suis bien le (la) propriétaire de chaque véhicule déclaré,
                    que les caractéristiques communiquées sont conformes à la réalité et que le
                    véhicule est à jour de son assurance et du contrôle technique.
                  </p>
                  {formik.errors.checkCertificateHonour && formik.touched.checkCertificateHonour ?
                    <span className='text-red-500'>{formik.errors.checkCertificateHonour}</span> : <></>}
                </label>
              </div>

              {/*Check Engagement CLub*/}
              <div className='flex items-center mb-4'>
                <input type='checkbox'
                       className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500
                                           dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                       {...formik.getFieldProps('checkEngagementClub')}
                />
                <label htmlFor='checkEngagementClub'
                       className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left'
                >
                  <p id='check-checkCertificateHonour'>
                    Je m&apos;engage, en adhérant au Club à respecter les termes de ses statuts
                    et de son règlement.
                  </p>
                  {formik.errors.checkEngagementClub && formik.touched.checkEngagementClub ?
                    <span className='text-red-500'>{formik.errors.checkEngagementClub}</span> : <></>}
                </label>

              </div>

              {/*Check Privacy Policy*/}
              <div className='flex items-center mb-4'>
                <input type='checkbox'
                       className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500
                                           dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                       {...formik.getFieldProps('checkPrivacyPolicy')}

                />
                <label htmlFor='checkPrivacyPolicy'
                       className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left'
                >
                  <p id='check-checkPrivacyPolicy'>
                    En soumettant ce formulaire, je confirme avoir pris connaissant de
                    <a href='#'
                       className='text-blue-600 hover:underline dark:text-blue-500'
                    >
                      la politique de confidentialité
                    </a>
                    &nbsp;du Club306. Des lors, j&apos;autorise Club306 à exploiter les
                    informations saisies dans le cadre de la relation commerciale
                    qui peut en découler.
                  </p>
                  {formik.errors.checkPrivacyPolicy && formik.touched.checkPrivacyPolicy ?
                    <span className='text-red-500'>{formik.errors.checkPrivacyPolicy}</span> : <></>}
                </label>
              </div>
            </fieldset>

            <button type='submit'
                    className='btn'
                    /*onClick={(e) => {
                     console.log('check mem',e)
                      console.log('check mem target',e?.target)
                      formik.handleChange
                      //handleChange(e)
                    }}*/
            >
              Suivant
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}