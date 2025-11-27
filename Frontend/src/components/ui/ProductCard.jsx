import React from 'react';

const ProductCard = ({ product, size = 'medium' }) => {
  const sizeClasses = {
    large: 'w-64 md:w-72 lg:w-80 h-80 md:h-96 lg:h-[420px]',
    medium: 'w-60 h-80',
    small: 'w-48 h-64'
  };

  return (
    <div className={`${sizeClasses[size]} bg-gradient-to-br ${product.color} rounded-2xl p-6 shadow-2xl card-hover`}>
      <div className="flex flex-col items-center justify-center h-full space-y-4">
        <div className="text-7xl md:text-8xl mb-4 animate-bounce">
          {product.image}
        </div>
        <h4 className="text-xl md:text-2xl font-bold text-white text-center">
          {product.name}
        </h4>
        <p className="text-2xl md:text-3xl font-bold text-white">
          {product.price}
        </p>
        <button className="mt-4 px-6 py-2 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition">
          Ver Detalles
        </button>
      </div>
    </div>
  );
};

export default ProductCard;