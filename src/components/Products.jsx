import styles from "./App.module.css";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import ProductCardSkeleton from "./ProductCardSkeleton";

const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setLoading(true);

    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await res.json();


      const limitedData = data.slice(5, 20);

      setProducts(limitedData);
      setLoading(false);
    } catch (error) {
      console.error("Ma'lumotlarni olishda xatolik:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.products}>
        {loading
          ? skeletons.map((skeleton) => <ProductCardSkeleton key={skeleton} />)
          : products.map((product) => (
              <ProductCard
                key={product.id}
                img={product.images[0]}
                title={product.title}
                price={product.price}
              />
            ))}
      </div>
    </>
  );
};

export default Products;
