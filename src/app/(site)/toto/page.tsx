import OrderTable from '@/components/OrderTable'

import { fecthAllEvents } from '@/lib/helloAsso/events'

const Page = async () => {
  const allEvents = await fecthAllEvents()

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-semibold text-gray-800 my-6">
        Membres inscrits à un Event
      </h1>
      {/* <h2>{orders[0].order.formName}</h2>
      <h2>{orders[0].name}</h2> */}
      <OrderTable allEvents={allEvents} />
      {/* <OrderTable orders={orders} allEvents={allEvents} /> */}
    </div>
  )
}

export default Page
