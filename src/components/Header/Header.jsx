import { NavigationLink, Nav, PageHeader } from './Header.styled';
import { MainContainer } from '../../components/Container/MainContainer.styled';

const Header = () => {
  return (
    <MainContainer>
    <PageHeader>
           <nav>
        <Nav>
          <li>
            <NavigationLink to="/">Home</NavigationLink>
          </li>
           <li>
            <NavigationLink to="/catalog">Catalog</NavigationLink>
         </li>
          <li>
            <NavigationLink to="/favorites">Favorites</NavigationLink>
          </li>
        </Nav>
      </nav>
      </PageHeader>
      </MainContainer>
  );
};

export default Header;