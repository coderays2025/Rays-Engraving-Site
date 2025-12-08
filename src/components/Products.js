import React, { useState } from 'react';
import './Products.css';

const PRODUCTS = [
  {
    id: "keepsakes",
    title: "Crafted Keepsakes",
    caption: "Engraved keepsakes, keychains, and souvenirs made personal.",
    image: "/assets/products/keepsakes.jpg",
    alt: "Crafted Keepsakes",
    href: "/products/keepsakes"
  },
  {
    id: "nameplates",
    title: "Signature Nameplates",
    caption: "Customized desk, door, and wall nameplates for homes and offices.",
    image: "/assets/products/nameplate.jpg",
    alt: "Signature Nameplates",
    href: "/products/nameplates"
  },
  {
    id: "mark-series",
    title: "Precision Mark Series",
    caption: "Industrial-grade engravings for cases, components, and materials.",
    image: "/assets/products/precisionmark.jpg",
    alt: "Precision Mark Series",
    href: "/products/mark-series"
  }
];

const ProductCard = ({ title, caption, image, alt, href, hoveredId, setHovered, id }) => {
  const isHovered = hoveredId === id;
  const isDimmed = hoveredId && hoveredId !== id;
  const cardClass = `product-card ${isHovered ? 'is-hovered' : ''} ${isDimmed ? 'is-dimmed' : ''}`;

  return (
    <div
      className={cardClass}
      onMouseEnter={() => setHovered(id)}
      onMouseLeave={() => setHovered(null)}
    >
      <a href={href} aria-label={title}>
        <div className="product-card-bg" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="product-title-strip">
          <h3>{title}</h3>
        </div>
        <div className="product-caption-wrapper">
          <p>{caption}</p>
          <span className="cta">View Details &rarr;</span>
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
