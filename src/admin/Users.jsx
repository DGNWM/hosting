import { MuiTable } from "components"

const Users = () => {
  return (
    <div className='w-full h-full p-6'>
      <h1 className="text-4xl font-semibold mb-5">Users Details</h1>
      <MuiTable API_URL={'http://localhost:3030/getUsers'} type={'userDetails'} />
    </div>
  )
}

export default Users