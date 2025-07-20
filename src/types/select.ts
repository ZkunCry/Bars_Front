interface Option {
  label: string;
  value: string;
}
interface SelectProps {
  options: Option[];
  value: string;
  placeholder: string;
  className?: string;
  onChange: (value: string) => void;
}
export type { SelectProps };
export type { Option };
