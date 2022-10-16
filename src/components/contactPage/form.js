import React, { useState, useRef} from 'react';
import { Button, Col, Form, Row} from 'react-bootstrap';
import emailjs from "@emailjs/browser"

function FormFunctionality() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [formStatus, setFormStatus] = useState('')

    const form = useRef();

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    
    function clearForm () {
        setName('')
        setEmail('')
        setMessage('')
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                setFormStatus('Email sent successfully! I will be in touch shortly 😁')
                clearForm()

            }).then(error => {
                console.log(error)
                clearForm()
            })
    }
           
    return (
        <div>
            <Form  ref={form} onSubmit={sendEmail}>
                <Row className="mb-3">
                <Col md lg="3">
                        <Form.Group as={Col} controlId="validationCustom03" >
                        <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="user_name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Full Name" 
                                required= {true}
                                />
                       
                        </Form.Group>
                    </Col>
                    <Col md lg="3">
                        <Form.Group as={Col} controlId="validationCustom04">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="user_email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email" 
                                required={true}
                                />
                          
                        </Form.Group>
                    </Col>
                    </Row>

                    <Form.Group className="mb-3" >
                        <Form.Label>Your messesage</Form.Label>
                        <Form.Control
                            type="textarea"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            style={{ height: '110px', width: "50%" }}
                            required={true}/>
                        </Form.Group>

            <Button type="submit">Submit </Button>
            </Form>
            <p className='formStatus'>{formStatus}</p>
    </div>
 );
};
       
export default FormFunctionality 

