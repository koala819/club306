'use client'

import {
  Button,
  Card,
  CardFooter,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/react'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { FaHubspot } from 'react-icons/fa'

import { PartnerInfoType } from '@/src/types/models'

import WaitSession from '@/src/components/cpanel/WaitSession'

import { ourPartners } from '@/src/lib/supabase'

export function Partners() {
  const [partnerData, setPartnerData] = useState<PartnerInfoType[] | null>(null)
  const [partner, setPartner] = useState<PartnerInfoType>()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ourPartners()
        if (response.data !== null) {
          const formattedData = response.data.map(
            (item: { [x: string]: any }) => {
              return {
                id: item.id,
                title: item.title,
                code: item.code,
                linkImg: item.linkImg,
                remise: item.remise,
                site: item.site,
                alt: item.alt,
              }
            },
          )
          setPartnerData(formattedData)
        }
        return response.data
      } catch (error) {
        toast.error('Error to get data from partners : ')
      }
    }
    fetchData()
  }, [])

  const handleOpen = (partner: PartnerInfoType) => {
    setPartner(partner)
    onOpen()
  }

  return (
    <>
      {partnerData === undefined ? (
        <WaitSession />
      ) : (
        <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div className="flex space-x-4 flex-col w-full mb-6 shadow-lg rounded-lg bg-white dark:bg-slate-500 border-0">
            {partnerData && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {partnerData.map((partner) => (
                  <Card
                    key={partner.id}
                    isFooterBlurred
                    className="col-span-1 sm:col-span-1 lg:col-span-1 h-[300px]"
                    isPressable
                    onPress={() => handleOpen(partner)}
                  >
                    <Image
                      removeWrapper
                      className="z-0 w-full h-full object-cover"
                      src={partner.linkImg || ''}
                      alt={partner.alt || ''}
                    />
                    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                      <div className="flex flex-grow gap-2 items-center">
                        <FaHubspot color="white" size={30} className=" mr-2" />
                        <div className="flex flex-col">
                          <p className="text-sm text-white/90">
                            {partner.remise}
                          </p>
                          <p className="text-sm text-white/90">
                            avec le code {partner.code}
                          </p>
                        </div>
                      </div>
                      <Link href={partner.site} target="_blank">
                        <Button radius="full" size="sm" color="primary">
                          Voir Site
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
                <Modal
                  isOpen={isOpen}
                  onOpenChange={onOpenChange}
                  hideCloseButton
                  classNames={{
                    body: 'py-6',
                    backdrop: 'bg-[#292f46]/50 backdrop-opacity-40',
                    base: `${
                      partner?.title === 'Aventure Peugeot' ||
                      partner?.title === 'R3 DEV'
                        ? ''
                        : 'bg-[#19172c] dark:bg-[#19172c]'
                    }`,
                  }}
                >
                  <ModalContent>
                    {(onClose) =>
                      partner && (
                        <>
                          <ModalBody>
                            <Card
                              isFooterBlurred
                              className="col-span-1 sm:col-span-1 lg:col-span-1 h-[300px]"
                              isPressable
                            >
                              <Image
                                removeWrapper
                                className="z-0 w-full h-full object-cover"
                                src={partner.linkImg || ''}
                                alt={partner.alt || ''}
                              />
                              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                                <div className="flex flex-grow gap-2 items-center">
                                  <FaHubspot
                                    color="white"
                                    size={30}
                                    className=" mr-2"
                                  />
                                  <div className="flex flex-col">
                                    <p className="text-sm text-white/90">
                                      {partner.remise}
                                    </p>
                                    <p className="text-sm text-white/90">
                                      avec le code {partner.code}
                                    </p>
                                  </div>
                                </div>
                                <Link href={partner.site} target="_blank">
                                  <Button
                                    radius="full"
                                    size="sm"
                                    color="primary"
                                  >
                                    Voir Site
                                  </Button>
                                </Link>
                              </CardFooter>
                            </Card>
                          </ModalBody>
                          <ModalFooter className="flex justify-center">
                            <Button
                              color="danger"
                              variant="ghost"
                              onPress={onClose}
                            >
                              Fermer
                            </Button>
                          </ModalFooter>
                        </>
                      )
                    }
                  </ModalContent>
                </Modal>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
