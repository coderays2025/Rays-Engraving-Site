import React, { useEffect, useRef, useState } from 'react';
import './Services.css';

const SERVICES = [
  // {
  //   id: "precision",
  //   title: "Precision Engraving & Marking",
  //   caption: "High-accuracy laser marking on a wide range of materials.",
  //   image: "/assets/services/precision-engraving.jpg",
  //   icon: "/assets/icons/placeholder.svg",
  //   alt: "Laser engraving close-up",
  //   href: "/services/precision-engraving"
  // },
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

const ServiceCard = ({ title, caption, image, icon, alt, href, hoveredId, setHovered, id }) => {
  const isHovered = hoveredId === id;
  const isDimmed = hoveredId && hoveredId !== id;
  const cardClass = `service-card ${isHovered ? 'is-hovered' : ''} ${isDimmed ? 'is-dimmed' : ''}`;

  return (
    <div
      className={cardClass}
      onMouseEnter={() => setHovered(id)}
      onMouseLeave={() => setHovered(null)}
    >
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
  const [hoveredId, setHovered] = useState(null);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [slideIndex, setSlideIndex] = useState(0);
  const [cardStep, setCardStep] = useState(0);
  const trackRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updatePerView = () => {
      const w = window.innerWidth;
      if (w < 768) {
        setCardsPerView(1);
        setIsMobile(true);
        setSlideIndex(0);
      } else if (w < 1024) {
        setCardsPerView(2);
        setIsMobile(false);
      } else {
        setCardsPerView(3);
        setIsMobile(false);
      }
    };
    updatePerView();
    window.addEventListener('resize', updatePerView);
    return () => window.removeEventListener('resize', updatePerView);
  }, []);

  const maxSlide = Math.max(0, Math.ceil(SERVICES.length / cardsPerView) - 1);
  useEffect(() => {
    if (slideIndex > maxSlide) setSlideIndex(maxSlide);
  }, [maxSlide, slideIndex]);

  const recalcStep = () => {
    if (!trackRef.current) return;
    const firstCard = trackRef.current.querySelector('.service-card');
    if (!firstCard) return;
    const style = window.getComputedStyle(trackRef.current);
    const gap =
      parseFloat(style.columnGap || style.gap || '0') || 0;
    const width = firstCard.getBoundingClientRect().width;
    setCardStep(width + gap);
  };

  useEffect(() => {
    recalcStep();
    window.addEventListener('resize', recalcStep);
    return () => window.removeEventListener('resize', recalcStep);
  }, []);

  useEffect(() => {
    recalcStep();
  }, [cardsPerView]);

  const handleLeft = () => setSlideIndex(prev => Math.max(0, prev - 1));
  const handleRight = () => setSlideIndex(prev => Math.min(maxSlide, prev + 1));
  const offset = isMobile ? '0px' : `${-cardStep * slideIndex}px`;

  return (
    <section id="services" className="services-section">
      <div className="section-title text-center">
        <h2 className="brand-shine">Our Services</h2>
      </div>
      <div className="services-slider card-slider-viewport">
        <div
          className={`services-grid card-slider-track${isMobile ? ' mobile-stack' : ''}`}
          ref={trackRef}
          style={{
            '--slide-offset': offset,
            '--cards-per-view': cardsPerView,
            transform: `translateX(${offset})`
          }}
        >
          {SERVICES.map(service => (
            <ServiceCard
              key={service.id}
              {...service}
              hoveredId={hoveredId}
              setHovered={setHovered}
              id={service.id}
            />
          ))}
        </div>
        {!isMobile && (
          <>
            <button
              className="slider-arrow slider-arrow-left"
              onClick={handleLeft}
              disabled={slideIndex === 0}
              aria-label="Previous services"
            >
              &lt;
            </button>
            <button
              className="slider-arrow slider-arrow-right"
              onClick={handleRight}
              disabled={slideIndex === maxSlide}
              aria-label="Next services"
            >
              &gt;
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default ServicesGrid;
