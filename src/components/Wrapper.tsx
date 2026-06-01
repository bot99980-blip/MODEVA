import ITEM from "../assets/item.png";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import style from "../styles/wrapper.module.scss";

export const Wrapper = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.wrapper__text}>
        <h1>MADE IN INDONESIA, DEDICATED TO INDONESIA</h1>
        <h2>
          DISCOVER THE ART OF <br />
          DRESSING UP
        </h2>
      </div>
      <div className={style.wrapper__items}>
        <div className={style.wrapper__items__item}>
          <div className={style.wrapper__items__item__img}>
            <Link to="/">
              <img src={ITEM} alt="" />
            </Link>
          </div>
          <div className={style.wrapper__items__item__text}>
            <h1>PRODICT NAME</h1>
            <h2>IDR XXX</h2>
            <Link to="/">SHOP NOW</Link>
          </div>
        </div>
        <div className={style.wrapper__items__item__reverse}>
          <div className={style.wrapper__items__item__img}>
            <Link to="/">
              <img src={ITEM} alt="" />
            </Link>
          </div>
          <div className={style.wrapper__items__item__text}>
            <h1>PRODICT NAME</h1>
            <h2>IDR XXX</h2>
            <Link to="/">SHOP NOW</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
