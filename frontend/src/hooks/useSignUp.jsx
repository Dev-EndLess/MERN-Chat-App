import toast from "react-hot-toast"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const useSignUp = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const signup = async ({
    username,
    nickname,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      username,
      nickname,
      password,
      confirmPassword,
      gender,
    })
    if (!success) return

    setLoading(true)

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          nickname,
          password,
          confirmPassword,
          gender,
        }),
      })

      const data = await res.json()
      if (data.error) {
        throw new Error(data.error)
      }
      
      toast.success("Sign up Successful!")
      navigate("/login")

    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { loading, signup }
}

export default useSignUp

const handleInputErrors = ({
  username,
  nickname,
  password,
  confirmPassword,
  gender,
}) => {
  if (!username || !nickname || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields")
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match")
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters")
  }

  return true
}
