import React from 'react';
import { Container } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

const Doctor = (props) => {
    const {image, full_name, type, rating, address} = props.prop;
    console.log(full_name)
    return (
        <Container>
            
                
                <div className="card mb-3" style={{"maxWidth": "540px;"}}>
                    <div className="row g-0">
                        <div className="col-md-3">
                            <img src={image} className="img-fluid rounded-start h-100" alt="..."/>
                        </div>
                        <div className="col-md-9">
                            <div className="card-body">
                                <h5 className="card-title">{full_name}</h5>
                                <p className="card-text mb-0">{type}.</p>
                                <StarRatings
                                rating={rating}
                                starDimension="20px"
                                starSpacing="0px"
                                starRatedColor="gold"
                                />
                                <p className="card-text my-2"><small className="text-muted">{address}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
        </Container>
    );
};

export default Doctor;