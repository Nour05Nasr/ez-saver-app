import React, { useState, useEffect } from 'react';
import { supabase } from '../Supabase';
import { useParams, Link } from 'react-router-dom';
import BackHeader from '../Components/BackHeader';
import CTA2 from '../Components/CTA2';
import Nav from '../Components/Nav';
import empty_cart from '../Assets/empty_cart.png';
import './Cart.css';

const Ingredients = () => {
const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getRecipeDetails() {
      setLoading(true);
      
      const { data: recipeData, error: recipeError } = await supabase
        .from('recipes')
        .select("*")
        .eq('id', id)
        .single(); 

      if (!recipeError) {
        setRecipe(recipeData);
      }

      
      setLoading(false);
    }

    getRecipeDetails();
  }, [id]);

  useEffect(() => {
      async function getAllProducts() {
        setLoading(true);
        const { data, error } = await supabase
          .from('products')
          .select("*")
          .limit(6)
          .order("id", { ascending: true });
  
        if (!error) {
          const productsWithQty = data.map(item => ({ ...item, qty: 1 }));
          setProducts(productsWithQty);
        }
        setLoading(false);
      }
      getAllProducts();
    }, []);

  // if (loading) return <div>Loading...</div>;
  if (!recipe) return <div>Loading Ingredient List</div>;

  return (
    <div className='cart_page'>
<BackHeader
        title='Ingredient List'
        subtitle={`${products.length} items`}
        url='/Recipes' />
      
        <>
          <div className="wavy_divider"></div>
        <div className='cart_bg'>
        <div className='flex_column'>
          <p className='notify_title'>{recipe.recipe}</p>
          <div className='flex_row_end'>
            <p className='label'>Cuisine</p>
            <p className='label'>{recipe.cuisine}</p>
          </div>
          <div className='flex_row_end'>
            <p className='label'>Serving</p>
            <p className='label'>{recipe.serving}</p>
          </div>
          <div className='flex_row_end'>
            <p className='label'>Calories</p>
            <p className='label'>{recipe.calories}</p>
          </div>
        </div>

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