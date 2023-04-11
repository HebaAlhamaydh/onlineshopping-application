
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../../../store/auth";
import 'react-toastify/dist/ReactToastify.css';

import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import "./Signin.css";
import { Link } from "react-router-dom";

export default function Signin() {
    const dispatch = useDispatch();
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
  
    const handleSignin = (event)=>{
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
    <MDBContainer className='my-5' style={{maxWidth: '1000px'}}>
    <MDBCard>
   
      <MDBRow className='g-0 d-flex align-items-center'>

        <MDBCol md='6'>
          <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-start w-100' />
        </MDBCol>

        <MDBCol md='6'>

          <MDBCardBody>
          <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#f79b83' }}/>
          <h2 className="h1 fw-bold mb-0" style={{letterSpacing: '1px',color: '#1c88bf'}}>Welcome back</h2>
          <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

            <MDBInput wrapperClass='mb-4' label="userName" id='form1' type='email' inputRef={usernameRef}/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' inputRef={passwordRef} />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a href="!#">Forgot password?</a>
            </div>
            <MDBBtn className="w-100 mb-4"  size='md' onClick={handleSignin}>Signin</MDBBtn>

            <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <Link to="/signup" style={{color: '#393f81'}}>Register here</Link></p>
          </MDBCardBody>

        </MDBCol>

      </MDBRow>

    </MDBCard>
  </MDBContainer>
  )
}

