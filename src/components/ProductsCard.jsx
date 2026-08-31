 import React from 'react';
import { useCart } from '../context/CartContext';

const ProductsCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition duration-300 bg-white flex flex-col justify-between">
      <div>
        <img 
          src={product?.image || 'https://via.placeholder.com/150'} 
          alt={product?.title || 'Product'} 
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="font-semibold text-lg text-gray-800 line-clamp-1">
          {product?.title || 'Mahsulot nomi'}
        </h3>
        <p className="text-gray-500 text-sm mt-1 mb-3 line-clamp-2">
          {product?.description || 'Mahsulot haqida qisqacha ma\'lumot'}
        </p>
      </div>
      
      <div className="flex items-center justify-between mt-2">
        <span className="text-xl font-bold text-gray-900">
          ${product?.price || '0.00'}
        </span>
        
   
        <button 
          onClick={() => addToCart(product)} 
          className="bg-[#2a3c30] hover:bg-[#1a271f] text-white px-4 py-2 rounded-lg text-sm font-medium transition active:scale-95 cursor-pointer shadow-sm"
        >
          + Savatga
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;