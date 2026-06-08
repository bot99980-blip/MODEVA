import { Discount } from "../components/Discount";
import { Filter } from "../components/Filter";
import { Footer } from "../components/Footer";
import { Headerdark } from "../components/Headerdark";
import IMG from "../assets/jack.png";
import style from "../styles/catalog.module.scss";
import { Link } from "react-router-dom";

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
          <div className={style.catalog__container__wrapper__products}>
            <div className={style.catalog__container__wrapper__products__item}>
              <Link
                to="/product"
                className={
                  style.catalog__container__wrapper__products__item__img
                }
              >
                <img src={IMG} alt="" />
              </Link>
              <div
                className={
                  style.catalog__container__wrapper__products__item__text
                }
              >
                <h1>JACKET</h1>
                <h2>Brown Leather Jacket</h2>
                <h3>IDR 300.000</h3>
              </div>
            </div>
            <div className={style.catalog__container__wrapper__products__item}>
              <Link
                to="/product"
                className={
                  style.catalog__container__wrapper__products__item__img
                }
              >
                <img src={IMG} alt="" />
              </Link>
              <div
                className={
                  style.catalog__container__wrapper__products__item__text
                }
              >
                <h1>JACKET</h1>
                <h2>Black Yellow Square </h2>
                <h3>IDR 300.000</h3>
              </div>
            </div>
            <div className={style.catalog__container__wrapper__products__item}>
              <Link
                to="/product"
                className={
                  style.catalog__container__wrapper__products__item__img
                }
              >
                <img src={IMG} alt="" />
              </Link>
              <div
                className={
                  style.catalog__container__wrapper__products__item__text
                }
              >
                <h1>JACKET</h1>
                <h2>Brown Leather Jacket</h2>
                <h3>IDR 300.000</h3>
              </div>
            </div>
            <div className={style.catalog__container__wrapper__products__item}>
              <Link
                to="/product"
                className={
                  style.catalog__container__wrapper__products__item__img
                }
              >
                <img src={IMG} alt="" />
              </Link>
              <div
                className={
                  style.catalog__container__wrapper__products__item__text
                }
              >
                <h1>JACKET</h1>
                <h2>Brown Leather Jacket</h2>
                <h3>IDR 300.000</h3>
              </div>
            </div>
            <div className={style.catalog__container__wrapper__products__item}>
              <Link
                to="/product"
                className={
                  style.catalog__container__wrapper__products__item__img
                }
              >
                <img src={IMG} alt="" />
              </Link>
              <div
                className={
                  style.catalog__container__wrapper__products__item__text
                }
              >
                <h1>JACKET</h1>
                <h2>Brown Leather Jacket</h2>
                <h3>IDR 300.000</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
