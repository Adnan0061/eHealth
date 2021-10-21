import React from 'react';
import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../pages/hooks/useAuth';
import useFirebase from '../../pages/hooks/useFirebase';

const Header = () => {
    const { user, Logout } = useFirebase()

    return (
        <Navbar style={{backgroundColor: 'rgb(13, 202, 240)'}} expand="lg">
        <Container>
            <Navbar.Brand as={Link} to={'/home'} className='fs-2 fw-bold text-light'>eHealth</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link as={Link} to={'/home'}>Home</Nav.Link>
                <Nav.Link as={Link} to={'/doctors'}>Doctors</Nav.Link>
                <NavDropdown title="Services" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to={'/online-consultation'}>Online Consultation</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={'/physical-consultation'}>Physical Consultation</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={'/order-medicine'}>Medicine Home Delivery</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={'/ambulance'}>Emergency Ambulance</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={'/customer-care'}>24/7 support</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={'/insurance-details'}>Health Care Insurance</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to={'/contact'}>Contact</Nav.Link>
                {
                    user.email ? 
                <>
                <p className='m-2'> <span className='text-light'>User:</span> <b>{user.displayName}</b></p>
                <Button onClick={Logout} variant="outline-dark">Log Out</Button>
                </>
                : 
                <>
                <Nav.Link as={Link} to={'/register'}>Register</Nav.Link>
                <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
                </>
                }

            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Header;