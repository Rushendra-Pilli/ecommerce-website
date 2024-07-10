import React from 'react';
import './Cart.css';

const Cart = () => {
  return (
    <div className="container">
      <h1>Cart</h1>
      <div className="cart">
        <div className="cart-item">
          <span>Product 1</span>
          <span>$10.00</span>
        </div>
        <div className="cart-item">
          <span>Product 2</span>
          <span>$20.00</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;