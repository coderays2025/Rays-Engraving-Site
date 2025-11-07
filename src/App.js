import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/HeroSection";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import ProductsGrid from "./components/Products";
import ServicesGrid from "./components/Services";


function App() {  return (
    <div className="App">
      <Header />
      <Hero />
      <ServicesGrid />
      <ProductsGrid />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;