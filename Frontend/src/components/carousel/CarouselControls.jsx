import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CarouselControls = ({ onPrev, onNext }) => {
  return (
    <>
      <button
        onClick={onPrev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-blue-500/80 hover:bg-blue-600 p-2 sm:p-3 rounded-full transition transform hover:scale-110"
        aria-label="Producto anterior"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-blue-500/80 hover:bg-blue-600 p-2 sm:p-3 rounded-full transition transform hover:scale-110"
        aria-label="Producto siguiente"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </>
  );
};

export default CarouselControls;