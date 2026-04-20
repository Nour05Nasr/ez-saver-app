import React from 'react';
import p1 from '../Assets/p1.svg'; 
import p2 from '../Assets/p2.svg';
import p3 from '../Assets/p3.svg';
import './MembersBar.css';


const MembersBar = () => {
    return ( <div className='members_bar'>
          <div className='members_stack'>
            <img src={p1} alt="member" className='member_img' />
            <img src={p2} alt="member" className='member_img overlap' />
            <img src={p3} alt="member" className='member_img overlap' />
          </div>
          <p className='header_subtitle'>Connected Members</p>
        </div> );
}
 
export default MembersBar ;