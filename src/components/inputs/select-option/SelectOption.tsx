import React from "react";
import { Option, Select } from "./SelectOption.styled";

interface Option {
  value: string;
  id: number;
}

interface Props {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

const SelectOption: React.FC<Props> = ({ options, value, onChange }) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <Select value={value} onChange={handleSelectChange}>
      {options.map((option) => (
        <Option key={option.id} value={option.value}>
          {option.value}
        </Option>
      ))}
    </Select>
  );
};

export default SelectOption;
