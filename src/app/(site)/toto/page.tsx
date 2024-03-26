import OrderTable from '@/components/OrderTable'

import { fetchAllPages, fetchAndEnrichOrders } from '@/lib/helloAsso/orders'

const Page = async () => {
  const orders = await fetchAndEnrichOrders()

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-semibold text-gray-800 my-6">
        Liste des Commandes
      </h1>
      <h2>{orders[0].order.formName}</h2>
      <h2>{orders[0].name}</h2>
      <OrderTable orders={orders} />
    </div>
  )
}

export default Page
