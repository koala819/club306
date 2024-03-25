import { FaCheck } from 'react-icons/fa'
import { GiTicket } from 'react-icons/gi'

import Link from 'next/link'

import { OrderTableProps } from '@/types/models'

const OrderTable: React.FC<OrderTableProps> = ({ orders }) => {
  const sortedOrders = [...orders].sort(
    (a, b) =>
      new Date(a.order.date).getTime() - new Date(b.order.date).getTime(),
  )

  //   const hasMember = orders.some((order) => order.memberOrNot)
  //   console.log('hasMember', hasMember)

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead className="border-b">
          <tr>
            <th className="text-left px-4 py-2">Réf</th>
            <th className="text-left px-4 py-2">Date</th>
            {/* <th className="text-left px-4 py-2">Statut</th> */}
            <th className="text-left px-4 py-2">Nom</th>
            <th className="text-left px-4 py-2">Prénom</th>

            <th className="text-left px-4 py-2">Email Payeur</th>

            {/* <th className="text-left px-4 py-2">Nom Payeur</th>
            <th className="text-left px-4 py-2">Prénom Payeur</th> */}
            {/* <th className="text-left px-4 py-2">Email Payeur</th> */}
            {/* <th className="text-left px-4 py-2">Moyen de Paiement</th> */}
            <th className="text-left px-4 py-2">Billet</th>
            <th className="text-left px-4 py-2">N° de Billet</th>
            {/* <th className="text-left px-4 py-2">Tarif</th> */}
            <th className="text-left px-4 py-2">Montant Tarif</th>
            <th className="text-left px-4 py-2">Coordonnées</th>
            <th className="text-left px-4 py-2">Âge</th>
            <th className="text-left px-4 py-2">Immatriculation Véhicule</th>
            <th className="text-left px-4 py-2">Petit Déjeuner</th>
          </tr>
        </thead>
        <tbody>
          {sortedOrders.map((order, index) => (
            <tr
              key={index}
              //   className={`border-b ${order.payments[0].state === 'Authorized' ? 'bg-green-100' : 'bg-red-100'}`}
              className={`border-b ${order.memberOrNot ? 'bg-blue-100' : 'bg-red-100'}`}
              //   className={`border-b ${order.payments[0].state === 'Authorized' ? 'bg-green-100' : order.memberOrNot ? 'bg-blue-100' : 'bg-red-100'}`}
            >
              <td className="px-4 py-2">{order.order.id}</td>
              <td className="px-4 py-2">{formatDate(order.order.date)}</td>
              {/* <td className="px-4 py-2">
                {' '}
                {order.memberOrNot ? <FaCheck size={23} /> : 'Non'}{' '}
              </td> */}
              <td className="px-4 py-2">{order.user.lastName}</td>
              <td className="px-4 py-2">{order.user.firstName}</td>
              <td className="px-4 py-2">
                {order.memberOrNot ? '' : order.payer.email}
              </td>
              {/* <td className="px-4 py-2">{order.payer.lastName}</td>
              <td className="px-4 py-2">{order.payer.firstName}</td> */}
              {/* <td className="px-4 py-2">{order.payer.email}</td> */}
              {/* <td className="px-4 py-2">{order.payments[0].paymentMeans}</td> */}
              <td className="px-4 py-2">
                <Link href={order.ticketUrl} target="_blank">
                  <GiTicket size={23} />
                </Link>
              </td>
              <td className="px-4 py-2">{order.id}</td>
              {/* <td className="px-4 py-2">{order.name}</td> */}
              <td className="px-4 py-2">{order.amount / 100}</td>
              <td className="px-4 py-2">{order.coordinates}</td>
              <td className="px-4 py-2">{order.age}</td>
              <td className="px-4 py-2">{order.immatriculationVehicule}</td>
              <td className="px-4 py-2">
                {order.breakfast === 'Oui' && <FaCheck />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
