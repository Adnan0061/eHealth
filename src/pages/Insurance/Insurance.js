import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Insurance = () => {
    return (
        <div>
            <section className='hero-section' style={{height: '75vh'}}>
            <div id='hero-overlay' className='h-100 d-flex align-items-center'>    
                <div className='container text-start text-light'>
                    <div className='w-50'>
                    <h1 style={{fontSize: '56px'}}>Health-care insurance for<span style={{color:'#0dcaf0'}}> Needy Family</span></h1>
                    <p className='fs-4 fw-light'>For family who are having hard time financially get our health care insurance. It's only 1000tk for the family for 1 year and can save upto 50%. To get insurance contact us.</p>
                    <Button as={Link} to={'/contact'} variant="info" type="submit">Contact Us</Button>
                    </div>                    
                </div>
            </div>
            </section>
        </div>
    );
};

export default Insurance;