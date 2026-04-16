import React from 'react';
import './PageIndicator.css';


const PageIndicator = ({ activeIndex }) => {
  const dots = [0, 1, 2];

  return (
    <div className="indicator-container">
      {dots.map((index) => (
        <div
          key={index}
          className={`indicator-dot ${activeIndex === index ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default PageIndicator;