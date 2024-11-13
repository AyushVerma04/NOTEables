import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../store';


const Navbar = () => {
  const cart = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getCartValue());
  }, [])

  return (
    <div className="navbar">

      <div className="navbar-left">
        <Link to="/">NOTEables</Link>
        <Link to="/Reach">Search</Link>
        <Link to="/Add-product">Contribute</Link>
        <Link to="/About">About Us</Link>
      </div>

      <div className="navbar-right">
        <Link to="/cart">
           <i className="fa-regular fa-heart" style={{ fontSize: '24px' }}></i>
        </Link>
        <span className="cart-value">{`${cart}`}</span>
      </div>
    </div>
  );
}

export default Navbar;
