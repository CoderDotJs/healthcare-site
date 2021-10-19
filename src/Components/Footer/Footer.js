import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        
        //   Footer 
<footer className="text-center text-lg-start bg-light text-muted">
  {/*   Section: Social media  */}
  <section
    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
    {/*   Left  */}
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    {/*   Left  */}

    {/*   Right  */}
    <div>
      <a href="https://www.facebook.com/" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.twitter.com/" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://www.google.com/" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="https://www.instagram.com/" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.linkedin.com/" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
    {/*   Right  */}
  </section>
  {/*   Section: Social media  */}

  {/*   Section: Links   */}
  <section className="">
    <div className="container text-center text-md-start mt-5">
      {/* grid row  */}
      <div className="row mt-3">
        {/*  Grid column  */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* Content */}
          <h6 className="text-uppercase fw-bold mb-4">
            <img src="https://d1ffafozi03i4l.cloudfront.net/public3/images/logo-blue-full.svg" alt="" width="70%"/>
          </h6>
          <p>
          Your future patients are ready to connect. Make sure your profile stands out. Learn more about how to claim your free Healthgrades profile and our available upgrades
          </p>
        </div>
        {/*   Grid column  */}

        {/*   Grid column  */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/*   Links  */}
          <h6 className="text-uppercase fw-bold mb-4">
            Services
          </h6>
          <p>
            <Link to="/find-a-doctor" className="text-reset">Find A Doctor</Link>
          </p>
          <p>
            <Link to="/find-a-hospital" className="text-reset">Find A Hospital</Link>
          </p>
          <p>
            <Link to="/health" className="text-reset">Health A to Z</Link>
          </p>
        </div>
        {/*   Grid column  */}

        {/*   Grid column  */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/*   Links  */}
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
        {/*   Grid column  */}

        {/*   Grid column  */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/*  Links  */}
          <h6 className="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
        {/*  Grid column  */}
      </div>
      {/*  Grid row  */}
    </div>
  </section>
  {/* Section: Links  */}

  {/* Copyright */}
  <div className="text-center p-4" style={{ "backgroundColor": "rgba(0, 0, 0, 0.05)"}}>
    © 2021 Copyright: 
    <Link to="/" className="text-reset fw-bold"> Healthgrades</Link>
  </div>
  {/*  Copyright  */}
</footer>
//   Footer -->
    );
};

export default Footer;