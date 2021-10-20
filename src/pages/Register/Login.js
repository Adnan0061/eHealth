import React, { useState } from 'react';
import { Col, Container, Form, Row, Button, ButtonGroup } from 'react-bootstrap';
import { Google } from 'react-bootstrap-icons';
import useAuth from '../hooks/useAuth';
import useFirebase from '../hooks/useFirebase';

const Login = () => {
    const { loginWithEmail, createUserWithGoogle } =useFirebase()
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = (e) => {
        console.log('refg')
        console.log(email, password)
        e.preventDefault();
        loginWithEmail(email, password)

    }

    return (
        <div>
            <Container>
            <Row  className="justify-content-md-center my-5">
            <Col xs md={9} lg={4}>
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
                <Button onClick={ handleLogin } variant="info" type="submit">
                    Submit
                </Button>
            </Form>
            <h6 className='mt-3'>Login with Google</h6>
            <Button className='w-100' variant="danger" onClick={createUserWithGoogle}><Google></Google></Button>
            </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Login;