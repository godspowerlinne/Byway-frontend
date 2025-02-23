import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import Signup from '../Extras/Signup'
import SignupImg from '/signupimg.png';


const SignupPage = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col lg:flex-row bg-gray-50 dark:bg-gray-900'>
        <div className="lg:w-[45%] flex items-center justify-center">
          <img
            src={SignupImg}
            alt="Signup illustration"
            className="max-w-full h-auto shadow-lg"
          />
        </div>
        <div className="lg:w-[55%] p-4 lg:pr-14 flex flex-col items-center justify-center">
          <Signup />
          <Link to='/login' className="text-blue-600 dark:text-blue-400 hover:underline">Already have an account? Sign In</Link>
        </div>
      </div>
    </>
  )
}

export default SignupPage