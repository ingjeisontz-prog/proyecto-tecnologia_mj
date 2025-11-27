import React from 'react';
import { LogIn } from 'lucide-react';

const MobileMenu = ({ menuItems, onItemClick }) => {
  return (
    <div className="lg:hidden bg-slate-900/98 backdrop-blur-lg animate-fade-in border-t border-blue-500/20">
      <div className="px-4 pt-2 pb-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onItemClick(item.id)}
            className="block w-full text-left px-4 py-3 hover:bg-blue-500/20 rounded-lg transition text-white"
          >
            {item.label}
          </button>
        ))}
        <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg mt-2 hover:shadow-lg hover:shadow-blue-500/50 transition">
          <LogIn className="w-4 h-4" />
          <span>Acceder</span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;