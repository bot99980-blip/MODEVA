import { Discount } from "../components/Discount";
import { Filter } from "../components/Filter";
import { Footer } from "../components/Footer";
import { Headerdark } from "../components/Headerdark";
import style from "../styles/catalog.module.scss";

export const Catalog = () => {
  return (
    <div className={style.catalog}>
      <Discount />
      <Headerdark />
      <div className={style.catalog__container}>
        <p>ALL PRODUCTS</p>
        <div className={style.catalog__container__wrapper}>
          <div className={style.catalog__container__wrapper__category}>
            <Filter />
          </div>
          <div className={style.catalog__container__wrapper__products}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
