import css from "./Home.module.css"

export default function Home() {
    return(
        <div className={css.block}>
            <h1 className={css.title}>Porsche</h1>
            <img className={css.photo_car} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cz22v16ox0019-rgb-1665437283.jpeg" alt="porsche" />
            <div className={css.container}>
                <p className={css.text}>Porsche 911 Turbo S розганяється до 100 км/год лише за 2,7 сек. А максимальна швидкість, обмежена електронікою, становить 330 км/год.</p>
            </div>
        </div>
    )
};
