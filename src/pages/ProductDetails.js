import React, { useState, useEffect, useDebugValue } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { actions } from '../store';

const ProductDetailPage = () => {
  const { id } = useParams();
  //const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productDetails)
console.log(product)
  useEffect(() => {
    const fetchProduct = async () => {
      dispatch(actions.getProductDetails(id));
      //setProduct(productData);
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = (product) => {
    // handle adding to cart logic
    dispatch(actions.addToCart(product));
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const { title, description, subject, price, quantity, reviews, rating } = product;

  return (
    <div className="product-detail-container">
        <div className="product-subject-container">
            <img src={subject} alt="Product" />
        </div>
        <div className="product-info-container">
            <h1>{title}</h1>
            <p className="product-description"> {description} </p>
            <div className="product-price">
                Rs{price}
            </div>
            <div className='item-actions'>
              <button className="Download">Download</button>
              <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>
                <i class="fa-regular fa-heart"></i>
              </button>
            </div>
        </div>
    </div>
  );
};

export default ProductDetailPage;
