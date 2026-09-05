 import React, { useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';

export default function ProductsCard({ 
  item, 
  product, 
  lang = 'uz', 
  currency = "so'm", 
  addToCartText = 'Savatga' 
}) {
  const { addToCart } = useCart();
  const [showMacros, setShowMacros] = useState(false);

  const currentItem = item || product || {};

  const title = useMemo(() => {
    if (typeof currentItem?.name === 'object') {
      return currentItem?.name?.[lang] || currentItem?.name?.uz || 'Mahsulot';
    }
    return currentItem?.name || currentItem?.title || 'Mahsulot';
  }, [currentItem, lang]);

  const description = useMemo(() => {
    if (typeof currentItem?.description === 'object') {
      return currentItem?.description?.[lang] || currentItem?.description?.uz || '';
    }
    return currentItem?.description || '';
  }, [currentItem, lang]);

  const image = currentItem?.imageSrc || currentItem?.image || 'https://via.placeholder.com/400x300?text=No+Image';
  const weight = currentItem?.weight || '270 g';
  
  const numericPrice = typeof currentItem?.price === 'number' 
    ? currentItem.price 
    : (parseFloat(currentItem?.price) || 0);
  
  const formattedPrice = numericPrice.toLocaleString();
  const kbju = currentItem?.kbju || currentItem?.nutrition || null;

  const handleImageError = (e) => {
    e.target.onerror = null; 
    e.target.src = 'https://via.placeholder.com/400x300?text=No+Image';
  };

  const handleAddToCart = () => {
    addToCart({ 
      ...currentItem, 
      id: currentItem._id || currentItem.id || title,
      title, 
      price: numericPrice 
    });
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden flex flex-col justify-between border border-[#EAE3D9] shadow-sm hover:shadow-md transition-all duration-300 w-full h-full select-none">
      <div className="flex flex-col h-full">
        {/* Rasm qismi - Noutbuk va telefonda ham keng, ham baland proporsiya */}
        <div className="w-full aspect-[4/3] bg-[#F5EFE6] overflow-hidden relative flex-shrink-0 flex items-center justify-center p-2">
          <img 
            src={image} 
            alt={title} 
            onError={handleImageError}
            className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Ma'lumotlar qismi */}
        <div className="p-3 sm:p-4 flex flex-col flex-grow justify-between">
          <div>
            <h3 className="font-bold text-xs sm:text-base text-[#2A2421] line-clamp-2 leading-snug">
              {title}
            </h3>

            {description && (
              <p className="text-gray-400 text-[10px] sm:text-xs line-clamp-2 leading-tight mt-1">
                {description}
              </p>
            )}
          </div>

          <div className="mt-3">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="bg-[#4A433E] text-white text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                {formattedPrice} {currency}
              </span>
              <span className="bg-[#F2ECE4] text-[#4A433E] text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-full">
                {weight}
              </span>
              
              {kbju && (
                <button 
                  type="button"
                  onClick={() => setShowMacros((prev) => !prev)}
                  className="bg-[#F2ECE4] hover:bg-[#e8dfd5] active:scale-95 text-[#4A433E] text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-full transition cursor-pointer"
                >
                  КБЖУ
                </button>
              )}
            </div>

            {showMacros && kbju && (
              <div className="bg-[#F9F6F0] p-1.5 rounded-lg text-[10px] text-[#4A433E] flex justify-between gap-1 border border-[#EAE3D9] mt-2 transition-all">
                <span><b>К:</b> {kbju.calories ?? kbju.k ?? 0}</span>
                <span><b>Б:</b> {kbju.proteins ?? kbju.b ?? 0}g</span>
                <span><b>Ж:</b> {kbju.fats ?? kbju.z ?? 0}g</span>
                <span><b>У:</b> {kbju.carbs ?? kbju.u ?? 0}g</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="px-3 pb-3 sm:px-4 sm:pb-4 pt-1">
        <button 
          type="button"
          onClick={handleAddToCart} 
          className="w-full bg-[#1C2A20] hover:bg-[#111A14] active:scale-[0.98] text-white py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer shadow-sm flex items-center justify-center gap-1"
        >
          <span>+ {addToCartText}</span>
        </button>
      </div>
    </div>
  );
}