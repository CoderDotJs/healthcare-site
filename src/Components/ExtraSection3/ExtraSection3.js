import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ExtraSection3.css'

const ExtraSection3 = () => {
    return (


            // extra section 3 

        <div className="container-fluid my-5" style={{"background": "#D3FBFF"}}>


            {/* row  */}

            <Row className="container py-5 mx-auto">

                {/* col  */}

                <Col>

                {/* row  */}

                    <Row className="g-4">


                    {/* col  */}

                        <Col lg={6} md={6} sm={12}>
                        <div className="card border-0 shadow shoadow-md style__third" style={{"width": "18rem"}}>
                            <img src="https://photos.healthgrades.com/homeimages/fah-content-2.webp" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="text-dark fw-bold">What Makes a Hospital One of America's Best?</p>
                            </div>
                        </div>
                        </Col>


                    {/* col  */}

                        <Col lg={6} md={6} sm={12}>
                        <div className="card border-0 shadow shoadow-md style__third" style={{"width": "18rem"}}>
                            <img src="https://photos.healthgrades.com/homeimages/fah-content-1.webp" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="text-dark fw-bold">Why Hospital Quality Matters: 9 Things to Know</p>
                            </div>
                        </div>
                        </Col>

                        {/* col  */}

                        <Col lg={12} md={12} sm={12}>
                        <div className="card border-0 shadow shoadow-md style__third">
                            <img src="https://photos.healthgrades.com/homeimages/fah-content-3.jpg" alt="..."/>
                            <div className="card-body">
                                <p className="text-dark fw-bold">Why Hospital Quality Matters: 9 Things to Know</p>
                            </div>
                        </div>
                        </Col>
                    </Row>
                </Col>


                {/* col  */}

                <Col className="d-flex justify-content-center align-items-center p-5">
                    <div>
                        <h2 className="fw-bold">Finding the <br/> <small className="underline-highlight highlight">Right Hospital Matters</small></h2>

                        <p className="my-5">
                        When you need a medical procedure, finding the right doctor is only half the equation. Receiving your treatment at the right hospital can have a dramatic impact on your outcome. Learn how we rate clinical performance and why hospital quality matters when planning your care.
                        </p>

                        <Link to="/find-a-hospital" style={{'fontSize': "18px", "textDecoration": "none"}}>Browse all procedure topics <i className="fas fa-arrow-right"></i></Link>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ExtraSection3;