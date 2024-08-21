"use server";

import products from "../data/products.json";
import { conditionsCheck } from "@/utils/conditionCheck";
import { SearchParamsType } from "@/types/searchParamsTypes";

export const getProducts = async (filters: SearchParamsType) => {
  if (!filters) return products;
  const filteredProducts = products.filter((item) =>
    conditionsCheck(filters, item)
  );
  if (filters.sort) {
    switch (filters.sort) {
      case "cheap":
        const sortedByAsc = filteredProducts.sort((a, b) => a.price - b.price);
        return sortedByAsc;
      case "expensive":
        const sortedDes = filteredProducts.sort((a, b) => b.price - a.price);
        return sortedDes;
    }
  }
  return filteredProducts;
};

export const getProduct = async (product_slug: string) => {
  return products.find((item) => item.slug == product_slug);
};
