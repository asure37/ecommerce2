import React, { useState } from 'react';

export default function Checkout({ cartItems, onNext, onBack }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    card: '',
    expiry: '',
    cvv: ''
  });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // you could validate here
    onNext();
  };

  return (
    <form className="checkout" onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <div className="split">
        <label>
          Name on Card
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <label>
        Card Number
        <input
          name="card"
          value={form.card}
          onChange={handleChange}
          required
        />
      </label>
      <div className="split">
        <label>
          Expiry
          <input
            name="expiry"
            placeholder="MM/YY"
            value={form.expiry}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          CVV
          <input
            name="cvv"
            value={form.cvv}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="checkout-actions">
        <button type="button" className="back-btn" onClick={onBack}>
          Back
        </button>
        <button type="submit" className="next-btn">
          Pay & Continue
        </button>
      </div>
    </form>
  );
}
