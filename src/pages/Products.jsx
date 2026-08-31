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
    
    
    instance.get("/products")
      .then((res) => {
        setProducts(res.data);
  
        const uniqueCategories = [
          ...new Set(res.data.map((item) => item.category).filter(Boolean))
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

  
  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter((item) => item.category === selectedCategory);

  return (
    <div style={{ padding: "20px" }}>
    
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={(category) => setSelectedCategory(category)}
      />

 
      {isLoading ? (
        <Loading />
      ) : filteredProducts.length > 0 ? (
       
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "20px",
            marginTop: "20px"
          }}
        >
          {filteredProducts.map((item) => (
            <ProductsCard key={item._id || item.id} product={item} />
          ))}
        </div>
      ) : (
    
        <div style={{ textAlign: "center", padding: "40px 0", color: "#666" }}>
          Bu kategoriyada hech qanday mahsulot topilmadi.
        </div>
      )}
    </div>
  );
};

export default Products;