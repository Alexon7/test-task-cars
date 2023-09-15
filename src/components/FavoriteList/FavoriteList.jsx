import CarsItem from '../CarsItem/CarsItem';
import { CarsGallery } from '../CarsList/CarsList.styled';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';

const FavoritesCarList = () => {
  const cars = useSelector(selectFavorites);
  return (
    <CarsGallery>
      {cars.map((car, index) => (
        <CarsItem key={index} car={car} />
      ))}
    </CarsGallery>
  );
};
export default FavoritesCarList;