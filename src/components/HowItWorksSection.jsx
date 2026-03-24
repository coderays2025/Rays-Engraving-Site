import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HOW_IT_WORKS } from '../data/howItWorksData';
import './HowItWorks.css';

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="how-it-works-section">
      <Container>
        <div className="section-title text-center">
          <h2 className="brand-shine mb-3">Our Process</h2>
          <p className="subtitle mx-auto" style={{ maxWidth: '600px' }}>
            From your initial vision to the final masterpiece, here’s how we bring your ideas to life with precision.
          </p>
        </div>
        
        <div className="steps-container mt-5">
          <div className="steps-glow-line d-none d-lg-block"></div>
          <Row className="justify-content-center">
            {HOW_IT_WORKS.map((step) => (
              <Col lg={4} key={step.id} className="mb-5 mb-lg-0">
                <div className="step-card p-4 h-100 text-center text-lg-start">
                  <div className="step-badge mb-3 d-inline-block d-lg-block">
                    {step.step}
                  </div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  
                  <div className="step-icon-wrapper d-none d-lg-flex mt-auto">
                     {/* Placeholder for icons, or use Bootstrap Icons / SVGs */}
                     <i className={`bi ${step.icon} fs-1 text-gold-soft`}></i>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        
        <div className="text-center mt-5 pt-3">
          <a href="#contact" className="btn btn-outline-primary px-4 py-2 fs-5">
            Ready to Start? Request a Quote
          </a>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;
