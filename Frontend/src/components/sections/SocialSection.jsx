import React from 'react';
import { socialLinks } from '../../data/socialLinks';
import SocialButton from '../ui/SocialButton';

const SocialSection = () => {
  return (
    <section className="py-12 sm:py-14 md:py-16 px-4 bg-slate-800/50">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gradient-tech">
          Síguenos en Redes Sociales
        </h3>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {socialLinks.map((social, index) => (
            <SocialButton key={index} social={social} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;