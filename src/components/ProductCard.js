import React, { useState } from 'react';

export default function ProductCard({ product, addToCart }) {
  const [size, setSize] = useState(product.sizes[0] || '');

  const handleAdd = () => {
    addToCart({ ...product, size });
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <div className="price">${product.price.toFixed(2)}</div>

      <select
        className="size-select"
        value={size}
        onChange={e => setSize(e.target.value)}
      >
        {product.sizes.map(s => (
          <option key={s} value={s}>
            Size {s}
          </option>
        ))}
      </select>

      <button className="add-btn" onClick={handleAdd}>
        Add to Cart
      </button>
    </div>
  );
}
