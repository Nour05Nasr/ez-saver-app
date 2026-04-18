import React, { useState, useEffect } from 'react';
import { supabase } from '../Supabase';
import Header2 from '../Components/Header2';
import CTA2 from '../Components/CTA2';
import Nav from '../Components/Nav';
import empty_cart from '../Assets/empty_cart.png';
import './Cart.css';

const Cart = () => {
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

      <Header2
        title='My Cart' 
        subtitle={`${totalItems} items`} />
      
      {totalItems > 0 ? (
        <>
          <div className="wavy_divider"></div>
          <div className='cart_bg'>
            <div className='total_summary'>
              <div className='summary_item'>
                <p className='label'>Current Total</p>
                <h2 className='value'>
                  {products.reduce((acc, p) => acc + (p.price * p.qty), 0).toFixed(2)} EGP
                </h2>
              </div>
              <div className='summary_item'>
                <p className='label'>You're Saving</p>
                <h2 className='value savings'>32.00 EGP</h2>
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
                    <div className='action_row'>
                      <div className='counter_group'>
                        <button className='count_btn' onClick={() => updateQty(product.id, -1)}>-</button>
                        <span className='count_num'>{product.qty}</span>
                        <button className='count_btn' onClick={() => updateQty(product.id, 1)}>+</button>
                      </div>
                      <button className='remove_link' onClick={() => removeItem(product.id)}>Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <CTA2 title='checkout' url='/Checkout'/>
          </div>
        </>
      ) : (
        <div className='empty_cart_container'>
          <h1 className='header_title'>YOUR CART IS EMPTY</h1>
          <p className='header_subtitle'>
            Scan more products to get added to your cart automatically and enjoy your journey
          </p>
          <img src={empty_cart} alt="Empty Cart Illustration" className='empty_img' />
        </div>
      )}
      
      <Nav />
    </div>
  );
};

export default Cart;