import React from 'react';
import { useCarousel } from '../../hooks/useCarousel';
import { products } from '../../data/products';
import Carousel3D from '../carousel/Carousel3D';
import CarouselControls from '../carousel/CarouselControls';

const ProductsSection = () => {
  const { currentSlide, nextSlide, prevSlide, goToSlide } = useCarousel(products.length);

  return (
    <section id="productos" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 md:mb-16 text-gradient-tech">
          Nuestros Productos
        </h3>
        <div className="relative">
          <Carousel3D 
            products={products} 
            currentSlide={currentSlide} 
          />
          <CarouselControls 
            onPrev={prevSlide}
            onNext={nextSlide}
          />
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-blue-500 w-6 sm:w-8' : 'bg-gray-600'
              }`}
              aria-label={`Ir al producto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;