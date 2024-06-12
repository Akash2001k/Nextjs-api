import AddUser from "../components/AddUserRTK"
import DisplayUsers from "../components/DisplayUsersRTK"

const page = () => {
  return (
    <div className="container p-5 m-auto">
        <AddUser/>
        <DisplayUsers/>
    </div>
  )
}

export default page