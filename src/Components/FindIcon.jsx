import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import find from '../Assets/find.svg';
import './AddIcon.css';


const AddIcon = () => {
    const [liked, setLiked] = useState(false);

    return (
        <div 
            className={`add_div ${liked ? 'liked' : ''}`} 
            onClick={() => setLiked(!liked)}>
            {/* <h1 className='add_icon'>+</h1> */}
            <img src={find} alt="" />
        </div>
    );
};
export default AddIcon;
