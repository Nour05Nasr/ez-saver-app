import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import onboarding3 from '../Assets/onboarding3.png';
import PageIndicator from '../Components/PageIndicator';
import onboarding_logo from '../Assets/onboarding_logo.svg';
import SplashScreen from './SplashScreen';
import CTA2 from '../Components/CTA2';
import CTA1 from '../Components/CTA1';
import './Onboarding.css';
import './index.css';

function Onboarding3() {

  return (
    <div className="app">
        <div className="onboarding flex_column gap">
           <div className='w_skip'>
               <img src={onboarding_logo} alt="EZ-SAVER Logo" />
               <Link to='/LogIn' className='w_skip2'>
                 <p className='guest'>Skip</p>
               </Link>
           </div>
            <img src={onboarding3} alt="EZ-SAVER Save Effort"  />
          <h1 className='onboarding_h'>Save Money</h1>
          <p className='onboarding_p'>Track your spending and discover personalized discounts tailored for you</p>
      <PageIndicator activeIndex={2} /> 
          <CTA2 title='Log In' url='/LogIn' />
          {/* <Link to='/LogIn'>
            <p className='guest'>Continue as a Guest</p>
          </Link> */}
          {/* <CTA1 title='Sign Up' url='/Home' /> */}
        </div>
    </div>
  );
}

export default Onboarding3;