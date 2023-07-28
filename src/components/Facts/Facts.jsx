import css from './Facts.module.css';

export default function Facts() {
  return (
    <div className={css.block}>
        <ul className={css.list_facts}>
            <li className={css.list_fact_item}>Porsche робить двигуни для Harley-Davidson.</li>
            <li className={css.list_fact_item}>Перший гібридний автомобіль зробив Фердинанд Порше у 1900 році.</li>
            <li className={css.list_fact_item}>Компанія Porsche виробляла трактори.</li>
            <li className={css.list_fact_item}>
                Фердинанд Порше розробляв гоночні автомобілі для Mercedes-Benz та
                Audi.
            </li>
            <li className={css.list_fact_item}>
                Знамениті ”Жуки” мали коштувати лише 990 марок. Передбачалося, що
                кожен німецький робітник, відкладаючи 5 марок щомісяця, через 3 роки і
                8 місяців зможе сісти за кермо власного "Фольксвагена". Мабуть, так і
                було б, але райдужним планам завадила Друга світова війна.
            </li>
        </ul>
    </div>
  );
}
