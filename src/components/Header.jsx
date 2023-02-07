import React from 'react'
import NavbarMenu from './Navbar'
import '../styles/header.css'

const Header = () => {
  return (
    // <div className='full' id='home'>
    <div className='banner' id='home'>
        <NavbarMenu />
        <div className="capa"></div>
        <div className="info" data-aos="fade-up">
          <h1>Bienvenidos a <br></br>JED SOLUTION</h1>
          <p>
            'You got it, We too'. No importa que tan complejo y difícil sea el proyecto. Nosotros te ayudamos y aceptamos el desafío. ¿Te atreves? 
          </p>
          <a href='#contact'>Contáctanos</a>
        </div>
        {/* <div className='full-inner'>
          <div className='content'>
            <h1 data-aos="fade-up">JED Solution</h1>
            <p className='' data-aos="fade-up" data-aos-delay='400'>You got it, We too</p>
          </div>
        </div> */}
    </div>
  )
}

export default Header