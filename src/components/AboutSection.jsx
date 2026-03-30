import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

const ValueItem = ({ icon, title, text }) => (
  <div className="value-item mb-4">
    <div className="value-icon mb-3">
      <i className={`bi ${icon} fs-2`}></i>
    </div>
    <h4 className="value-title">{title}</h4>
    <p className="value-text">{text}</p>
  </div>
);

const AboutSection = () => {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <Row className="align-items-center mb-5">
          <Col lg={6} className="pe-lg-5">
            <div className="section-title text-start mb-4">
              <h2 className="brand-shine mb-3">Our Precision Story</h2>
              <p className="subtitle">Crafting excellence, one micron at a time.</p>
            </div>
            <div className="about-description">
              <p>
                At Rays Laser Marking & Engraving, we blend cutting-edge laser technology with true artisan precision to deliver personalized, branded, and industrial engraving solutions. 
                Our mission is straightforward: deliver unmatched accuracy, exceptional quality, and total customer satisfaction in every project.
              </p>
              <p>
                We specialize in high-precision laser marking and engraving across all metal surfaces including steel, aluminum, copper, brass, silver, gold, and more. 
                Beyond industrial applications, we also craft fully customized engravings for premium gifts such as keychains, water bottles, pens, and corporate awards.
              </p>
              <div className="about-tagline mt-4">
                <h5 className="brand-shine">"The smallest mark leaves the biggest impression."</h5>
              </div>
            </div>
          </Col>
          <Col lg={6} className="mt-5 mt-lg-0">
            <Row className="g-4">
              <Col sm={6}>
                <ValueItem 
                  icon="bi-bullseye" 
                  title="Unmatched Precision" 
                  text="Industrial-grade accuracy down to the finest detail for every material."
                />
              </Col>
              <Col sm={6}>
                <ValueItem 
                  icon="bi-lightning-charge" 
                  title="Swift Delivery" 
                  text="Rapid turnaround times without compromising on our gold standard of quality."
                />
              </Col>
              <Col sm={6}>
                <ValueItem 
                  icon="bi-person-check" 
                  title="Client Focused" 
                  text="Dedicated to bringing your unique vision to life through custom solutions."
                />
              </Col>
              <Col sm={6}>
                <ValueItem 
                  icon="bi-award" 
                  title="Artisan Quality" 
                  text="Every mark is inspected to ensure a flawless and permanent finish."
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
