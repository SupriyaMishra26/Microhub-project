import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrderContext';
import { useAuth } from '../context/AuthContext';
import styles from './Checkout.module.css';

const Checkout = () => {
  const { cart, removeFromCart } = useCart();
  const { createOrder } = useOrders();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [shippingAddress, setShippingAddress] = useState({
    fullName: user?.name || '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });

  const subtotal = cart.reduce((total, item) => 
    total + (item.price * (1 - (item.discount || 0) / 100) * item.quantity), 0
  );
  const shipping = subtotal > 1000 ? 0 : 100;
  const total = subtotal + shipping;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const order = await createOrder({
      items: cart,
      total,
      shippingAddress: `${shippingAddress.address}, ${shippingAddress.city}, ${shippingAddress.postalCode}, ${shippingAddress.country}`,
    });

    // Clear cart
    cart.forEach(item => removeFromCart(item.id));
    
    // Redirect to order confirmation
    navigate(`/order-confirmation/${order.id}`);
  };

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className={styles.checkout}>
      <h1>Checkout</h1>
      
      <div className={styles.content}>
        <div className={styles.shippingForm}>
          <h2>Shipping Information</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                value={shippingAddress.fullName}
                onChange={(e) => setShippingAddress(prev => ({ ...prev, fullName: e.target.value }))}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                value={shippingAddress.address}
                onChange={(e) => setShippingAddress(prev => ({ ...prev, address: e.target.value }))}
                required
              />
            </div>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  value={shippingAddress.city}
                  onChange={(e) => setShippingAddress(prev => ({ ...prev, city: e.target.value }))}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="postalCode">Postal Code</label>
                <input
                  type="text"
                  id="postalCode"
                  value={shippingAddress.postalCode}
                  onChange={(e) => setShippingAddress(prev => ({ ...prev, postalCode: e.target.value }))}
                  required
                />
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                value={shippingAddress.country}
                onChange={(e) => setShippingAddress(prev => ({ ...prev, country: e.target.value }))}
                required
              />
            </div>
            
            <button type="submit" className={styles.placeOrder}>
              Place Order
            </button>
          </form>
        </div>
        
        <div className={styles.orderSummary}>
          <h2>Order Summary</h2>
          <div className={styles.items}>
            {cart.map(item => (
              <div key={item.id} className={styles.item}>
                <img src={item.images[0]} alt={item.name} />
                <div className={styles.itemDetails}>
                  <h3>{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p className={styles.price}>
                    ₹{(item.price * (1 - (item.discount || 0) / 100) * item.quantity).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.totals}>
            <div className={styles.row}>
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>
            <div className={styles.row}>
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
            </div>
            <div className={styles.total}>
              <span>Total</span>
              <span>₹{total.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;