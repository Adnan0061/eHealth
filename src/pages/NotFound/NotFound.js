import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='my-5'>
            <h1>404<br/>Page not found</h1>
            <h5>The page you are looking not available.</h5>
            <Link to={'/home'}><Button variant="info">Return Home</Button></Link>
        </div>
    );
};

export default NotFound;