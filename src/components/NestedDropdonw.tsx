import { useState, useRef, useEffect } from "react";
import style from "../styles/filters.module.scss";

interface Option {
  label: string;
  value: string | number;
}

interface Category {
  name: string;
  options: Option[];
}

interface NestedDropdownProps {
  title: string;
  categories: Category[];
  onChange?: (
    category: string,
    value: string | number,
    selectedValues: Record<string, (string | number)[]>,
  ) => void;
}

export const NestedDropdown = ({
  title,
  categories,
  onChange,
}: NestedDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const [selectedValues, setSelectedValues] = useState<
    Record<string, (string | number)[]>
  >({});
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setOpenSubDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCategoryToggle = (categoryName: string) => {
    setOpenSubDropdown(openSubDropdown === categoryName ? null : categoryName);
  };

  const handleCheckboxChange = (
    categoryName: string,
    value: string | number,
  ) => {
    const currentSelected = selectedValues[categoryName] || [];
    let newSelectedValues: (string | number)[];

    if (currentSelected.includes(value)) {
      newSelectedValues = currentSelected.filter((v) => v !== value);
    } else {
      newSelectedValues = [...currentSelected, value];
    }

    const updatedSelected = {
      ...selectedValues,
      [categoryName]: newSelectedValues,
    };

    setSelectedValues(updatedSelected);

    if (onChange) {
      onChange(categoryName, value, updatedSelected);
    }
  };

  return (
    <div className={style.nestedDropdown} ref={dropdownRef}>
      <div
        className={style.nestedDropdown__header}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
      </div>

      {isOpen && (
        <div className={style.nestedDropdown__content}>
          {categories.map((category) => (
            <div key={category.name} className={style.nestedDropdown__category}>
              <div
                className={style.nestedDropdown__categoryHeader}
                onClick={() => handleCategoryToggle(category.name)}
              >
                <span>{category.name}</span>
              </div>

              {openSubDropdown === category.name && (
                <div className={style.nestedDropdown__subContent}>
                  {category.options.map((option) => (
                    <label
                      key={option.value}
                      className={style.nestedDropdown__option}
                    >
                      <input
                        type="checkbox"
                        checked={(selectedValues[category.name] || []).includes(
                          option.value,
                        )}
                        onChange={() =>
                          handleCheckboxChange(category.name, option.value)
                        }
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
