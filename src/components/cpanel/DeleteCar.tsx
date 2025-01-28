import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Radio,
  RadioGroup,
  Textarea,
  useDisclosure,
} from "@heroui/react"
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Car } from '@/src/types/models'

import { deleteCar } from '@/src/lib/cpanel/updateCar'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export default function DeleteCar({
  memberId,
  car,
}: {
  memberId: number
  car: Car
}) {
  const [showReasonInput, setShowReasonInput] = useState(false)
  const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure()

  const schema = yup.object().shape({
    selectedOption: yup.string().required('Faites un choix svp'),
    reason: yup.string().test({
      name: 'reason',
      test: function (value: string | undefined) {
        const selectedOption = this.resolve(yup.ref('selectedOption'))
        if (selectedOption === 'autre') {
          return (
            !!value ||
            this.createError({
              path: 'reason',
              message: 'Veuillez indiquer la raison',
            })
          )
        }
        return true
      },
    }),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const handleDeleteCar = async (data: any) => {
    const reason =
      data.selectedOption === 'autre' ? data.reason : data.selectedOption

    const response = await deleteCar(car, memberId, reason)

    if (response?.status === 404) {
      setShowReasonInput(false)
      toast.error(
        "Il y a un soucis avec l'immatriculation du véhicule, merci de contacter un membre du staff svp !",
      )
    }
    if (response?.status === 200) {
      onClose()
      toast.success('Suppression de votre 306 avec succès.')
      window.location.reload()
    }
  }

  return (
    <>
      <Button onPress={onOpen} color="danger" variant="shadow">
        Supprimer
      </Button>
      <Modal
        size="lg"
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        classNames={{
          backdrop:
            'bg-gradient-to-t from-red-900 to-red-900/10 backdrop-opacity-20',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmit(handleDeleteCar)}>
              <ModalHeader className="flex flex-col gap-1">
                Pourquoi voulez-vous supprimer cette 306 ?
              </ModalHeader>
              <ModalBody>
                <Controller
                  name="selectedOption"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <RadioGroup
                      value={value}
                      onValueChange={(newValue) => {
                        onChange(newValue)
                        if (newValue === 'autre') {
                          setShowReasonInput(true)
                        } else {
                          setShowReasonInput(false)
                        }
                      }}
                    >
                      <Radio value="vendu">J'ai vendu ce véhicule</Radio>
                      <Radio value="casse">J'ai cassé ce véhicule</Radio>
                      <Radio value="autre">Autre</Radio>
                    </RadioGroup>
                  )}
                />

                {showReasonInput && (
                  <Controller
                    name="reason"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value } }) => (
                      <Textarea
                        type="text"
                        color="primary"
                        value={value}
                        onChange={onChange}
                        label="Description de la raison"
                        autoFocus
                        className="max-w-xs"
                        variant="faded"
                      />
                    )}
                  />
                )}
                {errors.selectedOption && (
                  <p className="text-center text-danger text-xs font-bold">
                    {errors.selectedOption.message}
                  </p>
                )}
                {errors.reason && (
                  <div className="text-center text-danger text-xs font-bold">
                    {errors.reason.message}
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Fermer
                </Button>
                <Button type="submit" color="primary" variant="ghost">
                  Valider
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
