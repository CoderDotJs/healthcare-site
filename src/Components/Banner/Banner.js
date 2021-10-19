import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import image from './doctorsgroup1.png';

const Banner = () => {
    return (

            // banner section 

        <div id="banner">
            <Container>

                {/* banner row  */}

                <Row className="banner__row">

                        {/* columen 1  */}

                    <Col xs={12} sm={12} md={6} lg={6} className="banner__col">
                        <h1 className="banner__heading"><span className="underline-highlight">Feel better</span> about finding healthcare</h1>
                        <Row className="banner__service_row">
                            <Col xs={4} sm={4} md={4} lg={4} className="banner__service">
                                <i className="fas fa-user-md fa-4x"></i>
                                <p>Profiles for Every Doctor Available</p>
                            </Col>
                            <Col xs={4} sm={4} md={4} lg={4} className="banner__service">
                            <i className="fas fa-search fa-4x"></i>
                                <p>Search by What Matters Most to You</p>
                            </Col>
                            <Col xs={4} sm={4} md={4} lg={4} className="banner__service">
                                <i className="fas fa-star fa-4x"></i>
                                <p>More Than 10 Million Patient Ratings</p>
                            </Col>
                        </Row>
                    </Col>

                        {/* column 2 */}

                    <Col xs={12} sm={12} md={6} lg={6} className="banner__col d-flex justify-content-center align-items-end">
                        <img src={image}  alt="img" width="100%" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;