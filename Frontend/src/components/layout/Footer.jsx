import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 sm:py-8 px-4 border-t border-blue-500/30">
      <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm sm:text-base">
        <p>&copy; {new Date().getFullYear()} TECNOLOGÍA M&J. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;