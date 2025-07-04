import React from 'react';
import ProductCard from './ProductCard';

export default function ProductList({ products, addToCart }) {
  if (products.length === 0) {
    return <p className="no-results">No products match those filters.</p>;
  }
  return (
    <div className="product-list">
      {products.map(p => (
        <ProductCard key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
}
