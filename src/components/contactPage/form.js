import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function FormFunctionality () {
    const [formStatus, setFormStatus] = useState('Send')

    const onSubmit = (e) => {
        e.preventDefault()

        setFormStatus('Submitting...')
        const { name, email, message } = e.target.elements

        let conForm = {
            name: name.value,
            email: email.value,
            message: message.value
        }
        console.log(conForm);
    }

    return (
        <Form  onSubmit={onSubmit}>
            <Row className="mb-3">
                <Col md lg="3">
                    <Form.Group as={Col} controlId="formGridEmail">
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
                <Form.Control as="textarea"  style={{ height: '110px', width: "50%" }}
                />
            </Form.Group>

            <Button type="submit">
                {formStatus}
            </Button>
        </Form>
)
}
export default FormFunctionality 