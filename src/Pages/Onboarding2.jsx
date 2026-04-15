import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import onboarding2 from '../Assets/onboarding2.png';
import PageIndicator from '../Components/PageIndicator';
import SplashScreen from './SplashScreen';
import CTA2 from '../Components/CTA2';
import './Onboarding.css';
import './index.css';

function Onboarding2() {

  return (
    <div className="app">
        <div className="onboarding flex_column gap">
            <img src={onboarding2} alt="EZ-SAVER Save Effort"  />
          <h1 className='onboarding_h'>Save Time</h1>
          <p className='onboarding_p'>Scan your items as you shop and skip long cashier lines completely</p>
      <PageIndicator activeIndex={1} /> 
          <CTA2 title='Next' url='/Onboarding3' />
        </div>
    </div>
  );
}

export default Onboarding2;