import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {product.isNew && (
            <span className="bg-green-500 text-white px-2 py-1 text-xs font-medium rounded">
              NEW
            </span>
          )}
          {product.isSale && (
            <span className="bg-red-500 text-white px-2 py-1 text-xs font-medium rounded">
              SALE
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200">
            <Heart className="h-4 w-4 text-gray-600" />
          </button>
          <Link
            to={`/product/${product.id}`}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200"
          >
            <ShoppingBag className="h-4 w-4 text-gray-600" />
          </Link>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500 uppercase tracking-wide">{product.category}</span>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{product.rating}</span>
            <span className="text-xs text-gray-400">({product.reviews})</span>
          </div>
        </div>

        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-gray-900 hover:text-orange-500 transition-colors duration-200 mb-2">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Available Colors */}
        <div className="mt-3 flex space-x-1">
          {product.colors.slice(0, 4).map((color, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full border border-gray-300"
              style={{
                backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' :
                               color.toLowerCase() === 'black' ? '#000000' :
                               color.toLowerCase() === 'gray' ? '#6b7280' :
                               color.toLowerCase() === 'navy' ? '#1e3a8a' :
                               color.toLowerCase() === 'blue' ? '#3b82f6' :
                               color.toLowerCase() === 'pink' ? '#ec4899' :
                               color.toLowerCase() === 'brown' ? '#92400e' :
                               color.toLowerCase() === 'tan' ? '#d2b48c' :
                               '#6b7280'
              }}
            />
          ))}
          {product.colors.length > 4 && (
            <span className="text-xs text-gray-500">+{product.colors.length - 4}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;