import style from "../styles/cart.module.scss";
import { Headerdark } from "../components/Headerdark";
import { Footer } from "../components/Footer";

export const Cart = () => {
  return (
    <div className={style.cart}>
      <Headerdark />
      <p>CART</p>
      <div className={style.cart__container}>
        <div className={style.cart__container__items}>
          <div className={style.cart__container__items__item}>
            <div className={style.cart__container__items_item__img}></div>
            <div className={style.cart__container__items_item__info}>
              <div className={style.cart__container__items_item__info__text}>
                <h1>WHITE CASUAL T-SHIRT</h1>
                <h2>IDR 100.000</h2>
                <span>
                  <button>-</button>
                  <h4>1</h4>
                  <button>+</button>
                </span>
              </div>
              <button
                className={style.cart__container__items_item__info__delete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className={style.cart__container__total}></div>
      </div>
      <Footer />
    </div>
  );
};
