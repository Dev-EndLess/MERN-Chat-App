import { BiLogOut } from "react-icons/bi"
import useLogout from "../../hooks/useLogout"

const LogoutButton = () => {
  const { isLoading, logout } = useLogout()

  return (
    <div>      
      {!isLoading ? (
        <div
          className="gap-2 text-gray-200 cursor-pointer hover:text-red-500"
          onClick={logout}
        >
          <div className="flex gap-2">
            <BiLogOut className="w-8 h-8" />
            <h2 className="text-xl font-semibold">Log Out</h2>
          </div>
        </div>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  )
}

export default LogoutButton
