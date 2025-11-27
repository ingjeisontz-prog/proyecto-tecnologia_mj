import React from 'react';
import { useScroll } from './hooks/useScroll';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProductsSection from './components/sections/ProductsSection';
import ServicesSection from './components/sections/ServicesSection';
import ContactSection from './components/sections/ContactSection';
import SocialSection from './components/sections/SocialSection';
import Footer from './components/layout/Footer';

function App() {
  const { scrolled, activeSection } = useScroll();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <Navbar scrolled={scrolled} activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <ContactSection />
      <SocialSection />
      <Footer />
    </div>
  );
}

export default App;