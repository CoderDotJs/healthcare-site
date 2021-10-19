import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FindHospital = () => {

        // usnig state to save data form json 


    const [hospital, setHospital] = useState([])

        // useeffect for fetch data 


    useEffect(()=>{
        fetch('/fakehospital.json')
        .then(res => res.json())
        .then(data => setHospital(data))
    }, [])

    return (
        <div className="my-5 container">
            <h1 className="services__heading text-center my-5">All <span className="underline-highlight">Hospital</span> List</h1>
            <ul>

                    {/* hospital list will be added here dynamically */}

               {
                   hospital.map((list) => <li><Link to="#">{list}</Link></li>)
               }
            </ul>
        </div>
    );
};

export default FindHospital;