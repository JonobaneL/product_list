"use client";

import Image from "next/image";

type CheckboxProps = {
  label: string;
  checked?: boolean;
  changeHandler: () => void;
};

const Checkbox = ({ label, changeHandler, checked = false }: CheckboxProps) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <div className="flex items-center relative justify-center">
        <input
          type="checkbox"
          checked={checked}
          className="peer size-5 appearance-none border border-gray-300 rounded-sm checked:border-primary"
          onClick={changeHandler}
          onChange={() => {}}
        />
        <Image
          src="/check-icon.svg"
          width={12}
          height={12}
          className="size-3 absolute opacity-0 peer-checked:opacity-100"
          alt="indicator"
        />
      </div>

      {label}
    </label>
  );
};

export default Checkbox;
