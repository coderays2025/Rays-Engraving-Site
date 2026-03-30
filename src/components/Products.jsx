import React, { useState } from 'react';
import './Products.css';
import { CATEGORIES, PRODUCTS } from '../data/productData';

const CategoryCard = ({ title, description, image, onClick }) => (
  <div className="category-gateway-card" onClick={onClick}>
    <div className="category-card-bg" style={{ backgroundImage: `url(${image})` }}></div>
    <div className="category-card-content">
      <div className="category-label-pill">
        <h3>{title}</h3>
      </div>
      <p className="category-hover-desc">{description}</p>
    </div>
    <div className="category-card-overlay"></div>
  </div>
);

const ProductCard = ({ product, onViewDetails }) => {
  const { title, caption, image, price, isBestSeller, isNew } = product;
  
  const handleBuyNow = (e) => {
    e.preventDefault();
    const message = `Hi, I'm interested in the ${title} (Price: ₹${price}). Can you help me with the customization?`;
    window.open(`https://wa.me/message/RWLHY3TJR6VDN1?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="product-detail-card">
      <div className="product-image-area">
        <div className="product-bg" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="product-floating-price">₹{price}</div>
        {isBestSeller && <span className="shop-badge bestseller">Best Seller</span>}
        {isNew && <span className="shop-badge new">New</span>}
      </div>
      <div className="product-info-area">
        <h4>{title}</h4>
        <div className="shop-actions">
          <button className="btn-secondary" onClick={() => onViewDetails(product)}>View Details</button>
          <button className="btn-primary" onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  const handleBuyNow = () => {
    const message = `Hi, I'm interested in the ${product.title} (Price: ₹${product.price}). Can you help me with the customization?`;
    window.open(`https://wa.me/message/RWLHY3TJR6VDN1?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="product-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        <div className="modal-body">
          <div className="modal-image-side">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="modal-info-side">
            <h2 className="brand-shine">{product.title}</h2>
            <p className="modal-price">₹{product.price}</p>
            <p className="modal-desc">{product.caption}</p>
            
            <div className="specs-box">
              <h5>Specifications:</h5>
              <ul>
                {product.specifications && product.specifications.map((spec, index) => (
                  <li key={index}><strong>{spec.label}:</strong> {spec.value}</li>
                ))}
              </ul>
            </div>

            <button className="btn-primary w-100 mt-4" onClick={handleBuyNow}>
              Order via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductsGrid = () => {
  const [view, setView] = useState('categories');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeProduct, setActiveProduct] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setView('products');
    setSelectedCategory(categoryId);
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  };

  const handleBack = () => {
    setView('categories');
    setSelectedCategory(null);
  };

  const filteredProducts = selectedCategory 
    ? PRODUCTS.filter(p => p.category === selectedCategory)
    : [];

  const categoryTitle = CATEGORIES.find(c => c.id === selectedCategory)?.title;

  return (
    <section id="products" className="products-section">
      <div className="container">
        
        {view === 'categories' ? (
          <div className="view-fade-in">
            <div className="section-title text-center mb-5">
              <h2 className="brand-shine">Our Collections</h2>
            </div>
            <div className="category-gateway-grid">
              {CATEGORIES.map(cat => (
                <CategoryCard 
                  key={cat.id} 
                  {...cat} 
                  onClick={() => handleCategoryClick(cat.id)} 
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="view-fade-in">
            <div className="detail-header mb-5">
              <button className="back-btn" onClick={handleBack}>
                &larr; Back
              </button>
              <h2 className="brand-shine detail-heading-centered">{categoryTitle}</h2>
            </div>
            
            <div className="products-detail-grid">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onViewDetails={setActiveProduct}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {activeProduct && (
        <ProductModal 
          product={activeProduct} 
          onClose={() => setActiveProduct(null)} 
        />
      )}
    </section>
  );
};

export default ProductsGrid;
