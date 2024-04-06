'use client'

import {
  Avatar,
  Button,
  Checkbox,
  Input,
  Select,
  SelectItem,
  Spinner,
} from '@nextui-org/react'
import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Controller, useForm } from 'react-hook-form'

import Link from 'next/link'

import { SchemaPersonalInfo } from '@/types/models'

import { getMonth, getYear, months, years } from '@/lib/personalInfos'
import { yupResolver } from '@hookform/resolvers/yup'
import dayjs from 'dayjs'
import * as yup from 'yup'

export const PersonalInfos = ({ setStep }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [personalInfo, setPersonalInfo] = useState<
    SchemaPersonalInfo | undefined
  >(undefined)
  const [formattedBirthDate, setFormattedBirthDate] = useState(new Date())

  useEffect(() => {
    const storedPersonalInfoJSON = sessionStorage.getItem('personalInfo')
    if (storedPersonalInfoJSON) {
      const storedPersonalInfo = JSON.parse(storedPersonalInfoJSON)
      setPersonalInfo(() => storedPersonalInfo)
      setFormattedBirthDate(() =>
        dayjs(storedPersonalInfo?.birth_date).toDate(),
      )
      setIsLoading(false)
    } else {
      setIsLoading(false)
    }
  }, [])

  const schema: yup.ObjectSchema<SchemaPersonalInfo> = yup.object().shape({
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
    country: yup.string().required('Veuillez fournir votre Pays'),
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
      .default(personalInfo?.checkCotisation)
      .isTrue('Veuillez approuver la cotisation ...!'),
    checkCertificateHonour: yup
      .boolean()
      .default(false)
      .isTrue(
        "Veuillez approuver sur l'honneur que vous êtes bien propriétaire du véhicule ...!",
      ),
    checkEngagementClub: yup
      .boolean()
      .default(false)
      .isTrue('Veuillez approuver notre règlement ...!'),
    checkPrivacyPolicy: yup
      .boolean()
      .default(false)
      .isTrue('Veuillez approuver notre politique de confidentialité ...!'),
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  async function handleAddPersonalInfos(data: any) {
    try {
      const memberId = Math.floor(Math.random() * 1000000)
      setPersonalInfo(data)
      sessionStorage.setItem('personalInfo', JSON.stringify(data))
      sessionStorage.setItem('memberId', JSON.stringify(memberId))
      localStorage.setItem(`personalInfo_${memberId}`, JSON.stringify(data))
      setStep((s: number) => s + 1)
    } catch (error) {
      console.error(
        "Erreur lors de l'ajout des informations personnelles :",
        error,
      )
    }
  }

  return (
    <>
      {isLoading ? (
        <div className="flex flex-col justify-center items-center space-y-2 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <Spinner
            label="Chargement"
            color="primary"
            labelColor="primary"
            size="lg"
          />
        </div>
      ) : (
        <form onSubmit={handleSubmit(handleAddPersonalInfos)}>
          <div className="mt-8 grid h-full grid-cols-6 gap-6 px-2">
            {/* FIRST NAME */}
            <div className="col-span-6 sm:col-span-3 relative z-0 mt-8">
              <Input
                {...register('first_name')}
                radius="none"
                type="text"
                color="primary"
                variant="bordered"
                isClearable
                label="Prénom"
                labelPlacement="outside"
                defaultValue={personalInfo?.first_name}
                isInvalid={errors.first_name && true}
                errorMessage={errors.first_name && errors.first_name.message}
              />
            </div>

            {/* LAST NAME */}
            <div className="col-span-6 sm:col-span-3 relative z-0 mt-8">
              <Input
                {...register('last_name')}
                radius="none"
                type="text"
                color="primary"
                variant="bordered"
                isClearable
                label="Nom"
                defaultValue={personalInfo?.last_name}
                labelPlacement="outside"
                isInvalid={errors.last_name && true}
                errorMessage={errors.last_name && errors.last_name.message}
              />
            </div>

            {/* ADDRESS */}
            <div className="col-span-6 relative sm:col-span-6 z-0 mt-8">
              <Input
                {...register('address')}
                radius="none"
                type="text"
                color="primary"
                variant="bordered"
                isClearable
                label="Adresse"
                defaultValue={personalInfo?.address}
                labelPlacement="outside"
                isInvalid={errors.address && true}
                errorMessage={errors.address && errors.address.message}
              />
            </div>

            {/* ZIP CODE */}
            <div className="col-span-6 sm:col-span-3 relative z-0 mt-8">
              <Input
                {...register('zip_code')}
                radius="none"
                type="text"
                color="primary"
                variant="bordered"
                isClearable
                label="Code Postal"
                defaultValue={personalInfo?.zip_code}
                labelPlacement="outside"
                isInvalid={errors.zip_code && true}
                errorMessage={errors.zip_code && errors.zip_code.message}
              />
            </div>

            {/* TOWN */}
            <div className="col-span-6 sm:col-span-3 relative z-0 mt-8">
              <Input
                {...register('town')}
                radius="none"
                type="text"
                color="primary"
                variant="bordered"
                isClearable
                label="Ville"
                defaultValue={personalInfo?.town}
                labelPlacement="outside"
                isInvalid={errors.town && true}
                errorMessage={errors.town && errors.town.message}
              />
            </div>

            {/* PHONE */}
            <div className="col-span-6 sm:col-span-3 mt-8">
              <span className="text-md text-blue-500">Téléphone</span>
              <div className="flex mt-2">
                <Controller
                  control={control}
                  name="country"
                  render={({ field }) => (
                    <Select
                      className="w-11/12 lg:w-1/2"
                      radius="none"
                      onChange={field.onChange}
                      errorMessage={errors.country && errors.country.message}
                      // defaultSelectedKeys={
                      //   personalInfo?.country
                      //     ? [`${personalInfo?.country}`]
                      //     : ['33']
                      // }
                    >
                      <SelectItem
                        key="32"
                        startContent={
                          <Avatar
                            alt="Belgique"
                            className="w-6 h-6"
                            src="https://flagcdn.com/be.svg"
                          />
                        }
                      >
                        +32
                      </SelectItem>
                      <SelectItem
                        key="34"
                        startContent={
                          <Avatar
                            alt="Espagne"
                            className="w-6 h-6"
                            src="https://flagcdn.com/es.svg"
                          />
                        }
                      >
                        +34
                      </SelectItem>
                      <SelectItem
                        key="33"
                        startContent={
                          <Avatar
                            alt="France"
                            className="w-6 h-6"
                            src="https://flagcdn.com/fr.svg"
                          />
                        }
                      >
                        +33
                      </SelectItem>
                      <SelectItem
                        key="31"
                        startContent={
                          <Avatar
                            alt="Hollande"
                            className="w-6 h-6"
                            src="https://flagcdn.com/nl.svg"
                          />
                        }
                      >
                        +31
                      </SelectItem>
                      <SelectItem
                        key="39"
                        startContent={
                          <Avatar
                            alt="Italie"
                            className="w-6 h-6"
                            src="https://flagcdn.com/it.svg"
                          />
                        }
                      >
                        +39
                      </SelectItem>
                      <SelectItem
                        key="41"
                        startContent={
                          <Avatar
                            alt="Switzerland"
                            className="w-6 h-6"
                            src="https://flagcdn.com/ch.svg"
                          />
                        }
                      >
                        +41
                      </SelectItem>
                    </Select>
                  )}
                />
                <Input
                  {...register('phone')}
                  radius="none"
                  variant="bordered"
                  defaultValue={personalInfo?.phone}
                  placeholder="06 12 34 56 78"
                  color="primary"
                  isInvalid={errors.phone && true}
                  errorMessage={errors.phone && errors.phone.message}
                  type="text"
                />
              </div>
            </div>

            {/* BIRTH DATE */}
            <div className="col-span-6 sm:col-span-3 mt-8">
              <div className="w-full mb-2">
                <span
                  className={`text-md text-blue-500 ${
                    errors.birth_date && 'text-red-600 font-mono text-sm'
                  }`}
                >
                  Date de Naissance
                </span>
              </div>
              <Controller
                control={control}
                name={'birth_date'}
                render={({ field, fieldState }) => (
                  <>
                    <DatePicker
                      // calendarClassName="w-full"
                      className="border-2 p-1 pl-4"
                      renderCustomHeader={({
                        date,
                        changeYear,
                        changeMonth,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled,
                      }) => (
                        <div
                          style={{
                            margin: 10,
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          <button
                            onClick={decreaseMonth}
                            disabled={prevMonthButtonDisabled}
                          >
                            {'<'}
                          </button>
                          <select
                            value={getYear(date)}
                            onChange={({ target: { value } }) =>
                              changeYear(parseInt(value, 10))
                            }
                          >
                            {years.reverse().map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>

                          <select
                            value={months[getMonth(date)]}
                            onChange={({ target: { value } }) =>
                              changeMonth(months.indexOf(value))
                            }
                          >
                            {months.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>

                          <button
                            onClick={increaseMonth}
                            disabled={nextMonthButtonDisabled}
                          >
                            {'>'}
                          </button>
                        </div>
                      )}
                      selected={formattedBirthDate}
                      dateFormat="dd/MM/yyyy"
                      onChange={(date: any) => {
                        setFormattedBirthDate(date)
                        field.onChange(date as Date)
                      }}
                      // onChange={(date: Date | DateValue) => {
                      //   field.onChange(date as Date);
                      // }}
                    />
                    {/* <DateField />
                    </DatePicker> */}
                    {fieldState.error ? (
                      <span className="text-red-500 font-mono text-xs">
                        {fieldState.error?.message}
                      </span>
                    ) : null}
                  </>
                )}
              />
            </div>
            {/* CHECKBOXES */}
            <section className="col-span-6 mt-8 space-y-4">
              <Controller
                control={control}
                name="checkCotisation"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <>
                    <Checkbox
                      checked={value}
                      onChange={(e) => onChange(e.target.checked)}
                    >
                      Cotisation : Je comprends que la cotisation annuelle au
                      Club306 est fixée à 25 euros pour une année pleine en
                      adhésion (01/01 au 31/12).
                    </Checkbox>
                    {error && (
                      <div className="text-red-500 font-mono text-xs mt-2">
                        {error.message}
                      </div>
                    )}
                  </>
                )}
              />

              <Controller
                control={control}
                name="checkCertificateHonour"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <>
                    <Checkbox
                      checked={value}
                      onChange={(e) => onChange(e.target.checked)}
                    >
                      J’atteste sur l’honneur que je suis bien le (la)
                      propriétaire de chaque véhicule déclaré, que les
                      caractéristiques communiquées sont conformes à la réalité
                      et que le véhicule est à jour de son assurance et du
                      contrôle technique.
                    </Checkbox>
                    {error && (
                      <div className="text-red-500 font-mono text-xs mt-2">
                        {error.message}
                      </div>
                    )}
                  </>
                )}
              />

              <Controller
                control={control}
                name="checkEngagementClub"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <>
                    <Checkbox
                      checked={value}
                      onChange={(e) => onChange(e.target.checked)}
                    >
                      Je m&apos;engage, en adhérant au Club à respecter{' '}
                      <Link
                        href="/rules"
                        target="_blank"
                        className="underline hover:text-red-600"
                      >
                        les termes de ses statuts et de son règlement
                      </Link>
                      .
                    </Checkbox>
                    {error && (
                      <div className="text-red-500 font-mono text-xs mt-2">
                        {error.message}
                      </div>
                    )}
                  </>
                )}
              />

              <Controller
                control={control}
                name="checkPrivacyPolicy"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <>
                    <Checkbox
                      checked={value}
                      onChange={(e) => onChange(e.target.checked)}
                    >
                      En soumettant ce formulaire, je confirme avoir pris
                      connaissant de la &nbsp;
                      <Link
                        href="/privacy"
                        target="_blank"
                        className="underline hover:text-red-600"
                      >
                        politique de confidentialité
                      </Link>
                      &nbsp;du Club306. Dès lors, j&apos;autorise Club306 à
                      exploiter les informations saisies dans le cadre de la
                      relation commerciale qui peut en découler.
                    </Checkbox>
                    {error && (
                      <div className="text-red-500 font-mono text-xs mt-2">
                        {error.message}
                      </div>
                    )}
                  </>
                )}
              />
            </section>
            <div className="flex justify-center col-span-6 mt-8">
              <Button type="submit" color="primary">
                Continuer
              </Button>
            </div>
          </div>
        </form>
      )}
    </>
  )
}
