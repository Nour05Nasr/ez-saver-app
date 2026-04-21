import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import like from '../Assets/like.svg';
import './LikeIcon.css';


const LikeIcon = () => {
    const [liked, setLiked] = useState(false);

    return (
        <div 
            className={`like_div ${liked ? 'liked' : ''}`} 
            onClick={() => setLiked(!liked)}
        >
            <img 
                src={like} 
                alt="like" 
                className="heart_svg"
            />
        </div>
    );
};
export default LikeIcon;
