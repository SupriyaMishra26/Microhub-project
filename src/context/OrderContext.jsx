import { createContext, useContext, useState } from 'react';
import { useAuth } from './AuthContext';

const OrderContext = createContext();

// Dummy orders data
const dummyOrders = [
  {
    id: "ORD001",
    userId: 1,
    items: [
      {
        id: 1,
        name: "Wireless Headphones",
        price: 2499,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
      }
    ],
    total: 2499,
    status: "Delivered",
    createdAt: "2024-01-15T10:30:00Z",
    shippingAddress: "123 Main St, City, Country",
    estimatedDelivery: "2024-01-20T10:30:00Z"
  }
];

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(dummyOrders);
  const { user } = useAuth();

  const createOrder = async (orderData) => {
    const newOrder = {
      id: `ORD${String(orders.length + 1).padStart(3, '0')}`,
      userId: user.id,
      status: "Processing",
      createdAt: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
      ...orderData
    };

    setOrders(prev => [newOrder, ...prev]);
    return newOrder;
  };

  const getUserOrders = () => {
    return orders.filter(order => order.userId === user?.id);
  };

  const getOrderById = (orderId) => {
    return orders.find(order => order.id === orderId);
  };

  return (
    <OrderContext.Provider value={{
      orders: getUserOrders(),
      createOrder,
      getOrderById
    }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};