import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Search} from 'lucide-react';
import notify from '../Assets/notify.svg';
import './HomeHeader.css';

const HomeHeader = (props) => {

    return (<div className='flex_column header_w'>
        <div className='flex_row_end'>
            <h1 className='header_title'>Welcome User</h1>
            <img src={notify} alt="" />
        </div>

        <div className='search_container'>
                <div className='search_wrapper'>
              <Search size={18} className="search_icon" />
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className='search_input' 
                    />
                </div>
            </div>

        {/* <div className="search-wrapper header__right">
              <input className='header_subtitle' type="text" placeholder="Search Anything..." />
        </div> */}
    </div>);}

export default HomeHeader;