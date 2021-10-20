import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

const MedicineDelivared = () => {
    return (
        <div className='my-5'>
            <Container>
                <h1>Get Your Medicine Delivered at Home</h1>
                <p>To get medicine, fill the form with your prescription</p>
            <Row className="justify-content-md-center">
                <Col xs md='9' lg='6'>
                    <Form className='text-start'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='me-auto'>Name</Form.Label>
                        <Form.Control type="text" placeholder="Adnan Ahmed" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your contact no.</Form.Label>
                        <Form.Control type="tel" placeholder="01911234567" />
                    </Form.Group>
                    <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Label>Prescriptions</Form.Label>
                        <Form.Control type="file" multiple />
                    </Form.Group>
                    <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Label>Desired Delivery Date</Form.Label>
                        <Form.Control type="date" placeholder="01911234567" />
                    </Form.Group>
                    <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Label>Desired Delivery Time</Form.Label>
                        <Form.Control type="time" placeholder="01911234567" />
                    </Form.Group>
                
                    {/* <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label>Select time</Form.Label>
                    <Form.Select>
                        <option>Default select</option>
                        <option>2:00 PM</option>
                        <option>2:30 PM</option>
                        <option>3:00 PM</option>
                        <option>3:30 PM</option>
                        <option>4:00 PM</option>
                        <option>4:30 PM</option>
                        <option>5:00 PM</option>
                        <option>5:30 PM</option>
                        <option>6:00 PM</option>
                        <option>6:30 PM</option>
                        <option>7:00 PM</option>
                    </Form.Select>
                    </Form.Group> */}
                    <Button variant="info" type="submit">
                        Submit
                    </Button>
                    </Form>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default MedicineDelivared;