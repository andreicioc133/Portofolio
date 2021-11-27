import React , {useState} from 'react'
import { Row, Col , Button , Form} from 'react-bootstrap'

function ContactForm() {

    const [formValues, setFormValues] = useState({
        email:'',
        name: '',
        message: ''
    })

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      }

    const handleChange = e => setFormValues({...formValues, [e.target.name]: e.target.value })
        

    const handleSubmit = e => {
            fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formValues})
            })
            .then(() => alert("Success!"))
            .catch(error => alert(error));
    
            e.preventDefault();
        };

    return (
        <Row className="rows">
            <Col Col xs={12} sm={12} md={12} lg={12} xxl={12} className="centeredColumn">
                <Form  name="contact" method="POST"  className = "contactForm" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                    {/* Name */}
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text"  name="name" placeholder="Full Name" className = "formRows" onChange={handleChange}/>
                    </Form.Group>
                    {/* Email */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" className = "formRows" onChange={handleChange}/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    {/* Password */}
                    <Form.Group className="mb-3" controlId="formDesc">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={4} name="message" className = "formRows" style={{fontSize:'1.1rem'}} onChange={handleChange}/>
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
