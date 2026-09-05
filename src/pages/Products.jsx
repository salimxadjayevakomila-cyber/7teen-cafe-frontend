 import { useEffect, useState } from "react";
import instance from "../utils/axios";
import ProductsCard from "../components/ProductsCard";
import Loading from "../components/Loading";
import CategoryFilter from "../components/CategoryFilter";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    instance
      .get("/products")
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : res.data.products || [];
        setProducts(data);

        const uniqueCategories = [
          ...new Set(data.map((item) => item.category).filter(Boolean))
        ];
        setCategories(uniqueCategories);
      })
      .catch((err) => {
        console.error("Xatolik yuz berdi:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <div className="p-3 sm:p-6 max-w-7xl mx-auto w-full">
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {isLoading ? (
        <Loading />
      ) : filteredProducts.length > 0 ? (
        /* Mobil: 3 ustun, Noutbuk va barcha katta ekranlar: RO'PA-RO'SA 4 USTUN */
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-6 mt-4">
          {filteredProducts.map((item) => (
            <ProductsCard key={item._id || item.id} product={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-gray-500 text-xs sm:text-base">
          Bu kategoriyada hech qanday mahsulot topilmadi.
        </div>
      )}
    </div>
  );
};

export default Products;