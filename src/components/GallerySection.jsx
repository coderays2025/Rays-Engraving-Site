import React, { useState } from 'react';
import { Container, Nav } from 'react-bootstrap';
// Link to Data: Importing categories and items from the centralized gallery data file
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/galleryData';
// Link to Styling: Importing the component-specific CSS for the masonry grid and laser effect
import './GallerySection.css';

/**
 * GallerySection Component
 * Purpose: Showcases a filterable masonry grid of laser engraving projects.
 * Functionality: 
 * 1. Category Filtering (State-based)
 * 2. Sustained Laser Sweep Animation (CSS-triggered on hover)
 * 3. Component Redirection (Click-to-explore variants)
 */
const GallerySection = () => {
  // State to track the currently selected category filter
  const [filter, setFilter] = useState('all');

  // Logic: Filters the global GALLERY_ITEMS based on the active state
  const filteredItems = filter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  /**
   * Function: handleItemClick
   * Purpose: Redirects the user to a dedicated page for the specific component.
   * Connection: This replaces the previous Lightbox/Video pop-up functionality.
   */
  const handleItemClick = (item) => {
    // Current Redirection Pattern: Navigates to a sub-route based on the item ID
    window.location.href = `/portfolio/${item.id}`;
  };

  return (
    <section id="gallery" className="gallery-section">
      <Container>
        {/* Section Header: Dynamic text describing the portfolio purpose */}
        <div className="section-title text-center">
          <h2 className="brand-shine mb-3">Our Work Portfolio</h2>
          <p className="subtitle mx-auto" style={{ maxWidth: '600px' }}>
            A showcase of our high-precision laser engraving. Click any item to explore specific sectors and variants.
          </p>
        </div>

        {/* Filter Navigation: Generates buttons from categories in galleryData.js */}
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

        {/* Masonry Grid: Renders the filtered list of project cards */}
        <div className="gallery-grid-masonry">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="gallery-item-wrapper" 
              onClick={() => handleItemClick(item)}
            >
              <div className="gallery-card shadow-lg">
                {/* Image Container: Uses background-image for consistent aspect ratios in masonry */}
                <div 
                  className="gallery-image" 
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  {/* Overlay: Contains project details and CTA, visible only on hover */}
                  <div className="gallery-overlay">
                    <div className="overlay-content">
                      <div className="item-badge">{item.category.toUpperCase()}</div>
                      <h4 className="title">{item.title}</h4>
                      <p className="desc mb-3">{item.description}</p>
                      <span className="view-more-btn">Explore Variants →</span>
                    </div>
                  </div>
                  
                  {/* SUSTAINED FUNCTIONALITY: Laser Scanner
                      This element triggers a CSS animation defined in GallerySection.css 
                      that sweeps from top to bottom on hover. */}
                  <div className="laser-scanner"></div>
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
