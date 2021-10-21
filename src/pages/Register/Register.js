import React, { useState } from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import { Github, Google } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import InitializeAuthentication from '../../Firebase/firebase.init';
import useAuth from '../hooks/useAuth';
import useFirebase from '../hooks/useFirebase';


const Register = () => {
    const { registerWithEmail, createUserWithGoogle } =useFirebase()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [successMsg, setSuccessMsg] = useState('')

    const history = useHistory();
    
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleRegister = (e) => {
        console.log(name, email, password)
        e.preventDefault();
        registerWithEmail(name, email, password)
    }
    const handleGoogle = () => {
        createUserWithGoogle()
        .then((result) => {
            history.push('/')
            setSuccessMsg('Your account is successfully created')
        })
        .catch((error) => {
            const errorMessage = error.message;
            setSuccessMsg('Your account creation failed, try again', errorMessage)
        });
    }
    const handleGitHub = () => {
        createUserWithGoogle()
        .then((result) => {
            history.push('/')
            setSuccessMsg('Your account is successfully created')
        })
        .catch((error) => {
            const errorMessage = error.message;
            setSuccessMsg('Your account creation failed, try again', errorMessage)
          });
    }

    return (
        <div>
            <Container>
            <Row  className="justify-content-md-center my-5">
            <Col xs md={9} lg={4}>
            <h2>Register</h2>
            <Form onSubmit={handleRegister}  className='text-start'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control onBlur={handleName} type="Text" required placeholder="Adnan0061" />
                </Form.Group>

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
                
                <Button onClick={handleRegister} variant="info" type="submit">Submit</Button>
                <span className='ms-5'>Already registered<Button as={Link} to={'/Login'} variant="link">Log in</Button></span>
            </Form>
            <h6 className='mt-3'>Register with Google</h6>
            <Button className='w-50' variant="danger" onClick={handleGoogle}><Google></Google></Button>
            <Button className='w-50' variant="dark" onClick={handleGitHub}><Github></Github></Button>
            <p>{successMsg}</p>
            
            </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Register;