import React, { useState } from 'react';
import './Input.css';


const Input = (props) => {
  return (<div className='input_div'>
    {/* <span class="icon"></span> */}
    <input  
            type={props.type || "text"}
            placeholder={props.title}
            value={props.value} 
            onChange={props.onChange} // This line is mandatory for the login to work!
            className="custom_input_class log_input"
        />
    {/* <input class="log_input" type="text" placeholder={props.title} /> */}
   </div>);
}
 
export default Input;