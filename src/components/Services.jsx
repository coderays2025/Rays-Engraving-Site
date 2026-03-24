import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SERVICES } from '../data/serviceData';
import './Services.css';

const ServiceIconCard = ({ title, description, icon }) => {
  return (
    <div className="service-icon-card h-100 p-4">
      <div className="icon-badge mb-3">
        <i className={`bi ${icon} fs-1`}></i>
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-desc">{description}</p>
      <div className="service-card-border-glow"></div>
    </div>
  );
};

const ServicesGrid = () => {
  return (
    <section id="services" className="services-section">
      <Container>
        <div className="section-title text-center mb-5">
          <h2 className="brand-shine mb-3">Core Capabilities</h2>
          <p className="subtitle mx-auto" style={{ maxWidth: '600px' }}>
            We combine high-precision laser technology with master craftsmanship to deliver marking solutions across every industry.
          </p>
        </div>
        <Row className="g-4 justify-content-center">
          {SERVICES.map((service) => (
            <Col md={6} lg={4} key={service.id}>
              <ServiceIconCard {...service} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesGrid;
