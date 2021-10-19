import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Doctor from '../Doctor/Doctor';

const ServiceDetail = () => {
    const {services_name} = useParams();

    const [doctors, setDoctors] = useState([])

    useEffect(()=>{
        fetch('/fakedoctor.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[]);

    const filterdDoctor = doctors.filter(doc=>{
        return doc.type.toLowerCase() === services_name.toLowerCase()
    })

    console.log(filterdDoctor)

    return (
        <div>
            <h1 className="text-center fw-bold my-5 services__heading">The Doctors of <span className="underline-highlight">{services_name.toUpperCase()}</span></h1>
        <div className="container mx-auto row row-cols-1 row-cols-md-2 g-4 my-5">

            


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