import React from "react";
import { Button } from "react-bootstrap";
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
      <div className="hero-content">
        <h1 className="brand-shine"> Precision. Perfection. Engraved. </h1>
        <p className="brand-shine">
          Transforming ideas into lasting impressions through the art of precision laser engraving.
        </p>
      </div>
    </section>
  );
}

export default Hero;