import React from 'react'
import NavbarMenu from './Navbar'
import '../styles/header.css'

const Header = () => {
  return (
    <div className='full' style={{ height: '50em' }}>
        <NavbarMenu />
        <div className='full-inner'>
          <div className='content'>
            <h1>Lorem Ipsum</h1>
          </div>
        </div>
    </div>
  )
}

export default Header