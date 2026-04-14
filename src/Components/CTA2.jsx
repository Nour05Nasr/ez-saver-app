import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './CTA2.css';

const CTA2 = (props) => {
    return ( 
        <>
            <Link className="cta_div2" to={props.url}>
                <button className="cta_temp2">{props.title}</button>
                {/* <div className="cta_bg"></div> */}
            </Link>
        </>
     );
}
 
export default CTA2;