import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div style={{
            display: 'block',
            marginLeft: '25rem',
            fontWeight: 'bolder',
            marginTop: '40px'
        }}>
        
        <Form className="contactForm w-50"ref={form} onSubmit={sendEmail}>
            <Row className="mb-3"> 
                    <Form.Group  as={Col} controlId="formGridEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control  type="text" placeholder="First & Last Name" />
                    </Form.Group>
                
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
            </Row>

            <Form.Group  className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your messesage</Form.Label>
                <Form.Control as="textarea" rows={3}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
    </div>

    )
}
export default ContactForm


