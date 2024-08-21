"use client";
import { useFiltersContext } from "@/context/filtersContext";
import PriceInput from "./PriceInputs";
import { useEffect, useState } from "react";

type FilterProps = {
  minPrice: number;
  maxPrice: number;
};

const PriceFilters = ({ minPrice, maxPrice }: FilterProps) => {
  const { params } = useFiltersContext();

  const initialPriceRange =
    params?.price?.length > 0
      ? params?.price[0]?.split("-").map(Number)
      : [minPrice, maxPrice];

  const [price, setPrice] = useState(initialPriceRange);
  useEffect(() => {
    setPrice(initialPriceRange);
  }, [params?.price]);

  return (
    <div>
      <PriceInput
        minPrice={minPrice}
        maxPrice={maxPrice}
        price={price}
        setPrice={setPrice}
      />
    </div>
  );
};

export default PriceFilters;
