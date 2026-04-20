import React, { useState, useEffect } from 'react';
import { supabase } from '../Supabase';
import { Link } from 'react-router-dom';
import Nav from '../Components/Nav';
import BackHeader from '../Components/BackHeader';
import Category from '../Components/Category';
import Title from '../Components/Title';
import MembersBar from '../Components/MembersBar';
import './SharedList.css';


const ShaedList = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Diary'); // Default selection
  const [loading, setLoading] = useState(true);

  const categories = ['Diary', 'Poultry', 'Grains', 'Deli', 'Household', 'Bakery'];

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

const filteredProducts = products.filter(p => p.category === selectedCategory);
  return (
    <div className='home_body'>
      <BackHeader title='Shared Shopping List' url='/Home' />
      {/* <h1 className='header_title header_w'></h1> */}
        <MembersBar />
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
            <div className='' key={product.id}>

              <img src={product.img} className='product_img' alt={product.name} />
                <div className='product_card'>
              <div className='flex_column_start'>
                          
                <div className='flex_row_end'>
                <h2 className='price'>{product.price} EGP</h2>
                  <Link className='add_div' to='/SharedList2'>
                  <p className='add_btn'>+</p>
                  </Link>
                </div>
                <p className='product_name'>{product.name}</p>
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
            <Title title='ALL Products' />
            
             <div className='product_scroll_div bottom'>
          {products.map((product) => (
            <div className='' key={product.id}>
                {/* <div className='like_div2'>
                    <img src={like} alt="like" />
                </div> */}

              <img src={product.img} className='product_img' alt={product.name} />
                <div className='product_card'>
              <div className='flex_column_start'>
                          
                <div className='flex_row_end'>
                <h2 className='price'>{product.price} EGP</h2>
                  <Link className='add_div' to='/SharedList2'>
                  <p className='add_btn'>+</p>
                  </Link>
                </div>
                <p className='product_name'>{product.name}</p>
                </div>
                {/* <div className='price_partner_row'>
                    <img src={product.logo} className='partner_mini_logo' alt="partner" />
                </div> */}
              </div>
            </div>
          ))}
        </div>

      </div>

      <Nav />
    </div>
  );
}

export default ShaedList;