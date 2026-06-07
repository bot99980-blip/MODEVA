import { useState, useRef, useEffect } from "react";
import style from "../styles/filters.module.scss";

interface Option {
  label: string;
  value: string | number;
}

interface DropdownProps {
  title: string;
  options: Option[];
  onChange?: (
    value: string | number,
    selectedValues: (string | number)[],
  ) => void;
  multiple?: boolean;
  selectedValues?: (string | number)[];
  placeholder?: string;
  disabled?: boolean;
}

export const Dropdown = ({
  title,
  options,
  onChange,
  multiple = true,
  disabled = false,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<(string | number)[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCheckboxChange = (value: string | number) => {
    let newSelectedValues: (string | number)[];

    if (multiple) {
      newSelectedValues = selectedValues.includes(value)
        ? selectedValues.filter((v) => v !== value)
        : [...selectedValues, value];
    } else {
      newSelectedValues = selectedValues.includes(value) ? [] : [value];
    }

    setSelectedValues(newSelectedValues);

    if (onChange) {
      onChange(value, newSelectedValues);
    }
  };

  return (
    <div className={style.customDropdown} ref={dropdownRef}>
      <div
        className={style.customDropdown__header}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        style={{
          opacity: disabled ? 0.6 : 1,
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      >
        <span>{title}</span>
        <svg
          className={`${style.nestedDropdown__arrow} ${isOpen ? style.open : ""}`}
          viewBox="0 0 24 24"
        >
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </div>

      {isOpen && !disabled && (
        <div className={style.customDropdown__content}>
          {options.map((option, index) => (
            <label key={index} className={style.customDropdown__option}>
              <input
                type="checkbox"
                checked={selectedValues.includes(option.value)}
                onChange={() => handleCheckboxChange(option.value)}
                disabled={disabled}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
