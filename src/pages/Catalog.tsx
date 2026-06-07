import { Discount } from "../components/Discount";
import { Footer } from "../components/Footer";
import { Headerdark } from "../components/Headerdark";
import style from "../styles/catalog.module.scss";

export const Catalog = () => {
  return (
    <div className={style.catalog}>
      <Discount />
      <Headerdark />
      <Footer />
    </div>
  );
};
