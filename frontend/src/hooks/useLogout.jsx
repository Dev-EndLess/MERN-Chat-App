import { useState } from "react"
import { useAuthContext } from "../context/GlobalContext"
import toast from "react-hot-toast"

const useLogout = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { setAuthUser } = useAuthContext()

  const logout = async () => {
    setIsLoading(true)

    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })

      const data = await res.json()

      if (data.error) {
        throw new Error(data.error)
      }

      localStorage.removeItem("auth-user")
      setAuthUser(null)
    } catch (error) {
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, logout }
}

export default useLogout
