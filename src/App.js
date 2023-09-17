import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './components/SharedLayout/SharedLayout';
const HomePage = lazy(() => import('./pages/Home/Home'));
const CatalogPage= lazy(() => import('./pages/Catalog/Catalog'));
const FavoritesPage= lazy(() => import('./pages/Favorite/Favorite'));





function App() {
  return (
    <Routes> 
      <Route  path="/" element={<SharedLayout />}>
      <Route index element={<HomePage/>} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>
       <Route path="*" element={<Navigate to="/" />} />
       </Routes>
  );
}

export default App;
