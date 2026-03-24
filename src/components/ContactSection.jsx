import React from "react";
import { Container } from "react-bootstrap";
import RequestQuoteForm from "./RequestQuoteForm";
import { CONTACT_INFO } from "../data/constants";

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
          <a href={`mailto:${CONTACT_INFO.email}`} className="contact-link">
            {CONTACT_INFO.email}
          </a>
        </p>
        <p>Phone: {CONTACT_INFO.phone}</p>
        <p>Address: {CONTACT_INFO.address}</p>
        <RequestQuoteForm />
      </Container>
    </section>
  );
}
export default Contact;
