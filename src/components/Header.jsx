import React from 'react'
import NavbarMenu from './Navbar'
import '../styles/header.css'

const Header = () => {
  return (
    // <div className='full border' style={{ height: '50em',  }} id='home'>
    <div className='full' id='home'>
        <NavbarMenu />
        <div className='full-inner'>
          <div className='content'>
            <h1>JED Solution</h1>
            <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
        </div>
    </div>
  )
}

export default Header