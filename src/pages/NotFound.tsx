import { Link } from "react-router-dom";
import style from "../styles/notfound.module.scss";
import IMG from "../assets/dst..jpg";

export const NotFound = () => {
  return (
    <main className={style.main}>
      <Link className={style.notfound} to="/">
        <p className={style.text}>Page are not found</p>
        <img className={style.img} src={IMG} alt="" />
      </Link>
    </main>
  );
};
