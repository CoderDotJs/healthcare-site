import React from 'react';
import { Container } from 'react-bootstrap';
import './ExtraSection.css'


const ExtraSection2 = () => {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center g-4 text-white p-4" style={{"background": "#000073"}}>
                <div class="mx-5">
                <i className="fas fa-dove fa-5x text-white" ></i>
                </div>
                    <div className="fw-bold">
                    <h2 class="">When it comes to your health, you have choices. <br/>
                    <span className="underline-highlight">Choose the best hospital for you.</span>
                    </h2>
                    </div>
            </div>
        </div>
    );
};

export default ExtraSection2;