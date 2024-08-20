"use client";
import { DynamicParams } from "@/types/paramsTypes";
import { deserialize, serialize } from "@/utils/searchParamsUtils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useState,
} from "react";

type FiltersContextParams = {
  params: DynamicParams;
  clearSearchParams: () => void;
  updateParam: (paramName: string, newValue: string | string[]) => void;
  removeParam: (paramName: string, newValue: string) => void;
};
type ProviderProps = {
  children: React.ReactNode;
};

const filtersContext = createContext<FiltersContextParams | null>(null);

export const useFiltersContext = () => {
  return useContext(filtersContext) as FiltersContextParams;
};

const FiltersProvider = ({ children }: ProviderProps) => {
  const initialSearchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [params, setParams] = useState<DynamicParams>({});
  useLayoutEffect(() => {
    initialSearchParams.forEach((item, key) => {
      setParams((p) => ({ ...p, [key]: deserialize(key, item) }));
    });
  }, []);
  const updateSearchParams = useCallback(
    (paramName: string, newValue: string[]) => {
      setParams((p) => ({ ...p, [paramName]: newValue }));
      const newParams = new URLSearchParams(initialSearchParams);
      if (newValue.length == 0) {
        newParams.delete(paramName);
        setParams((prevParams) => {
          const {
            [paramName]: {},
            ...rest
          } = prevParams;
          return rest;
        });
      } else {
        const serializedValue = serialize(paramName, newValue);
        newParams.set(paramName, serializedValue);
      }
      router.replace(
        `${pathname}?${newParams.toString().replace(/%2C/g, ",")}`,
        {
          scroll: false,
        }
      );
    },
    [pathname, initialSearchParams.keys()]
  );
  const updateParam = (paramName: string, value: string | string[]) => {
    if (Array.isArray(value)) {
      updateSearchParams(paramName, [value.join("-")]);
      return;
    }
    if (params[paramName]?.includes(value)) {
      updateSearchParams(
        paramName,
        params[paramName].filter((item) => item != value)
      );
      return;
    }
    updateSearchParams(paramName, [...(params[paramName] || []), value]);
  };
  const removeParam = (paramName: string, value: string) => {
    updateSearchParams(
      paramName,
      params[paramName].filter((item) => item != value)
    );
  };

  const clearSearchParams = () => {
    router.replace(pathname);
    setParams({});
  };
  return (
    <filtersContext.Provider
      value={{
        params,
        clearSearchParams,
        updateParam,
        removeParam,
      }}
    >
      {children}
    </filtersContext.Provider>
  );
};

export default FiltersProvider;
