import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import like from '../Assets/like.svg';
import './AddIcon.css';


const AddIcon = () => {
    const [liked, setLiked] = useState(false);

    return (
        <div 
            className={`add_div ${liked ? 'liked' : ''}`} 
            onClick={() => setLiked(!liked)}>
            <h1 className='add_icon'>+</h1>
        </div>
    );
};
export default AddIcon;
