'use client';
import Link from 'next/link';
import React from 'react';
// import { Button, ConfigProvider, DatePicker, theme } from 'antd';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { PersonalInfo } from '@/app/models';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import dayjs from 'dayjs';
import locale from 'antd/locale/fr_FR';
import { RightCircleFilled } from '@ant-design/icons';
import { useTheme } from 'next-themes';

export const PersonalInfos = ({
  setStep,
  setPersonalInfo,
  personalInfo,
}: {
  setStep: any;
  setPersonalInfo: React.Dispatch<React.SetStateAction<PersonalInfo>>;
  personalInfo: PersonalInfo;
}) => {
  const { resolvedTheme } = useTheme();
  // const { defaultAlgorithm, darkAlgorithm } = theme;

  const schema: yup.ObjectSchema<PersonalInfo> = yup.object().shape({
    first_name: yup.string().required('Veuillez fournir votre Nom'),
    last_name: yup.string().required('Veuillez fournir votre Prénom'),
    address: yup
      .string()
      .required('Veuillez fournir votre Adresse')
      .min(8, 'Adresse trop courte'),
    zip_code: yup
      .string()
      .required('Veuillez fournir votre Code Postal')
      .min(4, 'Code Postal trop court')
      .max(8, 'Code Postal trop long'),
    town: yup.string().required('Veuillez fournir votre Ville'),
    phone: yup
      .string()
      .typeError('Veuillez fournir un numéro de téléphone valide')
      .required('Veuillez fournir votre numéro de téléphone'),
    birth_date: yup
      .date()
      .nullable()
      .typeError('Invalid Date')
      .max(dayjs().subtract(18, 'years'), 'Vous devez avoir minimum 18 ans')
      .required('Veuillez fournir votre date de naissance'),
    checkCotisation: yup
      .boolean()
      .isTrue('Veuillez approuver la cotisation ...!'),
    checkCertificateHonour: yup
      .boolean()
      .isTrue(
        "Veuillez approuver sur l'honneur que vous êtes bien propriétaire du véhicule ...!"
      ),
    checkEngagementClub: yup
      .boolean()
      .isTrue('Veuillez approuver notre règlement ...!'),
    checkPrivacyPolicy: yup
      .boolean()
      .isTrue('Veuillez approuver notre politique de confidentialité ...!'),
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<PersonalInfo>({
    resolver: yupResolver(schema),
  });

  const handleAddPersonalInfos = (data: PersonalInfo) => {
    setPersonalInfo(data);
    reset();
    setStep((s: number) => s + 1);
  };

  const handlePhoneInputChange = () => {
    register('phone');
    return true;
  };

  return (
    <form>
      <div className="mt-8 grid h-full grid-cols-6 gap-6 px-2">
        {/* FIRST NAME */}
        <div className="col-span-6 sm:col-span-3 relative z-0 mt-8">
          <input
            type="text"
            id="first_name"
            defaultValue={personalInfo.first_name || ''}
            className={`${'block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'}
            ${errors.first_name && 'border-red-600'}`}
            {...register('first_name')}
            placeholder=" "
          />
          <label
            htmlFor="first_name"
            className={`${'peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'} ${
              errors.first_name && 'text-red-500 font-mono text-sm'
            }`}
          >
            Prénom <span className="text-red-500">*</span>
          </label>
          {errors.first_name && (
            <span className="text-red-500 font-mono text-xs">
              {errors.first_name.message}
            </span>
          )}
        </div>

        {/* LAST NAME */}
        <div className="col-span-6 sm:col-span-3 relative z-0 mt-8">
          <input
            type="text"
            id="last_name"
            defaultValue={personalInfo.last_name || ''}
            className={`${'block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'}
      ${errors.last_name && 'border-red-600'}`}
            {...register('last_name')}
            placeholder=" "
          />
          <label
            htmlFor="last_name"
            className={`${'peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'} ${
              errors.last_name && 'text-red-500 font-mono text-sm'
            }`}
          >
            Nom <span className="text-red-500">*</span>
          </label>
          {errors.last_name && (
            <span className="text-red-500 font-mono text-xs">
              {errors.last_name.message}
            </span>
          )}
        </div>

        {/* ADDRESS */}
        <div className="col-span-6 relative z-0 mt-8">
          <input
            type="text"
            id="address"
            defaultValue={personalInfo.address}
            className={`${'block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'}
            ${errors.address && 'border-red-600'}`}
            {...register('address')}
            placeholder=" "
          />
          <label
            htmlFor="address"
            className={`${'peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'} ${
              errors.address && 'text-red-500 font-mono text-sm'
            }`}
          >
            Adresse <span className="text-red-500">*</span>
          </label>
          {errors.address && (
            <span className="text-red-500 font-mono text-xs">
              {errors.address.message}
            </span>
          )}
        </div>

        {/* ZIP CODE */}
        <div className="col-span-6 sm:col-span-3 relative z-0 mt-8">
          <input
            type="text"
            id="zip_code"
            defaultValue={personalInfo.zip_code}
            className={`${'block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'}
            ${errors.zip_code && 'border-red-600'}`}
            {...register('zip_code')}
            placeholder=" "
          />
          <label
            htmlFor="zip_code"
            className={`${'peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'} ${
              errors.zip_code && 'text-red-500 font-mono text-sm'
            }`}
          >
            Code Postal <span className="text-red-500">*</span>
          </label>
          {errors.zip_code && (
            <span className="text-red-500 font-mono text-xs">
              {errors.zip_code.message}
            </span>
          )}
        </div>

        {/* TOWN */}
        <div className="col-span-6 sm:col-span-3 relative z-0 mt-8">
          <input
            type="text"
            id="town"
            defaultValue={personalInfo.town}
            className={`${'block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'}
            ${errors.town && 'border-red-600'}`}
            {...register('town')}
            placeholder=" "
          />
          <label
            htmlFor="town"
            className={`${'peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'} ${
              errors.town && 'text-red-500 font-mono text-sm'
            }`}
          >
            Ville <span className="text-red-500">*</span>
          </label>
          {errors.town && (
            <span className="text-red-500 font-mono text-xs">
              {errors.town.message}
            </span>
          )}
        </div>

        {/* PHONE */}
        <div className="col-span-6 sm:col-span-3 mt-8">
          <span
            className={`${'mb-2'} ${
              errors.phone && 'text-red-500 font-mono text-sm'
            }`}
          >
            Numéro de téléphone<span className="text-red-500">*</span>
          </span>
          <Controller
            name="phone"
            control={control}
            rules={{
              validate: () => handlePhoneInputChange(),
            }}
            render={({ field: { onChange, value } }) => (
              <PhoneInput
                value={value || personalInfo.phone}
                onChange={onChange}
                inputClass="dark:text-white"
                containerClass={`${'rounded-lg border focus:border-indigo-600 dark:hover:bg-green-500'}
    ${errors.phone && 'border-red-600'}
    ${resolvedTheme === 'dark' ? 'dark:bg-black' : ''}`}
                country="fr"
                onlyCountries={['fr', 'uk', 'be', 'nl', 'ch', 'it', 'es']}
                inputStyle={{
                  width: '100%',
                  background: resolvedTheme === 'dark' ? '#111827' : '',
                }}
                buttonStyle={{
                  background: resolvedTheme === 'dark' ? '#111827' : '',
                }}
                dropdownStyle={{
                  background: resolvedTheme === 'dark' ? '#111827' : '',
                  // color: resolvedTheme === 'dark' ? 'white' : '',
                }}
              />
            )}
          />
          {errors.phone && (
            <span className="text-red-500 font-mono text-xs">
              {errors.phone.message}
            </span>
          )}
        </div>

        {/* BIRTH DATE */}
        <div className="col-span-6 sm:col-span-3 relative z-0 mt-8">
          <span
            className={`${'mb-2'} ${
              errors.birth_date && 'text-red-500 font-mono text-sm'
            }`}
          >
            Date de Naissance<span className="text-red-500">*</span>
          </span>
          {/* <Controller
            control={control}
            name={'birth_date'}
            render={({ field, fieldState }) => {
              return (
                <ConfigProvider
                  locale={locale}
                  theme={{
                    algorithm:
                      resolvedTheme === 'dark'
                        ? darkAlgorithm
                        : defaultAlgorithm,
                  }}
                >
                  <DatePicker
                    format={'DD/MM/YYYY'}
                    className={`${'rounded-lg border focus:border-indigo-600 w-full h-9'}
                    ${errors.birth_date && 'border-red-600'}`}
                    placeholder={'DD/MM/YYYY'}
                    value={field.value ? dayjs(field.value) : null}
                    onChange={(date) => {
                      field.onChange(dayjs(date).toDate());
                    }}
                  />
                  {fieldState.error ? (
                    <span className="text-red-500 font-mono text-xs">
                      {fieldState.error?.message}
                    </span>
                  ) : null}
                </ConfigProvider>
              );
            }}
          /> */}
        </div>

        {/* CHECKBOXES */}
        <section className="col-span-6 mt-8 space-y-4">
          {/*Check Cotisation*/}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="checkCotisation"
                type="checkbox"
                className="focus:ring-blue-600 h-4 w-4 text-blue-600 border-gray-300 rounded"
                {...register('checkCotisation')}
                defaultChecked={personalInfo.checkCotisation}
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="checkCotisation"
                className="font-medium text-gray-700"
              >
                <span>
                  Cotisation : Je comprends que la cotisation annuelle au
                  Club306 est fixée à 20 euros pour une année pleine en adhésion
                  (01/01 au 31/12).
                </span>
                <span className="text-red-500">*</span>
              </label>
              {errors.checkCotisation && (
                <div className="text-red-500 font-mono text-xs">
                  {errors.checkCotisation.message}
                </div>
              )}
            </div>
          </div>
          {/*Check Certificate Honour*/}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="checkCertificateHonour"
                type="checkbox"
                className="focus:ring-blue-600 h-4 w-4 text-blue-600 border-gray-300 rounded"
                {...register('checkCertificateHonour')}
                defaultChecked={personalInfo.checkCertificateHonour}
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="checkCertificateHonour"
                className="font-medium text-gray-700"
              >
                <span>
                  J’atteste sur l’honneur que je suis bien le (la) propriétaire
                  de chaque véhicule déclaré, que les caractéristiques
                  communiquées sont conformes à la réalité et que le véhicule
                  est à jour de son assurance et du contrôle technique.
                </span>
                <span className="text-red-500">*</span>
              </label>
              {errors.checkCertificateHonour && (
                <div className="text-red-500 font-mono text-xs">
                  {errors.checkCertificateHonour.message}
                </div>
              )}
            </div>
          </div>
          {/*Check Engagement Club*/}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="checkEngagementClub"
                type="checkbox"
                className="focus:ring-blue-600 h-4 w-4 text-blue-600 border-gray-300 rounded"
                {...register('checkEngagementClub')}
                defaultChecked={personalInfo.checkEngagementClub}
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="checkEngagementClub"
                className="font-medium text-gray-700"
              >
                <span>
                  Je m&apos;engage, en adhérant au Club à respecter{' '}
                  <Link href="/rules" className="underline hover:text-red-600">
                    les termes de ses statuts et de son règlement
                  </Link>
                  .
                </span>
                <span className="text-red-500">*</span>
              </label>
              {errors.checkEngagementClub && (
                <div className="text-red-500 font-mono text-xs">
                  {errors.checkEngagementClub.message}
                </div>
              )}
            </div>
          </div>
          {/*Check Privacy Policy*/}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="checkPrivacyPolicy"
                type="checkbox"
                className="focus:ring-blue-600 h-4 w-4 text-blue-600 border-gray-300 rounded"
                {...register('checkPrivacyPolicy')}
                defaultChecked={personalInfo.checkPrivacyPolicy}
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="checkPrivacyPolicy"
                className="font-medium text-gray-700"
              >
                <span>
                  En soumettant ce formulaire, je confirme avoir pris
                  connaissant de la &nbsp;
                  <Link
                    href="/privacy"
                    className="underline hover:text-red-600"
                  >
                    politique de confidentialité
                  </Link>
                  &nbsp;du Club306. Dès lors, j&apos;autorise Club306 à
                  exploiter les informations saisies dans le cadre de la
                  relation commerciale qui peut en découler.
                </span>
                <span className="text-red-500">*</span>
              </label>
              {errors.checkPrivacyPolicy && (
                <div className="text-red-500 font-mono text-xs">
                  {errors.checkPrivacyPolicy.message}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SUBMIT BUTTON */}
        <div className="col-span-6 mt-8">
          {/* <ConfigProvider
            theme={{
              token: {
                fontSize: 18,
              },
            }}
          >
            <Button
              onClick={handleSubmit(handleAddPersonalInfos)}
              type="primary"
              size="large"
              block
              icon={<RightCircleFilled />}
            >
              <span>Suivant</span>
            </Button>
          </ConfigProvider> */}
        </div>
      </div>
    </form>
  );
};
