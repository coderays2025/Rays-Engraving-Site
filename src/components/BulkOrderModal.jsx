import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { CONTACT_INFO } from '../data/constants';
import './BulkOrderModal.css';

const BulkOrderModal = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    details: ''
  });

  useEffect(() => {
    // Check if the modal has already been shown in this session
    const hasBeenShown = sessionStorage.getItem('bulkOrderModalShown');
    if (!hasBeenShown) {
      const timer = setTimeout(() => {
        setShow(true);
        sessionStorage.setItem('bulkOrderModalShown', 'true');
      }, 2000); // Show after 2 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppChat = (e) => {
    e.preventDefault();
    
    // Construct the plain text message
    const messageText = `Bulk Enquiry from Website\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Company: ${formData.company || 'N/A'}\n` +
      `Requirement: ${formData.details}`;

    const encodedMessage = encodeURIComponent(messageText);

    // If we have a direct number, use the wa.me/number format which is 100% reliable for text
    const rawNumber = CONTACT_INFO.whatsapp.replace(/\D/g, '');
    
    let waUrl = `https://wa.me/message/RWLHY3TJR6VDN1?text=${encodedMessage}`; // Default to short link
    
    if (rawNumber && !rawNumber.includes('X')) {
      waUrl = `https://wa.me/${rawNumber}?text=${encodedMessage}`;
    }

    window.open(waUrl, '_blank');
    handleClose();
  };

  return (
    <Modal 
      show={show} 
      onHide={handleClose} 
      centered 
      backdrop="static" 
      keyboard={false}
      className="bulk-order-modal"
    >
      <Modal.Header closeButton closeVariant="white">
        <Modal.Title className="brand-shine">Bulk Orders / Bulk Enquiries</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="subtitle mb-4">
          For bulk engraving orders, corporate requirements, or large custom requests, get in touch with us directly on WhatsApp.
        </p>
        <Form onSubmit={handleWhatsAppChat}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control 
                  type="text" 
                  name="name" 
                  placeholder="Enter your name" 
                  required 
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                  type="email" 
                  name="email" 
                  placeholder="name@example.com" 
                  required 
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control 
                  type="tel" 
                  name="phone" 
                  placeholder="+91 XXXXX XXXXX" 
                  required 
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Company Name (Optional)</Form.Label>
                <Form.Control 
                  type="text" 
                  name="company" 
                  placeholder="Business Name" 
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-4">
            <Form.Label>Requirement / Bulk Order Details</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3} 
              name="details" 
              placeholder="E.g. 100 Engraved Pens for corporate event..." 
              required 
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 py-2 fs-5 d-flex align-items-center justify-content-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.06 3.973L0 16l4.14-1.086A7.98 7.98 0 0 0 7.994 14.48c4.367 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 13.111a6.609 6.609 0 0 1-3.357-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
            Chat on WhatsApp
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default BulkOrderModal;
