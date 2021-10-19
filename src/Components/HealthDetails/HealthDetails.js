import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const HealthDetails = () => {

    const {title} = useParams();

    let history = useHistory();

    const [post, setPost] = useState([])

    useEffect(()=>{
        fetch('/health.json')
        .then(res => res.json())
        .then(data => setPost(data))
    },[]);

    const filterdPost = post.filter(pos=>{
        return pos.title.toLowerCase() === title.toLowerCase()
        // console.log(pos)
    })

    console.log(filterdPost[0])

    // const {image, desc} = filterdPost[0];


    

  function handleClick() {
    history.push("/health");
  }

    return (
        <div className="container my-5 ">
            <h1 className="text-center">{title.toUpperCase()}</h1>
            <img src={filterdPost[0]?.image} alt="" className="img-fluid d-block my-3 mx-auto" min-width="100%"/>
            <p className="card-text text-dark my-5">{filterdPost[0]?.desc}</p>
            <Button variant="outline-dark" className="fw-bold" onClick={handleClick}>
            <i className="fas fa-chevron-left"> </i> Back
            </Button>
        </div>
    );
};

export default HealthDetails;