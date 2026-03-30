import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/HeroSection";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import ProductsGrid from "./components/Products";
import ServicesGrid from "./components/Services";
import HowItWorksSection from "./components/HowItWorksSection";
import Testimonials from "./components/TestimonialsSection";
import Contact from "./components/ContactSection";
import BulkOrderModal from "./components/BulkOrderModal";


function App() {  return (
    <div className="App">
      <BulkOrderModal />
      <Header />
      <Hero />
      <ServicesGrid />
      <ProductsGrid />
      <HowItWorksSection />
      <AboutSection />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;