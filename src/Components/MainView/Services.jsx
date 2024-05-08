import React from 'react';
import './Services.css';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import { Container, Row, Col } from 'react-bootstrap';

export default function Services() {
    const services = [
        {name: "Cinematographic Solutions", icon: <MovieFilterIcon fontSize='inherit' className='service-icon'/>},
        {name: "LensMaster Productions", icon: <MovieFilterIcon fontSize='inherit' className='service-icon'/>},
        {name: "FrameForge", icon: <MovieFilterIcon fontSize='inherit' className='service-icon'/>},
        {name: "Cinematic Visionaries", icon: <MovieFilterIcon fontSize='inherit' className='service-icon'/>},
        {name: "PixelPerfect", icon: <MovieFilterIcon fontSize='inherit' className='service-icon'/>},
        {name: "LightWave Cinematography", icon: <MovieFilterIcon fontSize='inherit' className='service-icon'/>},
    ];

    return (
        <section className='services-section'>
            <h3 className='header'>My Services</h3>
           
                <Row xs={2} sm={2} md={3} lg={3} className="services-container">
                    {services.map((service, i) => (
                        <Col key={i}  className='service-box'>
                                {service.icon}
                                <p className="service">{service.name}</p>
                        </Col>
                    ))}
                </Row>
        </section>
    );
}
