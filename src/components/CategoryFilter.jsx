 import React from 'react';

const CategoryFilter = ({ categories = [], selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex items-center gap-2 my-4 overflow-x-auto no-scrollbar pb-2 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0">
      <button
        type="button"
        onClick={() => onSelectCategory('all')}
        className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition whitespace-nowrap cursor-pointer shrink-0 ${
          selectedCategory === 'all' || !selectedCategory
            ? 'bg-[#2a3c30] text-white shadow-sm'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Barchasi
      </button>

      {categories.map((cat, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onSelectCategory(cat)}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition capitalize whitespace-nowrap cursor-pointer shrink-0 ${
            selectedCategory === cat
              ? 'bg-[#2a3c30] text-white shadow-sm'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;