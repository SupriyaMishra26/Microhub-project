const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500',
      'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500',
      'https://images.unsplash.com/photo-1524678714210-9917a6c619c2?w=500'
    ],
    price: 2499,
    category: 'Electronics',
    description: 'High quality wireless headphones with noise cancellation. Features include:\n\n- Active Noise Cancellation\n- 30-hour battery life\n- Premium sound quality\n- Comfortable fit\n- Quick charging\n- Bluetooth 5.0\n\nPerfect for music lovers and professionals who need crystal clear audio.',
    isFeatured: true,
    rating: 4.5,
    discount: 15,
    isNewArrival: false,
    isDealOfDay: false,
    colors: ['Black', 'White', 'Blue'],
    stock: 50,
    reviews: 128,
    specifications: {
      'Battery Life': '30 hours',
      'Bluetooth Version': '5.0',
      'Noise Cancellation': 'Active',
      'Driver Size': '40mm',
      'Weight': '250g'
    }
  },
  // ... keep other existing products
];

export default products;