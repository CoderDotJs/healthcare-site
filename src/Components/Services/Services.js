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

        <div id="services" className="my-5">
            <h1 className="text-center services__heading">Our All <span className="underline-highlight ">Services</span></h1>

            <div className="container mx-auto row row-cols-1 row-cols-md-3 row-cols-lg-3 row-cols-sm-1">
                


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
            </div>

        </div>
    );
};

export default Services;