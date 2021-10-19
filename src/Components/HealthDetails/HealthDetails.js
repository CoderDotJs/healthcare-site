import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const HealthDetails = () => {

        // using params for get the url varriable link 

    const {title} = useParams();

        // usnig history hook for navigate to previous page 

    let history = useHistory();

        // using state to save post 

    const [post, setPost] = useState([])

        // fetching the json 

    useEffect(()=>{
        fetch('/health.json')
        .then(res => res.json())
        .then(data => setPost(data))
    },[]);

        // filter the clicked data form the actual data 

    const filterdPost = post.filter(pos=>{
        return pos.title.toLowerCase() === title.toLowerCase()
       
    })

    

   
    // funciton for handle the click on the back button 

    

  function handleClick() {
    history.push("/health");
  }

    return (

        // post detail section for the post 

        <div className="container my-5 ">
            <h1 className="text-center">{title.toUpperCase()}</h1>
            <img src={filterdPost[0]?.image} alt="" className="img-fluid d-block my-3 mx-auto" min-width="100%"/>
            <p className="card-text text-dark my-5">
                {
                    filterdPost[0]?.desc ? filterdPost[0].desc : <h2 className="text-center">No Text found</h2>
                }
            </p>
            <Button variant="outline-dark" className="fw-bold" onClick={handleClick}>
            <i className="fas fa-chevron-left"> </i> Back
            </Button>
        </div>
    );
};

export default HealthDetails;