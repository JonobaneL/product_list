import { getProducts } from "@/actions/productsAction";
import ProductCard from "./ProductCard";
import { SearchParamsType } from "@/types/searchParamsTypes";

const ProductList = async ({
  searchParams,
}: {
  searchParams: SearchParamsType;
}) => {
  const products = await getProducts(searchParams);
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,_1fr))] gap-3 justify-items-center">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
