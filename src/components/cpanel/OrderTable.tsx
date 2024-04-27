'use client'

import { Select, SelectItem, Selection, Spinner } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { GiTicket } from 'react-icons/gi'

import Link from 'next/link'

import { Order, OrderTableProps } from '@/types/models'

import { fetchAndEnrichOrders } from '@/lib/helloAsso/events'

const OrderTable: React.FC<OrderTableProps> = ({ allEvents }) => {
  const [value, setValue] = useState<Selection>()
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const sortedOrders = [...orders].sort(
    (a, b) =>
      new Date(a.order.date).getTime() - new Date(b.order.date).getTime(),
  )

  useEffect(() => {
    async function fetch() {
      setIsLoading(true)
      const selectedEvent = Array.from(value || [])[0]

      const orders = await fetchAndEnrichOrders(selectedEvent)
      setOrders(orders || [])
      setIsLoading(false)
    }

    value !== undefined && fetch()
  }, [value])

  const currentYear = new Date().getFullYear()

  const eventsOfCurrentYear = allEvents.filter((texte) =>
    texte.includes(currentYear.toString()),
  )

  return (
    <div className="overflow-x-auto">
      {!isLoading && (
        <Select
          label="Choisis un event"
          id="event-select"
          selectedKeys={value}
          className="max-w-xs"
          onSelectionChange={setValue}
        >
          {eventsOfCurrentYear.map((event) => (
            <SelectItem key={event} value={event}>
              {event}
            </SelectItem>
          ))}
        </Select>
      )}
      {isLoading ? (
        <div className="flex justify-center">
          <Spinner
            label="Chargement des informations ..."
            color="primary"
            labelColor="primary"
            size="lg"
          />
        </div>
      ) : (
        orders.length > 0 && (
          <div className="space-y-8">
            <h3 className="text-4xl font-semibold text-gray-800 text-center">
              {orders[0].order.formName}
            </h3>
            <h3 className="text-2xl text-gray-800 text-center">
              {orders[0].name}
            </h3>
            <h3 className="text-2xl text-gray-800 my-6">
              nombre de participants :{' '}
              <span className="font-bold">{orders.length}</span>
            </h3>

            <table className="min-w-full table-auto">
              <thead className="border-b">
                <tr>
                  <th className="text-left px-4 py-2">Réf</th>
                  <th className="text-left px-4 py-2">Date</th>
                  <th className="text-left px-4 py-2">Nom</th>
                  <th className="text-left px-4 py-2">Prénom</th>
                  <th className="text-left px-4 py-2">Email Payeur</th>
                  <th className="text-left px-4 py-2">Nom Payeur</th>
                  <th className="text-left px-4 py-2">Billet</th>
                  <th className="text-left px-4 py-2">N° de Billet</th>
                  <th className="text-left px-4 py-2">Montant Tarif</th>
                  <th className="text-left px-4 py-2">Coordonnées</th>
                  <th className="text-left px-4 py-2">Âge</th>
                  <th className="text-left px-4 py-2">
                    Immatriculation Véhicule
                  </th>
                  <th className="text-left px-4 py-2">Petit Déjeuner</th>
                </tr>
              </thead>
              <tbody>
                {sortedOrders.map((order, index) => (
                  <tr
                    key={index}
                    className={`border-b ${order.memberOrNot ? 'bg-blue-100' : 'bg-red-100'}`}
                  >
                    <td className="px-4 py-2">{order.order.id}</td>
                    <td className="px-4 py-2">
                      {formatDate(order.order.date)}
                    </td>
                    <td className="px-4 py-2 uppercase">
                      {order.user.lastName}
                    </td>
                    <td className="px-4 py-2 capitalize">
                      {order.user.firstName}
                    </td>
                    <td className="px-4 py-2">
                      {order.memberOrNot ? '' : order.payer.email}
                    </td>
                    <td className="px-4 py-2 uppercase">
                      {order.payer.lastName}
                    </td>
                    <td className="px-4 py-2">
                      {order.ticketUrl ? (
                        <Link href={order.ticketUrl} target="_blank">
                          <GiTicket size={23} />
                        </Link>
                      ) : (
                        'Non'
                      )}
                    </td>
                    <td className="px-4 py-2">{order.id}</td>
                    <td className="px-4 py-2">{order.amount / 100}</td>
                    <td className="px-4 py-2">{order.coordinates}</td>
                    <td className="px-4 py-2">{order.age}</td>
                    <td className="px-4 py-2">
                      {order.immatriculationVehicule}
                    </td>
                    <td className="px-4 py-2">
                      {order.breakfast === 'Oui' && <FaCheck />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      )}
    </div>
  )
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
  }).format(date)
}

export default OrderTable
