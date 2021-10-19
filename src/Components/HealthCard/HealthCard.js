import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HealthCard = (props) => {

    const { image, title, desc} = props.prop

    return (

                // card for health section post 

        <Col as={Link} to={`/health/${title.toLowerCase()}`} className="card mb-3" style={{"maxWidth": "540px", "textDecoration": "none"}}>
            <div className="row g-0">
                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                    <img src={image} className="img-fluid rounded-start h-100 w-100" alt="..."/>
                </div>
                <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                    <div className="card-body">
                        <h5 className="card-title">{title.toUpperCase()}</h5>
                        <p className="card-text text-dark">{desc.slice(0, 100)}</p>
                        <p className="card-text"><small className="text-muted">Click to read more</small></p>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default HealthCard;