import React from 'react';
import { MainContainer } from '../../components/Container/MainContainer.styled';
import CarsList from '../../components/CarsList/CarsList';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from '../../redux/operations';
import { CatalogWrapper, LoadMoreBtn } from './Catalog.styled';
import Loader from '../../components/Loader/Loader';
import { selectError, selectIsLoading } from '../../redux/selectors';

// import  Filter  from '../../components/Filter/Filter';

const CatalogPage = () => {
   const [page, setPage] = useState(1);
  const loadMore = () => setPage(prevPage => prevPage + 1);
const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
    
    useEffect(() => {
    dispatch(fetchAdverts(page));
  }, [dispatch, page]);

   
  return (
     <>
          <MainContainer>
        <CatalogWrapper>
           {/* <Filter /> */}
        {isLoading && !error && <Loader />}
      {error && <b>{error}</b>}
          <CarsList />
                  {32 / 8 > page && !isLoading &&
                      <LoadMoreBtn onClick={loadMore}>Load More</LoadMoreBtn>}
      </CatalogWrapper>
           </MainContainer>

    </>
  );
};

export default CatalogPage;

 

  