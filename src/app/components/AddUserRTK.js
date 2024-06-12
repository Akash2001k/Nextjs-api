'use client'
import { useState } from "react"
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";

const AddUser = () => {

  const [name, setName] = useState('');

  const dispatch = useDispatch()

  const userDispatch = () =>{
    dispatch(addUser(name))
  }

  return (
    <div className="p-5">
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add User</label>
          <input value={name} onChange={(e)=>{setName(e.target.value)}} 
           type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " />
        </div>
        <button onClick={userDispatch}
         type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600">Add User</button>
      </form>

    </div>
  )
}

export default AddUser