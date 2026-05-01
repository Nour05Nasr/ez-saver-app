import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { supabase } from '../Supabase';
import BackHeader from '../Components/BackHeader';
import Title from '../Components/Title';
import './Compare.css';

const Compare = () => {
  const [compareItems, setCompareItems] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id1 = queryParams.get('id1');
  const id2 = queryParams.get('id2');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        const { data: compData, error: compError } = await supabase
          .from('products')
          .select('*')
          .in('id', [id1, id2]);

        if (compError) throw compError;
        
        const sortedData = compData.sort((a, b) => 
          (a.id.toString() === id1 ? -1 : 1)
        );
        setCompareItems(sortedData);

        const { data: listData, error: listError } = await supabase
          .from('products')
          .select('*')
          .limit(10)
          .order("id", { ascending: true });

        if (listError) throw listError;
        setAllProducts(listData || []);

      } catch (error) {
        console.error('Error fetching data:', error.message);
      } finally {
        setLoading(false);
      }
    };

    if (id1 && id2) fetchData();
  }, [id1, id2]);

  if (loading) return <div className="loader">Comparing Products...</div>;

  return (
    <div className="app-container">
      <BackHeader title='Produtcs Comparison' url='/ItemsCompare' />

      <div className="vs-section">
        <div className="product-image-container flex_row">
          {compareItems.map((product, index) => (
            <React.Fragment key={product.id}>
              <img src={product.img} alt={product.name} className="product-img" />
              {index === 0 && <div className="vs">VS</div>}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="comparison-table">
        <div className="table-row">
          <div className="row-label"></div>
          {compareItems.map((product) => (
            <div className="header-cell orange-text" key={`header-${product.id}`}>
              {product.name}
            </div>
          ))}
        </div>

        <div className="table-row">
          <div className="row-label orange-text">Price</div>
          {compareItems.map((product) => (
            <div className="row-value" key={`price-${product.id}`}>
              {product.price} EGP
            </div>
          ))}
        </div>

        <div className="table-row">
          <div className="row-label orange-text">Size</div>
          {compareItems.map((product) => (
            <div className="row-value" key={`size-${product.id}`}>
              {product.value} {product.unit}
            </div>
          ))}
        </div>

        <div className="table-row">
          <div className="row-label orange-text">Calories</div>
          {compareItems.map((product) => (
            <div className="row-value" key={`cal-${product.id}`}>
              {product.calories || '---'}
            </div>
          ))}
        </div>
      </div>

      <div className='section_container'>
        <Title title='Other Products' />
        <div className='product_scroll_div'>
          {allProducts.map((product) => (
            <div className='product_wrapper' key={product.id}>
              <img src={product.img} className='product_img' alt={product.name} />
              <div className='product_card'>
                <div className='flex_column_start'>
                  <div className='flex_row_end'>
                    <h2 className='price'>{product.price} EGP</h2>
                    <Link className='vs' to={`/Compare?id1=${id1}&id2=${product.id}`}>
                      <p className='vs'>VS</p>
                    </Link>
                  </div>
                  <p className='product_name'>{product.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Compare;