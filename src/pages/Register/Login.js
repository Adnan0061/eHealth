import React, { useState } from 'react';
import { Col, Container, Form, Row, Button, ButtonGroup } from 'react-bootstrap';
import { Github, Google } from 'react-bootstrap-icons';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';

const Login = () => {
    const { loginWithEmail, createUserWithGoogle } =useFirebase()
    const history = useHistory();
    const location = useLocation();     
    const url = location?.state?.from || '/';
    console.log(url)
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = (e) => {
        console.log(email, password)
        e.preventDefault();
        loginWithEmail(email, password)

    }
    const handleGoogle = () => {
        createUserWithGoogle()
        .then((result) => {
            history.push(url)
        })
        .catch((error) => {
            const errorMessage = error.message;
          });
    }
    const handleGitHub = () => {
        createUserWithGoogle()
        .then((result) => {
            history.push(url)
        })
        .catch((error) => {
            const errorMessage = error.message;
          });
    }

    return (
        <div>
            <Container>
            <Row  className="justify-content-md-center my-5">
            <Col xs md={9} lg={4}>
                <h2>Log In here</h2>
            <Form onSubmit={ handleLogin}  className='text-start'>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" required placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" required placeholder="Password" />
                </Form.Group>
                <Button onClick={ handleLogin } variant="info" type="submit">Submit</Button>
                <span className='ms-5'>Don't have an account<Button as={Link} to={'/register'} variant="link">Register</Button></span>
            </Form>
            <h6 className='mt-3'>Login with Google</h6>
            <Button className='w-50' variant="danger" onClick={handleGoogle}><Google></Google></Button>
            <Button className='w-50' variant="dark" onClick={handleGitHub}><Github></Github></Button>
            </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Login;