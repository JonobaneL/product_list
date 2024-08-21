"use client";
import Image from "next/image";
import { useState } from "react";

type AccordionProps = {
  header: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
};

const Accordion = ({
  header,
  children,
  defaultOpen = false,
}: AccordionProps) => {
  const [isOpen, setOpen] = useState(defaultOpen);
  return (
    <div className="w-full">
      <div
        className="h-12 w-full flex items-center justify-between border-b border-b-gray-300 px-3 py-2 cursor-pointer"
        onClick={() => setOpen((p) => !p)}
      >
        <p>{header}</p>
        <Image
          src="/assets/arrow.svg"
          alt="arrow"
          width={24}
          height={24}
          className={`size-6 transition-transform ease-in-expo duration-500 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all ease-in-expo duration-500 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
