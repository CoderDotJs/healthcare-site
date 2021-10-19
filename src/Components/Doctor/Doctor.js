import React from 'react';
import { Container } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

const Doctor = (props) => {
    const {image, full_name, type, rating, address} = props.prop;
    console.log(full_name)
    return (
        <Container>
            
                
                <div class="card mb-3" style={{"max-width": "540px;"}}>
                    <div class="row g-0">
                        <div class="col-md-3">
                            <img src={image} class="img-fluid rounded-start h-100" alt="..."/>
                        </div>
                        <div class="col-md-9">
                            <div class="card-body">
                                <h5 class="card-title">{full_name}</h5>
                                <p class="card-text mb-0">{type}.</p>
                                <StarRatings
                                rating={rating}
                                starDimension="20px"
                                starSpacing="0px"
                                starRatedColor="gold"
                                />
                                <p class="card-text my-2"><small class="text-muted">{address}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
        </Container>
    );
};

export default Doctor;