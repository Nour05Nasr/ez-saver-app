import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo1 from '../Assets/logo1.png';
import logo3 from '../Assets/logo3.png';
import './SplashScreen.css';

const SplashScreen = ({ onAnimationEnd }) => {
  const [isActive, setIsActive] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    setIsActive(true);

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2000); 
    const finishTimer = setTimeout(() => {
      if (onAnimationEnd) onAnimationEnd();
    }, 3000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onAnimationEnd]);



  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsActive(true);
  //   }, 400);

  //   const transitionTimer = setTimeout(() => {
  //     if (onAnimationEnd) onAnimationEnd();
  //   }, 2500);

  //   return () => {
  //     clearTimeout(timer);
  //     clearTimeout(transitionTimer);
  //   };
  // }, [onAnimationEnd]);

  // useEffect(() => {
  //   // Start initial animations
  //   setIsActive(true);

  //   // This duration matches the CSS ::after transition end (approx 2.8s total)
  //   const transitionTimer = setTimeout(() => {
  //     if (onAnimationEnd) onAnimationEnd();
  //   }, 2800);

  //   return () => clearTimeout(transitionTimer);
  // }, [onAnimationEnd]);

  return (
    <div className={`splash-container ${isActive ? 'active' : ''}`}>

      <div className="bg-shape"></div>

      <div className="logo-wrapper">
        <img 
          src={logo3} 
          alt="EZ-SAVER Logo" 
          className="logo-text-img" 
        />
        <img 
          src={logo1} 
          alt="EZ-SAVER Logo" 
          className="logo-icon-img" 
        />
      </div>
    </div>
  );
};

export default SplashScreen;