import styles from './CartNotification.module.css';

const CartNotification = ({ show }) => {
  if (!show) return null;

  return (
    <div className={styles.notification}>
      Item added to cart successfully!
    </div>
  );
};

export default CartNotification;