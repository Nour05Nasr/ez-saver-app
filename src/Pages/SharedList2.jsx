import React, { useState, useEffect } from 'react';
import { supabase } from '../Supabase';
import { Link } from 'react-router-dom';
import BackHeader from '../Components/BackHeader';
import Nav from '../Components/Nav';
import empty_cart from '../Assets/empty_cart.png';
import './Cart.css';

const SharedList2 = () => {
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
        // We initialize with checked: false so the bar starts at 0%
        const productsWithState = data.map(item => ({ 
          ...item, 
          qty: 1, 
          checked: false 
        }));
        setProducts(productsWithState);
      }
      setLoading(false);
    }
    getAllProducts();
  }, []);

  const toggleCheck = (id) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, checked: !product.checked } : product
    ));
  };

  const removeItem = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const totalItems = products.length;
  const completedItems = products.filter(p => p.checked).length;
  
  const progressWidth = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;

  return (
    <div className='cart_page'>
      <BackHeader
        title='Shared Shopping List' 
        url='/SharedList'
        subtitle={`${totalItems} items`} 
      />
      
      {totalItems > 0 ? (
        <>
          <div className="wavy_divider2"></div>
          <div className='list_bg'>
            <div className='flex_column gap_vh'>
              <div className='flex_row_end'>
                <div className='summary_item'>
                  <p className='label'>Progress</p>
                </div>
                <div className='summary_item'>
                  <p className='label'>{completedItems} of {totalItems} items</p>
                </div>
              </div>
              
              <div className='bar_div'>
                {/* <hr className='progress_bar'/>  */}
                <hr 
                  className='progress_bar1' 
                  style={{ 
                    width: `${progressWidth}%`,
                    transition: 'width 0.3s ease-in-out' 
                  }}
                />
              </div>
            </div>

            <div className='dashed_line'></div>
            
            <div className='product_list'>
              {products.map((product) => (
                <div className='cart_card' key={product.id}>
                  <div className='product_details flex_row_end'>
                    <input 
                      type="checkbox" 
                      className='checkbox' 
                      checked={product.checked}
                      onChange={() => toggleCheck(product.id)}
                    />
                    
                    <div className='column_start'>
                      <h3 className='product_name'>{product.name}</h3>
                      <p className='price'>{product.aisle}</p>
                      <div className='flex_row'>
                        <p className='header_subtitle'>{product.value}</p>
                        <p className='header_subtitle'>{product.unit}</p>
                      </div>
                    </div>
                    
                    <div className='flex_column gap_vh'>
                      <Link to={`/ItemFinder/${product.id}`} className='find_link'>Find</Link>
                      <button className='remove_link' onClick={() => removeItem(product.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className='empty_cart_container'>
          <h1 className='header_title'>YOUR LIST IS EMPTY</h1>
           <p className='header_subtitle'>
           Add more products to your list automatically and enjoy your shopping journey
          </p>
          <img src={empty_cart} alt="Empty" className='empty_img' />
        </div>
      )}
      
      <Nav />
    </div>
  );
};

export default SharedList2;