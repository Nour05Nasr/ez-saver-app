import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Components/Nav';
import profile_img from '../Assets/profile_img.svg';
import BackHeader from '../Components/Header2';
import arrow_right from '../Assets/arrow_right.svg';
import './Profile.css';

const Profile = () => {
  // Dynamic data for stats
  const stats = [
    { label: 'Lists', value: 6 },
    { label: 'trips', value: 3 },
    { label: 'likes', value: 20 },
  ];

  const generalMenu = [
    'Feedback', 'Accessibility', 'Privacy Policy', 'Terms & Conditions', 'Help & Support'
  ];

  return (
    <div className='profile_container'>
      <BackHeader title="Profile Settings" url="/Home" />

      <div className='profile_content'>
        <div className='avatar_section'>
          <div className='avatar_circle'>
            <img className='fa-solid' src={profile_img} alt="" />          </div>
        </div>

        <div className='stats_row'>
          {stats.map((stat, index) => (
            <div key={index} className='stat_box'>
              <h2 className='stat_value'>{stat.value}</h2>
              <p className='stat_label'>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* General Section */}
        <div className='menu_card'>
          <h4 className='menu_category'>GENERAL</h4>
          {generalMenu.map((item, index) => (
            <div key={index} className='menu_item'>
              <span>{item}</span>
              <img className='float_right' src={arrow_right} alt="" />
            </div>
          ))}
        </div>

        {/* Interface Section */}
        <div className='menu_card'>
          <h4 className='menu_category'>INTERFACE</h4>
          <div className='menu_item'>
            <span>Text Size</span>
              <img className='float_right' src={arrow_right} alt="" />
          </div>
          <div className='menu_item'>
            <span>Change Language</span>
            <img className='float_right' src={arrow_right} alt="" />
          </div>
          <div className='menu_item no_border'>
            <span>Dark Mode</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        {/* <div className='menu_item'> */}
        <Link to="/LogIn" className='sign_out'>
          <span>Sign Out</span>
              <img className='float_right' src={arrow_right} alt="" />
        </Link>
        {/* </div> */}
      </div>

      <Nav />
    </div>
  );
}

export default Profile;