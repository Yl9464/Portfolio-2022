import React, { useState } from 'react';
import { Button, Col, Form, Row} from 'react-bootstrap';
import emailjs from "@emailjs/browser"

function FormFunctionality() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [state, setState] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [formStatus, setFormStatus] = useState("");

    const handleChange = (e) => {
        const {name, email, message, value } = e.target
        setState((prevState) => ({ ...prevState, [name]: value, [email]: value, [message]: value }))      
    }

    const clearState = () => setState(state)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        console.log(name, email, message);
        
        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_I
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
        const userId = process.env.REACT_APP_EMAILJS_PUBLIC_KEY

        emailjs
            .sendForm(
                serviceId,
                templateId,
                e.target,
                userId
        )
            .then(
                (result) => {
                    console.log(result.text, result.status);
                    clearState()
                    setFormStatus("Email sent successfully!")
                },
                (error) => {
                    console.log(error.text);
                    setFormStatus(`${error.text} happened`)
                }
        )
    }
    
    return (
        <div> 
        <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Col md lg="3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Full Name" />
                    </Form.Group>
                </Col>
                <Col md lg="3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email" />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-3" controlId="ControlTextarea1">
                <Form.Label>Your messesage</Form.Label>
                <Form.Control
                    as="textarea"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    style={{ height: '110px', width: "50%" }}
                />
            </Form.Group>

            <Button
                type="submit"
                id="submitForm"
                onClick={() => handleChange}>
            Submit
            </Button>
            </Form>
            <p>{formStatus}</p> 
            </div>
    )
}
export default FormFunctionality 

    // < Overlay target = { target.current } show = { show } placement = "bottom" >
    //     <div style={{
    //         position: 'absolute',
    //         color: "#2C3639",
    //         paddingLeft: '260px',
    //         marginTop: '15px',
    //         fontWeight: "bold"
    //     }}>
    //         Email was sent successfully! I will respond as a soon as I can.
    //     </div>
    //         </Overlay >