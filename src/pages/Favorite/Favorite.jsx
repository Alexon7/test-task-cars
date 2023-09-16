import Loader from '../../components/Loader/Loader';
import {  useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../../redux/selectors';
import FavoritesCarList from '../../components/FavoriteList/FavoriteList';
import { MainContainer } from '../../components/Container/MainContainer.styled';
import { CatalogWrapper } from '../Catalog/Catalog.styled';


const FavoritesPage = () => {
     const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <MainContainer>
      <CatalogWrapper>
      {isLoading && !error && <Loader />}
      {error && <b>{error}</b>}
        <FavoritesCarList />
        </CatalogWrapper>
    </MainContainer>
  );
};

export default FavoritesPage;