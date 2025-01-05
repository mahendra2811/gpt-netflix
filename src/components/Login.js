import React from 'react'
import Header from './Header';
import { useState } from 'react';

const Login = () => {

  const [signIn, setSignIn] = useState(true);

  const toggleSignInForm = () => {
    setSignIn(!signIn);
  }

  return (
    <div className='' >
      <Header />
      <div className=' absolute top-0 left-0 z-[-1]' >
        <img
          className='overflow-hidden ' src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg" alt="bg image " />
      </div>
      <form className='relative top-[18vh] w-3/12 justify-center items-center text-white bg-black  mx-auto right-0 left-0 p-12 bg-opacity-80'  >

        <h1 className="font-bold mt-3 py-3 text-4xl left-0 uppercase   "> {signIn ? "Sign In" : "Sign Up"} </h1>


        {!signIn && (<input className='p-2 my-2  w-full bg-gray-500   rounded-lg' type="text" placeholder="Full Name" />)}


        <input className='p-2 my-2  w-full bg-gray-500    rounded-lg' type="text" placeholder="Email" />
        <input className='p-2 my-2 w-full bg-gray-500   rounded-lg  ' type="text" placeholder="Password" />
        {!signIn &&

          <input className='p-2 my-2 w-full bg-gray-500   rounded-lg  ' type="text" placeholder="Confirm Password" />
        }

        <button className='p-2 my-2 w-full bg-red-500 text-white rounded-lg hover:bg-red-700 '> {signIn ? "Sign In" : "Sign Up"} </button>
        <p className="signUp  cursor-pointer m-1 text-sm  " onClick={toggleSignInForm} >{signIn ? "New to netflx ? Sign Up now" : "Already Registered ? Sign In"}  </p>
      </form>


    </div>
  )
}

export default Login
