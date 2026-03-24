import React, { useState } from 'react';
import './Products.css';
import { PRODUCTS } from '../data/productData';

const ProductCard = ({ title, caption, image, alt, href, hoveredId, setHovered, id }) => {
  const isHovered = hoveredId === id;
  const isDimmed = hoveredId && hoveredId !== id;
  const cardClass = `product-card ${isHovered ? 'is-hovered' : ''} ${isDimmed ? 'is-dimmed' : ''}`;

  const handleCardClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={cardClass}
      onMouseEnter={() => setHovered(id)}
      onMouseLeave={() => setHovered(null)}
    >
      <a href="#contact" onClick={handleCardClick} aria-label={title}>
        <div className="product-card-bg" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="product-title-strip">
          <h3>{title}</h3>
        </div>
        <div className="product-caption-wrapper">
          <p>{caption}</p>
          <span className="cta">Inquire Now &rarr;</span>
        </div>
        <div className="product-border-glow"></div>
      </a>
    </div>
  );
};

const ProductsGrid = () => {
  const [hoveredId, setHovered] = useState(null);

  return (
    <section id="products" className="products-section">
      <div className="section-title text-center">
        <h2 className="brand-shine">Our Products</h2>
      </div>
      <div className="products-grid">
        {PRODUCTS.map(product => (
          <ProductCard
            key={product.id}
            {...product}
            hoveredId={hoveredId}
            setHovered={setHovered}
            id={product.id}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsGrid;
