import React from 'react';

const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  
  return (
    <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 p-6 sm:p-8 rounded-2xl border border-blue-500/30 hover:border-blue-500 card-hover">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-300"></div>
      <div className={`${service.color} w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 transform group-hover:rotate-12 transition duration-300`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h4 className="text-xl sm:text-2xl font-bold mb-3 text-white">
        {service.title}
      </h4>
      <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition">
        {service.desc}
      </p>
    </div>
  );
};

export default ServiceCard;