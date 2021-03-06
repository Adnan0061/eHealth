import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import AboutImage from '../../Images/linkedin-sales-solutions-Be5aVKFv9ho-unsplash.jpg'
import { Link } from 'react-router-dom';

const CustomerCare = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className='hero-section' style={{height: '75vh'}}>
            <div id='hero-overlay' className='h-100 d-flex align-items-center'>    
                <div className='container text-start text-light'>
                    <h1 style={{fontSize: '56px'}}>Our customer care is <span style={{color:'#0dcaf0'}}>open 24/7</span></h1>
                    <p className='fs-4 fw-light'>For any support and emergency call our help Line <span style={{color:'#0dcaf0', fontWeight:'700'}}>16247</span> <br/>We are here to help</p>                    
                </div>
            </div>
            </section>

            {/* why us */}
            {/* <section className='my-5'>
                <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <img className='img-fluid' src={AboutImage} alt="" />
                    </Col>
                    <Col sm={12} md={6} className='ps-4 text-xs-center text-md-start align-self-center'>
                        <h2 className='fs-1'>Flexibility to Choose</h2>
                        <p>We are well protected and documented and insurance policy oriented. So you won't face any problem from your insurance</p>
                    </Col>
                </Row>

                <Row>
                    <Col sm={12} md={6} className='ps-4 text-xs-center text-md-start align-self-center'>
                        <h2 className='fs-1'>Text file upload</h2>
                        <p>You can choose for online session and get consultation from anywhere but incase your problem require physical session, you can also book for a session from here.</p>
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
                        <h2 className='fs-1'>Easy Appointment</h2>
                        <p>We have amazing doctors who are one of the best in their respective field. You can choose your doctor according to your need and what their specialized sector. </p>
                    </Col>
                </Row>

                <Row className='my-5'>       
                <Link to={'/doctors'}><Button variant="info">Doctors List</Button></Link>
                </Row>

                </Container>
            </section> */}
        </div>
    );
};

export default CustomerCare;