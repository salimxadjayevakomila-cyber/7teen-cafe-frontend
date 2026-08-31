 import React from "react";

const ProductsCard = ({ product }) => {
  return (
    <div className="bg-[#243428] rounded-xl sm:rounded-2xl border border-[#2F4435] overflow-hidden flex flex-col justify-between hover:border-[#FFC72C] transition-all duration-300 shadow-md">
      
      {/* Rasm qismi */}
      <div className="relative w-full h-24 sm:h-40 md:h-48 bg-[#1C2A20] overflow-hidden">
        <img
          src={product.image || product.img}
          alt={product.title || product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {product.category && (
          <span className="absolute top-1 left-1 sm:top-2 sm:left-2 bg-[#1C2A20]/80 backdrop-blur-md text-[#FFC72C] text-[9px] sm:text-xs px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-[#FFC72C]/30 font-medium">
            {product.category}
          </span>
        )}
      </div>

      {/* Kontent qismi */}
      <div className="p-2 sm:p-4 flex flex-col flex-grow justify-between gap-1.5 sm:gap-3">
        <div>
          <h3 className="text-white font-bold text-xs sm:text-base md:text-lg line-clamp-1">
            {product.title || product.name}
          </h3>
          {product.description && (
            <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm line-clamp-2 mt-0.5 sm:mt-1">
              {product.description}
            </p>
          )}
        </div>

        {/* Narx va Tugma */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 pt-1 sm:pt-2 border-t border-[#2C3E31]">
          <div>
            <span className="text-gray-400 text-[8px] sm:text-[10px] uppercase block">Narxi</span>
            <span className="text-[#FFC72C] font-extrabold text-xs sm:text-base md:text-lg">
              {product.price ? `${product.price.toLocaleString()} so'm` : "—"}
            </span>
          </div>

          <button className="w-full sm:w-auto bg-[#FFC72C] text-[#1C2A20] font-bold text-[10px] sm:text-xs md:text-sm px-2 py-1 sm:px-3 sm:py-2 rounded-lg hover:bg-[#e6b328] transition active:scale-95">
            + Savatga
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;