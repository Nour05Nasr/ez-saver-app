import React, { useState, useEffect } from 'react';
import { supabase } from '../Supabase';
import { Link } from 'react-router-dom';
import Nav from '../Components/Nav';
import Category from '../Components/Category';
import Title from '../Components/Title';
import './Deals.css';

const Deals = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllProducts() {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select("*")
        .limit(6)
        .order("id", { ascending: true });

      if (!error) {
        setProducts(data);
      }
      setLoading(false);
    }
    getAllProducts();
  }, []);

  return (
    <div className='home_body'>
      <h1 className='header_title header_w'>Deals & Promotions</h1>
      
      <div className='section_container'>
        <div className='flex_row_between'>
          <h3 className='header_title'>Partners Deals</h3>
        </div>
        <div className='category_scroll_div'>
          <Category title='Oscar' />
          <Category title='Seoudi' />
          <Category title='Metro' />
          <Category title='Kazyon' />
          <Category title='Spinneys' />
        </div>
      </div>

      <div className='section_container'>
        <Title title='TOP DEALS' />
        <div className='product_scroll_div'>
          {products.map((product) => (
          <Link to={`/ProductDetails/${product.id}`} key={product.id} className='product_card_link'>
                <div className='product_card'>
                <img src={product.img} className='product_img' alt={product.name} />
                <div className='flex_column_start'>
                  <p className='product_name'>{product.name}</p>
                  <div className='flex_row_end'>
                    <h2 className='price'>{product.price} EGP</h2>
                    <h2 className='sale'>-3.00 EGP</h2>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className='section_container'>
        <Title title='ALL DEALS' />
        <div className='product_scroll_div'>
          {products.map((product) => (
          <Link to={`/ProductDetails/${product.id}`} key={product.id} className='product_card_link'>
              <div className='product_card'>
                <img src={product.img} className='product_img' alt={product.name} />
                <div className='flex_column_start'>
                  <p className='product_name'>{product.name}</p>
                  <div className='flex_row_end'>
                    <h2 className='price'>{product.price} EGP</h2>
                    <h2 className='sale'>-3.00 EGP</h2>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className='promo_banner'>
          <div className='promo_content'>
            <h2 className='card_h'>REDEEM YOUR POINTS & GET UNLIMITED OFFERS</h2>
            <p className='ad_p'>Shopping Made EASY!</p>
            <button className='promo_btn ad_p'>Redeem</button>
          </div>
        </div>
      </div>

      <Nav />
    </div>
  );
}

export default Deals;