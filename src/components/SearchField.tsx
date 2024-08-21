"use client";

import { useQuery } from "@/hooks/useQuery";
import { useState } from "react";
import ProductSearchList from "./ProductSearchList";

const SearchField = () => {
  const [value, setValue] = useState("");
  const query = useQuery(value);
  return (
    <div className="relative">
      <div className="flex items-center relative">
        <img
          src="/assets/search-icon.svg"
          alt="search"
          className="size-4 absolute left-2"
        />
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          className="w-full h-8 border border-gray-400 rounded-md focus:outline-none bg-transparent px-7 placeholder:text-sm"
          onBlur={() => setValue("")}
          placeholder="Пошук товару..."
        />
        {value.length ? (
          <img
            src="/assets/close-icon.svg"
            alt="close"
            className="size-4 absolute right-2"
            onClick={() => setValue("")}
          />
        ) : null}
      </div>
      {query ? <ProductSearchList query={query} /> : null}
    </div>
  );
};

export default SearchField;
