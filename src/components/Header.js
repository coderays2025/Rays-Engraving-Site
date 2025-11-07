import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logo.png';
import './Header.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

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
      bg= "dark"
      variant="dark"
      expand="lg"
      sticky="top"
      className="navbar-custom"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container>
        <div className="d-flex justify-content-between w-100">
          <Navbar.Brand href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="d-flex align-items-center">
            <img src={logo} alt="Logo" className="logo-img" />
            <span className="brand-text brand-shine ms-2">Rays Laser Marking &amp; Engraving</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="nav" onClick={() => setExpanded(prev => !prev)} />
        </div>

        <Navbar.Collapse id="nav">
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Link href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="custom-nav-link">Home</Nav.Link>
            <Nav.Link href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="custom-nav-link">Services</Nav.Link>
            <Nav.Link href="#products" onClick={(e) => handleLinkClick(e, '#products')} className="custom-nav-link">Products</Nav.Link>
            <Nav.Link href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="custom-nav-link">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
