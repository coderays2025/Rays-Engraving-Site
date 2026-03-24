import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

import { CONTACT_INFO } from '../data/constants';
import { sendQuoteEmail } from '../utils/emailService';

const RequestQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Send the actual email
      await sendQuoteEmail(formData);
      setSubmitted(true);
      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error('Email Submission Error:', err);
      const errorMessage = err?.text || err?.message || 'Unknown error';
      setError(`Sorry, something went wrong: ${errorMessage}. Please try again or reach out on WhatsApp.`);
    } finally {
      setLoading(false);
      // Hide messages after 7 seconds
      setTimeout(() => {
        setSubmitted(false);
        setError('');
      }, 7000);
    }
  };

  return (
    <Container className="py-4">
      <Row className="justify-content-center text-start">
        <Col md={10} lg={8}>
          <div className="form-container p-4 rounded-4 shadow-lg" style={{ background: 'var(--graphite)', border: '1px solid var(--steel)' }}>
            <h3 className="text-center mb-4" style={{ color: 'var(--gold-primary)' }}>Request a Personalized Quote</h3>
            
            {submitted && (
              <Alert variant="success" className="mb-4">
                Thank you! Your quote request has been received. We will get back to you shortly.
              </Alert>
            )}

            {error && (
              <Alert variant="danger" className="mb-4">
                {error}
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone Number (Optional)</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={loading}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>What would you like engraved?</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="Enter name, message, initials, or describe your engraving (e.g., ‘Happy Birthday Ravi’ or ‘Upload logo’)"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </Form.Group>

              <div className="whatsapp-box p-3 rounded-3 mb-4 text-center" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px dashed var(--gold-soft)' }}>
                <p className="small mb-2" style={{ color: 'var(--silver)' }}>
                  <strong>Sending a logo or large design? (25MB+)</strong><br />
                  For high-resolution artwork or production files, please share them directly via our Business WhatsApp for the best engraving quality.
                </p>
                <a 
                  href={CONTACT_INFO.whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-sm d-inline-flex align-items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.06 3.973L0 16l4.14-1.086A7.98 7.98 0 0 0 7.994 14.48c4.367 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 13.111a6.609 6.609 0 0 1-3.357-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                  </svg>
                  Share via WhatsApp
                </a>
              </div>

              <div className="text-center">
                <Button variant="primary" type="submit" className="w-100 py-2 fs-5" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Quote Request'}
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RequestQuoteForm;