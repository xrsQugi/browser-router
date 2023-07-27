import css from './NotFound.module.css';

export default function NotFound() {
    return(
        <div className={css.block}>
            <h1 className={css.title}>404</h1>
            {/* <img src="https://static.vecteezy.com/system/resources/previews/015/131/133/original/crossing-sign-error-404-png.png" alt="404" width="300" /> */}
            <p className={css.text_page}>Page not found. </p>
            <p className={css.text}>This page is made to show, how web-site works if page not found or we don't find current way!</p>
        </div>
    )
};
