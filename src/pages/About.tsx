import style from "../styles/about.module.scss";
import FIRST from "../assets/first.jpg";
import SCND from "../assets/second.jpg";
import THRD from "../assets/tgg.jpg";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <Link to="/" className={style.about}>
      <div className={style.about__imgs}>
        <img src={THRD} alt="" />
        <img src={FIRST} alt="" />
        <img src={SCND} alt="" />
      </div>
      <div className={style.about__text}>
        <p className={style.kurtukov}>KURTUKOV</p>
      </div>
    </Link>
  );
};
