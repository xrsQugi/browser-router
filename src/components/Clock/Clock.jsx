import { useEffect, useState } from 'react';
import css from "./Clock.module.css";

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    console.log('time:>> ', time);
    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
  }, [time]);

  return (
    <div className={css.block}>
      <p className={css.time}>{time}</p>
      <p className={css.text}>
        The brainchild of Italian designer Horacio Pagani, Pagani Automibili is
        known for making super fast cars and manufacturing a little carbon fibre
        on the side. The year that Pagani came to be was 1992 but Horacio was
        dealing with cars and design long before that. In fact, according to
        some people, his love for cars came very early because at 12 years old
        he was already making cars out of clay and wood. That's why by the time
        he was 20 he had already designed his first race car under the colors of
        Renault.
      </p>
      <img className={css.photo_car} src="https://www.pagani.com/app/uploads/2021/03/PaganiRadunoIta2021_05626-1980x1320.jpg" alt="car" />
    </div>
  );
}
