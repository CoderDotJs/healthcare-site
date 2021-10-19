import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceCard.css'


const ServiceCard = (props) => {
    const {service_name, img} = props.prop;
    return (
            <Col as={Link} style={{"textDecoration": "none"}} to={`/services/${service_name.toLowerCase()}`} xs={12} sm={6} md={4} lg={2} className="d-flex flex-column justify-content-center align-items-center">
            <div className="service__icon_container">
                <i className={`${img} fa-3x services__icon`}></i>
            </div>
            <p className="my-3">{service_name}</p>
            </Col>
    );
};

export default ServiceCard;