import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../Supabase';
import AR from '../Assets/AR.mp4';
import './ItemFinderAR.css';

const ItemFinderAR = () => {
    return (
        <div className='home_body center'>
            <video autoPlay src={AR} />
        </div>
    );
}
export default ItemFinderAR;