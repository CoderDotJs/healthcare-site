import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ExtraSection3.css'

const ExtraSection3 = () => {
    return (
        <div className="container-fluid my-5" style={{"background": "#D3FBFF"}}>
            <Row className="container py-5 mx-auto">
                <Col>
                    <Row className="g-4">
                        <Col lg={6} md={6}>
                        <div class="card border-0 shadow shoadow-md" style={{"width": "18rem;"}}>
                            <img src="https://photos.healthgrades.com/homeimages/fah-content-2.webp" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <p class="text-dark fw-bold">What Makes a Hospital One of America's Best?</p>
                            </div>
                        </div>
                        </Col>
                        <Col lg={6} md={6}>
                        <div class="card border-0 shadow shoadow-md" style={{"width": "18rem;"}}>
                            <img src="https://photos.healthgrades.com/homeimages/fah-content-1.webp" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <p class="text-dark fw-bold">Why Hospital Quality Matters: 9 Things to Know</p>
                            </div>
                        </div>
                        </Col>
                        <Col lg={12} md={12}>
                        <div class="card border-0 shadow shoadow-md" style={{"width": "40rem;"}}>
                            <img src="https://photos.healthgrades.com/homeimages/fah-content-3.jpg" alt="..."/>
                            <div class="card-body">
                                <p class="text-dark fw-bold">Why Hospital Quality Matters: 9 Things to Know</p>
                            </div>
                        </div>
                        </Col>
                    </Row>
                </Col>
                <Col className="d-flex justify-content-center align-items-center p-5">
                    <div>
                        <h2 className="fw-bold">Finding the <br/> <small className="underline-highlight highlight">Right Hospital Matters</small></h2>

                        <p className="my-5">
                        When you need a medical procedure, finding the right doctor is only half the equation. Receiving your treatment at the right hospital can have a dramatic impact on your outcome. Learn how we rate clinical performance and why hospital quality matters when planning your care.
                        </p>

                        <Link to="/find-a-hospital" style={{'fontSize': "18px", "textDecoration": "none"}}>Browse all procedure topics <i class="fas fa-arrow-right"></i></Link>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ExtraSection3;