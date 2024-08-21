export type ParamType = {
  id: string;
  name: string;
  slug: string;
};
export type SortOptionType = {
  name: string;
  value: string;
};
export type PriceLimitsType = {
  minPrice: number;
  maxPrice: number;
};
export type DynamicParams = {
  [key: string]: string[];
};
export type FiltersResponse = {
  name: string;
  value?: string;
  slug?: string;
};
