import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DoctorCard = (props) => {
    const {id, name, specialist, address, city, street, img } = props.doctor;
    return (
        <div className='my-5'>
            <Card style={{ width: '18rem'}} className='h-100'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='mb-1'><b>Specialist:</b> {specialist}</Card.Text>
                    <Card.Text className='mb-1'><b>City:</b> {address.city}</Card.Text>
                    <Card.Text className='mb-3'><b>Street:</b> {address.street}</Card.Text>
                </Card.Body>
                <Card.Footer className='bg-transparent border-0'>
                    <Link to={`/doctor/${name}`}><Button  variant="info" className='w-100 mb-1'>Book Online Session</Button></Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default DoctorCard;