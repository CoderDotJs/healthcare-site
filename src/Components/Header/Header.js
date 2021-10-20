import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {

    // using stat 

  const {user, logOut} = useAuth();


  console.log(user)

  

    return (

        // navbar section 

            <Navbar bg="white" expand="lg" sticky="top" className="shadow-lg">
  <Container fluid>
    <Navbar.Brand as={Link} to="/" className="logo">
        <img src="https://d1ffafozi03i4l.cloudfront.net/public3/images/logo-blue-full.svg" alt="" className="img-responsive" width="165px" height="auto"/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ "maxHeight": '100px' }}
        navbarScroll
      >

        {/* navlink section  */}

        <Nav.Link as={Link} to="/find-a-doctor">Find A Doctor</Nav.Link>
        <Nav.Link as={Link} to="/find-a-hospital">Find A Hospital</Nav.Link>
        <Nav.Link as={Link} to="/health">Health A to Z</Nav.Link>
        <Nav.Link as={Link} to="/covid-status">Covid 19 Status</Nav.Link>
      </Nav>

          {/* dynamic login and logout button show  */}

        {
          user?.email ? <p style={{"margin": "0"}}>
            <span style={{"fontSize": "18px", "fontWeight": "bold", "margin": "0 5px"}}>{user?.displayName}</span> <Button variant="danger" onClick={logOut}>Logout</Button>
          </p>
           :
           <Nav.Link as={Link} to="/login" className="me-2 ">
            <span><i className="fas fa-sign-in-alt"></i> <span className="btn__login">Log In</span></span>
        </Nav.Link>
        }
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;