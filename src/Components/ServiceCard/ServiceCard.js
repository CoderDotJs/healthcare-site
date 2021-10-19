import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceCard.css'


const ServiceCard = (props) => {

        // get the data using props 

    const {service_name, img, desc} = props.prop;
    return (

            // service data show with card 

            <div 
            style={{"textDecoration": "none"}}  
            className=" col d-flex flex-column justify-content-between align-items-center text-center py-5"
            >
            <div className="service__icon_container">
                <i className={`${img} fa-3x services__icon`}></i>
            </div>
            <h4 className="my-3">{service_name}</h4>
            <p>{desc}</p>
            <Button as={Link} variant="primary" style={{"padding": "5px 15px", "background": "rgb(2, 2, 193)", "color": "white", "textDecoration": "none"}} to={`/services/${service_name.toLowerCase()}`}>Browse</Button>
            </div>
    );
};

export default ServiceCard;