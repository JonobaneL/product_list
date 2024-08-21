"use client";
import CategoryFilters from "./CategoryFilters";
import PriceFilters from "./PriceFilters";
import Accordion from "./ui/Accordion";
import { useAsync } from "@/hooks/useAsync";
import { ParamType, PriceLimitsType } from "@/types/paramsTypes";
import Loader from "./ui/Loader";

const Filters = () => {
  const [isCategoriesLoading, categoriesError, categories] = useAsync<
    ParamType[]
  >(() => fetch("/api/categories"), []);
  const [isPriceLoading, _, priceLimits] = useAsync<PriceLimitsType>(
    () => fetch("/api/price_limits"),
    []
  );

  return (
    <div>
      {isCategoriesLoading || isPriceLoading ? (
        <Loader />
      ) : (
        <>
          <Accordion header="Категорії">
            <div className="p-2">
              <CategoryFilters categories={categories || []} />
            </div>
          </Accordion>
          <Accordion header="Ціна" defaultOpen={true}>
            <div className="px-2 py-3">
              <PriceFilters
                minPrice={priceLimits?.minPrice || 0}
                maxPrice={priceLimits?.maxPrice || 0}
              />
            </div>
          </Accordion>
        </>
      )}
    </div>
  );
};

export default Filters;
