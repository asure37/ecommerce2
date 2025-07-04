import React from 'react';

export default function Header({ cartCount, goToCart }) {
  return (
    <header className="header">
      <div>
        <h1>CSSA Shop</h1>
        <div className="promo">🎉 Limited-time: 10% off hoodies!</div>
      </div>
      <button className="cart-btn" onClick={goToCart}>
        Cart ({cartCount})
      </button>
    </header>
  );
}
