import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import onboarding3 from '../Assets/onboarding3.png';
import PageIndicator from '../Components/PageIndicator';
import SplashScreen from './SplashScreen';
import CTA2 from '../Components/CTA2';
import CTA1 from '../Components/CTA1';
import './Onboarding.css';
import './global.css';

function Onboarding3() {

  return (
    <div className="app">
        <div className="onboarding flex_column gap">
            <img src={onboarding3} alt="EZ-SAVER Save Effort"  />
          <h1 className='onboarding_h'>Save Money</h1>
          <p className='onboarding_p'>Track your spending and discover personalized discounts tailored for you</p>
      <PageIndicator activeIndex={2} /> 
          <CTA2 title='Log In' url='/Login' />
          <CTA1 title='Continue Guest' url='/Home' />
        </div>
    </div>
  );
}

export default Onboarding3;