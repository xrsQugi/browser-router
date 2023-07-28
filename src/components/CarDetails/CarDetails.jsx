import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { getCarById } from '../../fakeAPI';
import css from './CarDetails.module.css';
import { GoReply } from "react-icons/go";

export default function CarDetails() {
  const { id } = useParams();
  const car = getCarById(id);
  return (
    
    <div className={css.block}>
      <img src={car.photo} alt={car.name} className={css.photo} />
      <div className={css.block_text}>
        <h2 className={css.title}>Porsche {car.name}</h2>
        <p className={css.text}>
          {car.text}
        </p>
        <Link to='/browser-router/cars' className={css.back}>Back <GoReply /></Link>
      </div>
    </div>
  );
}
