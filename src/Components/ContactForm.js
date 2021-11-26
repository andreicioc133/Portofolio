import React from 'react'
import { Row, Col , Button , Form} from 'react-bootstrap'

function ContactForm() {
    return (
        <Row className="rows">
            <Col Col xs={12} sm={12} md={12} lg={12} xxl={12} className="centeredColumn">
                <Form action="/contact" name="contact" method="post" className = "contactForm">
                <input type="hidden" name="form-name" value="contact" />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" className = "formRows"/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="input" placeholder="Full Name" className = "formRows"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDesc">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={4} className = "formRows" style={{fontSize:'1.1rem'}} />
                    </Form.Group>
                    <Button variant="outline-secondary" className="buttonHeader" type="submit" >
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    )
}

export default ContactForm
