import React from 'react';
import { scrollToSection } from '../../utils/scrollToSection';

const HeroSection = () => {
  return (
    <section id="inicio" className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-gradient-tech leading-tight">
            Innovación Tecnológica
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-4">
            Soluciones integrales en tecnología: reparación, asesoría y venta de equipos de última generación
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button 
              onClick={() => scrollToSection('servicios')}
              className="btn-primary"
            >
              Ver Servicios
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-400 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-400/10 transition-all duration-300 transform hover:scale-105"
            >
              Contactar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;