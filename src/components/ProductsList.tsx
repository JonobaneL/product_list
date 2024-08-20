import data from "../data/products.json";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,_1fr))] gap-3 justify-items-center">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
