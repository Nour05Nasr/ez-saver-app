import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Search} from 'lucide-react';
import notify from '../Assets/notify.svg';
import './Header.css';

const Header = (props) => {

    return (<div className='flex_column header_w'>
        <div className='flex_row_end'>
            <h1 className='header_title'>Welcome User</h1>
            <img src={notify} alt="" />
        </div>

        <div className="search-wrapper header__right">
              <Search size={18} className="search-icon" />
              <input className='header__subtitle' type="text" placeholder="Search Anything..." />
        </div>
    </div>);}

export default Header;