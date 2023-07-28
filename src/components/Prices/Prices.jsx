import css from './Prices.module.css';

export default function Prices() {
  return (
    <div className={css.block}>
      <p className={css.text}>
        Найдорожча версія Porsche 911 Turbo S Cabriolet коштує 305 000 доларів.
      </p>
      <p className={css.text}>Середня ціна Porsche в Україні - 1 237 909₴</p>
      <ul className={css.list_prices}>
        <li className={css.list_price_item}>2023 Porsche Macan T - 3 362 000 ₴</li>
        <li className={css.list_price_item}>2023 Porsche Cayenne GTS - 5 965 500 ₴</li>
        <li className={css.list_price_item}>2023 Porsche 911 Turbo S PDK - 14 601 912 ₴</li>
        <li className={css.list_price_item}>2023 Porsche Panamera - 5 167 221 ₴</li>
        <li className={css.list_price_item}>2023 Porsche Taycan 4S - 5 822 000 ₴</li>
      </ul>
    </div>
  );
}