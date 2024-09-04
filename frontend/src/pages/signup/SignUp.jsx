import { useState } from "react"
import { Link } from "react-router-dom"
import GenderCheckbox from "./GenderCheckbox"
import useSignUp from "../../hooks/useSignUp"

const SignUp = () => {
  const [inputs, setInputs] = useState({
    username: "",
    nickname: "",
    password: "",
    confirmPassword: "",
    gender: "",
  })

  const { isLoading, signup } = useSignUp()

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await signup(inputs)
    setInputs({
      username: "",
      nickname: "",
      password: "",
      confirmPassword: "",
      gender: "",
    })
  }

  return (
    <div className="flex flex-col h-full items-center justify-center max-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-gray-300 mb-8">
          Sign Up to <span className="text-emerald-200"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">
              <span className="text-base label-text text-gray-300">
                {" "}
                Username
              </span>
            </label>
            <input
              name="username"
              type="text"
              placeholder="Your Username"
              className="w-full input input-bordered h-10 my-2 bg-neutral-900 text-emerald-200"
              value={inputs.username}
              onChange={(event) =>
                setInputs({ ...inputs, username: event.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="nickname">
              <span className="text-base label-text text-gray-300">
                Nickname
              </span>
            </label>
            <input
              name="nickname"
              type="text"
              placeholder="Your Nickname"
              className="w-full input input-bordered h-10 my-2 bg-neutral-900 text-emerald-200"
              value={inputs.nickname}
              onChange={(event) =>
                setInputs({ ...inputs, nickname: event.target.value })
              }
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
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 my-2 bg-neutral-900 text-emerald-200"
              value={inputs.password}
              onChange={(event) =>
                setInputs({ ...inputs, password: event.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="confirm_password">
              <span className="text-base label-text text-gray-300">
                Confirm Password
              </span>
            </label>
            <input
              name="confirm_password"
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10 my-2 bg-neutral-900 text-emerald-200"
              value={inputs.confirmPassword}
              onChange={(event) =>
                setInputs({ ...inputs, confirmPassword: event.target.value })
              }
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to="/login"
            className="text-sm text-gray-300 hover:underline hover:text-blue-600 mt-8 inline-block"
            href="#"
          >
            Already have an account?
          </Link>

          <div>
            <button
              type="submit"
              className="btn btn-block btn-sm mt-2 border-neutral-700 bg-emerald-200 hover:bg-neutral-950 hover:border-neutral-700 hover:text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
