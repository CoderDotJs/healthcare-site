import React from 'react';
import { Container, } from 'react-bootstrap';

const ExtraSection1 = () => {
    return (
        <Container className="my-5 text-center">
            <h1 className="services__heading">Find the right care, <span className="underline-highlight">doctor</span> </h1>
            <h1 className="services__heading">hospital right at your fingertips</h1>
            <p className="my-3">Healthgrades gives you the tools and information you need to:</p>

            

            <div class="row row-cols-1 row-cols-md-3 g-4 my-5">
                <div class="col">
                    <div class="card h-100  d-flex flex-column justify-content-around align-items-center">
                        <h3 class="card-title my-3">Choose</h3>
                        <img src="https://hg-cdn.s3.amazonaws.com/homeimages/choose-your-doctor.webp" alt="" className="img-fluid w-75 my-4" />  
                        <p class=" my-4">
                        Find doctors and hospitals based on the factors that matter most to you.
                        </p>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 d-flex flex-column justify-content-around align-items-center">
                        <h3 class="card-title my-3">Control</h3>
                        <img src="https://hg-cdn.s3.amazonaws.com/homeimages/connect-online.png" alt="" className="img-fluid w-75 my-4" />  
                        <p class=" my-4">
                        Find doctors and hospitals based on the factors that matter most to you.
                        </p>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 d-flex flex-column justify-content-around align-items-center">
                        <h3 class="card-title my-3">Prepare</h3>
                        <img src="https://hg-cdn.s3.amazonaws.com/homeimages/prepare-for-your-appointment.webp" alt="" className="img-fluid w-75 my-4" />  
                        <p class=" my-4">
                        Find doctors and hospitals based on the factors that matter most to you.
                        </p>
                    </div>
                </div>
            </div>


        </Container>
    );
};

export default ExtraSection1;