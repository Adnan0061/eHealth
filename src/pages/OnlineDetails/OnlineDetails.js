import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { CameraVideo, FilePlus, People, PlusSquareDotted, TelephoneInbound, Truck } from 'react-bootstrap-icons';
import choose from '../../Images/pexels-gustavo-fring-3985163.jpg'
import upload from '../../Images/pexels-cottonbro-3584969.jpg'
import appointment from '../../Images/pexels-nataliya-vaitkevich-6863323.jpg'
import { Link } from 'react-router-dom';

const OnlineDetails = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className='hero-section' style={{height: '75vh'}}>
            <div id='hero-overlay' className='h-100 d-flex align-items-center'>    
                <div className='container text-start text-light'>
                    <h1 style={{fontSize: '56px'}}>Get your healthcare <span style={{color:'#0dcaf0'}}>online</span></h1>
                    <p className='fs-4 fw-light'>Your trusted one-stop online solution<br/>for your health care</p>
                    <Link to={'/doctors'}><Button className='me-3' variant="info">Find Doctor</Button></Link>
                    
                </div>
            </div>
            </section>

            {/* why us */}
            <section className='my-5'>
                <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <img className='img-fluid' src={choose} alt="" />
                    </Col>
                    <Col sm={12} md={6} className='ps-4 text-xs-center text-md-start align-self-center'>
                        <h2 className='fs-1'>Flexibility to Choose</h2>
                        <p>You can now get consultation from doctor of your choice from anywhere anytime. No need to make extra plan for this.</p>
                    </Col>
                </Row>

                <Row>
                    <Col sm={12} md={6} className='ps-4 text-xs-center text-md-start align-self-center'>
                        <h2 className='fs-1'>Upload files</h2>
                        <p>You can send images of your previous prescriptions and reports when you make appointment. With this doctors can see your previous reports and conditions amd take proper matures.</p>
                    </Col>
                    <Col sm={12} md={6}>
                        <img className='img-fluid' src={upload} alt="" />
                    </Col>
                </Row>

                <Row>
                    <Col sm={12} md={6}>
                        <img className='img-fluid' src={appointment} alt="" />
                    </Col>
                    <Col sm={12} md={6} className='ps-4 text-xs-center text-md-start align-self-center'>
                        <h2 className='fs-1'>Easy Appointment</h2>
                        <p>Just complete the simple form get an appointment. You will get the best service</p>
                    </Col>
                </Row>

                <Row className='my-5'>       
                <Link to={'/doctors'}><Button variant="info">Get Appointment Now</Button></Link>
                </Row>

                </Container>
            </section>
        </div>
    );
};

export default OnlineDetails;