import React from 'react';
import { Col, Container, Row, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AboutImage from '../../Images/linkedin-sales-solutions-Be5aVKFv9ho-unsplash.jpg'

const Ambulance = () => {
    return (
        <div c>
            {/* Hero Section */}
            <section className='hero-section' style={{height: '75vh'}}>
            <div id='hero-overlay' className='h-100 d-flex align-items-center'>    
                <div className='container text-start text-light'>
                    <h1 style={{fontSize: '56px'}}>Get emergency Ambulance <span style={{color:'#0dcaf0'}}>24/7</span></h1>
                    <p className='fs-4 fw-light'>Call to our customer care number number or<br/>fill the form to get ambulance at your doorsteps.</p>
                    <Link to={'/doctors'}><Button className='me-3' variant="info">Find Doctor</Button></Link>
                    
                </div>
            </div>
            </section>

            {/* Details Form */}
            <section className='my-5'>
                <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <img className='img-fluid' src={AboutImage} alt="" />
                    </Col>
                    <Col sm={12} md={6} className='ps-4 text-xs-center text-md-start align-self-center'>
                        <h2 className='fs-1'>Emergency Number 01911234567</h2>
                        <p>Call anytime at this number and an ambulance will be at your doorstep with in 30 min</p>
                    </Col>
                </Row>

                <Row className="justify-content-md-center my-5">
                <Col xs md='9' lg='6'>
                    <h2>Fill the form</h2>
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

export default Ambulance;