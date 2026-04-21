import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import homeIcon from '../Assets/home.svg';
import dealsIcon from '../Assets/deals.svg';
import scanIcon from '../Assets/scan.svg';
import cartIcon from '../Assets/cart.svg';
import profileIcon from '../Assets/profile.svg';
import './Nav.css';

const Nav = () => {
  const location = useLocation(); 
  const tabs = [
    { name: 'Home', icon: homeIcon, path: '/home' },
    { name: 'Deals', icon: dealsIcon, path: '/deals' },
    { name: 'Scan', icon: scanIcon, path: '/scan', isLarge: true },
    { name: 'Cart', icon: cartIcon, path: '/cart' },
    { name: 'Profile', icon: profileIcon, path: '/profile' },
  ];

  return (
    <div className="bottom-nav">
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path;

        return (
          <Link 
            key={tab.name} 
            to={tab.path} 
            className="nav-link-wrapper"
          >
            <div
              className={`nav-item ${isActive ? 'active' : ''} ${tab.isLarge ? 'scan-button' : ''}`}
            >
              <div className="icon-wrapper">
                <img 
                  src={tab.icon} 
                  alt={tab.name} 
                  className={tab.isLarge ? "scan-img" : "nav-icon-img"} 
                />
              </div>
              
              {!tab.isLarge && <span className="nav-label">{tab.name}</span>}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;