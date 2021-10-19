import React, { useEffect, useState } from 'react';
import HealthCard from '../HealthCard/HealthCard';

const Health = () => {

            // using state for data save 

    const [health, setHealth] = useState([])

        // data fetch with use effect 

    useEffect(()=>{
        fetch('/health.json')
        .then(res => res.json())
        .then(data => setHealth(data))
    })


    return (

            // container for health section 

        <div className="container">
            <h1 className="text-center services__heading my-5"><span className="underline-highlight">Health</span> A to Z</h1>
            <div className="mx-auto row row-cols-1 row-cols-md-2 g-4 my-5">

                {/* post for health sectin will be added dynamically  */}

                    {
                        health.map((post)=>{
                            return (
                                <HealthCard prop={post} key={post.id}></HealthCard>
                            )
                        })
                    }
            </div>
        </div>
    );
};

export default Health;