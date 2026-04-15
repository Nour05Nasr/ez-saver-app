import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Nav from '../Components/Nav';
import Header from '../Components/Header';
import './Title.css';

const Home = (props) => {

    return (<div className='flex_row_end title_w'>
                <h1 className='header_title'>{props.title}</h1>
                <p className='underline'>View All</p>
            </div>);}

export default Home;