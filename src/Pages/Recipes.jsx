import React, { useState, useEffect } from 'react';
import { supabase } from '../Supabase';
import Nav from '../Components/Nav';
import Header from '../Components/Header';
import Category from '../Components/Category';
import Title from '../Components/Title';
import like from '../Assets/like.svg';
import ad from '../Assets/ad.png';
import './Deals.css';

const Recipes = () => {
  const [recipes, setRecipess] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
  async function getAllRecipess() {
        setLoading(true);
    const { data, error } = await supabase
        .from('recipes')
        .select("*")
        // .order("id", { ascending: true }); 

            if (!error) {
                setRecipess(data);
                // console.log("Fetched Partners:", data);
            }
            setLoading(false);
        }
        getAllRecipess();
    }, []);

    // if (loading) return <div className="loader-container">Loading Data...</div>;

  return (
    <div className='home_body'>
      {/* <Header title='Deals & Promotions' url='/Home' /> */}
      <h1 className='header_title header_w'>Shop By Recipe</h1>
      <div className='section_container'>
        <div className='flex_row_between'>
            <h3 className='header_title'>Cuisines</h3>
        </div>
        <div className='category_scroll_div'>
          <Category title='Italian' />
          <Category title='Egyptian' />
          <Category title='Asian' />
          <Category title='Mexican' />
          <Category title='Swedish' />
        </div>
      </div>

      <div className='section_container'>
            <Title title='TOP Recipes' />
        <div className='product_scroll_div'>
          {recipes.map((recipe) => (
            <div className='product_card' key={recipe.id}>
              <img src={recipe.img} className='product_img' alt={recipe.name} />
              <div className='flex_column_start'>
                <p className='product_name'>{recipe.name}</p>
                <div className='flex_row_end'>
                  <h2 className='price'>{recipe.calories}</h2>
                  <h2 className='sale'>{recipe.serving}</h2>
                </div>
                {/* <div className='price_partner_row'>
                    <img src={product.logo} className='partner_mini_logo' alt="partner" />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>



      <div className='section_container'>
            <Title title='ALL Recipes' />
             <div className='product_scroll_div bottom'>
          {recipes.map((recipe) => (
            <div className='product_card' key={recipe.id}>
                {/* <div className='like_div2'>
                    <img src={like} alt="like" />
                </div> */}
              <img src={recipe.img} className='product_img' alt={recipe.name} />
              <div className='flex_column_start'>
                <p className='product_name'>{recipe.name}</p>
                <div className='flex_row_end'>
                  <h2 className='price'>{recipe.calories}</h2>
                  <h2 className='sale'>{recipe.serving}</h2>
                </div>
                {/* <div className='price_partner_row'>
                    <img src={product.logo} className='partner_mini_logo' alt="partner" />
                </div> */}
              </div>
            </div>
          ))}

        </div>

                {/* <div className='promo_banner'>
        <div className='promo_content'>
            <h2 className='card_h'>REDEEM YOUR POINTS & GET UNLIMITED OFFERS</h2>
            <p className='ad_p'>Shopping Made EASY!</p>
            <button className='promo_btn ad_p'>Redeem</button>
        </div>
      </div> */}
      
      </div>

      <Nav />
    </div>
  );
}

export default Recipes;