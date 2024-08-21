"use client";
import { useFiltersContext } from "@/context/filtersContext";
import Image from "next/image";
import FilterItem from "./FilterItem";

type Filter = {
  name: string;
  paramName: string;
};

const ActiveFiltes = () => {
  const { params, clearSearchParams, removeParam } = useFiltersContext();
  const filters = Object.keys(params).reduce((prev: Filter[], key) => {
    const transformedParam = params[key].map((item) => ({
      name: item,
      paramName: key,
    }));
    return [...prev, ...transformedParam];
  }, []);
  if (Object.keys(params).length == 0) return null;
  return (
    <div className="flex gap-2 flex-wrap">
      {filters.map((item, index) =>
        item.paramName == "price" ? (
          <button
            key={index}
            className="px-2 py-1 h-fit w-fit rounded-md text-sm font-medium border border-primary flex items-center gap-1"
            onClick={() => removeParam(item.paramName, item.name)}
          >
            <p>{item.name}$</p>
            <Image
              src="/assets/close-icon.svg"
              alt="remove"
              width={15}
              height={15}
            />
          </button>
        ) : (
          <FilterItem key={index} filter={item} />
        )
      )}
      <button
        className="px-2 py-1 h-full w-fit rounded-md text-sm font-medium bg-primary text-white min-h-[30px]"
        onClick={clearSearchParams}
      >
        Скинути
      </button>
    </div>
  );
};

export default ActiveFiltes;
