import { useState } from 'react';
import { useProduct } from '../context/ProductContext';
import ProductCard from '../component/Featured/ProductCard';
import styles from './Shop.module.css';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' }
];

const Shop = () => {
  const { products } = useProduct();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSort, setSelectedSort] = useState('featured');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['all', ...new Set(products.map(p => p.category))];

  const filteredProducts = products
    .filter(product => 
      (selectedCategory === 'all' || product.category === selectedCategory) &&
      product.price >= priceRange.min &&
      product.price <= priceRange.max
    )
    .sort((a, b) => {
      switch (selectedSort) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return b.id - a.id;
        default:
          return b.isFeatured - a.isFeatured;
      }
    });

  return (
    <div className={styles.shop}>
      <div className={styles.header}>
        <h1>Shop</h1>
        <div className={styles.controls}>
          <button 
            className={styles.filterToggle}
            onClick={() => setShowFilters(!showFilters)}
          >
            Filters
          </button>
          <select 
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
            className={styles.sortSelect}
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.content}>
        <aside className={`${styles.sidebar} ${showFilters ? styles.show : ''}`}>
          <div className={styles.filterSection}>
            <h3>Categories</h3>
            <div className={styles.categories}>
              {categories.map(category => (
                <button
                  key={category}
                  className={`${styles.categoryBtn} ${selectedCategory === category ? styles.active : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterSection}>
            <h3>Price Range</h3>
            <div className={styles.priceInputs}>
              <input
                type="number"
                value={priceRange.min}
                onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                placeholder="Min"
              />
              <span>to</span>
              <input
                type="number"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                placeholder="Max"
              />
            </div>
          </div>
        </aside>

        <main className={styles.products}>
          <div className={styles.grid}>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Shop;