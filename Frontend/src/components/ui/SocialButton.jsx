import React from 'react';

const SocialButton = ({ social }) => {
  const Icon = social.icon;
  
  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${social.color} p-3 sm:p-4 rounded-full hover:scale-125 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:rotate-12 inline-block`}
      aria-label={social.label}
    >
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
    </a>
  );
};

export default SocialButton;
