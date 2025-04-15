import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaStar, FaRegStar, FaMinus, FaPlus } from 'react-icons/fa';
import { useProduct } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import ProductSection from '../component/Featured/ProductSection';
import toast from 'react-hot-toast';
import styles from './SingleProduct.module.css';

const SingleProduct = () => {
  const { id } = useParams();
  const { products } = useProduct();
  const { cart, addToCart } = useCart();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Scroll to the top when the component is rendered
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (product && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  if (!product) return <div>Product not found</div>;

  const discountedPrice = Math.floor(product.price * (1 - product.discount / 100));
  const savedAmount = product.price - discountedPrice;

  const handleQuantityChange = (type) => {
    if (type === 'increase' && quantity < product.stock) {
      setQuantity((prev) => prev + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedColor) return toast.error('Please select a color');
    if (product.stock === 0) return toast.error('This product is out of stock');

    const { message } = addToCart({ ...product, selectedColor, quantity });
    toast.success(message);
  };

  const handleBuyNow = () => {
    if (!selectedColor) return toast.error('Please select a color');
    if (product.stock === 0) return toast.error('This product is out of stock');

    const existingItem = cart.find(
      (item) => item.id === product.id && item.selectedColor === selectedColor
    );

    if (!existingItem) {
      const { message } = addToCart({ ...product, selectedColor, quantity });
      toast.success(message);
    }

    navigate('/cart');
  };

  return (
    <div className={styles.container}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/shop">Shop</Link>
        <span>/</span>
        <Link to={`/category/${product.category.toLowerCase()}`}>{product.category}</Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <div className={styles.productGrid}>
        {/* Image Gallery */}
        <div className={styles.imageGallery}>
          <div className={styles.mainImage}>
            <img src={product.images[selectedImage]} alt={product.name} />
          </div>
          <div className={styles.thumbnails}>
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`${styles.thumbnail} ${selectedImage === index ? styles.active : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={image} alt={`${product.name} view ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className={styles.productInfo}>
          <h1>{product.name}</h1>

          <div className={styles.rating}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) =>
                i < Math.floor(product.rating) ? <FaStar key={i} /> : <FaRegStar key={i} />
              )}
            </div>
            <span>({product.reviews} reviews)</span>
          </div>

          <div className={styles.pricing}>
            <div className={styles.price}>₹{discountedPrice.toLocaleString()}</div>
            <div className={styles.originalPrice}>₹{product.price.toLocaleString()}</div>
            <div className={styles.savings}>
              You save: ₹{savedAmount.toLocaleString()} ({product.discount}% off)
            </div>
          </div>

          <div className={styles.colors}>
            <h3>Colors:</h3>
            <div className={styles.colorOptions}>
              {product.colors.map((color) => (
                <button
                  key={color}
                  className={`${styles.colorBtn} ${selectedColor === color ? styles.selected : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          <div className={styles.quantity}>
            <h3>Quantity:</h3>
            <div className={styles.quantityControls}>
              <button onClick={() => handleQuantityChange('decrease')}>
                <FaMinus />
              </button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantityChange('increase')}>
                <FaPlus />
              </button>
            </div>
            <span className={styles.stock}>
              {product.stock > 0 ? `${product.stock} items available` : 'Out of Stock'}
            </span>
          </div>

          <div className={styles.actions}>
            <button
              className={styles.addToCart}
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              Add to Cart
            </button>
            <button
              className={styles.buyNow}
              onClick={handleBuyNow}
              disabled={product.stock === 0}
            >
              Buy Now
            </button>
          </div>

          <div className={styles.description}>
            <h3>Description:</h3>
            <p>{product.description}</p>
          </div>

          <div className={styles.specifications}>
            <h3>Specifications:</h3>
            <div className={styles.specGrid}>
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className={styles.specItem}>
                  <span className={styles.specKey}>{key}:</span>
                  <span className={styles.specValue}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className={styles.relatedProducts}>
        <ProductSection title="Related Products" filterKey="category" categoryFilter={product.category} />
      </div>
    </div>
  );
};

export default SingleProduct;