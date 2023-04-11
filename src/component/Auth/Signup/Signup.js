
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import './Signup.css'

import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { signup } from "../../../store/auth";
export default function Signup() {


     const dispatch = useDispatch();
  const navigate = useNavigate();

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignup = (event) => {
    event.preventDefault();

    const data = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
    
    };

    dispatch(signup(data));
    usernameRef.current.value = null;
    emailRef.current.value = null;
    passwordRef.current.value = null;
    phoneNumberRef.current.value = null;
    navigate("/signin");
  }; 
  return (
    <div class="container">
    <MDBContainer fluid className='my-4 '>

    <MDBRow className='g-0 align-items-center'>
      <MDBCol col='6'>

        <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
          <MDBCardBody className='p-5 shadow-5 text-center'>

            <h2 className="fw-bold mb-5">Sign up now</h2>

            
              <MDBCol col='6'>
                <MDBInput wrapperClass='mb-4' label='user name' id='form1' type='text' inputRef={usernameRef} required />
              </MDBCol>

            
              <MDBInput wrapperClass='mb-4' label='Phone Number' id='form3' type='tel' inputRef={phoneNumberRef} required/>

            <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' inputRef={emailRef} required/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' inputRef={passwordRef} required/>

            <div className='d-flex justify-content-center mb-4'>
          
              <p className="text-black-50 fw-bold" >
            Already have an account?
               <Link to="/signin" className="forgot-pw" style={{ marginLeft: '10px' }}>
                   Login here
              </Link>
             </p>
            </div>
          

            <MDBBtn className='w-100 mb-4' size='md' onClick={handleSignup}>sign up</MDBBtn>

            <div className="text-center">

              <p>or sign up with:</p>

              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>

            </div>

          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol col='6'>
        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" class="w-76 rounded-4 shadow-4"
          alt="" fluid/>
      </MDBCol>

    </MDBRow>

  </MDBContainer>
</div>
  )
}
