import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';

const OnlineSession = (props) => {
    const {name} = useParams()
    return (
        <div className='my-5'>
            <Container>
                <h1>Welcome to <b>{name}</b>'s online chamber</h1>
                <p>To book session, fill the form</p>
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
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Contact No.</Form.Label>
                        <Form.Control type="tel" placeholder="01911234567" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Problem</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="a short mention of your problem" />
                    </Form.Group>
                    <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Label>Previous prescriptions and reports</Form.Label>
                        <Form.Control type="file" multiple />
                    </Form.Group>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                            inline
                            label="Online Session"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                        />
                        <Form.Check
                            inline
                            label="Physical Session"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        </div>
                    ))}
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Select Date</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                    <Form.Group controlId="formFileMultiple" className="mb-3">
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
                    </Form.Group>
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

export default OnlineSession;