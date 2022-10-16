import React, { useState } from 'react';
import { Button, Col, Form, Row} from 'react-bootstrap';
import emailjs from "@emailjs/browser"

function FormFunctionality() {

    const initialState = {
        name: '',
        email: '',
        message: ''
    }
    const [{ name, email, message }, setState] = useState(initialState);
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (e) => {
        const {name, value} = e.target
        setState((prevState) => ({ ...prevState, [name]: value }))
            
    }
    const clearState = () => setState({ ...initialState })
    
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
                    setStatusMessage("Email sent successfully!")
                },
                (error) => {
                    console.log(error.text);
                    setStatusMessage("Sorry, email was not sent because an error has occured")
                }
        )
    }
    
    return (
        <Form onSubmit={handleSubmit} >
            <Row className="mb-3">
                <Col md lg="3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} placeholder="Full Name" />
                    </Form.Group>
                </Col>
                <Col md lg="3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} placeholder="Email" />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-3" controlId="ControlTextarea1">
                <Form.Label>Your messesage</Form.Label>
                <Form.Control as="textarea" value={message} style={{ height: '110px', width: "50%" }}
                />
            </Form.Group>

            <Button type="submit" onClick={() => handleChange}>
            Submit
            </Button>
            <p>{statusMessage}</p> 

        </Form>
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