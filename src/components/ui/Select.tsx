"use client";
import { useEventListener } from "@/hooks/useEventListener";
import { Option, SelectProps } from "@/types/selectTypes";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Select = ({
  options,
  callback = (value: string) => {},
  defaultValue,
}: SelectProps) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const currentValue = defaultValue
    ? options.find((item) => item.value == defaultValue)?.name
    : options[0].name;
  const [value, setValue] = useState(currentValue);
  const [isOpen, setOpen] = useState(false);
  const optionHandler = (option: Option) => {
    callback(option.value);
    setValue(option.name);
    setOpen(false);
  };
  useEffect(() => {
    setValue(currentValue);
  }, [defaultValue]);

  useEventListener("click", (e) => {
    if (e.target !== selectRef.current) {
      setOpen(false);
    }
  });
  return (
    <div className="relative w-full" ref={selectRef}>
      <div className="flex  items-center relative z-10">
        <input
          type="text"
          readOnly
          value={value}
          className="w-full h-8 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-1 pl-2 pr-4 focus:ring-primary text-sm  cursor-default"
          placeholder="Сортувати за"
          onClick={(e) => {
            e.stopPropagation();
            setOpen((p) => !p);
          }}
        />
        <Image
          src="/assets/arrow.svg"
          className="absolute size-4 right-2"
          alt="arrow"
          width={10}
          height={10}
        />
      </div>

      <div
        className={`absolute w-full bg-white shadow-lg border rounded-md py-1 mt-1 z-10 cursor-pointer ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {options.map((option, index) => (
          <div
            key={index}
            className="text-sm h-7 px-2 flex items-center hover:bg-gray-100"
            onClick={(e) => {
              e.stopPropagation();
              optionHandler(option);
            }}
          >
            {option.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
