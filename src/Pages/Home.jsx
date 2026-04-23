import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import shared_list from '../Assets/shared_list.svg';
import item_finder from '../Assets/item_finder.svg';
import compare_products from '../Assets/compare_products.svg';
import allergy_shield from '../Assets/allergy_shield.svg';
import recipe_generator from '../Assets/recipe_generator.svg';
import oscar from '../Assets/oscar.png';
import car from '../Assets/car.png';
import metro from '../Assets/metro.png';
import kazyon from '../Assets/kazyon.png';
import like from '../Assets/like.svg';
import ad from '../Assets/ad.png';
import Nav from '../Components/Nav';
import Title from '../Components/Title';
import LikeIcon from '../Components/LikeIcon';
import HomeHeader from '../Components/HomeHeader';
import './Home.css';

const Home = () => {

    return (
        <div className='home_body'>
            <HomeHeader />
            <div className='flex_column gap_vh '>
                <Title title='Frequently Used' />
           <div className='flex_row scroll_div'>
                        <Link to='/SharedList'>
                    <div className='card1'> 
                        <img src={shared_list} alt="" />
                        <p className='card_h'>Shared List</p>
                    </div>
                        </Link>
                        <Link to='/ItemsFinder'>
                    <div className='card2'> 
                        <img src={item_finder} alt="" />
                        <p className='card_h'>Item Finder</p>
                    </div>
                        </Link>
                        <Link to='/ItemsCompare'>
                    <div className='card3'> 
                        <img src={compare_products} alt="" />
                        <p className='card_h'>Compare Products</p>
                    </div>
                        </Link>
                        <Link to='/Recipes'>
                    <div className='card5'> 
                        <img src={recipe_generator} alt="" />
                        <p className='card_h'>Shop by Recipe</p>
                    </div>
                        </Link>
                    {/* <div className='card4'> 
                        <img src={allergy_shield} alt="" />
                        <p className='card_h'>Allergy Shield</p>
                    </div> */}
                </div>

                <div className='ad_card'>
                    <img src={ad} alt="" />
                    <div className='flex_column ad_w'>
                        <h1 className='card_h'>Start Shopping with EZ-SAVER</h1>
                        <p className='ad_p'>Shopping Made Easy</p>
                        {/* <button className=''>start now</button> */}
                    </div>
                </div>

                <Title title='Our Partners' />
                      <div className='flex_row scroll_div2 bottom'>
                        <div className='like_card'>  
                        <LikeIcon />
                            <h1 className='like_h'>Metro</h1>
                            <img className='partner' src={metro} alt="" />
                        </div>
                        <div className='like_card'>  
                        <LikeIcon />
                            <h1 className='like_h'>Kazyon</h1>
                            <img className='partner' src={kazyon} alt="" /> 
                        </div>
                        <div className='like_card'>  
                        <LikeIcon />
                            <h1 className='like_h'>Carfeour</h1>
                            <img className='partner' src={car} alt="" />
                        </div>
                        <div className='like_card'>  
                        <LikeIcon />
                            <h1 className='like_h'>Oscar</h1>
                            <img className='partner' src={oscar} alt="" />
                        </div>
                    </div>
                </div>
                
            <Nav />
            </div>);}

export default Home;