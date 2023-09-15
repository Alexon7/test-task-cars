import {Navigate, Route, Routes } from 'react-router-dom';
import CatalogPage from './pages/Catalog/Catalog';
import FavoritesPage from './pages/Favorite/Favorite';
import HomePage from './pages/Home/Home';
import SharedLayout from './components/SharedLayout.jsx/SharedLayout';




function App() {
  return (
    <Routes> 
      <Route path="/" element={<SharedLayout />}>
      <Route index element={<HomePage/>} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
       </Routes>
  );
}

export default App;
