"use client";
import { ParamType } from "@/types/paramsTypes";
import Checkbox from "./Checkbox";

type ListProps = {
  data: ParamType[];
  checked?: string[];
  callback?: (value: any) => void;
};
const CheckboxList = ({ data, checked, callback = () => {} }: ListProps) => {
  return (
    <ul className="space-y-1">
      {data.map((item) => (
        <li key={item.id}>
          <Checkbox
            label={item.name}
            checked={checked?.includes(item.slug)}
            changeHandler={() => callback(item.slug)}
          />
        </li>
      ))}
    </ul>
  );
};

export default CheckboxList;
