import { useEffect, useState } from 'react';
import css from "./Clock.module.css";

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // console.log('time:>> ', time);
    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
  }, [time]);

  return (
    <div>
      <p className={css.time}>{time}</p>
    </div>
  );
}
