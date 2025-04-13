import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { FaStar, FaRegStar } from 'react-icons/fa';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const reviews = Math.floor(Math.random() * 50) + 10;

  const discountedPrice = product.discount
    ? Math.floor(product.price * (1 - product.discount / 100))
    : product.price;

  const handleAddToCart = () => {
    if (product.stock === 0) {
      toast.error('This product is out of stock');
      return;
    }
    addToCart({ ...product, selectedColor: product.colors[0], quantity: 1 });
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Link to={`/product/${product.id}`}>
          <img src={product.images[0]} alt={product.name} className={styles.image} />
        </Link>
        <button
          className={styles.addToCart}
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>

      <div className={styles.content}>
        <p className={styles.category}>{product.category}</p>

        <Link to={`/product/${product.id}`} className={styles.name}>
          <h3>{product.name}</h3>
        </Link>

        <div className={styles.rating}>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) =>
              i < Math.floor(product.rating) ? (
                <FaStar key={i} />
              ) : (
                <FaRegStar key={i} />
              )
            )}
          </div>
          <span className={styles.reviews}>({reviews} reviews)</span>
        </div>

        <div className={styles.price}>
          ₹{discountedPrice.toLocaleString()}
          {product.discount && (
            <span className={styles.originalPrice}>
              ₹{product.price.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;