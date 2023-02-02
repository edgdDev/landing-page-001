import { Col, Row } from "reactstrap"
import card1 from '../images/card1.png'
import card1_1 from '../images/card1_1.jpg'
import card2 from '../images/card2.png'
import card2_2 from '../images/card2_2.jpg'
import card3 from '../images/card3.png'
import card3_3 from '../images/card3_3.jpg'
import card4 from '../images/card4.png'
import card4_4 from '../images/card4_4.png'

const Cards = () => {
  return (
    <div className="ms-3 me-3" style={{ marginTop: '7em' }} id='cards'>
        <div className=' d-flex justify-content-center'>
            <Col lg={6} md={12} className=''>
                <h3 className="text-center sub-title" data-aos='fade-up-right'>Facilidades</h3>
            </Col>
        </div>
        <Row className="mt-5">
            <Col lg={12} md={ 12 } sm={12} className='d-flex justify-content-center flex-wrap' data-aos="fade-up-right" data-aos-delay='200'>
                <div className="_card">
                    <div className="text-center mb-5">
                        <img 
                            src={ card1 }
                            width={ 120 }
                            height={ 120 }        
                        />
                    </div>
                    <p className="card-text">
                        Ofrecer a nuestros clientes diferentes soluciones de software que le ayudarán a controlar y automatizar todos 
                        los aspectos administrativos, productivos y de ejecución de su empresa. Invertir en un buen software los hará más 
                        eficientes, tratando de maximizar el uso de su tiempo de recursos, incluidos los recursos financieros, humanos y 
                        materiales, para lograr sus objetivos.
                    </p>
                </div>
                <div className="" style={{ width: '750px', height: '500px', marginLeft: '5em' }}>
                    <img 
                        src={ card1_1 }
                        className='img_card'
                    />
                </div>
            </Col>
            <Col lg={12} md={ 12 } sm={12} className='d-flex justify-content-center flex-wrap mt-5' data-aos="fade-up-left" data-aos-delay='200'>
                <div className="" style={{ width: '750px', height: '500px', marginRight: '5em' }}>
                    <img 
                        src={ card2_2 }
                        className='img_card'
                    />
                </div>
                <div className="_card">
                    <div className="text-center mb-5">
                        <img 
                            src={ card2 }
                            width={ 120 }
                            height={ 120 }        
                        />
                    </div>
                    <p className="card-text">
                        Nuestros sistemas cuentan con los más modernos diseños UX/UI, para brindar una experiencia de usuario única y satisfactoria. 
                        Trabajamos con los framework react y NextJS, también con herramientas como figma y canvas. Con estas tecnologías damos una experiencia en software más friendly para el usuario. 
                    </p>
                </div>
              
            </Col>
            <Col lg={12} md={ 12 } sm={12} className='d-flex justify-content-center flex-wrap mt-5' data-aos="fade-up-right" data-aos-delay='200'>
                <div className="_card">
                    <div className="text-center mb-5">
                        <img 
                            src={ card3 }
                            width={ 120 }
                            height={ 120 }        
                        />
                    </div>
                    <p className="card-text">
                        La seguridad es algo primordial para estos tiempos, manejamos distintas herramientas para cumplir con los más altos estándares de seguridad y privacidad de nuestros clientes, 
                        fortaleciendo nuestros servicios.
                    </p>
                </div>
                <div className="" style={{ width: '720px', height: '500px', marginLeft: '5em' }}>
                    <img 
                        src={ card3_3 }
                        className='img_card'
                    />
                </div>
            </Col>
            <Col lg={12} md={ 12 } sm={12} className='d-flex justify-content-center flex-wrap mt-5' data-aos="fade-up-left" data-aos-delay='200'>
                <div className="" style={{ width: '750px', height: '500px', marginRight: '5em' }}>
                    <img 
                        src={ card4_4 }
                        className='img_card'
                    />
                </div>
                <div className="_card">
                    <div className="text-center mb-5">
                        <img 
                            src={ card4 }
                            width={ 120 }
                            height={ 120 }        
                        />
                    </div>
                    <p className="card-text">
                        Multiplataforma nos caracterizamos en brindar soluciones tecnológicas en cualquier sistema operativo, llevando nuestros servicios a donde el cliente guste sin ninguna limitación o frontera.
                         Trabajamos distintas áreas de desarrollo como son mobile, web y desktop. 
                    </p>
                </div>
              
            </Col>
        </Row>
    </div>
  )
}

export default Cards