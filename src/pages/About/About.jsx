import Clock from '../../components/Clock/Clock';
import History from '../../components/History/History';
import css from './About.module.css';

export default function About() {
    return(
        <div className={css.block}>
            <Clock></Clock>
            <History></History>
        </div>
    )
};
