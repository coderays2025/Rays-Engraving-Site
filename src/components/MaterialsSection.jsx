import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MATERIALS } from '../data/materialsData';
import './MaterialsSection.css';

const MaterialCard = ({ title, description, icon, techDetails }) => {
  return (
    <div className="material-card h-100 p-4">
      <div className="material-icon-badge mb-3 text-center">
        <i className={`bi ${icon} fs-1`}></i>
      </div>
      <h3 className="material-title text-center">{title}</h3>
      <p className="material-desc text-center mb-4">{description}</p>
      
      <div className="tech-specs-box p-3 rounded">
        <div className="d-flex justify-content-between mb-2">
          <small className="label">Precision</small>
          <small className="value text-gold-primary">{techDetails.precision}</small>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <small className="label">Finish</small>
          <small className="value">{techDetails.finish}</small>
        </div>
        <div className="d-flex justify-content-between">
          <small className="label">Grade</small>
          <small className="value">{techDetails.durability}</small>
        </div>
      </div>
      
      <div className="material-card-shine"></div>
      <div className="blueprint-pattern"></div>
    </div>
  );
};

const MaterialsSection = () => {
  return (
    <section id="materials" className="materials-section py-5">
      <Container>
        <div className="section-title text-center mb-5">
          <h2 className="brand-shine mb-3">Material Expertise</h2>
          <p className="subtitle mx-auto" style={{ maxWidth: '600px' }}>
            We specialize in high-precision laser marking and engraving on a range of industrial and premium surfaces.
          </p>
        </div>
        <Row className="g-4 justify-content-center">
          {MATERIALS.map((material) => (
            <Col md={6} lg={4} key={material.id}>
              <MaterialCard {...material} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MaterialsSection;
