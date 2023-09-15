import Loader from '../../components/Loader/Loader';
import {  useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../../redux/selectors';
import FavoritesCarList from '../../components/FavoriteList/FavoriteList';
import { MainContainer } from '../../components/Container/MainContainer.styled';


const FavoritesPage = () => {
     const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <MainContainer>
      {isLoading && !error && <Loader />}
      {error && <b>{error}</b>}
      <FavoritesCarList />
    </MainContainer>
  );
};

export default FavoritesPage;