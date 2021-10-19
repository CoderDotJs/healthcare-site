import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css'

const Services = () => {

    // managing state 

    const [service, setService] = useState([])

        // fetching the data 

    useEffect(()=>{
        fetch('./service.json')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])

    
    return (

            // services section 

        <div id="services">
            <h1 className="text-center services__heading">Our All <span className="underline-highlight ">Services</span></h1>

            <Container className="my-5">
                <Row>


                    {/* dynamic data show on service  */}
                {
                service?.map((simple)=>{
                   return(
                    <ServiceCard  
                    key={simple.id}
                    prop={simple}
                     >
 
                     </ServiceCard>
                   )
                })
                }
                </Row>
            </Container>

        </div>
    );
};

export default Services;