import React from 'react';
import { Col, Container, Row, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ambulance from '../../Images/pexels-mikhail-nilov-8942563.jpg'

const Ambulance = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className='hero-section' style={{height: '75vh'}}>
            <div id='hero-overlay' className='h-100 d-flex align-items-center'>    
                <div className='container text-start text-light'>
                    <h1 style={{fontSize: '56px'}}>Get Ambulance <span style={{color:'#0dcaf0'}}>24/7</span></h1>
                    <p className='fs-4 fw-light'>Call to our customer care number number or<br/>fill the form to get ambulance at your doorsteps.</p>
                    <Link to={'/ambulance-form'}><Button className='me-3' variant="info">Get Ambulance</Button></Link>
                    
                </div>
            </div>
            </section>

            {/* Details Form */}
            <section className='my-5'>
                <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <img className='img-fluid' src={ambulance} alt="" />
                    </Col>
                    <Col sm={12} md={6} className='ps-4 text-xs-center text-md-start align-self-center'>
                        <h2 className='fs-1'>Emergency Number 01911234567</h2>
                        <p>Call anytime at this number and an ambulance will be at your doorstep with in 30 min</p>
                        <Link to={'/ambulance-form'}><Button className='me-3' variant="info">Call Ambulance</Button></Link>
                    </Col>
                </Row>
                </Container>
            </section>
        </div>
    );
};

export default Ambulance;