import style from "../styles/piano.module.scss";
import { Link } from "react-router-dom";
import MEN from "../assets/men.png";
import WOMEN from "../assets/women.png";
import CAS from "../assets/casual.png";

export const Piano = () => {
  return (
    <div className={style.piano}>
      <div className={style.piano__container}>
        <div className={style.piano__container__vertical}>
          <Link
            to="/"
            className={style.piano__container__vertical__item__first}
          >
            <p>FORMAL WOMEN</p>
            <img className={style.piano__container__img} src={WOMEN} alt="" />
          </Link>
          <Link
            to="/"
            className={style.piano__container__vertical__item__second}
          >
            <p>FORMAL MEN</p>
            <img className={style.piano__container__img} src={MEN} alt="" />
          </Link>
        </div>
        <Link to="/" className={style.piano__container__horizont}>
          <p>CASUAL STYLE</p>
          <img className={style.piano__container__img} src={CAS} alt="" />
        </Link>
      </div>
    </div>
  );
};
