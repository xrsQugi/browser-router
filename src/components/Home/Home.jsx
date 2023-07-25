import css from "./Home.module.css"

export default function Home() {
    return(
        <div className={css.block}>
            <h1 className={css.title}>Welcome car fan!</h1>
            <img className={css.photo_hero} src="https://kolesa-uploads.ru/-/e7f3a148-9759-4b17-998c-c44f473d3bc7/0-0.jpg" alt="car photo" />
            <p className={css.text}>Pagani Automobili is an Italian manufacturer of hypercars and carbon fiber components. The company was founded in 1992 by the Argentinean-Italian Horacio Pagani and is based in San Cesario sul Panaro, near Modena, Italy.</p>
        </div>
    )
};
