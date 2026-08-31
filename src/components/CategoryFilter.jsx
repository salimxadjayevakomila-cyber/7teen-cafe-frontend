 

const CategoryFilter = ({ categories = [], selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap gap-2 my-4">
      <button
        onClick={() => onSelectCategory('all')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition ${
          selectedCategory === 'all' || !selectedCategory
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Barchasi
      </button>

      {categories.map((cat, index) => (
        <button
          key={index}
          onClick={() => onSelectCategory(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition capitalize ${
            selectedCategory === cat
              ? 'bg-blue-600 text-white'
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