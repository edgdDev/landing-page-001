import { useState } from "react"
import { Button } from "@mui/material"
import { Card, CardBody, Col, Input, Label, Row } from "reactstrap"
import SendIcon from '@mui/icons-material/Send'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';


const initState = {
    user_name: '',
    user_tel: '',
    user_email: '',
    user_message: ''
}

const ContactUs = () => {

  const [user, setUser] = useState(initState)
  const [isLoading, setLoading] = useState(false)

  const handleForm = ({ key, value }) => setUser(s => ({ ...s, [key]: value }))

  const validationForm = () => {
    const { user_name, user_tel, user_email, user_message } = user
    if( user_name.length === 0 ) {
        return false
    }
    if( user_tel.length === 0 ) {
        return false
    }
    if( user_email.length === 0 ) {
        return false
    }
    if( user_message.length === 0 ) {
        return false
    }
    return true
  }

  const sendMessage = async (event) => {
    event.preventDefault()
    setLoading(true)

    if( !validationForm() ) {
        setLoading(false)
        return toast.warn('Debes de completar todos los campos correctamente.', { autoClose: 3000 })
    }

    const { status } = await emailjs.sendForm('service_529o1k7', 'template_abdtz3i', event.target, '3DswzkQeKSM9jUrSc')

    if ( status === 200 ) {
        setLoading(false)
        return toast.success('¡Mensaje enviado exitosamente!', { autoClose: 3000 })
    }
    setLoading(false)
    return toast.error('Ha ocurrido un error. Intente más tarde.', { autoClose: 3000 })
  }

  return (
    <div className='d-flex justify-content-center' style={{ marginTop: '7em' }} id='contact' data-aos="zoom-out-down">
        <Col lg={6} md={12} className=''>
            <h3 className="text-center mb-3">Contáctanos</h3>
            <form onSubmit={ sendMessage }>

            <Card>
                <CardBody>
                    <Row>
                        <Col lg={6} md={12}>
                            <Label>Nompre completo</Label>
                            <Input 
                                type="text"
                                name="user_name"
                                onChange={({ target }) => handleForm({ key: target.name, value: target.value })}
                            />
                        </Col>
                        <Col lg={6} md={12}>
                            <Label>Teléfono </Label>
                            <Input 
                                type="number"
                                name="user_tel"
                                onChange={({ target }) => handleForm({ key: target.name, value: target.value })}
                            />
                        </Col>
                    </Row>
                    <Row className="mt-1">
                        <Col lg={6} md={12}>
                            <Label>Email</Label>
                            <Input 
                                type="email"
                                name="user_email"
                                onChange={({ target }) => handleForm({ key: target.name, value: target.value })}
                            />
                        </Col>
                        <Col lg={12} md={12} className='mt-2'>
                            <Input 
                                type="textarea"
                                name="user_message"
                                onChange={({ target }) => handleForm({ key: target.name, value: target.value })}
                                style={{ height: '161px' }}
                            />
                        </Col>
                        <div className="mt-2">
                            <Button variant="contained" type='submit' disabled={ isLoading }>
                                { isLoading? 'Enviando...' : 'Enviar' }
                                {
                                !isLoading && <SendIcon className="ms-1" />    
                                }
                            </Button>
                            {/* <ToastContainer /> */}
                        </div>
                    </Row>
                </CardBody>
            </Card>
            </form>
        </Col>
    </div>
  )
}

export default ContactUs
