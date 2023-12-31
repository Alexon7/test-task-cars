import CarsItem from '../CarsItem/CarsItem';
import { CarsGallery } from './CarsList.styled';
import { useSelector } from 'react-redux';
import { selectCars } from '../../redux/selectors';

const CarsList = () => {
    const cars = useSelector(selectCars);
  return (
    <CarsGallery>
      {cars.map((car, index) => (
        <CarsItem key={index} car={car} />
      ))}
    </CarsGallery>
  );
};

export default CarsList;