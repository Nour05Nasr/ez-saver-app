import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Input from '../Components/Input';
import CTA2 from '../Components/CTA2';
import google from '../Assets/google.svg';
import log_logo from '../Assets/log_logo.png';
import './LogIn.css';

const SignUp = () => {
    return (<div className='log_body log_div flex_column flex_row'>
            <div className='input_div gap'>
            <img src={log_logo} alt="EZ-SAVER Logo" />
               <h1 className='log_h'>Create Your Account</h1>
               
                <div className='google'>
                        <img src={google} alt="" />
                        <p className='login_P'>Log In with Google</p>
                    </div> 

                    <div className='flex_row gap hr_w top1'>
                      <hr className='hr' />
                      <p  className='login_p'>or</p>
                      <hr className='hr' />
                    </div>
            
            <div className='column_start'>
                <p className='login_p'>Username</p>
                <Input title="Enter Your Username" />

                <p className='login_p'>E-mail</p>
                <Input title="Enter Your E-mail" />

                <div className=''>
                    <p className='login_p'>Password</p>
                  <Input title="Enter Your Password" />
                  <Input title="Confirm Your Password" />

                   <div className='checkbox_div'>
                        <input type="checkbox" className='checkbox' />
                        <p className='login_p'>Remember Me</p>
                   </div>

                </div>

            </div>

            <div style={{cursor: 'pointer'}} className='flex_column'>
                <CTA2 title="Sign up" url="/dashboard" />
                <Link to='/Home' className='top1'>
                    <p className='login_p underline'>Sign up later</p>
                </Link>
                <Link to='/LogIn'>
                    <p className='login_p'>Already have an account? <span className='underline'>Log in</span></p>
                </Link>
            </div>
            </div>
    </div>);
}
 
export default SignUp;