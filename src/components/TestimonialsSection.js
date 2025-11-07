import React from "react";
import { Container } from "react-bootstrap";

function Testimonials() {
  return (
    <section style={{ backgroundColor: "var(--light-bg)" }}>
      <Container className="text-center">
        <h2>What Our Customers Are Saying</h2>
        <p className="testimonial mt-4">
          “Their engravings have astounding clarity. Customer service is second
          to none.”
        </p>
        <p>— Lou L.</p>
      </Container>
    </section>
  );
}

export default Testimonials;
