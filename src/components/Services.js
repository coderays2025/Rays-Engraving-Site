import React from 'react';
import './Services.css';

const SERVICES = [
  {
    id: "precision",
    title: "Precision Engraving & Marking",
    caption: "High-accuracy laser marking on a wide range of materials.",
    image: "/assets/services/precision-engraving.jpg",
    icon: "/assets/icons/placeholder.svg",
    alt: "Laser engraving close-up",
    href: "/services/precision-engraving"
  },
  {
    id: "gifts",
    title: "Custom Gifts & Personalization",
    caption: "Transform everyday items into memorable keepsakes.",
    image: "/assets/services/custom-personalizations.jpg",
    icon: "/assets/icons/placeholder.svg",
    alt: "Engraved gift items",
    href: "/services/custom-gifts"
  },
  {
    id: "branding",
    title: "Corporate Branding & Promotional",
    caption: "Strengthen your brand presence with engraved promo items.",
    image: "/assets/services/corporate-branding.jpg",
    icon: "/assets/icons/placeholder.svg",
    alt: "Branded pen and plate",
    href: "/services/corporate-branding"
  },
  {
    id: "industrial",
    title: "Industrial & Technical Solutions",
    caption: "Reliable marking for components, tools, and machinery.",
    image: "/assets/services/industrial-solutions.jpg",
    icon: "/assets/icons/placeholder.svg",
    alt: "Engraved serial plate",
    href: "/services/industrial"
  },
  {
    id: "signage",
    title: "Signage & Architectural Plates",
    caption: "Elegant engraved signage and nameplates.",
    image: "/assets/services/signage-plates.jpg",
    icon: "/assets/icons/placeholder.svg",
    alt: "Office door nameplate",
    href: "/services/signage"
  }
];

const ServiceCard = ({ title, caption, image, icon, alt, href }) => {
  return (
    <div className="service-card">
      <a href={href} aria-label={title}>
        <div className="card-bg" style={{ backgroundImage: image ? `url(${image})` : 'none' }}></div>
        {!image && icon && (
          <div className="icon-wrapper">
            <div className="icon-disc">
              <img src={icon} alt={alt} loading="lazy" />
            </div>
          </div>
        )}
        <div className="title-strip">
          <h3>{title}</h3>
        </div>
        <div className="caption-wrapper">
          <p>{caption}</p>
          <span className="cta">Learn more &rarr;</span>
        </div>
        <div className="border-glow"></div>
      </a>
    </div>
  );
};

const ServicesGrid = () => {
  return (
    <section id="services" className="services-section">
      <div className="section-title text-center">
        <h2 className="brand-shine">Our Services</h2>
      </div>
      <div className="services-grid">
        <div className="services-row">
          {SERVICES.slice(0, 3).map(service => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
        <div className="services-row justify-content-center">
          {SERVICES.slice(3, 5).map(service => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
