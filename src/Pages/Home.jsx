import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import shared_list from '../Assets/shared_list.svg';
import item_finder from '../Assets/item_finder.svg';
import compare_products from '../Assets/compare_products.svg';
import allergy_shield from '../Assets/allergy_shield.svg';
import recipe_generator from '../Assets/recipe_generator.svg';
import ad from '../Assets/ad.png';
import Nav from '../Components/Nav';
import Title from '../Components/Title';
import Header from '../Components/Header';
import './Home.css';

const Home = () => {

    return (
        <div className=''>
            <Nav />
            <Header />
            <div className='flex_column gap_vh'>
                <Title title='Frequently Used' />
           <div className='flex_row scroll_div'>
                    <div className='card1'> 
                        <img src={shared_list} alt="" />
                        <p className='card_h'>Shared List</p>
                    </div>
                    <div className='card2'> 
                        <img src={item_finder} alt="" />
                        <p className='card_h'>Item Finder</p>
                    </div>
                    <div className='card3'> 
                        <img src={compare_products} alt="" />
                        <p className='card_h'>Compare Products</p>
                    </div>
                    <div className='card4'> 
                        <img src={allergy_shield} alt="" />
                        <p className='card_h'>Allergy Shield</p>
                    </div>
                    <div className='card5'> 
                        <img src={recipe_generator} alt="" />
                        <p className='card_h'>Recipe Generator</p>
                    </div>
                </div>

                <div className='ad_card'>
                    <img src={ad} alt="" />
                    <div className='flex_column'>
                        <h1 className='card_h'>Start Shopping with EZ-SAVER</h1>
                        <p className='ad_p'>Shopping Made Easy</p>
                        {/* <button className=''>start now</button> */}
                    </div>
                </div>

                <Title title='Our Partners' />
                      <div className='flex_row scroll_div'>
                    <div className='card1'> 
                        <img src={shared_list} alt="" />
                        <p className='card_h'>Shared List</p>
                    </div>
                    <div className='card2'> 
                        <img src={item_finder} alt="" />
                        <p className='card_h'>Item Finder</p>
                    </div>
                    <div className='card3'> 
                        <img src={compare_products} alt="" />
                        <p className='card_h'>Compare Products</p>
                    </div>
                    <div className='card4'> 
                        <img src={allergy_shield} alt="" />
                        <p className='card_h'>Allergy Shield</p>
                    </div>
                    <div className='card5'> 
                        <img src={recipe_generator} alt="" />
                        <p className='card_h'>Recipe Generator</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;