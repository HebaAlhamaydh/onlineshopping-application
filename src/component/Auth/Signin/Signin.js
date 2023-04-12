import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../../store/auth";
import "react-toastify/dist/ReactToastify.css";

import {
  MDBBtn,
  MDBContainer,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
 
} from "mdb-react-ui-kit";
import "./Signin.css";
import { Link, Navigate } from "react-router-dom";

export default function Signin() {
  const dispatch = useDispatch();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const { isSignin } = useSelector((state) => state.authSlice);
  if (isSignin) return <Navigate to="/" />;

  const handleSignin = (event) => {
   event.preventDefault();
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    dispatch(signin(data));
    usernameRef.current.value = null;
    passwordRef.current.value = null;
  };

  return (
  
    <MDBContainer className="my-5 gradient-form">
    <MDBRow>

      <MDBCol col='6' className="mb-5">
        <div className="d-flex flex-column ms-5">

          <div className="text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
              style={{width: '185px'}} alt="logo" />
            <h4 className="mt-1 mb-5 pb-1">Welcome back</h4>
          </div>

          <p>Please login to your account</p>


          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'  inputRef={usernameRef} required/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' inputRef={passwordRef} req/>


          <div className="text-center pt-1 mb-5 pb-1">
            <MDBBtn className="mb-4 w-100 gradient-custom-2"onClick={handleSignin}>Sign in</MDBBtn>
            <a className="text-muted" href="#!">Forgot password?</a>
          </div>

          <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
            <p className="mb-0">Don't have an account?</p>
            <MDBBtn outline className='mx-2' color='danger'>
            <Link to="/signup" style={{ color: "#393f81" ,textDecoration:"none"}}>
                  Register
                </Link>
           
            </MDBBtn>
          </div>

        </div>

      </MDBCol>

      <MDBCol col='6' className="mb-5">
        <div className="d-flex flex-column  justify-content-center h-100 mb-4">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
              alt="phone"
              className="rounded-start w-100"
           />
          

        </div>

      </MDBCol>

    </MDBRow>

  </MDBContainer>
  );
}
