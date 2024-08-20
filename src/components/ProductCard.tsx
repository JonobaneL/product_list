import { ProductParams } from "@/types/productType";
import Image from "next/image";

type ProductCardProps = { product: ProductParams };

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="w-full bg-white rounded-md hover:shadow-md transition-all duration-100 p-1 pb-3 cursor-pointer">
      <div className="w-full h-fit bg-white p-10 flex justify-center">
        <Image
          src={product.image_url}
          alt={product.name}
          width={160}
          height={160}
          className="size-[160px] object-contain"
        />
      </div>

      <h4 className="text-sm font-medium mb-2 px-2">{product.name}</h4>
      <p className="px-2">{product.price}$</p>
    </div>
  );
};

export default ProductCard;
