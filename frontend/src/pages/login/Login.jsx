import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { isLoading, login } = useLogin()

  const handleSubmit = async (event) => {
    event.preventDefault()
    await login({ username, password })
    setUsername("")
    setPassword("")
  }

  return (
    <div className="flex flex-col h-full items-center justify-center max-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-gray-300 mb-8">
          Login
          <span className="text-emerald-200"> ChatApp </span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">
              <span className="text-base label-text text-gray-300">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 my-2 bg-neutral-900 text-emerald-200"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">
              <span className="text-base label-text text-gray-300">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10 my-2 bg-neutral-900 text-emerald-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm text-gray-300 hover:underline hover:text-blue-600 mt-8 inline-block cursor-pointer"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 border-neutral-700 bg-emerald-200 hover:bg-neutral-950 hover:border-neutral-700 hover:text-white">
              {isLoading ? (
                <span className="loading loading-spinner "></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
