import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo1 from '../Assets/logo1.png';
import logo3 from '../Assets/logo3.png';
import './SplashScreen.css';

const SplashScreen = ({ onAnimationEnd }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // 1. Initial Delay (matches your Figma 400ms delay)
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 400);

    // 2. Transition to Onboarding (matches animation duration + buffer)
    const transitionTimer = setTimeout(() => {
      if (onAnimationEnd) onAnimationEnd();
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(transitionTimer);
    };
  }, [onAnimationEnd]);

  return (
    <div className={`splash-container ${isActive ? 'active' : ''}`}>
      {/* Morphing background layer */}
      <div className="bg-shape"></div>

      <div className="logo-wrapper">
          {/* <h1 className="logo-text">EZ-SAVER</h1> */}
        <img 
          src={logo3} 
          alt="EZ-SAVER Logo" 
          className="logo-icon" 
        />
        <img 
          src={logo1} 
          alt="EZ-SAVER Logo" 
          className="logo-icon" 
        />
      </div>
    </div>
  );
};

export default SplashScreen;