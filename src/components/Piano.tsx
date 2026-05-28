import style from "../styles/piano.module.scss";

export const Piano = () => {
  return (
    <div className={style.piano}>
      <div className={style.piano__container}>
        <div className={style.piano__container__first}> </div>
        <div className={style.piano__container__second}></div>
        <div className={style.piano__container__third}></div>
      </div>
    </div>
  );
};
