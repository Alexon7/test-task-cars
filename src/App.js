import { Route, Routes } from 'react-router-dom';
import CatalogPage from './pages/Catalog/Catalog';
import FavoritesPage from './pages/Favorite/Favorite';
import HomePage from './pages/Home/Home';




function App() {
  return (
    <Routes>   
      <Route index element={<HomePage/>} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
       </Routes>
  );
}

export default App;
