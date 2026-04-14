import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import onboarding1 from '../Assets/onboarding1.png';
import PageIndicator from '../Components/PageIndicator';
import SplashScreen from './SplashScreen';
import CTA2 from '../Components/CTA2';
import './Onboarding.css';
import './global.css';

function Onboarding() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="app">
      {showSplash ? (
        <SplashScreen onAnimationEnd={() => setShowSplash(false)} />
      ) : (
        <div className="onboarding flex_column gap">
            <img src={onboarding1} alt="EZ-SAVER Save Effort"  />
          <h1 className='onboarding_h'>Save Effort</h1>
          <p className='onboarding_p'>Navigate the store quickly with indoor navigation and AR directions to find items in seconds</p>
      <PageIndicator activeIndex={0} /> 
          <CTA2 title='Next' url='/Onboarding2' />
        </div>
      )}
    </div>
  );
}

export default Onboarding;