import React, { useState, useEffect } from 'react';
import { supabase } from '../Supabase';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Nav from '../Components/Nav';
import BackHeader from '../Components/BackHeader';
import Category from '../Components/Category';
import Title from '../Components/Title';
import './Compare.css';

const ItemsCompare = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Diary');
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState([]);
  
  const navigate = useNavigate();
  const categories = ['Diary', 'Poultry', 'Grains', 'Deli', 'Household', 'Bakery'];

  useEffect(() => {
    async function getAllProducts() {
      setLoading(true);
      const { data, error } = await supabase
      .from('products')
      .select('*')
      .limit(10)
      .order("id", { ascending: true });
      if (!error) setProducts(data);
      setLoading(false);
    }
    getAllProducts();
  }, []);           

  const handleSelect = (id) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) return prev.filter(item => item !== id); // Deselect
      if (prev.length < 2) {
        const newSelection = [...prev, id];
        if (newSelection.length === 2) {
          navigate(`/Compare?id1=${newSelection[0]}&id2=${newSelection[1]}`);
        }
        return newSelection;
      }
      return prev;
    });
  };

  const filteredProducts = products.filter(p => p.category === selectedCategory);

  const ProductItem = ({ product }) => {
    const isSelected = selectedIds.includes(product.id);
    return (
      <div className={`product_wrapper ${isSelected ? 'selected_item' : ''}`} key={product.id}>
        <img src={product.img} className='product_img' alt={product.name} />
        <div className='product_card'>
          <div className='flex_column_start'>
            <div className='flex_row_end'>
              <h2 className='price'>{product.price} EGP</h2>
              <div className='vs' onClick={() => handleSelect(product.id)} style={{cursor: 'pointer'}}>
                <p className=''>{isSelected ? 'X' : 'VS'}</p>
              </div>
            </div>
            <p className='product_name'>{product.name}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='home_body'>
      <BackHeader title={selectedIds.length === 1 ? 'Select 1 More Item' : 'Compare Products'} url='/Home' />
      
      <div className='section_container'>
        <div className='category_scroll_div'>
          {categories.map((cat) => (
            <div key={cat} onClick={() => setSelectedCategory(cat)}>
              <Category title={cat} isActive={selectedCategory === cat} />
            </div>
          ))}
        </div>
      </div>

      <div className='section_container'>
        <Title title={`${selectedCategory.toUpperCase()} PRODUCTS`} />
        <div className='product_scroll_div'>
          {products.map(product => 
          // <Link to={`/ProductDetails/${product.id}`} key={product.id} className='product_card_link'>
            <ProductItem product={product} />
          // </Link>
          )}
        </div>
      </div>

      <div className='section_container'>
        <Title title='ALL Products' />
        <div className='product_scroll_div bottom'>
          {products.map(product => 
          // <Link to={`/ProductDetails/${product.id}`} key={product.id} className='product_card_link'>
            <ProductItem product={product} />
          // </Link>
          )}
        </div>
      </div>
      
      <Nav />
    </div>
  );
}

export default ItemsCompare;