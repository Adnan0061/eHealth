import React, { useState } from 'react';
import AboutImage from '../../Images/linkedin-sales-solutions-Be5aVKFv9ho-unsplash.jpg'
import { Button, Card, CardGroup, Carousel, Col, Container, Row } from 'react-bootstrap';
import { CameraVideo, FilePlus, People, PersonCheck, PlusSquareDotted, TelephoneInbound, Truck } from 'react-bootstrap-icons';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <>

            {/* Hero Section */}
            <section className='hero-section' style={{height: '75vh'}}>
            <div id='hero-overlay' className='h-100 d-flex align-items-center'>    
                <div className='container text-start text-light'>
                    <h1 style={{fontSize: '56px'}}>Welcome to <span style={{color:'#0dcaf0'}}>eHealth</span></h1>
                    <p className='fs-4 fw-light'>Your trusted one-stop online solution<br/>for your health care</p>
                    <Link to={'/doctors'}><Button className='me-3' variant="info">Find Doctor</Button></Link>
                    <Link to={'/order medicine'}><Button variant="warning">Get Medicine</Button></Link>
                </div>
            </div>
            </section>

            {/* About Us */}
            <section className='my-5'>
                <Container className='d-flex align-items-center'>
                <Row>
                    <Col sm={12} md={6}>
                        <img className='img-fluid' src={AboutImage} alt="" />
                    </Col>
                    <Col sm={12} md={6} className='ps-4 text-xs-center text-md-start align-self-center'>
                        <h2 className='fs-1'>what we do</h2>
                        <p>We provide you the best medical service from anywhere online. You can choose the doctor you want and solve your problem with a call. Also you will get medicine from same place. So no roaming around</p>
                    </Col>
                </Row>
                </Container>
            </section>

            {/* Our Services */}
            <section className='my-5'>
                <Container>
                    <h2 className='fs=1'>Our Services</h2>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        <Col>
                        <Card className='mx-3 border-0 h-100'>
                            <CameraVideo color="#0dcaf0" className='mt-5 ms-3' size={56} />
                            <Card.Body className='d-flex flex-column'>
                                <Card.Title className='me-auto'>Online Consultation</Card.Title>
                                <Card.Text className='text-start'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className='bg-transparent border-0'>
                                <Link to={'/online-consultation'}><Button variant="info" className='w-100'>Book Now</Button></Link>
                            </Card.Footer>
                        </Card>
                        </Col>

                        <Col>
                        <Card className='mx-3 border-0 h-100'>
                            <People color="#0dcaf0" className='mt-5 ms-3' size={56} />
                            <Card.Body className='d-flex flex-column'>
                                <Card.Title className='me-auto'>Physical Consultation</Card.Title>
                                <Card.Text className='text-start'>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className='bg-transparent border-0'>
                            <Link to={'/physical-consultation'}>
                                <Button variant="info" className='w-100'>Book Now</Button>
                            </Link>
                            </Card.Footer>
                        </Card>
                        </Col>

                        <Col>
                        <Card className='mx-3 border-0 h-100'>
                            <Truck color="#0dcaf0" className='mt-5 ms-3' size={56} />
                            <Card.Body className='d-flex flex-column'>
                            <Card.Title className='me-auto'>Medicine Home Delivery</Card.Title>
                            <Card.Text className='text-start'>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className='bg-transparent border-0'>
                            <Link to={'/order-medicine'}>
                                <Button variant="info" className='w-100'>Order Now</Button>
                            </Link>
                            </Card.Footer>
                        </Card>
                        </Col>

                        <Col>
                        <Card className='mx-3 border-0 h-100'>
                            <PlusSquareDotted  color="#0dcaf0" className='mt-5 ms-3' size={56} />
                            <Card.Body className='d-flex flex-column'>
                                <Card.Title  className='me-auto'>Emergency Ambulance</Card.Title>
                                <Card.Text className='text-start'>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. 
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className='bg-transparent border-0'>
                            <Link to={'/ambulance'}><Button variant="info" className='w-100'>Call Now</Button></Link>
                            </Card.Footer>
                        </Card>
                        </Col>
                        
                        <Col>
                        <Card className='mx-3 border-0 h-100'>
                            <TelephoneInbound  color="#0dcaf0" className='mt-5 ms-3' size={56} />
                            <Card.Body className='d-flex flex-column'>
                                <Card.Title  className='me-auto'>24/7 support</Card.Title>
                                <Card.Text className='text-start'>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. 
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className='bg-transparent border-0'>
                            <Link to={'/customer-care'}><Button variant="info" className='w-100'>Call Now</Button></Link>
                            </Card.Footer>
                        </Card>
                        </Col>
                        
                        <Col>
                        <Card className='mx-3 border-0 h-100'>
                            <FilePlus color="#0dcaf0" className='mt-5 ms-3' size={56} />
                            <Card.Body className='d-flex flex-column'>
                                <Card.Title  className='me-auto'>Health Care Insurance</Card.Title>
                                <Card.Text className='text-start'>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. 
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className='bg-transparent border-0'>
                            <Card.Footer className='bg-transparent border-0'>
                            <Link to={'/insurance-details'}><Button variant="info" className='w-100'>Call Now</Button></Link>
                            </Card.Footer>
                            </Card.Footer>
                        </Card>
                        </Col>

                    </Row>
                </Container>
            </section>

            {/* why us */}
            <section className='my-5'>
                <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <img className='img-fluid' src={AboutImage} alt="" />
                    </Col>
                    <Col sm={12} md={6} className='ps-4 text-xs-center text-md-start align-self-center'>
                        <h2 className='fs-1'>Choose Doctor</h2>
                        <p>We have amazing doctors who are one of the best in their respective field. You can choose your doctor according to your need and what their specialized sector. </p>
                        <Button variant="info">Doctors List</Button>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6} className='ps-4 text-xs-center text-md-start align-self-center'>
                        <h2 className='fs-1'>Online Or Physical</h2>
                        <p>You can choose for online session and get consultation from anywhere but incase your problem require physical session, you can also book for a session from here.</p>
                        <Button variant="info">Book Session</Button>
                    </Col>
                    <Col sm={12} md={6}>
                        <img className='img-fluid' src={AboutImage} alt="" />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6}>
                        <img className='img-fluid' src={AboutImage} alt="" />
                    </Col>
                    <Col sm={12} md={6} className='ps-4 text-xs-center text-md-start align-self-center'>
                        <h2 className='fs-1'>Insurance Policy Backed</h2>
                        <p>We are well protected and documented and insurance policy oriented. So you won't face any problem from your insurance</p>
                    </Col>
                </Row>
                </Container>
            </section>
            
        </>
    );
};

export default Home;
