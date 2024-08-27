// import { useState } from "react";
// import { Link } from "react-router-dom";
// import useSignUp from "../../hooks/useSignUp"

const SignUp = () => {
  // const [inputs, setInputs] = useState({
	// 	username: "",
  //   nickname: "",
	// 	password: "",
	// 	confirmPassword: "",
	// 	gender: "",
	// })

  // const [loading, login] = useSignUp()

  return (
    <div className="flex flex-col h-full items-center justify-center max-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-gray-300 mb-8">
          Sign Up <span className="text-emerald-200"> ChatApp</span>
        </h1>

        <form action="">
          <div>
            <label htmlFor="username">
              <span className="text-base label-text text-gray-300"> Username</span>
            </label>
            <input
              name="username"
              type="text"
              placeholder="Your Username"
              className="w-full input input-bordered h-10 my-2 bg-neutral-900 text-white"
            />
          </div>

          <div>
            <label htmlFor="nickname">
              <span className="text-base label-text text-gray-300">Nickname</span>
            </label>
            <input
              name="nickname"
              type="text"
              placeholder="Your Nickname"
              className="w-full input input-bordered h-10 my-2 bg-neutral-900 text-white"
            />
          </div>

          <div>
						<label htmlFor="password">
							<span className='text-base label-text text-gray-300'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className="w-full input input-bordered h-10 my-2 bg-neutral-900 text-white"
						/>
					</div>

          <div>
						<label htmlFor="confirm_password">
							<span className='text-base label-text text-gray-300'>Confirm Password</span>
						</label>
						<input
              name="confirm_password"
							type='password'
							placeholder='Confirm Password'
							className="w-full input input-bordered h-10 my-2 bg-neutral-900 text-white"
						/>
					</div>

          {/* <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} /> */}

          <a
						to={"/login"}
						className='text-sm text-gray-300 hover:underline hover:text-blue-600 mt-8 inline-block'
						href='#'
					>
						Already have an account?
					</a>

          <div>
						{/* <button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button> */}
            <button className="btn btn-block btn-sm mt-2 border-neutral-700 bg-emerald-200 hover:bg-neutral-950 hover:border-neutral-700 hover:text-white">Sign Up</button>
					</div>
          
        </form>
      </div>
    </div>
  );
};

export default SignUp;
