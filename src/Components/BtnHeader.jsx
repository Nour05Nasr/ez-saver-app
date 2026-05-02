import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import back from '../Assets/back.svg';
import './HomeHeader.css';

const BtnHeader = (props) => {

    return (<div className='header_w flex_row_end'>
        <div className='flex_row'>
                   <Link to={props.url} className='back'>
                        <img src={back} alt="" />
                    </Link>
        <h1 className='header_title'>{props.title}</h1>
        </div>
        
        <Link to={props.btn_url}>
        <button className='header_btn'>{props.btn}</button>
        </Link>
    </div>);}

export default BtnHeader;