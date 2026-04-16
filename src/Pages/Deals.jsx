import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Nav from '../Components/Nav';
import like from '../Assets/like.svg';
import Header from '../Components/Header';
import ad from '../Assets/ad.png';
import Title from '../Components/Title';
import './LogIn.css';

const Home = () => {

    return (
        <div className='home_body'>
            <Header title='Deals & Promotions' url='/Home'/>

              <div className='flex_column gap_vh'>
                <Title title='Top Deals' />
                      <div className='flex_row scroll_div2'>
                        <div className='like_card'>  
                        <div className='like_div'>
                            <img src={like} alt="" />
                        </div>
                            <h1 className='like_h'>Metro</h1>
                            {/* <img className='partner' src={metro} alt="" /> */}
                        </div>
                        <div className='like_card'>  
                        <div className='like_div'>
                            <img src={like} alt="" />
                        </div>
                            <h1 className='like_h'>Oscar Stores</h1>
                            {/* <img className='partner' src={oscar} alt="" /> */}
                        </div>
                        <div className='like_card'>  
                        <div className='like_div'>
                            <img src={like} alt="" />
                        </div>
                            <h1 className='like_h'>Carfeour</h1>
                            {/* <img className='partner' src={car} alt="" /> */}
                        </div>
                        <div className='like_card'>  
                        <div className='like_div'>
                            <img src={like} alt="" />
                        </div>
                            <h1 className='like_h'>Kazyon</h1>
                            {/* <img className='partner' src={kazyon} alt="" />                        </div> */}
                    </div>
                    </div>

                <div className='ad_card'>
                    <img src={ad} alt="" />
                    <div className='flex_column ad_w'>
                        <h1 className='card_h'>Start Shopping with EZ-SAVER</h1>
                        <p className='ad_p'>Shopping Made Easy</p>
                        {/* <button className=''>start now</button> */}
                    </div>
                </div>

                <Title title='All Deals' />
                      <div className='flex_row scroll_div2'>
                        <div className='like_card'>  
                        <div className='like_div'>
                            <img src={like} alt="" />
                        </div>
                            <h1 className='like_h'>Metro</h1>
                            {/* <img className='partner' src={metro} alt="" /> */}
                        </div>
                        <div className='like_card'>  
                        <div className='like_div'>
                            <img src={like} alt="" />
                        </div>
                            <h1 className='like_h'>Oscar Stores</h1>
                            {/* <img className='partner' src={oscar} alt="" /> */}
                        </div>
                        <div className='like_card'>  
                        <div className='like_div'>
                            <img src={like} alt="" />
                        </div>
                            <h1 className='like_h'>Carfeour</h1>
                            {/* <img className='partner' src={car} alt="" /> */}
                        </div>
                        <div className='like_card'>  
                        <div className='like_div'>
                            <img src={like} alt="" />
                        </div>
                            <h1 className='like_h'>Kazyon</h1>
                            {/* <img className='partner' src={kazyon} alt="" />                        </div> */}
                    </div>
                    </div>
              </div>

            <Nav />
        </div>
    );
}

export default Home;