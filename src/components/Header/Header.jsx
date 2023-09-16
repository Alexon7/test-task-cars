import { NavigationLink, Nav, PageHeader } from './Header.styled';
import { MainContainer } from '../../components/Container/MainContainer.styled';

const Header = () => {
  return (
    <MainContainer>
    <PageHeader>
           <nav>
        <Nav>
          
            <NavigationLink to="/">Home</NavigationLink>
          
          
            <NavigationLink to="/catalog">Catalog</NavigationLink>
         
         
            <NavigationLink to="/favorites">Favorites</NavigationLink>
          
        </Nav>
      </nav>
      </PageHeader>
      </MainContainer>
  );
};

export default Header;