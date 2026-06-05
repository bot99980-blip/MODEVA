import { Footer } from "../components/Footer";
import { Headerdark } from "../components/Headerdark";
import style from "../styles/product.module.scss";
import img from "../assets/image2.png";

export const Product = () => {
  return (
    <div className={style.product}>
      <Headerdark />
      <div className={style.product__container}>
        <div className={style.product__container__imgs}>
          <div className={style.product__container__imgs__primary}>
            <img src={img} alt="" />
          </div>
          <div className={style.product__container__imgs__secondary}>
            <div className={style.product__container__imgs__secondary__item}>
              тут должно быть изображение но...
            </div>
            <div className={style.product__container__imgs__secondary__item}>
              тут должно быть изображение но...
            </div>
            <div className={style.product__container__imgs__secondary__item}>
              тут должно быть изображение но...
            </div>
            <div className={style.product__container__imgs__secondary__item}>
              тут должно быть изображение но...
            </div>
            <div className={style.product__container__imgs__secondary__item}>
              тут должно быть изображение но...
            </div>
          </div>
        </div>
        <div className={style.product__container__info}>
          <h1>MAN T-SHIRT</h1>
          <h2>WHITE CASUAL T-SHIRT</h2>
          <h3>IDR 100.000</h3>
          <h4>
            Lorem ipsum dolor sit amet consectetur. Metus nibh dictum vel enim
            sollicitudin. Metus nibh a leo orci aliquam diam. Metus pretium
            purus augue malesuada metus. Nec suspendisse proin aliquam dolor
            ipsum. Quis id enim viverra et.
          </h4>
          <h5>
            Lorem ipsum dolor sit amet consectetur. Metus nibh dictum vel enim
            sollicitudin. Metus nibh a leo orci aliquam diam. Metus pretium
            purus augue malesuada metus. Nec suspendisse proin aliquam dolor
            ipsum. Quis id enim viverra et. Lorem ipsum dolor sit amet
            consectetur. Metus nibh dictum vel enim sollicitudin. Metus nibh a
            leo orci aliquam diam. Metus pretium purus augue malesuada metus.
            Nec suspendisse proin aliquam dolor ipsum. Quis id enim viverra et.
          </h5>
          <div className={style.product__container__info__size}>
            <div className={style.product__container__info__size__item}>
              XXS
            </div>
            <div className={style.product__container__info__size__item}>XS</div>
            <div className={style.product__container__info__size__item}>S</div>
            <div className={style.product__container__info__size__item__active}>
              M
            </div>
            <div className={style.product__container__info__size__item}>L</div>
            <div className={style.product__container__info__size__item}>XL</div>
            <div
              className={style.product__container__info__size__item__disable}
            >
              XXL
            </div>
          </div>
          <div className={style.product__container__info__quantity}>
            <span>
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </span>
            <button className={style.product__container__info__quantity__btn}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
