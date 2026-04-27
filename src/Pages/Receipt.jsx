import React, { useState, useEffect } from 'react';
import { supabase } from '../Supabase';
import BackHeader from '../Components/BackHeader';
import CTA2 from '../Components/CTA2';
import Nav from '../Components/Nav';
import empty_cart from '../Assets/empty_cart.png';
import './Cart.css';

const Receipt = () => {
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
        const productsWithQty = data.map(item => ({ ...item, qty: 1 }));
        setProducts(productsWithQty);
      }
      setLoading(false);
    }
    getAllProducts();
  }, []);

  const removeItem = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const updateQty = (id, amount) => {
    setProducts(products.map(item => 
      item.id === id ? { ...item, qty: Math.max(1, item.qty + amount) } : item
    ));
  };

  const totalItems = products.length;

  return (
    <div className='cart_page'>

      <BackHeader
        title='Full Receipt' 
        url='/Checkout'
        subtitle={`${totalItems} items`} />
      
        <>
          <div className="wavy_divider"></div>
          <div className='cart_bg'>
                <div className='total_summary column_start gap_vh'>
                    <h3 className='notify_title'>Reciept Summary</h3>
                    <div className='flex_row_end'>
                       <p className='label'>Items Purchased</p>
                       <p className='label'>6 items</p>
                    </div>
                    <div className='flex_row_end'>
                       <p className='label'>Time saved</p>
                       <p className='label'>10 minutes</p>
                    </div>
                    <div className='flex_row_end'>
                       <p className='label'>Money saved</p>
                       <p className='label'>60 EGP</p>
                    </div>
                    <div className='flex_row_end'>
                       <p className='label'>Date & Time</p>
                       <p className='label'>Feb 8, 2026 • 3:42 PM</p>
                    </div>
                </div>

            <div className='dashed_line'></div>
            <div className='product_list'>
              {products.map((product) => (
                <div className='cart_card' key={product.id}>
                    <img src={product.img} alt={product.name} />
               
                  <div className='product_details'>
                    <h3 className='product_name'>{product.name}</h3>
                    <p className='price'>{product.price} EGP</p>
                    <p className='header_subtitle'>{product.value} {product.unit}</p>
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

export default Receipt;