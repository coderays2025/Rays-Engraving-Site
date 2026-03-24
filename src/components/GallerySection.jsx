import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/galleryData';
import './GallerySection.css';

const GallerySection = () => {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <section id="gallery" className="gallery-section">
      <Container>
        <div className="section-title text-center">
          <h2 className="brand-shine mb-3">Our Work Portfolio</h2>
          <p className="subtitle mx-auto" style={{ maxWidth: '600px' }}>
            A showcase of our high-precision laser engraving across gifts, corporate branding, and industrial solutions.
          </p>
        </div>

        {/* Filter Bar */}
        <Nav className="justify-content-center mb-5 mt-4 gallery-filter">
          {GALLERY_CATEGORIES.map((cat) => (
            <Nav.Item key={cat.id}>
              <button 
                className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </button>
            </Nav.Item>
          ))}
        </Nav>

        {/* Masonry-style Grid */}
        <div className="gallery-grid-masonry">
          {filteredItems.map((item) => (
            <div key={item.id} className="gallery-item-wrapper">
              <div className="gallery-card shadow-lg">
                <div 
                  className="gallery-image" 
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="gallery-overlay">
                    <div className="overlay-content">
                      <h4 className="title">{item.title}</h4>
                      <p className="desc">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default GallerySection;
