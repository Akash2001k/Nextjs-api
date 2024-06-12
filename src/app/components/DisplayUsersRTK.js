
const DisplayUsers = () => {
  return (
    <div className="relative overflow-x-auto">
      <h1 style={{fontSize:"25px", margin:"10px 0"}}>User List</h1>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">SR No.</th>
            <th scope="col" className="px-6 py-3">user</th>
          </tr>
        </thead>
        <tbody>

          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              1
            </th>
            <td className="px-6 py-4">
              user
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default DisplayUsers