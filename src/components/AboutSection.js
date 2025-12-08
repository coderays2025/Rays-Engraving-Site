import React from 'react';
import './About.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="brand-shine">Who We Are</h2>
          <p className="subtitle">Crafting precision, one mark at a time.</p>
        </div>
        <div className="about-description">
          <p>
           At Rays Laser Marking & Engraving, we blend cutting-edge laser technology with true artisan precision to deliver personalized, branded, and industrial engraving solutions. 
           Our mission is straightforward: deliver unmatched accuracy, exceptional quality, and total customer satisfaction in every project.</p>
           <p>
           We specialize in high-precision laser marking and engraving across all metal surfaces-including steel, aluminum, copper, brass, silver, gold, cast iron, and more. 
           Beyond industrial applications, we also craft fully customized engravings for a wide range of metallic gifts such as keychains, pendants, water bottles, pens, corporate gifts, and return gifts for events and celebrations. 
           Every piece is finished with meticulous detail, making it perfect for any occasion.
          </p>
          <p className="tagline">We believe that the smallest mark can leave the biggest impression.</p>
        </div>
        <div className="testimonials">
          <div className="testimonial-card">
            <p className="quote">“Consistent quality, quick delivery, and genuine craftsmanship.”</p>
            <p className="author">~ A trusted corporate client</p>
          </div>
          <div className="testimonial-card">
            <p className="quote">“The engraving detail was beyond expectations. Highly recommend.”</p>
            <p className="author">~ Individual customer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;