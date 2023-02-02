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
            <h1 data-aos="fade-up">JED Solution</h1>
            <p className='' data-aos="fade-up" data-aos-delay='400'>You got it, We too</p>
          </div>
        </div>
    </div>
  )
}

export default Header