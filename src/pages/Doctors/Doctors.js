import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import DoctorCard from './DoctorCard/DoctorCard';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(()=>{
        fetch('./doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <Container>
                <h1 className='mt-5'>Choose your consult</h1>
                <h5 className='mb-5'>They are all great but in their respective sectors. Choose who you want to consult with.</h5>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
            {
                doctors.map(doctor => <DoctorCard key={doctor.id} doctor={doctor}></DoctorCard>)
            }
            </Row>
            </Container>
        </div>
    );
};

export default Doctors;