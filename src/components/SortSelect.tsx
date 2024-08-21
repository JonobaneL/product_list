"use client";
import { useFiltersContext } from "@/context/filtersContext";
import { useAsync } from "@/hooks/useAsync";
import { SortOptionType } from "@/types/paramsTypes";
import dynamic from "next/dynamic";
import Skeleton from "./ui/Skeleton";

const DynamicSelect = dynamic(() => import("@/components/ui/Select"), {
  ssr: false,
});

const SortSelect = () => {
  const { params, updateParam } = useFiltersContext();
  const [isLoading, _, sortOptions] = useAsync<SortOptionType[]>(
    () => fetch("/api/sort"),
    []
  );
  if (isLoading) return <Skeleton className="w-full h-10 lg:w-[220px]" />;
  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <DynamicSelect
          defaultValue={params?.sort ? params?.sort[0] : ""}
          options={sortOptions || []}
          callback={(value) => {
            if (value == "") {
              updateParam("sort", []);
              return;
            }
            updateParam("sort", [value]);
          }}
        />
      )}
    </>
  );
};

export default SortSelect;
