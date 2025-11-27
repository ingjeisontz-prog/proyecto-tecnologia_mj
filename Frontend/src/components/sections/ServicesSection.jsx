import React from 'react';
import { services } from '../../data/services';
import ServiceCard from '../ui/ServiceCard';

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-12 sm:py-16 md:py-20 px-4 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 md:mb-16 text-gradient-tech">
          Nuestros Servicios
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;