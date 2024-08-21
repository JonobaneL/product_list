import { useFiltersContext } from "@/context/filtersContext";
import { useAsync } from "@/hooks/useAsync";
import { FiltersResponse } from "@/types/paramsTypes";
import Image from "next/image";
import Skeleton from "./ui/Skeleton";

type ItemProps = {
  filter: {
    name: string;
    paramName: string;
  };
};

const FilterItem = ({ filter }: ItemProps) => {
  const { removeParam } = useFiltersContext();

  const path = filter.paramName == "category" ? "categories" : filter.paramName;
  const [isLoading, _, data] = useAsync<FiltersResponse>(
    () => fetch(`/api/${path}/${filter.name}`),
    []
  );
  if (isLoading) return <Skeleton className="w-12 h-8" />;
  return (
    <button
      className="px-2 py-1 h-fit w-fit rounded-md text-sm font-medium border border-primary flex items-center gap-1"
      onClick={() => removeParam(filter.paramName, filter.name)}
    >
      <p>{data?.name}</p>
      <Image src="/assets/close-icon.svg" alt="remove" width={15} height={15} />
    </button>
  );
};

export default FilterItem;
