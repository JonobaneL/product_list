"use client";
import CheckboxList from "./ui/CheckboxList";
import { useFiltersContext } from "@/context/filtersContext";
import { ParamType } from "@/types/paramsTypes";

type FilterProps = {
  categories: ParamType[];
};

const CategoryFilters = ({ categories }: FilterProps) => {
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
