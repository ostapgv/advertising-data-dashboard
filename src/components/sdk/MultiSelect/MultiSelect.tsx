import React, { ChangeEvent } from 'react';

export interface MultiSelectProps {
  options: string[];
  onChange: (selectedOptions: string[]) => void;
  name?: string;
  size?: number;
  className?: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options, onChange, name, size, className }) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement> | undefined) => {
    const selectedOptions = Array.from(event!.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    onChange(selectedOptions);
  };

  return (
    <select data-testid="multiselect" name={name} size={size} multiple className={className} onChange={handleChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default React.memo(MultiSelect);
