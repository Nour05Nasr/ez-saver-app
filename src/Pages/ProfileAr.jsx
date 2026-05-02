import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Components/Nav';
import profile from '../Assets/profile.png';
import arrow_right from '../Assets/arrow_right.svg';
import './Profile.css';

const ProfileAr = () => {
  const [isDarkMode, setIsDarkMode] = useState(document.documentElement.getAttribute('data-theme') === 'dark');

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  const stats = [
    { label: 'القوائم', value: 8 },
    { label: 'الرحلات', value: 6 },
    { label: 'الإعجابات', value: 12 },
  ];

  const generalMenu = [
    'إمكانية الوصول', 'سياسة الخصوصية', 'الشروط والأحكام', 'المساعدة والدعم'
  ];

  return (
    /* Added dir="rtl" and a specific class for Arabic styling overrides */
    <div className='home_body profile_container arabic_wrapper' dir="rtl">
      <h1 className='profile_title header_w '>إعدادات الملف الشخصي</h1>

      <div className='profile_content top1'>
        <div className='avatar_section flex_row gap_vh'>
          <img className='fa-solid' src={profile} alt="Profile" />          
          <div className='column_start'>
            <h2 className='header_title'>نور نصر</h2>
            <p className='header_subtitle'>nour.a.nasr05@gmail.com</p>
            <p className='header_subtitle'>٣ أفراد من العائلة متواصلون</p>
          </div>
        </div>

        <div className='stats_row'>
          {stats.map((stat, index) => (
            <div key={index} className='stat_box'>
              <h2 className='stat_value'>{stat.value}</h2>
              <p className='stat_label'>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className='menu_card'>
          <h4 className='menu_category'>عام</h4>
          {generalMenu.map((item, index) => (
            <div key={index} className='menu_item'>
              <span>{item}</span>
              {/* Rotated arrow for RTL */}
              <img className='arrow_icon' src={arrow_right} alt="" style={{ transform: 'rotate(180deg)' }} />
            </div>
          ))}
        </div>

        <div className='menu_card'>
          <h4 className='menu_category'>واجهة</h4>
          <div className='menu_item'>
            <span>حجم النص</span>
            <img className='arrow_icon' src={arrow_right} alt="" style={{ transform: 'rotate(180deg)' }} />
          </div>

          <Link to="/Profile" className='menu_item' style={{ textDecoration: 'none' }}>
            <span>تغيير اللغة</span>
            <div className='lang_div'>
              <p className='lang' style={{ color: 'var(--accent_color)', fontWeight: 'bold' }}>EN</p>
            </div>
          </Link>

          <div className='menu_item no_border'>
            <span>الوضع المظلم</span>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={isDarkMode}
                onChange={toggleDarkMode}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        <Link to="/LogIn" className='sign_out'>
          <span>تسجيل الخروج</span>
          <img className='arrow_icon' src={arrow_right} alt="" style={{ transform: 'rotate(180deg)' }} />
        </Link>
      </div>

      <Nav />
    </div>
  );
}

export default ProfileAr;