import React, { useEffect, useState } from 'react';

const Covid = () => {

    const [covid, setCovid] = useState([])

    useEffect(()=>{
        fetch('/covidData.json')
        .then(res => res.json())
        .then(data => setCovid(data))
    },[])

    console.log(covid)

    return (
        <div className="my-5 container mx-auto">

                <h1 className="text-center"><span className="underline-highlight">Covid19</span> Data</h1>

            <div className="mx-auto container row row-cols-1 row-cols-md-2 g-4 my-5">
            {
                covid.map((data)=>{
                    return(
                        <div className="col">
                            <h4 className="">Date: {data.dateChecked}</h4>
                            <p>
                                Positive: {data.positive} 
                                <br /> 
                                Negative: {data.negative}
                                <br />
                                Deaths: {data.death}
                            </p>
                        </div>
                    )
                })
            }          
            </div>
        </div>
    );
};

export default Covid;