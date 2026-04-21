import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../Supabase';
import alert from '../Assets/alert.svg'; 
import qr from '../Assets/qr.png';
import Nav from '../Components/Nav';
import CTA1 from '../Components/CTA1';
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
            <BackHeader title='Checkout' url='/cart' />

            <div className='flex_row map_card'>
                <img src={alert} alt="arrow" className='nav_icon_top' />
                <div className='column_start'>
                    <h3 className='map_title'>For Payment</h3>
                    <p className='header_subtitle'>
                       Show your digital receipt at the final check point to pay.
                    </p>
                </div>
            </div>

            <div className='flex_column'>
                <p className='header_subtitle'>Receipt Number</p>
                <h2 className='map_title2'>#ESV-2024-1842</h2>
            <img src={qr} alt="Map" />
                <p className='header_subtitle'>Total Amount</p>
                <h2 className='map_title2'>452.50 EGP</h2>
            </div>

                <div className='map_card column_start'>
                    <h3 className='map_title2'>Reciept Summary</h3>
                    <div className='flex_row_end'>
                       <p className='header_subtitle'>Items Purchased</p>
                       <p className='header_subtitle'>6 items</p>
                    </div>
                    <div className='flex_row_end'>
                       <p className='header_subtitle'>Time saved</p>
                       <p className='header_subtitle'>60 EGP</p>
                    </div>
                    <div className='flex_row_end'>
                       <p className='header_subtitle'>Money saved</p>
                       <p className='header_subtitle'>10minutes</p>
                    </div>
                    <div className='flex_row_end'>
                       <p className='header_subtitle'>Date & Time</p>
                       <p className='header_subtitle'>Feb 8, 2026 • 3:42 PM</p>
                    </div>
                </div>

                <div className='bottom_map gap_vh'>
                    <CTA2 title='View Full Reciept' url='/Reciept' />
                    <CTA1 title='E-mail Reciept' url='/Reciept' />
                </div>

            <Nav />
        </div>
    );
}

export default ItemFinder;