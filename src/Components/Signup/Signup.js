import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import google from '../Login/google.png';

const Signup = () => {
    const { googleSignIn, getEmail, getPassowrd, signUpWithEmail} = useAuth();
    
return (
    <div className="container-fluid vh-100" style={{"marginTop":"50px"}}>
        <div className="" style={{"marginTop" : "0px"}}>
            <div className="rounded d-flex justify-content-center">
                <div className="col-md-4 col-sm-12 shadow-lg p-5 bg-light">
                    <div className="text-center">
                        <h3 className="text-primary">Sign Up</h3>
                    </div>
                    <form>
                        <div className="py-4">
                            <div className="input-group mb-3 xs-12">
                                <span className="input-group-text bg-primary">
                                <i className="fas fa-user-plus" style={{"color": "white", "width": "16px"}}></i>
                                </span>
                                <input onKeyUp={getEmail} type="text" className="form-control" placeholder="Email" />
                            </div>
                            <div className="input-group mb-3 xs-12">
                                <span className="input-group-text bg-primary">
                                <i className="fas fa-key" style={{"color": "white"}}></i>
                                </span>
                                <input onKeyUp={getPassowrd} type="password" className="form-control" placeholder="Password" />
                            </div>
                            <button onClick={signUpWithEmail} className="btn btn-primary text-center mt-2" type="submit">
                                Sign Up
                            </button>
                            <br />
                            <p className="text-center">Or</p>
                            <br />

                            <Button variant="white" size="lg" className="border border-1 text-black d-block mx-auto" onClick={googleSignIn}>
                                
                                <img src={google} alt="" width="30px" style={{"margin": "0 5px"}}/>  Sign In With Google
                            </Button>

                            <p className="text-center mt-5">Already have an account? 
                                <Link to="/login" style={{"textDecoration": "none"}}> Log In</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
);
};

export default Signup;