import React, { useEffect, useState } from 'react';
import HealthCard from '../HealthCard/HealthCard';

const Health = () => {

    const [health, setHealth] = useState([])

    useEffect(()=>{
        fetch('/health.json')
        .then(res => res.json())
        .then(data => setHealth(data))
    })


    return (
        <div className="container">
            <h1 className="text-center services__heading my-5"><span className="underline-highlight">Health</span> A to Z</h1>
            <div className="mx-auto row row-cols-1 row-cols-md-2 g-4 my-5">

                

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