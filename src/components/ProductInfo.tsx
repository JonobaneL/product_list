import { getProduct } from "@/actions/productsAction";

type ProductInfoProps = {
  product_slug: string;
};

const ProductInfo = async ({ product_slug }: ProductInfoProps) => {
  const product = await getProduct(product_slug);
  return (
    <>
      <h2 className="text-xl font-bold text-gray-700 mb-2">{product?.name}</h2>
      <h3 className="font-medium text-gray-600 mb-8">
        {product?.category.name}
      </h3>
      <p className="font-bold text-lg mb-4">{product?.price}$</p>
      <p>{product?.description}</p>
    </>
  );
};

export default ProductInfo;
