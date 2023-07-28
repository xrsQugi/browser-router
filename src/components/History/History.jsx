import css from './History.module.css';

export default function History() {
  return (
    <>
      <div className={css.container}>
        <p className={css.text}>
          Назва Porsche нерозривно пов'язана із автомобільним спортом. Фірма
          побудувала низку чудових гоночних моделей, що домінували на світових
          трасах. На фото представлена Porsche 917, потужність двигуна якої у
          свій час перевищувала 1000 к.с.
        </p>
      </div>
      <img
        className={css.photo_car}
        src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Porsche_356_No._1_Roadster_IMG_0814.jpg"
        alt="porsche"
      />
    </>
  );
}
