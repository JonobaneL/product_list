"use client";

import CheckboxList from "./ui/CheckboxList";
import categories from "../data/categories.json";
import { useFiltersContext } from "@/context/filtersContext";

const CategoryFilters = () => {
  const { params, updateParam } = useFiltersContext();
  return (
    <div>
      <CheckboxList
        data={categories}
        checked={params.category}
        callback={(value) => updateParam("category", value)}
      />
    </div>
  );
};

export default CategoryFilters;
