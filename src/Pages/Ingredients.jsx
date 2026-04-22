import React, { useState, useEffect } from 'react';
import { supabase } from '../Supabase';
import { Link } from 'react-router-dom';

import BackHeader from '../Components/BackHeader';
import CTA2 from '../Components/CTA2';
import Nav from '../Components/Nav';
import empty_cart from '../Assets/empty_cart.png';
import './Cart.css';

const Ingredients = () => {
  const [recipes, setRecipes] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllRecipes() {
      setLoading(true);
      const { data, error } = await supabase
        .from('recipes')
        .select("*")
        .limit(3)
        .order("id", { ascending: true });

      if (!error) {
        setRecipes(data);
      }
      setLoading(false);
    }
    getAllRecipes();
  }, []);

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

  const totalItems = products.length;

  return (
    <div className='cart_page'>

      <BackHeader
        title='Ingredients List' 
        subtitle='6 items'
        url='/Recipes' />
      
        <>
          <div className="wavy_divider"></div>
          <div className='cart_bg'>
                   {recipes.map((recipe) => (
                        <div className='' key={recipe.id}>
            <div className='flex_column'>
              <div className='flex_row_end'>
                <p className='label'>Recipe Cuisine</p>
                <p className='label'>{recipe.cuisine}</p>
              </div>
              <div className='flex_row_end'>
                <p className='label'>Recipe Serving</p>
                <p className='label'>{recipe.cuisine}</p>
              </div>
              <div className='flex_row_end'>
                <p className='label'>Recipe Calories</p>
                <p className='label'>{recipe.calories}</p>
              </div>
              </div>
            </div>
                 ))}

            <div className='dashed_line'></div>
            <div className='product_list'>
              {products.map((product) => (
                <div className='cart_card' key={product.id}>
                    <img src={product.img} alt={product.name} />
               
                  <div className='column_start'>
                    <h3 className='product_name'>{product.name}</h3>
                    <div className='flex_row'>
                    <p className='header_subtitle'>{product.value} </p>
                    <p className='header_subtitle'>{product.unit} </p>
                    </div>
                    <div className='flex_row_end'>
                       <p className='price'>{product.price} EGP</p>
                       <Link to={`/ItemFinder/${product.id}`} className='find_link'>Find</Link>
                    </div>
                  </div>
            
                </div>
              ))}
            </div>
          </div>
        </>
      
      <Nav />
    </div>
  );
};

export default Ingredients;