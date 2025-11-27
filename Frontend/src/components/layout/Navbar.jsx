import React, { useState } from 'react';
import { Cpu, LogIn, Menu, X } from 'lucide-react';
import { scrollToSection } from '../../utils/scrollToSection';
import MobileMenu from './MobileMenu';

const Navbar = ({ scrolled, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'nosotros', label: 'Quiénes Somos' },
    { id: 'productos', label: 'Productos' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const handleMenuClick = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-blue-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse-glow"></div>
              <div className="relative bg-slate-800 p-3 rounded-lg transform group-hover:scale-110 transition duration-300">
                <Cpu className="w-8 h-8 text-blue-400 animate-spin-slow" />
              </div>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              TECNOLOGÍA M&J
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm xl:text-base transition-all duration-300 hover:text-blue-400 relative group whitespace-nowrap ${
                  activeSection === item.id ? 'text-blue-400 font-semibold' : 'text-white'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full ${
                  activeSection === item.id ? 'w-full' : ''
                }`}></span>
              </button>
            ))}
            <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 px-4 xl:px-6 py-2 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
              <LogIn className="w-4 h-4" />
              <span className="text-sm xl:text-base">Acceder</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="lg:hidden p-2 hover:bg-blue-500/10 rounded-lg transition"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <MobileMenu 
          menuItems={menuItems} 
          onItemClick={handleMenuClick} 
        />
      )}
    </nav>
  );
};

export default Navbar;