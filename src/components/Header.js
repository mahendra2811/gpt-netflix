import React from 'react'
import logo from '../assets/images/logo.png';
const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black  z-99 ' >
      <div>
      <img 
      className='w-[10vw] cursor-pointer   ' src={logo} alt="logo" />
      </div>
    </div>
  )
}

export default Header

