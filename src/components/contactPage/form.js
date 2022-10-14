import React, { useRef, useState } from 'react';
import { Button, Col, Form, Row, Overlay } from 'react-bootstrap';
import emailjs from "@emailjs/browser"

function FormFunctionality() {

    const [show, setShow] = useState(false);
    const form = useRef();
    const target = useRef(null)

    const onSubmit = (e) => {
        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
        const userId = process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        
        e.preventDefault()
        
        emailjs.send(serviceId, templateId, form.current, userId)
            .then(result => console.log(result))
            .then(error => console.log(error))
        
            form.reset()
        }
    
    return (
        <Form onSubmit={onSubmit} >
            <Row className="mb-3">
                <Col md lg="3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control  type="text" placeholder="Full Name" />
                    </Form.Group>
                </Col>
                <Col md lg="3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-3" controlId="ControlTextarea1">
                <Form.Label>Your messesage</Form.Label>
                <Form.Control as="textarea" style={{ height: '110px', width: "50%" }}
                />
            </Form.Group>

            <Button ref={target} type="submit" onClick={() => setShow(!show)}>
                Submit
            </Button>
            <Overlay target={target.current} show={show} placement="bottom">
                <div style={{
                    position: 'absolute',
                    color: "#2C3639",
                    paddingLeft: '260px',
                    marginTop: '15px',
                    fontWeight: "bold"
                }}>
                    Email was sent successfully! I will respond as a soon as I can.
                </div>
            </Overlay>

        </Form>
    )
}
export default FormFunctionality 