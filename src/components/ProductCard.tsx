import { ProductParams } from "@/types/productType";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = { product: ProductParams };

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="w-full bg-white rounded-md hover:shadow-md transition-all duration-100 p-1 pb-3 cursor-pointer">
      <Link href={`/${product.slug}`}>
        <div className="w-full h-fit bg-white p-7 flex justify-center">
          <Image
            src={product.image_url}
            alt={product.name}
            width={160}
            height={160}
            className=" aspect-square object-contain"
          />
        </div>

        <h4 className="text-sm font-medium mb-2 px-2">{product.name}</h4>
      </Link>

      <p className="px-2">{product.price}$</p>
    </div>
  );
};

export default ProductCard;
