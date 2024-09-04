import toast from "react-hot-toast"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const useSignUp = () => {
  const [isLoading, setIsLoading] = useState(false)
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

    setIsLoading(true)

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
      setIsLoading(false)
    }
  }

  return { isLoading, signup }
}

export default useSignUp

const handleInputErrors = ({
  username,
  nickname,
  password,
  confirmPassword,
  gender,
}) => {
  if (!username) {
    toast.error("Please enter your username")
  }

  if (!nickname) {
    toast.error("Please enter your nickname.")
  }

  if (!gender) {
    toast.error("Please select your gender.")
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters")
  }

  return true
}
