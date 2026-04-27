import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import onboarding1 from '../Assets/onboarding1.png';
import PageIndicator from '../Components/PageIndicator';
import SplashScreen from './SplashScreen';
import onboarding_logo from '../Assets/onboarding_logo.svg';
import CTA2 from '../Components/CTA2';
import './Onboarding.css';
import './index.css';

function Onboarding() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="app">
      {showSplash ? (
        <SplashScreen onAnimationEnd={() => setShowSplash(false)} />
      ) : (
        <div className="onboarding flex_column gap">
          <div className='w_skip'>
            <img src={onboarding_logo} alt="EZ-SAVER Logo" />
            <Link to='/LogIn'>
              <p className='guest'>Skip</p>
            </Link>
          </div>
            <img src={onboarding1} alt="EZ-SAVER Save Effort"  />
          <h1 className='onboarding_h'>Save Effort</h1>
          <p className='onboarding_p'>Find items Effortlessly with indoor navigation and AR directions</p>
      <PageIndicator activeIndex={0} /> 
          <CTA2 title='Next' url='/Onboarding2' />
        </div>
      )}
    </div>
  );
}

export default Onboarding;