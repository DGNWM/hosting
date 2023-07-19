import { MuiTable } from "components"

const Orders = () => {
  return (
    <div className='w-full h-full p-6'>
      <h1 className="text-4xl font-semibold mb-5">Order Details</h1>
      <MuiTable API_URL={'http://localhost:3030/order/getAllData'} type={'orderDetails'} />
    </div>
  )
}

export default Orders