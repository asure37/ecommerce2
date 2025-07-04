import React, { useState } from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Survey from './components/Survey';
import { products as allProducts } from './data/products';

export default function App() {
  const [step, setStep] = useState(1);
  const [filters, setFilters] = useState({ type: [], color: [] });
  const [cart, setCart] = useState([]);

  const types = Array.from(new Set(allProducts.map(p => p.type)));
  const colors = Array.from(new Set(allProducts.map(p => p.color)));

  const toggleFilter = (group, value) => {
    setFilters(f => {
      const has = f[group].includes(value);
      return {
        ...f,
        [group]: has
          ? f[group].filter(v => v !== value)
          : [...f[group], value],
      };
    });
  };

  const filteredProducts = allProducts.filter(p => {
    const byType =
      filters.type.length === 0 || filters.type.includes(p.type);
    const byColor =
      filters.color.length === 0 || filters.color.includes(p.color);
    return byType && byColor;
  });

  const addToCart = item => {
    setCart(prev => {
      const existing = prev.find(
        ci => ci.id === item.id && ci.size === item.size
      );
      if (existing) {
        return prev.map(ci =>
          ci === existing
            ? { ...ci, quantity: ci.quantity + 1 }
            : ci
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = item => {
    setCart(prev =>
      prev
        .map(ci =>
          ci.id === item.id && ci.size === item.size
            ? { ...ci, quantity: ci.quantity - 1 }
            : ci
        )
        .filter(ci => ci.quantity > 0)
    );
  };

  const next = () => setStep(s => Math.min(4, s + 1));
  const back = () => setStep(s => Math.max(1, s - 1));

  return (
    <div className="app-container">
      <Header
        cartCount={cart.reduce((sum, i) => sum + i.quantity, 0)}
        goToCart={() => setStep(2)}
      />

      <div className="step-indicator">
        <div className="progress-wrapper">
          <div
            className="progress-bar"
            style={{ width: `${((step - 1) / 3) * 100}%` }}
          />
        </div>
        <p>Step {step} of 4</p>
      </div>

      {step === 1 && (
        <div className="shop-page">
          <aside className="sidebar">
            <Filters
              filters={filters}
              toggleFilter={toggleFilter}
              types={types}
              colors={colors}
            />
          </aside>
          <main className="products">
            <ProductList
              products={filteredProducts}
              addToCart={addToCart}
            />
          </main>
        </div>
      )}

      {step === 2 && (
        <Cart
          cartItems={cart}
          removeFromCart={removeFromCart}
          onNext={next}
          onBack={back}
        />
      )}

      {step === 3 && (
        <Checkout cartItems={cart} onNext={next} onBack={back} />
      )}

      {step === 4 && <Survey onReset={() => {
        setCart([]); setStep(1);
      }} />}
    </div>
  );
}
