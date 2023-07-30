import CarList from '../../components/CarList/CarList';
import { getCars } from '../../fakeAPI';
import css from './Cars.module.css';

export default function Cars() {
  const cars = getCars();
  return (
    <div className={css.block}>
      <CarList cars={cars} />
    </div>
  );
}
