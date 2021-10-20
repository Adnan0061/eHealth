import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AboutImage from '../../Images/linkedin-sales-solutions-Be5aVKFv9ho-unsplash.jpg'

const PhysicalDetails = () => {
    return (
        <div>
                        {/* Hero Section */}
                        <section className='hero-section' style={{height: '75vh'}}>
            <div id='hero-overlay' className='h-100 d-flex align-items-center'>    
                <div className='container text-start text-light'>
                    <h1 style={{fontSize: '56px'}}>Book practical consultation session <span style={{color:'#0dcaf0'}}>online</span></h1>
                    <p className='fs-4 fw-light'>According to your need you can meet doctors on chambers</p>
                    <Link to={'/doctors'}><Button className='me-3' variant="info">Find Doctor</Button></Link>
                    
                </div>
            </div>
            </section>

            {/* why us */}
            <section className='my-5'>
                <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <img className='img-fluid' src={AboutImage} alt="" />
                    </Col>
                    <Col sm={12} md={6} className='ps-4 text-xs-center text-md-start align-self-center'>
                        <h2 className='fs-1'>Choose by location</h2>
                        <p>We are well protected and documented and insurance policy oriented. So you won't face any problem from your insurance</p>
                    </Col>
                </Row>

                <Row>
                    <Col sm={12} md={6} className='ps-4 text-xs-center text-md-start align-self-center'>
                        <h2 className='fs-1'>Plan for meeting</h2>
                        <p>You can choose for online session and get consultation from anywhere but incase your problem require physical session, you can also book for a session from here.</p>
                    </Col>
                    <Col sm={12} md={6}>
                        <img className='img-fluid' src={AboutImage} alt="" />
                    </Col>
                </Row>



                <Row className='my-5'>       
                <Link to={'/doctors'}><Button variant="info">Doctors List</Button></Link>
                </Row>

                </Container>
            </section>
        </div>
    );
};

export default PhysicalDetails;