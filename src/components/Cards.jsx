import { Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from "reactstrap"


const Cards = () => {
  return (
    <div className="" style={{ marginTop: '7em' }} id='cards'>
        <div className=' d-flex justify-content-center'>
        <Col lg={6} md={12} className=''>
            <h3 className="text-center" data-aos='fade-up-right'>Facilidades</h3>
        </Col>
        </div>
        <Row className="mt-3 d-flex justify-content-center">
            <Col lg={2} md={4} sm={6}>
                <Card className='mt-3' data-aos="flip-left">
                    <CardImg 
                        alt="image prueba"
                        src="https://picsum.photos/300/200"
                        height={220}
                    />
                    <CardBody>
                        <CardTitle>
                            Card 1
                        </CardTitle>
                        <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                        galley of type and scrambled it to make a type specimen book.
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col lg={2} md={4} sm={6}>
                <Card className='mt-3' data-aos="flip-left">
                    <CardImg 
                        alt="image prueba"
                        src="https://picsum.photos/300/200"
                        height={220}
                    />
                    <CardBody>
                        <CardTitle>
                            Card 2
                        </CardTitle>
                        <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                        galley of type and scrambled it to make a type specimen book.
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col lg={2} md={4} sm={6}>
                <Card className='mt-3' data-aos="flip-left">
                    <CardImg 
                        alt="image prueba"
                        src="https://picsum.photos/300/200"
                        height={220}
                    />
                    <CardBody>
                        <CardTitle>
                            Card 3
                        </CardTitle>
                        <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                        galley of type and scrambled it to make a type specimen book.
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col lg={2} md={4} sm={6}>
                <Card className='mt-3' data-aos="flip-left">
                    <CardImg 
                        alt="image prueba"
                        src="https://picsum.photos/300/200"
                        height={220}
                    />
                    <CardBody>
                        <CardTitle>
                            Card 4
                        </CardTitle>
                        <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                        galley of type and scrambled it to make a type specimen book.
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </div>
  )
}

export default Cards