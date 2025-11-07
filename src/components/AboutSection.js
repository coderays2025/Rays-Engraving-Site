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
            At Rays Laser Marking & Engraving, we combine advanced laser technology with a craftsman’s touch 
            to create personalized, branded, and industrial engraving solutions.  
            Our mission is simple — precision, quality, and customer satisfaction in every project we take on.
          </p>
          <p>
            We work with metals, plastics, wood, and more — serving individuals, startups, and 
            industrial clients alike. Whether it’s a custom gift or a complex industrial component, 
            we treat every engraving with the same attention to detail and care.
          </p>
          <p className="tagline">We believe that the smallest mark can leave the biggest impression.</p>
        </div>
        <div className="testimonials">
          <div className="testimonial-card">
            <p className="quote">“Consistent quality, quick delivery, and genuine craftsmanship.”</p>
            <p className="author">— A trusted corporate client</p>
          </div>
          <div className="testimonial-card">
            <p className="quote">“The engraving detail was beyond expectations. Highly recommend.”</p>
            <p className="author">— Individual customer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;