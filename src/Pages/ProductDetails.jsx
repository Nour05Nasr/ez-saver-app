import React, { useState, useEffect } from 'react';
import { supabase } from '../Supabase';
import { useParams } from 'react-router-dom';
import BackHeader from '../Components/BackHeader';
import like from '../Assets/like.svg';
import Nav from '../Components/Nav';
import LikeIcon from '../Components/LikeIcon';
import './ProductDetails.css';


const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        async function getProductDetails() {
            setLoading(true);
            const { data, error } = await supabase
                .from('products')
                .select("*")
                .eq('id', id)
                .single();

            if (!error && data) {
                setProduct(data);
            }
            setLoading(false);
        }
        if (id) getProductDetails();
    }, [id]);

    if (loading) return <div className="loader">Loading Product...</div>;
    if (!product) return <div className="error">Product not found</div>;

    const productArray = [product];

    return (
        <div className="home_body">
            {productArray.map((item) => (
                <div className="center" key={item.id}>
                    <BackHeader title="Product Details" url='/Deals' />

                    
                    <div className='column_start w2'>
                    <div className="product_bg">
                        <img className='product_img2' src={item.img} alt={item.name} className="details_img" />
                    </div>

                        <div className="flex_row_end">
                            <h2 className="product_name2">{item.name}</h2>
                                   <div 
                                        className={`like_div_2 ${liked ? 'liked' : ''}`} 
                                        onClick={() => setLiked(!liked)}
                                    >
                                        <img 
                                            src={like} 
                                            alt="like" 
                                            className="heart_svg"
                                        />
                                    </div>
                        </div>
                        <p className="product_subtitle">{item.value}{item.unit} • Full Cream</p>
                        <h1 className="price2 ">{item.price} EGP</h1>

                    <div className="instock_div gap">
                        <span className="instock">●</span>
                        <p className='instock'>In Stock - {item.aisle}</p>
                    </div>
                    </div>

                    <div className="map_card column_start">
                        <h3 className="map_title2">Nutrition Information</h3>
                        <div className="flex_row_end">
                            <p className="header_subtitle">Calories per 100ml</p>
                            <p className="header_subtitle">{item.calories}</p>
                        </div>
                        <div className="flex_row_end">
                            <p className="header_subtitle">Total Fat</p>
                            <p className="header_subtitle">{item.value}g</p>
                        </div>
                        <div className="flex_row_end">
                            <p className="header_subtitle">Saturated Fat</p>
                            <p className="header_subtitle">{item.value}g</p>
                        </div>
                        <div className="flex_row_end">
                            <p className="header_subtitle">Sodium</p>
                            <p className="header_subtitle">{item.value}mg</p>
                        </div>
                        {/* <p className="underline">View Full Details</p> */}
                    </div>

                    <div className="map_card bottom_map">
                        <h3 className="map_title2">Ingredients</h3>
                        <p className="header_subtitle">{item.ingredients || "100% Natural Ingredients"}</p>
                    </div>
                </div>
            ))}
            <Nav />
        </div>
    );
}

export default ProductDetails;