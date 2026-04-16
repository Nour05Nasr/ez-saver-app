import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import back from '../Assets/back.svg';
import './HomeHeader.css';

const HomeHeader = (props) => {

    return (<div className='header_w flex_row_end'>
        <Link to={props.url}>
            <img src={back} alt="" />
        </Link>
            <h1 className='header_title'>{props.title}</h1>
    </div>);}

export default HomeHeader;