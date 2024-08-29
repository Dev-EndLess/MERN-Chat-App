import { BiLogOut } from "react-icons/bi"
import useLogout from "../../hooks/useLogout"

const LogoutButton = () => {
  const { loading, logout } = useLogout()

  return (
    <div>
      {!loading ? (
        <div
          className="flex gap-2 mb-2 text-emerald-200 cursor-pointer hover:text-red-500"
          onClick={logout}
        >
          <BiLogOut className="w-8 h-8" />
          <h1 className="text-lg font-semibold">Log Out</h1>
        </div>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  )
}

export default LogoutButton
