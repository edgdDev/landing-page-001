import { useState } from "react"
import { Button, TextField } from "@mui/material"
import { Card, CardBody, Col, Input, Row } from "reactstrap"
import SendIcon from '@mui/icons-material/Send'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify';


const initState = {
    user_name: '',
    user_tel: '',
    user_email: '',
    user_message: ''
}

const ContactUs = () => {

  const [user, setUser] = useState(initState)
  const [isLoading, setLoading] = useState(false)
  const [hasError, setError] = useState({ id: 0, message: '' })

  const handleForm = ({ key, value }) => setUser(s => ({ ...s, [key]: value }))

  const validationForm = () => {
    const { user_name, user_tel, user_email, user_message } = user
    if( user_name.length === 0 ) {
        setError({ id: 1, message: 'Debe digitar su nombre' })
        return false
    }
    if( user_tel.length === 0 ) {
        setError({ id: 2, message: 'Debe digitar su número de teléfono' })
        return false
    }
    if( user_tel.length !== 10 ) {
        setError({ id: 2, message: 'Debe digitar número de teléfono válido' })
        return false
    }
    if( isNaN(user_tel) ) {
        setError({ id: 2, message: 'Debe digitar número de teléfono válido' })
        return false
    }
    if( user_email.length === 0 ) {
        setError({ id: 3, message: 'Debe digitar su email' })
        return false
    }
    if( !user_email.includes('@') ) {
        setError({ id: 3, message: 'Debe digitar un email válido' })
        return false
    }
    if( user_message.length === 0 ) {
        setError({ id: 4, message: 'Debe de completar este campo' })
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
        setError({ id: 0, message: '' })
        setUser(initState)
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
                            <TextField
                                label='Nombre completo'
                                variant="standard"
                                error={ hasError.id === 1? true : false } 
                                helperText={ hasError.id === 1? hasError.message : '' }
                                name="user_name"
                                onChange={({ target }) => handleForm({ key: target.name, value: target.value })}
                                value={ user.user_name }
                                disabled={ isLoading }
                                fullWidth
                            />
                        </Col>
                        <Col lg={6} md={12}>
                            {/* <Label>Teléfono </Label> */}
                            <TextField 
                                // type="number"
                                label='Teléfono'
                                variant="standard"
                                error={ hasError.id === 2? true : false } 
                                helperText={ hasError.id === 2? hasError.message : '' }
                                name="user_tel"
                                onChange={({ target }) => handleForm({ key: target.name, value: target.value })}
                                value={ user.user_tel }
                                disabled={ isLoading }
                                fullWidth
                                inputProps={{ maxLength: 10 }}
                            />
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col lg={6} md={12}>
                            {/* <Label>Email</Label> */}
                            <TextField 
                                // type="email"
                                label='Email'
                                variant='standard'
                                error={ hasError.id === 3? true : false } 
                                helperText={ hasError.id === 3? hasError.message : '' }
                                name="user_email"
                                onChange={({ target }) => handleForm({ key: target.name, value: target.value })}
                                value={ user.user_email }
                                disabled={ isLoading }
                                fullWidth
                            />
                        </Col>
                        <Col lg={12} md={12} className='mt-2'>
                            <TextField 
                                // type="textarea"
                                name="user_message"
                                onChange={({ target }) => handleForm({ key: target.name, value: target.value })}
                                value={ user.user_message }
                                disabled={ isLoading }
                                variant='outlined'
                                multiline
                                rows={ 5 }
                                fullWidth
                                error={ hasError.id === 4? true : false } 
                                helperText={ hasError.id === 4? hasError.message : '' }
                                // style={{ height: '161px' }}
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
