import React , {useState} from 'react'
import { Row, Col , Button , Form} from 'react-bootstrap'

function ContactForm() {

    const handleChange = e => setFormValues({ ...formValues, [e.target.name]: e.target.value })
        const [formValues, setFormValues] = useState({
        email:'',
        name: '',
        message: ''
    })

    return (
        <Row className="rows">
            <Col Col xs={12} sm={12} md={12} lg={12} xxl={12} className="centeredColumn">
                <Form action="/contact" name="contact" method="POST" className = "contactForm" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" className = "formRows" onChange={handleChange}/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="input" placeholder="Full Name" className = "formRows" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDesc">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={4} className = "formRows" style={{fontSize:'1.1rem'}} onChange={handleChange}/>
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
