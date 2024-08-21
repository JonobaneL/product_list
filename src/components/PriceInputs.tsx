import { useFiltersContext } from "@/context/filtersContext";
import { priceConvert } from "@/utils/priceConvert";

type PriceInputProps = {
  minPrice: number;
  maxPrice: number;
  price: number[];
  setPrice: React.Dispatch<React.SetStateAction<number[]>>;
};

const PriceInput = ({
  price,
  setPrice,
  minPrice,
  maxPrice,
}: PriceInputProps) => {
  const { params, updateParam, removeParam } = useFiltersContext();
  const handlePriceChange = (value: string, index: number) => {
    const numericValue = value.replace(/\D/g, "");
    const newPrice = [...price];
    newPrice[index] = !Number.isNaN(parseInt(numericValue))
      ? parseInt(numericValue)
      : 0;
    setPrice(newPrice);
  };
  const onBlurHandler = (value: string, index: number) => {
    const newPrice = [...price];
    newPrice[index] = Math.max(
      minPrice,
      Math.min(maxPrice, parseInt(value) || 0)
    );
    setPrice(newPrice);
    if (newPrice[0] == minPrice && newPrice[1] == maxPrice) {
      if (params?.price) removeParam("price", params?.price[0] || "");
      return;
    }
    if (!params.price || params?.price[0] !== newPrice.join("-")) {
      updateParam("price", priceConvert(newPrice).map(String));
    }
  };
  return (
    <div className="flex items-center gap-2 mb-4">
      <input
        value={price[0]}
        onChange={(e) => handlePriceChange(e.target.value, 0)}
        onBlur={(e) => onBlurHandler(e.target.value, 0)}
        className="w-20 rounded-md bg-transparent border h-8 px-1 focus:outline-none focus:ring-1 focus:ring-primary text-center"
        placeholder="min"
        pattern="[0-9]*"
        inputMode="numeric"
      />
      —
      <input
        value={price[1]}
        onChange={(e) => handlePriceChange(e.target.value, 1)}
        onBlur={(e) => onBlurHandler(e.target.value, 1)}
        className="w-20 rounded-md bg-transparent border h-8 px-1 focus:outline-none focus:ring-1 focus:ring-primary text-center"
        placeholder="max"
        pattern="[0-9]*"
        inputMode="numeric"
      />
      $
    </div>
  );
};

export default PriceInput;
