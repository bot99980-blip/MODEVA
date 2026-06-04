import { Footer } from "../components/Footer";
import { Headerdark } from "../components/Headerdark";
import style from "../styles/product.module.scss";

export const Product = () => {
  return (
    <div className={style.product}>
      <Headerdark />
      <Footer />
    </div>
  );
};
