import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Doctor from '../Doctor/Doctor';

const ServiceDetail = () => {

        // get the parameter form the url 

    const {services_name} = useParams();

        // state management with state 

    const [doctors, setDoctors] = useState([])


        // fetching json data 

    useEffect(()=>{
        fetch('/fakedoctor.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[]);

    // filter the clicked data and show them 

    const filterdDoctor = doctors.filter(doc=>{
        return doc.type.toLowerCase() === services_name.toLowerCase()
    })

    

    return (

            // show the doctors that mathes the type on click on services 

        <div>
            <h1 className="text-center fw-bold my-5 services__heading">The Doctors of <span className="underline-highlight">{services_name.toUpperCase()}</span></h1>
        <div className="container mx-auto row row-cols-1 row-cols-md-2 g-4 my-5">

            {/* dynamic data show form the clicked service  */}


            {
                filterdDoctor.map((doc)=>{
                    return (
                        <Doctor prop={doc} key={doc.id}></Doctor>
                    )
                })
            }
        </div>
        </div>
    );
};

export default ServiceDetail;