import React, { useState, useEffect } from 'react';
import { supabase } from '../Supabase';
import { Link } from 'react-router-dom';
import Nav from '../Components/Nav';
import BackHeader from '../Components/BackHeader';
import Category from '../Components/Category';
import FindIcon from '../Components/FindIcon';
import Title from '../Components/Title';
import MembersBar from '../Components/MembersBar';
import './SharedList.css';


const ItemsFinder = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Dairy'); 
  const [loading, setLoading] = useState(true);

  const categories = ['Dairy', 'Poultry', 'Grains', 'Deli', 'Household', 'Bakery'];

    useEffect(() => {
    async function getAllProducts() {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select("*")
        .limit(8)
        .order("id", { random : true });
        // .order("id", { ascending: true });

      if (!error) {
        setProducts(data);
      }
      setLoading(false);
    }
    getAllProducts();
  }, []);

const filteredProducts = products.filter(p => p.category === selectedCategory);
  return (
    <div className='home_body'>
      <BackHeader title='Item Finder' url='/ItemsFinder' />
      {/* <h1 className='header_title header_w'></h1> */}
      <div className='section_container'>
        <div className='category_scroll_div'>
          {categories.map((cat) => (
            <div key={cat} onClick={() => setSelectedCategory(cat)}>
              <Category 
                title={cat} 
                isActive={selectedCategory === cat}
              />
            </div>
          ))}
        </div>
      </div>

      <div className='section_container'>
          <Title title={`${selectedCategory.toUpperCase()} PRODUCTS`} />

          <div className='product_scroll_div'>
          {products.map((product) => (
                     <div className='shared_card'>  
              <Link to={`/ItemFinder/${product.id}`}>
                <FindIcon />
              </Link>
              <Link className='flex_column' to={`/ProductDetails/${product.id}`} key={product.id} >
                <img className='partner product_img' src={product.img} alt="" />
                <div className='column_start'>
                <h2 className='price'>{product.price} EGP</h2>
                <p className='product_name top_0'>{product.name}</p>
                </div>
            </Link>
              </div>
          ))}
        </div>
      </div>
      

      <div className='section_container'>
            <Title title='ALL Products' />
            
             <div className='product_scroll_div bottom'>
          {products.map((product) => (
                        <div className='shared_card'>  
              <Link to={`/ItemFinder/${product.id}`}>
                <FindIcon />
              </Link>
              <Link className='flex_column' to={`/ProductDetails/${product.id}`} key={product.id} >
                <img className='partner product_img' src={product.img} alt="" />
                <div className='column_start'>
                <h2 className='price'>{product.price} EGP</h2>
                <p className='product_name top_0'>{product.name}</p>
                </div>
            </Link>
              </div>
          ))}
        </div>

      </div>

      <Nav />
    </div>
  );
}

export default ItemsFinder;