import { Dropdown } from "./Dropdown";
import { NestedDropdown } from "./NestedDropdonw";
import style from "../styles/filters.module.scss";

export const Filter = () => {
  const WomenOptions = [
    { label: "Dress", value: "dress" },
    { label: "Shirt", value: "shirt" },
  ];

  const ManOptions = [
    { label: "T-Shirt", value: "tshirt" },
    { label: "Jeans", value: "jeans" },
    { label: "Jacket", value: "jacket" },
  ];

  const UnisexOptions = [
    { label: "Hoodie", value: "hoodie" },
    { label: "Sweater", value: "sweater" },
  ];

  const priceOptions = [
    { label: "Under $50", value: "0-50" },
    { label: "$50 - $100", value: "50-100" },
    { label: "$100 - $200", value: "100-200" },
    { label: "Over $200", value: "200+" },
  ];

  const sizeOptions = [
    { label: "XS", value: "xs" },
    { label: "S", value: "s" },
    { label: "M", value: "m" },
    { label: "L", value: "l" },
    { label: "XL", value: "xl" },
  ];

  const colorOptions = [
    { label: "Black", value: "black" },
    { label: "White", value: "white" },
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
  ];

  return (
    <aside className={style.filters}>
      <NestedDropdown
        title="Category"
        categories={[
          {
            name: "Woman",
            options: WomenOptions,
          },
          {
            name: "Man",
            options: ManOptions,
          },
          {
            name: "Unisex",
            options: UnisexOptions,
          },
        ]}
      />

      <Dropdown title="PRICE" options={priceOptions} />
      <Dropdown title="SIZE" options={sizeOptions} />
      <Dropdown title="COLOR" options={colorOptions} />
    </aside>
  );
};
