import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import onboarding2 from '../Assets/onboarding2.png';
import PageIndicator from '../Components/PageIndicator';
import SplashScreen from './SplashScreen';
import CTA2 from '../Components/CTA2';
import onboarding_logo from '../Assets/onboarding_logo.svg';
import './Onboarding.css';
import './index.css';

function Onboarding2() {

  return (
    <div className="app">
        <div className="onboarding flex_column gap">
          <div className='w_skip'>
              <img src={onboarding_logo} alt="EZ-SAVER Logo" />
              <Link to='/LogIn'>
                <p className='guest'>Skip</p>
              </Link>
          </div>
            <img src={onboarding2} alt="EZ-SAVER Save Effort"  />
          <h1 className='onboarding_h'>Save Time</h1>
          <p className='onboarding_p'>Scan as you shop and skip the lines for a faster checkout experience</p>
      <PageIndicator activeIndex={1} /> 
          <CTA2 title='Next' url='/Onboarding3' />
        </div>
    </div>
  );
}

export default Onboarding2;