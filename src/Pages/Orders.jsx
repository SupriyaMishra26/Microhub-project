import { useState } from 'react';
import { useOrders } from '../context/OrderContext';
import styles from './Orders.module.css';

const Orders = () => {
  const { orders } = useOrders();
  const [expandedOrder, setExpandedOrder] = useState(null);

  const toggleOrder = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  if (orders.length === 0) {
    return (
      <div className={styles.empty}>
        <h2>No orders yet</h2>
        <p>When you place orders, they will appear here</p>
      </div>
    );
  }

  return (
    <div className={styles.orders}>
      <h1>My Orders</h1>
      
      <div className={styles.orderList}>
        {orders.map(order => (
          <div 
            key={order.id} 
            className={`${styles.order} ${expandedOrder === order.id ? styles.expanded : ''}`}
            onClick={() => toggleOrder(order.id)}
          >
            <div className={styles.orderHeader}>
              <div className={styles.orderInfo}>
                <h3>{order.id}</h3>
                <p>{new Date(order.createdAt).toLocaleDateString()}</p>
              </div>
              
              <div className={styles.orderStatus}>
                <span className={styles[order.status.toLowerCase()]}>
                  {order.status}
                </span>
                <span className={styles.amount}>
                  ₹{order.total.toLocaleString()}
                </span>
              </div>
            </div>
            
            {expandedOrder === order.id && (
              <div className={styles.orderDetails}>
                <div className={styles.items}>
                  {order.items.map(item => (
                    <div key={item.id} className={styles.item}>
                      <img src={item.image} alt={item.name} />
                      <div className={styles.itemDetails}>
                        <h4>{item.name}</h4>
                        <p>Quantity: {item.quantity}</p>
                        <p className={styles.price}>
                          ₹{item.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className={styles.shippingInfo}>
                  <h4>Shipping Details</h4>
                  <p>{order.shippingAddress}</p>
                  <p>Estimated Delivery: {new Date(order.estimatedDelivery).toLocaleDateString()}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;