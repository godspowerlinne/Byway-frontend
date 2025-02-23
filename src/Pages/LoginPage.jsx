import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import Login from '../Extras/Login'
import LoginImg from '/loginimg.png';


const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col lg:flex-row-reverse bg-gray-50 dark:bg-gray-900'>
        <div className="lg:w-[45%] flex items-center justify-center">
          <img
            src={LoginImg}
            alt="Login illustration"
            className="max-w-full h-auto shadow-lg"
          />
        </div>
        <div className="lg:w-[55%] p-4 lg:pl-14 flex flex-col items-center justify-center">
          <Login />
          <div className="mt-4 text-center">
            <Link to='/signup' className="text-blue-600 dark:text-blue-400 hover:underline">Don't have an account? Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage