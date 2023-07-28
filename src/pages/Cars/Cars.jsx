import ProductList from '../../components/CarList/CarList';
import { getCars } from '../../fakeAPI';
import css from './Cars.module.css';

export default function Cars() {
  const cars = getCars();
  return (
    <div className={css.block}>
      <ProductList cars={cars} />
    </div>
  );
}
