import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../Supabase';
import map from '../Assets/map.png';
import arrow from '../Assets/arrow.svg'; 
import locationIcon from '../Assets/location.svg';
import Nav from '../Components/Nav';
import CTA2 from '../Components/CTA2';
import BackHeader from '../Components/BackHeader';
import './ItemFinder.css';

const ItemFinder = () => {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function getProductDetails() {
            const { data, error } = await supabase
                .from('products')
                .select("name, aisle, status")
                .eq('id', id)
                .single(); 

            if (!error && data) {
                setProduct(data);
            }
        }
        if (id) getProductDetails();
    }, [id]);

    return (
        <div className='home_body center'>
            <BackHeader title='Item Finder' url='/ItemsFinder' />

            <div className='flex_row map_card'>
                <img src={arrow} alt="arrow" className='nav_icon_top' />
                <div className='column_start'>
                    <h3 className='map_title'>Follow the arrow</h3>
                    <p className='header_subtitle'>
                       Point your camera ahead, Locating your {product ? product.name : 'item'}.
                    </p>
                </div>
            </div>

              <img src={map} alt="Map" />
              <CTA2 title='Find in AR' url='/ItemFinderAR' />

            <div className='map_card bottom_map'>
                <img src={arrow} alt="arrow" className='nav_icon_bottom' />
                
                <div className='column_start'>
                    <div className='flex_row icon_text_gap'>
                        <img src={locationIcon} alt="pin" className='location_icon_small' />
                        <h3 className='map_title2'>15 meters ahead</h3>
                    </div>
                    <p className='price'>{product?.aisle || "Calculating..."}</p>
                    <p className='instock'>● {product?.status || "Checking Stock..."}</p>
                </div>
            </div>

            <Nav />
        </div>
    );
}

export default ItemFinder;