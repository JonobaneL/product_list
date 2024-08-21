import { ProductParams } from "@/types/productType";
import { SearchParamsType } from "@/types/searchParamsTypes";

export const conditionsCheck = (
  filters: SearchParamsType,
  product: ProductParams
) => {
  const conditions = Object.keys(filters).map((key) => {
    if (key == "sort") return true;
    if (key === "price") {
      const [minPrice, maxPrice] = filters[key].split("-");
      if (
        product[key] >= parseInt(minPrice) &&
        product[key] <= parseInt(maxPrice)
      )
        return true;
    }
    if (
      filters[key as keyof SearchParamsType].includes(
        product[key as keyof ProductParams].slug
      )
    )
      return true;

    return false;
  });
  if (conditions.every((item) => item == true)) return true;
};
