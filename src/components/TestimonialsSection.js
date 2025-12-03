import React from "react";
import { Container } from "react-bootstrap";

function Testimonials() {
  return (
    <section className="testimonials-section">
      <Container className="text-center">
        <h2>What Our Customers Are Saying</h2>
        <p className="testimonial-quote mt-4">
          “Their engravings have astounding clarity. Customer service is second to none.”
        </p>
        <p className="testimonial-author">— Lou L.</p>
      </Container>
    </section>
  );
}

export default Testimonials;
