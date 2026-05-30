import style from "../styles/slider.module.scss";

interface Props {
  title: string;
}

export const Slider: React.FC<Props> = ({ title }) => {
  return (
    <div className={style.slider}>
      <div className={style.slider__title}>{title}</div>
      <div className={style.slder__wrapper}>
        <div className={style.slder__wrapper__item}>
          <img src="" alt="" />
          <h1>PRODUCT CATEGORY</h1>
          <h2>Product Name</h2>
          <h3>$COST</h3>
        </div>
      </div>
      <button>SEE MORE</button>
    </div>
  );
};
