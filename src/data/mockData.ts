import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Women\'s Clothing',
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400',
    count: 24
  },
  {
    id: '2',
    name: 'Men\'s Clothing',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    count: 18
  },
  {
    id: '3',
    name: 'Accessories',
    image: 'https://images.pexels.com/photos/1346187/pexels-photo-1346187.jpeg?auto=compress&cs=tinysrgb&w=400',
    count: 12
  },
  {
    id: '4',
    name: 'Shoes',
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400',
    count: 15
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Elegant Summer Dress',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/7679721/pexels-photo-7679721.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Women\'s Clothing',
    description: 'Perfect for summer occasions, this elegant dress combines comfort with style. Made from breathable fabric with a flattering silhouette.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Blue', 'Pink', 'White'],
    rating: 4.8,
    reviews: 127,
    isNew: false,
    isSale: true
  },
  {
    id: '2',
    name: 'Classic White Sneakers',
    price: 79.99,
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Shoes',
    description: 'Timeless white sneakers that go with everything. Premium leather construction for durability and comfort.',
    sizes: ['36', '37', '38', '39', '40', '41', '42'],
    colors: ['White', 'Black', 'Navy'],
    rating: 4.6,
    reviews: 89,
    isNew: true
  },
  {
    id: '3',
    name: 'Designer Leather Handbag',
    price: 199.99,
    image: 'https://images.pexels.com/photos/1346187/pexels-photo-1346187.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Accessories',
    description: 'Luxurious leather handbag with gold-tone hardware. Perfect for both day and evening occasions.',
    sizes: ['One Size'],
    colors: ['Black', 'Brown', 'Tan'],
    rating: 4.9,
    reviews: 156,
    isNew: true
  },
  {
    id: '4',
    name: 'Casual Cotton T-Shirt',
    price: 24.99,
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Men\'s Clothing',
    description: 'Premium cotton t-shirt with a comfortable fit. Essential wardrobe staple for casual wear.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Gray', 'Navy'],
    rating: 4.5,
    reviews: 203
  },
  {
    id: '5',
    name: 'Floral Print Blouse',
    price: 59.99,
    originalPrice: 79.99,
    image: 'https://images.pexels.com/photos/7679437/pexels-photo-7679437.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Women\'s Clothing',
    description: 'Beautiful floral print blouse perfect for spring and summer. Lightweight and breathable fabric.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Floral Blue', 'Floral Pink'],
    rating: 4.7,
    reviews: 94,
    isSale: true
  },
  {
    id: '6',
    name: 'Minimalist Watch',
    price: 149.99,
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Accessories',
    description: 'Sleek and minimalist watch design. Swiss movement with leather strap for timeless elegance.',
    sizes: ['One Size'],
    colors: ['Silver', 'Gold', 'Rose Gold'],
    rating: 4.8,
    reviews: 67,
    isNew: true
  }
];