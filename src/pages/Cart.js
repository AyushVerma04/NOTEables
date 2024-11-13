import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, deleteProduct, updateProduct, actions } from '../store';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);

  useEffect(() => {
        dispatch(actions.getCartProducts());
  }, []);

  const handleDeleteCartProduct = (id) => {
    dispatch(actions.deleteProductFromCart(id));
  };

  return (
    
    <div className="product-list">
      <ul>
      <h1>FAVOURITES</h1>
        {cartProducts && cartProducts.map((product) => (
          
          <li key={product.id} className="product">
            <img src={product.subject} alt={product.title} />
            <div className="product-info">
            {/* title */}
              <Link to={`/product/${product.id}`}>
                <h3>{product.title}</h3>
              </Link>
            {/* category */}
            <p className="year">{product.category}</p>
            {/* Branch */}
            <p className="subject">Branch: {product.subject}</p>
            <p className="year">Year: {product.year}</p>
            {/* rating */}
            <p className="year">Uploaded By: {product.rating.name}</p>

            <button onClick={() => handleDeleteCartProduct(product.id)}>
            <i class="fa-regular fa-trash-can"></i>
            </button>
            </div>
        </li>
        ))}
        </ul>
    </div>
  )
}

export default Cart;