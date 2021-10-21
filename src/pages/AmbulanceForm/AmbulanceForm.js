import React from 'react';
import { Col, Container, Row, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AboutImage from '../../Images/linkedin-sales-solutions-Be5aVKFv9ho-unsplash.jpg'
const AmbulanceForm = () => {
    return (
        <div>
             <section className='my-5'>
                <Container>
                <Row className="justify-content-md-center my-5">
                <Col xs md='9' lg='6'>
                    <h2>Fill the form for ambulance</h2>
                    <Form className='text-start'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='me-auto'>Name</Form.Label>
                        <Form.Control type="text" placeholder="Adnan Ahmed" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Contact No.</Form.Label>
                        <Form.Control type="tel" placeholder="01911234567" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Details Address</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="a short mention of your problem" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Select Date</Form.Label>
                        <Form.Control type="time" />
                    </Form.Group>
                    <Button variant="info" type="submit">
                        Submit
                    </Button>
                    </Form>
                </Col>
                </Row>

                </Container>
            </section>
        </div>
    );
};

export default AmbulanceForm;