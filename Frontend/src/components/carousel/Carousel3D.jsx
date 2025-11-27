import React from 'react';
import ProductCard from '../ui/ProductCard';

const Carousel3D = ({ products, currentSlide }) => {
  return (
    <>
      {/* Desktop 3D Carousel */}
      <div className="hidden md:block overflow-hidden">
        <div className="flex justify-center items-center min-h-[450px] perspective-1000 relative">
          {products.map((product, index) => {
            const offset = (index - currentSlide + products.length) % products.length;
            const isCenter = offset === 0;
            
            let transform = 'translateX(0) scale(0.5) rotateY(0deg)';
            let zIndex = 1;
            let opacity = 0.2;

            if (isCenter) {
              transform = 'translateX(0) scale(1) rotateY(0deg)';
              zIndex = 10;
              opacity = 1;
            } else if (offset === 1) {
              transform = 'translateX(280px) scale(0.7) rotateY(-20deg)';
              zIndex = 5;
              opacity = 0.5;
            } else if (offset === products.length - 1) {
              transform = 'translateX(-280px) scale(0.7) rotateY(20deg)';
              zIndex = 5;
              opacity = 0.5;
            }

            return (
              <div
                key={product.id}
                className="absolute transition-all duration-700 ease-out"
                style={{ transform, zIndex, opacity }}
              >
                <ProductCard product={product} size="large" />
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Mobile: Show only current slide */}
      <div className="block md:hidden">
        <div className="w-full max-w-xs mx-auto">
          <ProductCard product={products[currentSlide]} size="large" />
        </div>
      </div>
    </>
  );
};

export default Carousel3D;