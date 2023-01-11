import { Button } from "@mui/material"
import { Card, CardBody, Col, Input, Label, Row } from "reactstrap"

const ContactUs = () => {
  return (
    <div className='d-flex justify-content-center mt-4'>
        <Col lg={6} md={12} className=''>
            <h3>Contáctanos</h3>
            <Card>
                <CardBody>
                    <Row>
                        <Col lg={6} md={12}>
                            <Label>Nompre completo</Label>
                            <Input 
                                type="text"
                            />
                        </Col>
                        <Col lg={6} md={12}>
                            <Label>Teléfono </Label>
                            <Input 
                                type="number"
                            />
                        </Col>
                    </Row>
                    <Row className="mt-1">
                        <Col lg={6} md={12}>
                            <Label>Email</Label>
                            <Input 
                                type="email"
                            />
                        </Col>
                        <Col lg={12} md={12} className='mt-2'>
                            <Input 
                                type="textarea"
                                style={{ height: '161px' }}
                            />
                        </Col>
                        <div className="mt-2">
                            <Button variant="contained">
                                Enviar
                            </Button>
                        </div>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    </div>
  )
}

export default ContactUs
