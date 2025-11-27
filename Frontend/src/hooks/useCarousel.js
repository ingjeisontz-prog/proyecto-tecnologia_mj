import { useState, useEffect } from 'react';

export const useCarousel = (itemsCount, autoPlayInterval = 4000) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % itemsCount);
    }, autoPlayInterval);
    
    return () => clearInterval(timer);
  }, [itemsCount, autoPlayInterval]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % itemsCount);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + itemsCount) % itemsCount);
  const goToSlide = (index) => setCurrentSlide(index);

  return { currentSlide, nextSlide, prevSlide, goToSlide };
};