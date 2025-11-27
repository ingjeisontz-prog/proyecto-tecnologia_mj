import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../ui/ContactForm';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contacto@tecnologiamj.com',
      color: 'bg-blue-500'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+57 300 123 4567',
      color: 'bg-green-500'
    },
    {
      icon: MapPin,
      title: 'Dirección',
      value: 'Bogotá, Colombia',
      color: 'bg-purple-500'
    }
  ];

  return (
    <section id="contacto" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 md:mb-16 text-gradient-tech">
          Contáctanos
        </h3>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className={`${info.color} p-2.5 sm:p-3 rounded-lg group-hover:scale-110 transition flex-shrink-0`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg mb-1">
                      {info.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-400">
                      {info.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;