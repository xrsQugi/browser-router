import { Link, Outlet } from "react-router-dom";
import Clock from '../../components/Clock/Clock';
import History from '../../components/History/History';
import css from './About.module.css';

export default function About() {
  return (
    <div className={css.block}>
        <Clock></Clock>
        <ul className={css.list}>
            <li>
                <Link to="prices" className={css.list_item}>Дізнатися про ціни на авто</Link>
            </li>
            <li>
                <Link to="owner" className={css.list_item}>Хто власник?</Link>
            </li>
            <li>
                <Link to="facts" className={css.list_item}>Дізнатися цікаві факти про Porsche</Link>
            </li>
            <li><hr className={css.line}/></li>
            <li><Outlet /></li>
      </ul>
        <History></History>
    </div>
  );
}
