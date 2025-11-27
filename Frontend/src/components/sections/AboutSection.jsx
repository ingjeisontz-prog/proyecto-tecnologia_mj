import React from 'react';
import { Zap, Shield, Clock } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-12 sm:py-16 md:py-20 px-4 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-gradient-tech">
          ¿Quiénes Somos?
        </h3>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Somos <span className="text-blue-400 font-semibold">TECNOLOGÍA M&J</span>, una empresa especializada en brindar soluciones tecnológicas integrales. Con años de experiencia en el mercado, nos dedicamos a ofrecer servicios de alta calidad en reparación, mantenimiento y asesoría técnica.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Nuestro equipo de profesionales altamente capacitados está comprometido con la excelencia y la satisfacción del cliente, garantizando soluciones rápidas y efectivas para todas sus necesidades tecnológicas.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 pt-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                <span className="text-sm sm:text-base">Rápido</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                <span className="text-sm sm:text-base">Confiable</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                <span className="text-sm sm:text-base">24/7</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-30 animate-pulse-glow"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-6 sm:p-8 rounded-2xl border border-blue-500/30 card-hover">
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="text-5xl sm:text-6xl mb-4">🚀</div>
                <h4 className="text-xl sm:text-2xl font-bold text-blue-400">Nuestra Misión</h4>
                <p className="text-sm sm:text-base text-gray-300">
                  Proporcionar soluciones tecnológicas innovadoras que impulsen el crecimiento y éxito de nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;