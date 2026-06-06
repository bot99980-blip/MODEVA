import style from "../styles/cart.module.scss";
import { Headerdark } from "../components/Headerdark";
import { Footer } from "../components/Footer";
import img from "../assets/image2.png";

export const Cart = () => {
  return (
    <div className={style.cart}>
      <Headerdark />
      <p className={style.cart__title}>CART</p>
      <div className={style.cart__container}>
        <div className={style.cart__container__items}>
          <div className={style.cart__container__items__item}>
            <div className={style.cart__container__items__item__img}>
              <img src={img} alt="" />
            </div>
            <div className={style.cart__container__items__item__info}>
              <div className={style.cart__container__items__item__info__text}>
                <h1>WHITE CASUAL T-SHIRT</h1>
                <h2>IDR 100.000</h2>
                <span>
                  <button>-</button>
                  <h4>1</h4>
                  <button>+</button>
                </span>
              </div>
              <button
                className={style.cart__container__items__item__info__delete}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.7404 9L14.3942 18M9.60577 18L9.25962 9M4.77235 5.79057C5.91878 5.61744 7.07849 5.48485 8.25 5.39432C9.48744 5.2987 10.738 5.25 12 5.25C13.262 5.25 14.5126 5.2987 15.75 5.39432C16.9215 5.48485 18.0812 5.61744 19.2276 5.79057C19.5696 5.84221 19.9104 5.89747 20.25 5.95629M19.2276 5.79057L18.1598 19.6726C18.0696 20.8448 17.0921 21.75 15.9164 21.75H8.08357C6.90786 21.75 5.93037 20.8448 5.8402 19.6726L4.77235 5.79057M3.75 5.95629C4.08957 5.89747 4.43037 5.84221 4.77235 5.79057M15.75 5.39432V4.47819C15.75 3.29882 14.8393 2.31423 13.6606 2.27652C13.1092 2.25889 12.5556 2.25 12 2.25C11.4444 2.25 10.8908 2.25889 10.3394 2.27652C9.16065 2.31423 8.25 3.29882 8.25 4.47819V5.39432"
                    stroke="#929292"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Delete
              </button>
            </div>
          </div>
          <div className={style.cart__container__items__item}>
            <div className={style.cart__container__items__item__img}>
              <img src={img} alt="" />
            </div>
            <div className={style.cart__container__items__item__info}>
              <div className={style.cart__container__items__item__info__text}>
                <h1>WHITE CASUAL T-SHIRT</h1>
                <h2>IDR 100.000</h2>
                <span>
                  <button>-</button>
                  <h4>2</h4>
                  <button>+</button>
                </span>
              </div>
              <button
                className={style.cart__container__items__item__info__delete}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.7404 9L14.3942 18M9.60577 18L9.25962 9M4.77235 5.79057C5.91878 5.61744 7.07849 5.48485 8.25 5.39432C9.48744 5.2987 10.738 5.25 12 5.25C13.262 5.25 14.5126 5.2987 15.75 5.39432C16.9215 5.48485 18.0812 5.61744 19.2276 5.79057C19.5696 5.84221 19.9104 5.89747 20.25 5.95629M19.2276 5.79057L18.1598 19.6726C18.0696 20.8448 17.0921 21.75 15.9164 21.75H8.08357C6.90786 21.75 5.93037 20.8448 5.8402 19.6726L4.77235 5.79057M3.75 5.95629C4.08957 5.89747 4.43037 5.84221 4.77235 5.79057M15.75 5.39432V4.47819C15.75 3.29882 14.8393 2.31423 13.6606 2.27652C13.1092 2.25889 12.5556 2.25 12 2.25C11.4444 2.25 10.8908 2.25889 10.3394 2.27652C9.16065 2.31423 8.25 3.29882 8.25 4.47819V5.39432"
                    stroke="#929292"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className={style.cart__container__total}>
          <h1>SHOPPING INFO</h1>
          <div className={style.cart__container__total__sub}>
            <div className={style.cart__container__total__sub__text}>
              Subtotal
            </div>
            <div className={style.cart__container__total__sub__price}>
              IDR 250.000
            </div>
          </div>
          <div className={style.cart__container__total__sub}>
            <div className={style.cart__container__total__sub__text}>
              Shipping
            </div>
            <div className={style.cart__container__total__sub__price}>
              IDR 50.000
            </div>
          </div>
          <div className={style.cart__container__total__cost}>
            <div className={style.cart__container__total__cost__text}>
              Total
            </div>
            <div className={style.cart__container__total__cost__price}>
              IDR 300.000
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
