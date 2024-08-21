export type Option = {
  name: string;
  value: string;
};
export type SelectProps = {
  defaultValue: string;
  options: Option[];
  callback?: (value: string) => void;
};
