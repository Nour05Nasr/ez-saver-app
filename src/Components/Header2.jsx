import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import back from '../Assets/back.svg';
import './HomeHeader.css';

const Header2 = (props) => {

    return (<div className='header_w flex_row_end'>
        <div className='flex_row'>
        {/* <Link to={props.url} className='back'>
            <img src={back} alt="" />
        </Link> */}
            <h1 className='header_title'>{props.title}</h1>
        </div>
            <p className='header_p'>{props.subtitle}</p>
    </div>);}

export default Header2;