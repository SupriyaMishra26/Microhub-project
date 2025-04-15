import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useOrders } from '../context/OrderContext';
import styles from './OrderConfirmation.module.css';

const OrderConfirmation = () => {
  const { orderId } = useParams();
  const { getOrderById } = useOrders();
  const order = getOrderById(orderId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!order) {
    return <div>Order not found</div>;
  }

  return (
    <div className={styles.confirmation}>
      <div className={styles.header}>
        <div className={styles.checkmark}>✓</div>
        <h1>Thank you for your purchase!</h1>
        <p>Your order has been placed successfully</p>
      </div>

      <div className={styles.orderInfo}>
        <div className={styles.section}>
          <h2>Order Details</h2>
          <p>Order ID: {order.id}</p>
          <p>Order Date: {new Date(order.createdAt).toLocaleDateString()}</p>
          <p>Status: {order.status}</p>
          <p>Estimated Delivery: {new Date(order.estimatedDelivery).toLocaleDateString()}</p>
        </div>

        <div className={styles.section}>
          <h2>Shipping Address</h2>
          <p>{order.shippingAddress}</p>
        </div>

        <div className={styles.section}>
          <h2>Order Summary</h2>
          <div className={styles.items}>
            {order.items.map(item => (
              <div key={item.id} className={styles.item}>
                <img src={item.image} alt={item.name} />
                <div className={styles.itemDetails}>
                  <h3>{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p className={styles.price}>₹{item.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.total}>
            <span>Total</span>
            <span>₹{order.total.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <Link to="/orders" className={styles.viewOrders}>
          View All Orders
        </Link>
        <Link to="/shop" className={styles.continueShopping}>
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;