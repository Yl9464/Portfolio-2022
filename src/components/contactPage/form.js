import React, { useRef} from 'react';
import { Button, Col, Form, Row} from 'react-bootstrap';
import emailjs from "@emailjs/browser"

function FormFunctionality() {

    const form = useRef();

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <Form ref={form} onSubmit={sendEmail}>
                <Row className="mb-3">
                <Col md lg="3">
                    <Form.Group as={Col} controlId="formGridName" >
                        <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="user_name"
                                placeholder="Full Name" />
                        </Form.Group>
                    </Col>
                    <Col md lg="3">
                        <Form.Group as={Col} >
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="user_email"
                                placeholder="Email" />
                        </Form.Group>
                    </Col>
                    </Row>

                    <Form.Group className="mb-3" >
                        <Form.Label>Your messesage</Form.Label>
                        <Form.Control
                            type="textarea"
                            name="message"
                            style={{ height: '110px', width: "50%" }} />
                        </Form.Group>

            <Button type="submit">Submit </Button>
            </Form>
    </div>
 );
};
       
export default FormFunctionality 

    // <label> Name</label>
    // <input type="text" name="user_name" />
    // <label>Email</label>
    // <input type="email" name="user_email" />
    // <label>Message</label>
    // <textarea name="message" />
    // <input type="submit" value="Send" />