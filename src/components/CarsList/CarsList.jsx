import CarsItem from '../CarsItem/CarsItem';
import { CarsGallery } from './CarsList.styled';

const CarsList = ({ cars }) => {
  return (
    <CarsGallery>
      {cars.map((car, index) => (
        <CarsItem key={index} {...car} />
      ))}
    </CarsGallery>
  );
};

export default CarsList;