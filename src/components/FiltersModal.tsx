"use client";
import Image from "next/image";
import { useState } from "react";
import ModalWindow from "./ModalWindow";
import Filters from "./Filters";
import SortSelect from "./SortSelect";

const FitersModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="flex items-center gap-1 border rounded-md border-secondary px-3 py-1.5 lg:hidden"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src="/assets/filters-icon.svg"
          alt="filters"
          width={20}
          height={20}
        />
        <p className="text-sm">Фільтр</p>
      </button>
      <ModalWindow isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="p-10 overflow-y-scroll">
          <div className="flex  items-center justify-between mb-5">
            <h3 className="font-medium text-lg ">Фільтри</h3>
            <Image
              src="/assets/close-icon.svg"
              alt="close"
              width={20}
              height={20}
              onClick={() => setIsOpen(false)}
            />
          </div>
          <div className="space-y-2">
            <SortSelect />
            <Filters />
          </div>
        </div>
      </ModalWindow>
    </>
  );
};

export default FitersModal;
