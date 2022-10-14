import React, { useRef, useState } from 'react';
import { Button, Col, Form, Row, Overlay } from 'react-bootstrap';
import emailjs from "@emailjs/browser"

function FormFunctionality() {
    // const [formStatus, setFormStatus] = useState('Send')
    const [show, setShow] = useState(false);

    const form = useRef();
    const target = useRef(null)

    const onSubmit = (e) => {
        e.preventDefault()
       
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        
        const { formGridName, formGridEmail, ControlTextarea1 } = e.target.elements

        let conForm = {
            name: formGridName.value,
            email: formGridEmail.value,
            message: ControlTextarea1.value
        }
        console.log(conForm);
    }

    return (
        <Form onSubmit={onSubmit}>
            <Row className="mb-3">
                <Col md lg="3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Full Name" />
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
                    marginTop: '15px',
                    color: "#2C3639",
                    fontWeight: "bold"
                }}>
                    Email was sent successfully! I will respond as a soon as I can.
                </div>
            </Overlay>

        </Form>
    )
}
export default FormFunctionality 