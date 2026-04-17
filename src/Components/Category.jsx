import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Category.css';

const Category = (props) => {

    return (
            <p className='category'>{props.title}</p>
        );}

export default Category;