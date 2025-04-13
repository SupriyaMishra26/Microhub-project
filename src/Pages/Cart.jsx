import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import styles from './Cart.module.css';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const subtotal = cart.reduce((total, item) => 
    total + (item.price * (1 - (item.discount || 0) / 100) * item.quantity), 0
  );

  const shipping = subtotal > 1000 ? 0 : 100;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h2>Your cart is empty</h2>
        <p>Add some products to your cart and they will show up here</p>
        <Link to="/shop" className={styles.shopNow}>Shop Now</Link>
      </div>
    );
  }

  return (
    <div className={styles.cart}>
      <h1>Shopping Cart</h1>
      
      <div className={styles.content}>
        <div className={styles.items}>
          {cart.map(item => {
            const discountedPrice = item.price * (1 - (item.discount || 0) / 100);
            return (
              <div key={item.id} className={styles.item}>
                <div className={styles.itemImage}>
                  <img src={item.images[0]} alt={item.name} />
                </div>
                
                <div className={styles.itemDetails}>
                  <Link to={`/product/${item.id}`} className={styles.itemName}>
                    {item.name}
                  </Link>
                  
                  <div className={styles.itemColor}>
                    Color: 
                    <span 
                      className={styles.colorSwatch}
                      style={{ backgroundColor: item.selectedColor }}
                    />
                  </div>
                  
                  <div className={styles.itemControls}>
                    <div className={styles.quantity}>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <FaMinus />
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        disabled={item.quantity >= item.stock}
                      >
                        <FaPlus />
                      </button>
                    </div>
                    
                    <button 
                      className={styles.remove}
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
                
                <div className={styles.itemPrice}>
                  <div className={styles.price}>
                    ₹{(discountedPrice * item.quantity).toLocaleString()}
                  </div>
                  {item.discount && (
                    <div className={styles.originalPrice}>
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className={styles.summary}>
          <h2>Order Summary</h2>
          
          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>₹{subtotal.toLocaleString()}</span>
          </div>
          
          <div className={styles.summaryRow}>
            <span>Shipping</span>
            <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
          </div>
          
          <div className={styles.total}>
            <span>Total</span>
            <span>₹{total.toLocaleString()}</span>
          </div>
          
          <button 
            className={styles.checkout}
            disabled={cart.some(item => item.stock === 0)}
          >
            Proceed to Checkout
          </button>
          
          <Link to="/shop" className={styles.continueShopping}>
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;