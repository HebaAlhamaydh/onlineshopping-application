import React from 'react';
import { Link} from 'react-router-dom';
import {  useSelector } from "react-redux";
import './Header.css'
import SignOut from '../Auth/SignOut/SignOut';

export default function Header(props) {

 
  const { isSignin } = useSelector((state) => state.authSlice);
  return (
    <>
    <header className='header'>
    <div className='header-container'>
 
    {isSignin  ? (
    
       <nav className='nav'>
         <div className='header-nva'>
         <Link to='/' style={{textDecoration:'none'}} >
           <h3>Online Shopping</h3>
           </Link>
        <Link to={'/'} style={{textDecoration:'none'}}>  <p >Home</p></Link> 
        <Link to={'/myItems'} style={{textDecoration:'none'}}>  <p >myItems</p></Link> 
        <Link to={'/favList'} style={{textDecoration:'none'}}><p >favorite</p></Link>
      <Link to={'/cart'} style={{textDecoration:'none'}}><p >Cart</p></Link>
 
         </div>
         <SignOut />
       </nav>
 
     
     
    ) : (
      <Link className='button--header  link ' to="/signin">Signin</Link>
      )}
  </div>


    </header>


    </>
  );
}

