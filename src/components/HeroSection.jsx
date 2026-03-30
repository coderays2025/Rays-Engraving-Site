import React from "react";
import "./HeroSection.css";
import img from "../assets/hero_image.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="hero-overlay" />
      <div className="hero-content text-center">
        <h1 className="brand-shine">Personalization. Perfection. Precision.</h1>
        <p className="lead text-white pt-4">
          Transforming ideas into lasting impressions through the art of precision laser engraving.
        </p>
      </div>
    </section>
  );
}

export default Hero;
