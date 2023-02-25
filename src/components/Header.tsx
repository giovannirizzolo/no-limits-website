import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='flex justify-center align-center px-8'>
        <Logo width={64} height={64}/>
        <Navbar />
        {/* <NavIcons />
        <HeaderCTA /> */}
    </div>
  )
}

export default Header