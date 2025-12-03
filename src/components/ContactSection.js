import React from "react";
import { Container, Button } from "react-bootstrap";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <Container className="text-center">
        <h2>Contact Us</h2>
        <p className="mt-3">
          Have a design or bulk order? Let's make it happen.
        </p>
        <p>
          Email:{" "}
          <a href="mailto:info@lasercraft.com" className="contact-link">
            info@lasercraft.com
          </a>
        </p>
        <p>Phone: 330-674-5900</p>
        <Button variant="primary" href="mailto:info@lasercraft.com">
          Request a Quote
        </Button>
      </Container>
    </section>
  );
}
export default Contact;
