import React from 'react';

export default function Cart({ cartItems, removeFromCart, onNext, onBack }) {
  const total = cartItems.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      {cartItems.map(item => (
        <div
          className="cart-item"
          key={`${item.id}-${item.size}`}
        >
          <div>
            {item.name} <em>({item.size})</em> × {item.quantity}
          </div>
          <div>${(item.price * item.quantity).toFixed(2)}</div>
          <button
            className="remove-btn"
            onClick={() => removeFromCart(item)}
          >
            ×
          </button>
        </div>
      ))}
      <div className="cart-total">Total: ${total.toFixed(2)}</div>
      <div className="cart-actions">
        <button className="back-btn" onClick={onBack}>
          Back
        </button>
        <button className="next-btn" onClick={onNext}>
          Checkout
        </button>
      </div>
    </div>
  );
}
