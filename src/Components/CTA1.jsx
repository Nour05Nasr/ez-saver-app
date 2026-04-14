import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './CTA1.css';

const CTA1 = (props) => {
    return ( 
        <>
            <Link className="cta_div1" to={props.url}>
                <button className="cta_temp1">{props.title}</button>
                {/* <div className="cta_bg"></div> */}
            </Link>
        </>
     );
}
 
export default CTA1;