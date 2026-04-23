import React, { useEffect, useState } from 'react';
import { supabase } from '../Supabase';
import { Link } from 'react-router-dom';
import BackHeader from '../Components/BackHeader';
import Title from '../Components/Title';
import './Compare.css';

const Compare = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getALLProducts();
  }, []);

  const getALLProducts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .limit(6);

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loader">Comparing Products...</div>;

  const displayProducts = products.slice(0, 2);

  return (
    <div className="app-container">
      <BackHeader title='Compare Products' url='/ItemsCompare' />

      <div className="vs-section">
        <div className="product-image-container flex_row">
          {displayProducts.map((product, index) => (
            <React.Fragment key={product.id}>
              <img src={product.img} alt={product.name} className="product-img" />
              {index === 0 && <div className="vs">VS</div>}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="comparison-table">
        <div className="table-row">
          <div className="row-label"> 
                <h3 className='product_name'>Product Name</h3>
          </div>
          {displayProducts.map((product, index) => (
            <div className="header-cell orange-text" key={`header-${product.id}`}>
              {product.name || `Product ${index + 1}`}
            </div>
          ))}
        </div>

        <div className="table-row">
          <div className="row-label orange-text">Price</div>
          {displayProducts.map((product) => (
            <div className="row-value" key={`price-${product.id}`}>
              {product.price} EGP
            </div>
          ))}
        </div>

        <div className="table-row">
          <div className="row-label orange-text">Size</div>
          {displayProducts.map((product) => (
            <div className="row-value" key={`size-${product.id}`}>
              {product.value} {product.unit}
            </div>
          ))}
        </div>

        <div className="table-row">
          <div className="row-label orange-text">Calories</div>
          {displayProducts.map((product) => (
            <div className="row-value" key={`cal-${product.id}`}>
              {product.calories ? `${product.calories}` : '---'}
            </div>
          ))}
        </div>
      </div>

      <div className='section_container'>
            <Title title='ALL Products' />
              <div className='product_scroll_div'>
                  {products.map((product) => (
                    <div className='' key={product.id}>
        
                      <img src={product.img} className='product_img' alt={product.name} />
                        <div className='product_card'>
                      <div className='flex_column_start'>
                                  
                        <div className='flex_row_end'>
                        <h2 className='price'>{product.price} EGP</h2>
                          <Link className='find_link' to={`/ItemFinder/${product.id}`} >
                          <p className='notify_title'>VS</p>
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
    </div>
  );
};

export default Compare;