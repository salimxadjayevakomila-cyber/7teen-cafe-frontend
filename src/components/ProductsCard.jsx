 import React from 'react';
import { useCart } from '../context/CartContext';

const ProductsCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
  };

  return (
    <div className="border border-gray-100 rounded-xl p-2.5 sm:p-4 shadow-sm hover:shadow-md transition duration-300 bg-white flex flex-col justify-between">
      <div>
        <img 
          src={product?.image || 'https://via.placeholder.com/300x200?text=No+Image'} 
          alt={product?.title || 'Mahsulot'} 
          onError={handleImageError}
          className="w-full h-28 sm:h-44 object-cover rounded-lg mb-2 sm:mb-3"
          loading="lazy"
        />
        <h3 className="font-semibold text-xs sm:text-base text-gray-800 line-clamp-1">
          {product?.title || 'Mahsulot nomi'}
        </h3>
        <p className="text-gray-400 text-[10px] sm:text-xs mt-0.5 mb-2 line-clamp-2">
          {product?.description || 'Mahsulot haqida qisqacha ma\'lumot'}
        </p>
      </div>
      
      <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-50">
        <span className="text-xs sm:text-lg font-bold text-gray-900">
          ${typeof product?.price === 'number' ? product.price.toFixed(2) : (product?.price || '0.00')}
        </span>
        
        <button 
          type="button"
          onClick={() => addToCart(product)} 
          className="bg-[#2a3c30] hover:bg-[#1a271f] active:scale-95 text-white px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-[11px] sm:text-sm font-medium transition cursor-pointer shadow-sm"
        >
          + Savatga
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;