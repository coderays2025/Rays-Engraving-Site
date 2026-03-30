import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import logo from '../assets/logo.png';
import './Header.css';
import { CONTACT_INFO } from '../data/constants';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`navbar-custom ${scrolled ? 'navbar-scrolled' : ''}`}
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container>
        <Navbar.Brand 
          href="#home" 
          onClick={(e) => handleLinkClick(e, '#home')} 
          className="d-flex align-items-center me-auto"
        >
          <img src={logo} alt="Logo" className="logo-img" />
          <div className="brand-info ms-2 d-none d-sm-block">
            <span className="brand-text brand-shine">{CONTACT_INFO.shortName}</span>
            <small className="brand-tagline d-block text-silver">Precision & Perfection</small>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="nav-collapse" onClick={() => setExpanded(prev => !prev)} />

        <Navbar.Collapse id="nav-collapse">
          <Nav className="ms-auto align-items-center main-nav">
            {/* Shop Now Button (Desktop) */}
            <Button 
              href="#products" 
              onClick={(e) => handleLinkClick(e, '#products')}
              className="me-lg-3 btn-quote-nav d-none d-lg-flex"
            >
              Shop Now
            </Button>

            {/* Shop Now (Mobile) */}
            <Nav.Link href="#products" onClick={(e) => handleLinkClick(e, '#products')} className="d-lg-none custom-nav-link text-gold-primary">
              Shop Now
            </Nav.Link>

            <Nav.Link href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="custom-nav-link">Services</Nav.Link>
            <Nav.Link href="#how-it-works" onClick={(e) => handleLinkClick(e, '#how-it-works')} className="custom-nav-link">Process</Nav.Link>
            
            <NavDropdown title="More" id="more-dropdown" className="custom-nav-dropdown">
              <NavDropdown.Item href="#about" onClick={(e) => handleLinkClick(e, '#about')}>About Us</NavDropdown.Item>
              <NavDropdown.Item href="#testimonials" onClick={(e) => handleLinkClick(e, '#testimonials')}>Reviews</NavDropdown.Item>
            </NavDropdown>

            <Button 
              href="#contact" 
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="ms-lg-3 btn-quote-nav d-none d-lg-flex"
            >
              Get a Quote
            </Button>
            
            {/* Mobile-only CTA */}
            <Nav.Link href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="d-lg-none custom-nav-link text-gold-primary">
              Get a Quote
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
