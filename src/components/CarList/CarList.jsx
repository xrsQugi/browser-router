import { Link } from "react-router-dom";
import css from "./CarList.module.css";

export default function CarList({ cars }) {
  return (
    <div className={css.block_list}>
      {cars.map((car) => (
        <div key={car.id}>
          <Link to={`${car.id}`}>
            <div className={css.car_item}>
                <img src={car.photo} alt={car.name} width="200" />
                <p>{car.name}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
