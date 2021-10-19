import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const FindDoctor = () => {

    const [doctors, setDoctors] = useState([])

    useEffect(()=>{
        fetch('./fakedoctor.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])

    console.log(doctors)

    return (
        <div>
            <h1 className="text-center fw-bold my-5 services__heading">Find A Doctor <span className="underline-highlight">You Need</span></h1>
        <div class="container mx-auto row row-cols-1 row-cols-md-2 g-4 my-5">

            


            {
                doctors.map((doc)=>{
                    return (
                        <Doctor prop={doc} key={doc.id}></Doctor>
                    )
                })
            }
        </div>
        </div>
    );
};

export default FindDoctor;