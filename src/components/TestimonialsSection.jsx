import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TESTIMONIALS } from "../data/testimonialsData";

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <Container className="text-center">
        <h2 className="brand-shine mb-5">What Our Customers Are Saying</h2>
        <Row className="justify-content-center">
          {TESTIMONIALS.map((t) => (
            <Col md={4} key={t.id} className="mb-4">
              <div className="testimonial-card h-100 p-4">
                <p className="testimonial-quote">“{t.quote}”</p>
                <p className="testimonial-author mt-3">- {t.author}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;
