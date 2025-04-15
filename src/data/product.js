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
    category: 'Accessories',
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
  {
    id: 2,
    name: 'iPhone 15 Pro Max',
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500',
      'https://images.unsplash.com/photo-1695048132751-28b1c0ba0271?w=500',
      'https://images.unsplash.com/photo-1695048133179-f35687c0f2e3?w=500'
    ],
    price: 149900,
    category: 'iPhone',
    description: 'The most powerful iPhone ever. Features include:\n\n- A17 Pro chip\n- 48MP main camera\n- Action button\n- USB-C\n- ProMotion display\n- Titanium design\n\nExperience the next level of iPhone.',
    isFeatured: true,
    rating: 4.8,
    discount: 0,
    isNewArrival: true,
    isDealOfDay: false,
    colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'],
    stock: 25,
    reviews: 89,
    specifications: {
      'Display': '6.7" Super Retina XDR',
      'Chip': 'A17 Pro',
      'Camera': '48MP Main',
      'Storage': '256GB',
      'Battery': 'Up to 29 hours'
    }
  },
  {
    id: 3,
    name: 'MacBook Pro 16"',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500'
    ],
    price: 249900,
    category: 'Mac',
    description: 'Supercharged for pros. Features include:\n\n- M3 Max chip\n- Up to 128GB unified memory\n- 16-inch Liquid Retina XDR display\n- Up to 38 hours battery life\n- Magic Keyboard\n- Studio-quality mics\n\nThe most powerful MacBook Pro ever.',
    isFeatured: true,
    rating: 4.9,
    discount: 5,
    isNewArrival: true,
    isDealOfDay: true,
    colors: ['Space Gray', 'Silver'],
    stock: 15,
    reviews: 156,
    specifications: {
      'Chip': 'M3 Max',
      'Memory': 'Up to 128GB',
      'Storage': 'Up to 8TB',
      'Display': '16" Liquid Retina XDR',
      'Battery': 'Up to 38 hours'
    }
  },
  {
    id: 4,
    name: 'iPad Pro 12.9"',
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500',
      'https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=500',
      'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?w=500'
    ],
    price: 119900,
    category: 'iPad',
    description: 'The ultimate iPad experience. Features include:\n\n- M2 chip\n- 12.9-inch Liquid Retina XDR display\n- ProMotion technology\n- Apple Pencil hover\n- Thunderbolt port\n- Center Stage\n\nPower and portability in perfect harmony.',
    isFeatured: false,
    rating: 4.7,
    discount: 10,
    isNewArrival: false,
    isDealOfDay: true,
    colors: ['Space Gray', 'Silver'],
    stock: 30,
    reviews: 92,
    specifications: {
      'Chip': 'M2',
      'Display': '12.9" Liquid Retina XDR',
      'Storage': 'Up to 2TB',
      'Camera': '12MP Wide + 10MP Ultra Wide',
      'Audio': 'Four speaker audio'
    }
  },
  {
    id: 5,
    name: 'Apple Watch Ultra 2',
    images: [
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500',
      'https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?w=500',
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500'
    ],
    price: 89900,
    category: 'Watch',
    description: 'The most rugged and capable Apple Watch. Features include:\n\n- 49mm titanium case\n- Always-On Retina display\n- Action button\n- Up to 36 hours battery life\n- Precision dual-frequency GPS\n- Water resistant to 100m\n\nAdventure awaits.',
    isFeatured: true,
    rating: 4.8,
    discount: 0,
    isNewArrival: true,
    isDealOfDay: false,
    colors: ['Titanium'],
    stock: 20,
    reviews: 75,
    specifications: {
      'Case Size': '49mm',
      'Display': 'Always-On Retina',
      'Water Resistance': '100m',
      'Battery': 'Up to 36 hours',
      'GPS': 'Precision dual-frequency'
    }
  },
  {
    id: 6,
    name: 'AirPods Pro (2nd Gen)',
    images: [
      'https://images.unsplash.com/photo-1588156979435-379b9d802b0a?w=500',
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500',
      'https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=500'
    ],
    price: 24900,
    category: 'Accessories',
    description: 'Magic remastered. Features include:\n\n- Active Noise Cancellation\n- Adaptive Audio\n- Personalized Spatial Audio\n- USB-C charging case\n- Up to 30 hours battery life\n- Sweat and water resistant\n\nImmersive sound that adapts to you.',
    isFeatured: false,
    rating: 4.7,
    discount: 8,
    isNewArrival: false,
    isDealOfDay: true,
    colors: ['White'],
    stock: 45,
    reviews: 234,
    specifications: {
      'Chip': 'H2',
      'Battery': '30 hours with case',
      'Connectivity': 'Bluetooth 5.3',
      'Charging': 'USB-C, MagSafe',
      'Water Resistance': 'IPX4'
    }
  },
  {
    id: 7,
    name: 'iMac 24"',
    images: [
      'https://images.unsplash.com/photo-1617775047746-5b36a40109f5?w=500',
      'https://images.unsplash.com/photo-1622638989623-ec9f0cd9b66d?w=500',
      'https://images.unsplash.com/photo-1622638989624-baa386984408?w=500'
    ],
    price: 129900,
    category: 'Mac',
    description: 'The all-in-one for all. Features include:\n\n- M3 chip\n- 24-inch 4.5K Retina display\n- 1080p FaceTime HD camera\n- Studio-quality mics\n- Six-speaker sound system\n- Color-matched accessories\n\nBeautifully intuitive.',
    isFeatured: true,
    rating: 4.6,
    discount: 12,
    isNewArrival: false,
    isDealOfDay: false,
    colors: ['Blue', 'Green', 'Pink', 'Silver', 'Yellow', 'Orange', 'Purple'],
    stock: 18,
    reviews: 167,
    specifications: {
      'Chip': 'M3',
      'Display': '24" 4.5K Retina',
      'Memory': 'Up to 24GB',
      'Storage': 'Up to 2TB',
      'Camera': '1080p FaceTime HD'
    }
  },
  {
    id: 8,
    name: 'iPad Air',
    images: [
      'https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=500',
      'https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=500',
      'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?w=500'
    ],
    price: 59900,
    category: 'iPad',
    description: 'Serious performance in a thin and light design. Features include:\n\n- M1 chip\n- 10.9-inch Liquid Retina display\n- Touch ID in top button\n- 12MP Ultra Wide front camera\n- USB-C connector\n- Works with Apple Pencil and Magic Keyboard\n\nLight. Bright. Full of might.',
    isFeatured: false,
    rating: 4.7,
    discount: 15,
    isNewArrival: true,
    isDealOfDay: false,
    colors: ['Space Gray', 'Starlight', 'Pink', 'Purple', 'Blue'],
    stock: 35,
    reviews: 143,
    specifications: {
      'Chip': 'M1',
      'Display': '10.9" Liquid Retina',
      'Storage': 'Up to 256GB',
      'Camera': '12MP Wide + 12MP Ultra Wide',
      'Security': 'Touch ID'
    }
  },
  {
    id: 9,
    name: 'Apple Watch Series 9',
    images: [
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500',
      'https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?w=500',
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500'
    ],
    price: 41900,
    category: 'Watch',
    description: 'Smarter. Brighter. Mightier. Features include:\n\n- S9 chip\n- Double tap gesture\n- Always-On Retina display\n- Up to 18 hours battery life\n- Temperature sensing\n- Crash Detection\n\nA healthy leap ahead.',
    isFeatured: true,
    rating: 4.8,
    discount: 5,
    isNewArrival: true,
    isDealOfDay: true,
    colors: ['Midnight', 'Starlight', 'Silver', 'Product RED'],
    stock: 40,
    reviews: 187,
    specifications: {
      'Case Size': '41mm or 45mm',
      'Chip': 'S9',
      'Display': 'Always-On Retina',
      'Water Resistance': '50m',
      'Battery': 'Up to 18 hours'
    }
  },
  {
    id: 10,
    name: 'Magic Keyboard',
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500',
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500',
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500'
    ],
    price: 9900,
    category: 'Accessories',
    description: 'Magic at your fingertips. Features include:\n\n- Scissor mechanism\n- 1mm travel\n- Optimized key stability\n- USB-C charging\n- Pairs automatically\n- One-month battery life\n\nComfortable and precise typing.',
    isFeatured: false,
    rating: 4.5,
    discount: 0,
    isNewArrival: false,
    isDealOfDay: false,
    colors: ['White'],
    stock: 55,
    reviews: 92,
    specifications: {
      'Type': 'Wireless',
      'Battery': 'One month',
      'Charging': 'USB-C',
      'Mechanism': 'Scissor',
      'Travel': '1mm'
    }
  }
];

export default products;