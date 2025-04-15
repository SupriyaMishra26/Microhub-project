import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ProductCategories from './ProductCategories';

const Carousel = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2070',
      title: 'New MacBook Pro',
      subtitle: 'Supercharged for pros',
    },
    {
      url: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=2069',
      title: 'iPhone 15 Pro',
      subtitle: 'A magical new way to interact',
    },
    {
      url: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=2069',
      title: 'Smart Watches',
      subtitle: 'Track your fitness journey',
    },
    {
      url: 'https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?q=80&w=2070',
      title: 'Premium Audio',
      subtitle: 'Immersive sound experience',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);

  // Auto slide every 5 seconds
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay(); // ensure no multiple intervals
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const handleDotClick = (index) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <>
      <div className="carousel">
        <div className="carousel__inner">
          <div
            className="carousel__slides"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((item, index) => (
              <div
                key={index}
                className="carousel__slide"
                style={{ backgroundImage: `url(${item.url})` }}
              >
                <div className="carousel__content">
                  <h2>{item.title}</h2>
                  <p>{item.subtitle}</p>
                  <button className="carousel__cta">Shop Now</button>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel__button carousel__button--prev"
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            <FiChevronLeft />
          </button>

          <button
            className="carousel__button carousel__button--next"
            onClick={handleNext}
            aria-label="Next slide"
          >
            <FiChevronRight />
          </button>

          <div className="carousel__dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`carousel__dot ${
                  currentSlide === index ? 'active' : ''
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <ProductCategories />
    </>
  );
};

export default Carousel;
