"use client";

import { useAsync } from "@/hooks/useAsync";
import { ProductParams } from "@/types/productType";
import Link from "next/link";

type ListProps = {
  query: string;
};

const ProductSearchList = ({ query }: ListProps) => {
  const [isLoading, _, products] = useAsync<ProductParams[]>(
    () => fetch(`/api/products/${query}`),
    [query]
  );
  return (
    <div className="absolute bg-white rounded-md p-1 shadow-md w-full mt-2 z-50 space-y-2">
      {products?.length == 0 ? (
        <p className="text-sm px-2">Товару не знайдено</p>
      ) : (
        products?.map((item) => (
          <Link
            key={item.id}
            href={`/${item.slug}`}
            className="block w-full px-2 text-sm"
          >
            {item.name}
          </Link>
        ))
      )}
    </div>
  );
};

export default ProductSearchList;
