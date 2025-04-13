import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from './ProductCategories.module.css';
import { categories } from '../../data/categories';

const ProductCategories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    if (!isTransitioning && !isMobile) {
      setIsTransitioning(true);
      setCurrentIndex(prev => (prev + 1) % (categories.length - 3));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning && !isMobile) {
      setIsTransitioning(true);
      setCurrentIndex(prev => 
        prev === 0 ? categories.length - 4 : prev - 1
      );
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div className={styles.categories}>
      <h2 className={styles.title}>Shop By Category</h2>
      <div className={styles.container}>
        {!isMobile && (
          <button
            className={`${styles.nav} ${styles.navPrev}`}
            onClick={handlePrev}
            aria-label="Previous categories"
          >
            <FiChevronLeft />
          </button>
        )}

        <div className={styles.wrapper}>
          <div
            className={styles.grid}
            style={
              !isMobile
                ? {
                    transform: `translateX(-${currentIndex * 25}%)`,
                  }
                : undefined
            }
          >
            {categories.map(category => (
              <div key={category.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img src={category.image} alt={category.name} />
                  <div className={styles.overlay}>
                    <span>View All</span>
                  </div>
                </div>
                <h3>{category.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {!isMobile && (
          <button
            className={`${styles.nav} ${styles.navNext}`}
            onClick={handleNext}
            aria-label="Next categories"
          >
            <FiChevronRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCategories;