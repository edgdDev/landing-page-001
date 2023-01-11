import React from 'react'
import { Col, Row } from 'reactstrap'

const AboutUs = () => {
  return (
    <div className=' d-flex justify-content-center mt-3'>
        <Col lg={6} md={12} className=''>
            <h3>Sobre nosotros</h3>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text ever 
                since the 1500s, when an unknown printer took a galley of type and 
                scrambled it to make a type specimen book. It has survived not only 
                five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with 
                the release of Letraset sheets containing Lorem Ipsum passages, and
                more recently with desktop publishing software like Aldus PageMaker 
                including versions of Lorem Ipsum.
            </p>
        </Col>
    </div>
  )
}

export default AboutUs