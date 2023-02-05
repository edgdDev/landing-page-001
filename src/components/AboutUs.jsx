import React from 'react'
import { Col, Row } from 'reactstrap'
import logo from '../images/jedlogo.png'

const AboutUs = () => {
  return (
    <div className=' d-flex justify-content-center ms-3 me-3' style={{ marginTop: '7em' }} id='about' data-aos="zoom-in-up">
        <Col lg={6} md={12} className='about'>
            <h3 className='text-center mb-3 mb-5 sub-title'>Sobre nosotros</h3>
            <div className='text-center'>
              <img src={ logo } alt='Logo JED' width={210} height={210} />
            </div>
            <p>
              JED solution está formado por un equipo de jóvenes profesionales, Con deseosos de innovar en el mercado actual. 
              Brindando Soluciones en cada área de la tecnología, según las necesidades requeridas.
            </p>
            <p>
              Desarrollamos software y gestionamos los recursos necesarios para la implementación de soluciones tecnológicas a la medida. 
              Complementadas con servicios de soporte técnico y mantenimiento de equipo informático.
            </p>
            <p>
              En JED solution es una empresa independiente de desarrollo. Esta empresa surge debido al auge de demandas en el área de tecnología. 
              Nuestra meta es brindarle un sistema de calidad lo cual todo nuestro cliente se sienta satisfecho.
            </p>
        </Col>
    </div>
  )
}

export default AboutUs